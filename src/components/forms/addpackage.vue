<template>
  <div style="margin-top:50px">
    <v-card style="margin-bottom:20px">
      <v-card-title>Sender's Details</v-card-title>
      <v-row style="padding-left:50px;padding-right:50px;">
        <v-col>
          <v-text-field v-model="pickUpFirstName" label="First Name" />
        </v-col>
        <v-col>
          <v-text-field v-model="pickUpMiddleName" label="Middle Name" />
        </v-col>
        <v-col>
          <v-text-field v-model="pickUpLastName" label="Last Name" />
        </v-col>
      </v-row>
      <v-row style="padding-left:50px;padding-right:50px;">
        <v-col>
          <v-text-field label="Contact No" v-model="pickUpPhone" />
          <v-text-field label="Email" v-model="pickUpEmail" />
        </v-col>
        <v-col>
          <v-textarea v-model="pickUpAddress" label="Address" rows="4" />
        </v-col>
      </v-row>
    </v-card>
    <v-card>
      <v-row style="padding-left:50px;">
        <v-col cols="1">
          <v-text-field label="Sr No" disabled v-model="srno" />
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="deliveryFirstName" label="First Name" />
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="deliveryMiddleName" label="Middle Name" />
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="deliveryLastName" label="Last Name" />
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col cols="6"
        ><v-card style="padding:30px">
          <v-text-field v-model="deliveryEmail" label="Email"
        /></v-card>
      </v-col>

      <v-col cols="6">
        <v-card style="padding:18px">
          <v-row>
            <v-col>
              <v-text-field
                v-model="deliveryPhone"
                label="Primary Phone"/></v-col
            ><v-col>
              <v-text-field label="Alternate Phone No"
            /></v-col> </v-row></v-card
      ></v-col>
    </v-row>

    <v-radio-group v-model="rad">
      <v-row>
        <v-col>
          <v-card style="padding:20px;text-align:center">
            <v-radio value="1" label="Home"> </v-radio>
            <v-textarea
              v-model="dha"
              :disabled="rad != 1"
              label="Address"
            ></v-textarea>
          </v-card>
        </v-col>
        <v-col>
          <v-card style="padding:20px;text-align:center">
            <v-radio value="2" label="Work"> </v-radio>
            <v-textarea
              v-model="dwa"
              :disabled="rad != 2"
              label="Address"
            ></v-textarea>
          </v-card>
        </v-col>
        <v-col>
          <v-card style="padding:20px;text-align:center">
            <v-radio value="3" label="Other"> </v-radio>
            <v-textarea
              v-model="doa"
              :disabled="rad != 3"
              label="Address"
            ></v-textarea>
          </v-card>
        </v-col>
      </v-row>
    </v-radio-group>
    <v-row style="text-align:center">
      <v-col cols="5" />
      <v-col cols="2">
        <v-btn @click="submit" style="background-color:green;color:white"
          >Submit</v-btn
        >
      </v-col>
      <v-col>
        <!--<v-img
          src="https://store-images.s-microsoft.com/image/apps.33967.13510798887182917.246b0a3d-c3cc-46fc-9cea-021069d15c09.392bf5f5-ade4-4b36-aa63-bb15d5c3817a"
          height="100px"
          width="100px"
        />-->
      </v-col>
      <v-col cols="4" />
    </v-row>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import qrcode from "qrcode";
import axios from "axios";
export default {
  data: function() {
    return {
      srno: "PKG0001",
      rad: null,
      dialog: false,
      sr: null,
      pickUpFirstName: null,
      pickUpMiddleName: null,
      pickUpLastName: null,
      pickUpAddress: null,
      type: null,
      pickUpPhone: null,
      pickUpEmail: null,
      deliveryFirstName: null,
      deliveryMiddleName: null,
      deliveryLastName: null,
      deliveryAddress: null,
      deliveryPhone: null,
      deliveryEmail: null,
      dha: null,
      dwa: null,
      doa: null,
    };
  },
  mounted() {},
  async created() {
    await this.getData();
  },
  methods: {
    async submit() {
      if (this.rad == 1) {
        this.type = "Home";
        this.deliveryAddress = this.dha;
      }
      if (this.rad == 2) {
        this.type = "work";
        this.deliveryAddress = this.dwa;
      }
      if (this.rad == 3) {
        this.type = "other";
        this.deliveryAddress = this.doa;
      }
      let data = {
        serialNumber: this.srno,
        pickUpFirstName: this.pickUpFirstName,
        pickUpMiddleName: this.pickUpMiddleName,
        pickUpLastName: this.pickUpLastName,
        pickUpAddress: this.pickUpAddress,
        pickUpPhone: this.pickUpPhone,
        pickUpEmail: this.pickUpEmail,
        type: this.type,
        deliveryFirstName: this.deliveryFirstName,
        deliveryMiddleName: this.deliveryMiddleName,
        deliveryLastName: this.deliveryLastName,
        deliveryAddress: this.deliveryAddress,
        deliveryEmail: this.deliveryEmail,
        deliveryPhone: this.deliveryPhone,
      };
      console.log(data);
      const config = {
        method: "post",
        url: "http://matrixbox.in:3000/admin/package/create",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          Accept: "*/*",
          Authorization: this.$store.state.user.token,
        },
        data: data,
      };
      try {
        await axios(config);
        var canvas = document.getElementById("canvas");
        qrcode.toCanvas(canvas, JSON.stringify(data), function(error) {
          if (error) alert(error);
          console.log("success!");
        });
      } catch (err) {
        console.log(err);
      }
      //alert(data);
    },
    async getData() {
      let config = {
        method: "POST",
        url: "http://matrixbox.in:3000/admin/package/list",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          Accept: "*/*",
        },
        data: {
          search: null,
          filterBy: "serialNumber",
          pagination: {
            page: 1,
            rowsPerPage: 1,
            sortBy: "id",
            descending: true,
          },
        },
      };
      let resp = await axios(config).catch((err) => console.log(err));
      this.srno = `PKG${resp.data.data[0].id + 1}`;
    },
  },
};
</script>

<style></style>

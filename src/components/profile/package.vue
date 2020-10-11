<template>
  <div style="">
    <v-card>
      <div style="width:100%;background-color:orange">
      <h1
        style="text-align:center;padding-top:30px;padding-bottom:20px;border-bottom:solid;"
      >
        Package Details
      </h1>
      </div>
      <v-row>
        <v-col cols="4">
          <h2 style="margin-left:10px"><u>Delivery Details</u></h2>
          <br />
          <p style="padding-left:30px">
            <strong style="margin-right:10px">First Name:</strong
            >{{ config.deliveryFirstName }}
          </p>
          <p style="padding-left:30px">
            <strong style="margin-right:10px">Middle Name:</strong
            >{{ config.deliveryMiddleName }}
          </p>
          <p style="padding-left:30px">
            <strong style="margin-right:10px">Last Name:</strong
            >{{ config.deliveryLastName }}
          </p>
          <br />
          <p style="padding-left:30px">
            <strong style="margin-right:10px">Address</strong><br />
            {{ config.deliveryAddress }}
          </p>
        </v-col>
        <v-col cols="4">
          <h2 style=""><u>Sender Details</u></h2>
          <br />
          <p style="padding-left:30px">
            <strong style="margin-right:10px">First Name:</strong
            >{{ config.pickUpFirstName }}
          </p>
          <p style="padding-left:30px">
            <strong style="margin-right:10px">Middle Name:</strong
            >{{ config.pickUpMiddleName }}
          </p>
          <p style="padding-left:30px">
            <strong style="margin-right:10px">Last Name:</strong
            >{{ config.pickUpLastName }}
          </p>
          <br />
          <p style="padding-left:30px">
            <strong style="margin-right:10px">Address</strong><br />
            {{ config.pickUpAddress }}
          </p>
        </v-col>
        <v-col cols="4" v-if="config.deliveryBoy != null"
          ><h2><u>Delivery Boy Details</u></h2>
          <br />
          <p style="color:blue" v-if="config.isDelivered">I am Delivered</p>
          <p style="color:green" v-else>Package Under Transit</p>
          <br />
          <p>
            <strong style="margin-right:10px">First Name:</strong
            >{{ db.firstName }}
          </p>
          <p>
            <strong style="margin-right:10px">Middle Name:</strong
            >{{ db.middleName }}
          </p>
          <p>
            <strong style="margin-right:10px">Last Name:</strong
            >{{ db.lastName }}
          </p>
          <br />
          <p>
            <strong style="margin-right:10px">Address:</strong><br />{{
              db.permanentAddress
            }}
          </p>
          <p><strong style="margin-right:10px">Tal:</strong>{{ db.tahsil }}</p>
          <p>
            <strong style="margin-right:10px">Dist:</strong>{{ db.district }}
          </p>
          <p>
            <strong style="margin-right:10px">State:</strong>{{ db.region }}
          </p>
          <br />

          <p><strong style="margin-right:10px">Phone:</strong>{{ db.phone }}</p>
          <br />
          <h2>Reassign Delivery Boy</h2>
          <br /><select
            v-model="selEmp"
            style="background-color:grey;width:80%;height:50px;margin-bottom:30px;padding-left:30px"
          >
            <option disabled value="-999">Select Employee</option>
            <option v-for="emp in list" :key="emp.id" :value="emp.id"
              >{{ emp.firstName }} {{ emp.middleName }}
              {{ emp.lastName }}</option
            ></select
          >
          <v-btn @click="submit" style="color:white;background-color:green"
            >Assign</v-btn
          >
        </v-col>
        <v-col cols="4" v-else>
          <h2>Assign Delivery Boy</h2>
          <br />
          <p style="color:red">Package Has Been Received</p>
          <br /><select
            v-model="selEmp"
            style="background-color:grey;width:80%;height:50px;margin-bottom:30px;padding-left:30px"
          >
            <option disabled value="-999">Select Employee</option>
            <option v-for="emp in list" :key="emp.id" :value="emp.id"
              >{{ emp.firstName }} {{ emp.middleName }}
              {{ emp.lastName }}</option
            > </select
          ><br />

          <v-btn @click="submit" style="color:white;background-color:green"
            >Assign</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      config: null,
      list: null,
      selEmp: -999,
      db: null,
    };
  },
  watch: {
    db(val) {
      this.db = val;
    },
  },
  async created() {
    let config = {
      method: "GET",
      url: "https://api.matrixbox.in/admin/package/" + this.$route.params.id,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        Authorization: this.$store.state.user.token,
      },
    };
    let resp = await axios(config);
    this.config = resp.data.data;
    config = {
      method: "POST",
      url: "https://api.matrixbox.in/admin/employee/list",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        Authorization: this.$store.state.user.token,
      },
      data: {
        search: null,
        filterBy: "serialNumber",
        category: "Delivery Boy",
        pagination: {
          page: 1,
          rowsPerPage: 100,
          sortBy: "id",
          descending: true,
        },
      },
    };
    resp = await axios(config).catch((err) => (this.resp = err));
    this.list = resp.data.data;
    config = {
      method: "GET",
      url: "https://api.matrixbox.in/admin/employee/" + this.config.deliveryBoy,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        Authorization: this.$store.state.user.token,
      },
    };
    resp = await axios(config);
    this.db = resp.data.data;
  },
  methods: {
    async submit() {
      if (this.selEmp == -999) {
        alert("Select Proper EMployee");
        return;
      }
      let config = {
        method: "PATCH",
        url: "https://api.matrixbox.in/admin/package/assign",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          Accept: "*/*",
          Authorization: this.$store.state.user.token,
        },
        data: {
          id: this.$route.params.id,
          deliveryBoy: this.selEmp,
        },
      };
      await axios(config);

      config = {
      method: "GET",
      url: "https://api.matrixbox.in/admin/employee/" + this.selEmp,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        Authorization: this.$store.state.user.token,
      },
    };
    let resp = await axios(config);
    this.db = resp.data.data;
      //window.location.reload();
    },
  },
};
</script>

<style></style>

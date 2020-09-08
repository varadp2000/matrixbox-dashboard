<template>
  <div style="">
    <h1 style="text-align:center;margin-top:30px;margin-bottom:20px">
      Package Details
    </h1>
    <v-row>
      <v-card width="33%" style="padding:20px">
        <p>Sr No: {{ config.serialNumber }}</p>
        <br />
        <strong>Pickup name:</strong>
        <p style="margin-left:100px">
          {{ config.pickUpFirstName }} {{ config.pickUpMiddleName }}
          {{ config.pickUpLastName }}
        </p>
        <strong>PickUp Email</strong>
        <p style="margin-left:100px">{{ config.pickUpEmail }}</p>

        <strong>PickUp Phone</strong>
        <p style="margin-left:100px">{{ config.pickUpPhone }}</p>

        <strong>PickUp Address</strong>
        <p style="margin-left:100px">{{ config.pickUpAddress }}</p> </v-card
      ><v-card width="33%" style="padding:20px;margin-left:0.5%">
        <br />
        <strong>Receiver name:</strong>
        <p style="margin-left:100px">
          {{ config.deliveryFirstName }} {{ config.deliveryMiddleName }}
          {{ config.deliveryLastName }}
        </p>
        <strong>Receiver Email</strong>
        <p style="margin-left:100px">{{ config.deliveryEmail }}</p>

        <strong>Receiver Phone</strong>
        <p style="margin-left:100px">{{ config.deliveryPhone }}</p>

        <strong>Receiver Address</strong>
        <p style="margin-left:100px">{{ config.deliveryAddress }}</p>
      </v-card>
      <v-card
        v-if="!config.deliveryBoy && $store.state.user.type == 'Super'"
        width="33%"
        style="padding:20px;margin-left:0.5%"
      >
        <Strong> Assign Delivery Boy </Strong><br />
        <select
          style="background-color:white;height:50px;border-radius:0px;padding:10px"
          v-model="selEmp"
        >
          <option v-for="emp in list" :key="emp.id" :value="emp.id"
            >{{ emp.firstName }} {{ emp.middleName }} {{ emp.lastName }}</option
          > </select
        ><br />
        <v-btn
          style="width:200px;height:40px;margin-top:20px;background-color:green;color:white"
          @click="submit"
          >Assign</v-btn
        >
      </v-card>
      <v-card style="padding:20px;margin-left:0.5%" v-else
        ><br />
        <p>
          <strong>Delivery Boy Name:</strong><br /><span
            style="margin-left:50px"
          >
            {{ `${db.firstName} ${db.middleName} ${db.lastName}` }}</span
          >
        </p>
        <p>
          <strong>Delivery Boy Address</strong><br /><span
            style="margin-left:100px"
            >{{ db.permanentAddress }}</span
          >
        </p>
        <p>
          <strong>Delivery Boy Phone</strong><br /><span
            style="margin-left:100px"
            >{{ db.phone }}</span
          >
        </p>
        <p>
          <strong>Delivery Boy Phone</strong><br /><span
            style="margin-left:100px"
            >{{ db.emergencyPhone }}</span
          >
        </p>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      config: null,
      list: null,
      selEmp: null,
      db: null,
    };
  },
  async created() {
    let config = {
      method: "GET",
      url: "http://matrixbox.in:3000/admin/package/" + this.$route.params.id,
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
      url: "http://matrixbox.in:3000/admin/employee/list",
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
      url: "http://matrixbox.in:3000/admin/employee/" + this.config.deliveryBoy,
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
      let config = {
        method: "PATCH",
        url: "http://matrixbox.in:3000/admin/package/assign",
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
      window.location.reload();
    },
  },
};
</script>

<style></style>

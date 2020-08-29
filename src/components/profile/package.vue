<template>
  <div style="display:flex">
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
      <strong>Delivery name:</strong>
      <p style="margin-left:100px">
        {{ config.deliveryFirstName }} {{ config.deliveryMiddleName }}
        {{ config.deliveryLastName }}
      </p>
      <strong>Delivery Email</strong>
      <p style="margin-left:100px">{{ config.deliveryEmail }}</p>

      <strong>Delivery Phone</strong>
      <p style="margin-left:100px">{{ config.deliveryPhone }}</p>

      <strong>PickUp Address</strong>
      <p style="margin-left:100px">{{ config.deliveryAddress }}</p>
    </v-card>
    <v-card
      v-show="!config.deliveryBoy"
      width="33%"
      style="padding:20px;margin-left:0.5%"
    >
      <Strong> Assign Delivery Boy </Strong><br />
      <select
        style="background-color:grey;color:white;height:50px;border-radius:0px;padding:10px"
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
      {{ selEmp }}
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
      selEmp: null,
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
    console.log(resp);
    this.list = resp.data.data;
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
        },
        data: {
          id: this.$route.params.id,
          deliveryBoy: this.selEmp,
        },
      };
      console.log(JSON.stringify(config.data));
      await axios(config);
      window.location.reload();
    },
  },
};
</script>

<style></style>

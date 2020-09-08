<template>
  <div>
    <h1 style="text-align:center">Employee Details</h1>
    <v-row>
      <v-col>
        <v-card
          style="padding:30px;border-radius:50px 0px 0px 50px;height:100%"
        >
          <div style="text-align:center">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              style="height:200px;width:200px;border-radius:999px;"
            />
          </div>
          <br />
          <div style="width:100%;height:2px;background-color:black" />
          <br />
          <label style="">
            First Name:
          </label>
          <h1 style="text-align:center;margin-right:70px">
            <span>{{ fname }}</span>
          </h1>
          <label style="">
            Middle Name:
          </label>
          <h1 style="text-align:center;margin-right:70px">
            <span>{{ mname }}</span>
          </h1>
          <label style="">
            Last Name:
          </label>
          <h1 style="text-align:center;margin-right:70px">
            <span>{{ lname }}</span>
          </h1>
        </v-card>
      </v-col>
      <v-col>
        <v-card style="height:70vh;border-radius:0px;padding:30px">
          <p style="font-size:25px;text-decoration:underline">
            Temporary Address:
          </p>
          <br />
          {{ tAdd }}
          <br />
          <div style="width:100%;height:2px;background-color:black" />
          <br />
          <p style="font-size:25px;text-decoration:underline">
            Permanent Address:
          </p>
          <br />
          {{ pAdd }}
          <p>Dist: {{ dist }}</p>
          <p>Tahsil: {{ tahsil }}</p>
          <p>State: {{ state }}</p>
          <p>Country:{{ country }}</p>
          <p>PIN: {{ pin }}</p>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          style="height:70vh;border-radius:0px 50px 50px 0px;padding:30px"
        >
          <label>
            Email
          </label>
          <span style="text-align:center;font-weight:bold"
            ><h3>{{ email }}</h3></span
          >
          <br />
          <label>
            Primary Contact No.
          </label>
          <span style="text-align:center;font-weight:bold"
            ><h3>{{ phn }}</h3></span
          >
          <br />
          <label>
            Emergency No
          </label>
          <span style="text-align:center;font-weight:bold"
            ><h3>{{ ePhn }}</h3></span
          >
          <v-row>
            <v-col cols="6">
              <input
                :placeholder="`Employee No:${id}`"
                style="color:black"
                disabled
              />
            </v-col>
            <v-col cols="6">
              <input
                placeholder="Delivered Packages: 100"
                style="color:black"
                disabled
              />
            </v-col>
          </v-row>
          Aadhar Card:<br />
          <img
            src="https://spiderimg.amarujala.com/assets/images/2017/12/02/750x506/demo-pic_1512220322.jpeg"
            width="40%"
            style="margin-top:20px"
          /><br />
          Sign<br />
          <img
            src="https://www.docsketch.com/assets/vip-signatures/muhammad-ali-signature-6a40cd5a6c27559411db066f62d64886c42bbeb03b347237ffae98b0b15e0005.svg"
            width="25%"
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      fname: null,
      mname: null,
      lname: null,
      tAdd: null,
      pAdd: null,
      email: null,
      phn: null,
      ePhn: null,
      eNo: null,
      type: null,
      dist: null,
      tahsil: null,
      state: null,
      country: null,
      pin: null,
    };
  },
  async created() {
    const config = {
      method: "GET",
      url: "http://matrixbox.in:3000/admin/employee/" + this.$route.params.id,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        Authorization: this.$store.state.user.token,
      },
    };
    let resp = await axios(config);
    this.fname = resp.data.data.firstName;
    this.mname = resp.data.data.middleName;
    this.lname = resp.data.data.lastName;
    this.tAdd = resp.data.data.temporaryAddress;
    this.pAdd = resp.data.data.permanentAddress;
    this.phn = resp.data.data.phone;
    this.ePhn = resp.data.data.emergencyPhone;
    this.email = resp.data.data.email;
    this.type = resp.data.data.type;
    this.dist = resp.data.data.dist;
    (this.tahsil = resp.data.data.tahsil),
      (this.state = resp.data.data.region),
      (this.country = resp.data.data.country),
      (this.PIN = resp.data.data.post);
    this.id = this.$route.params.id;
  },
};
</script>

<style>
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: black;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: red;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: red;
}
</style>

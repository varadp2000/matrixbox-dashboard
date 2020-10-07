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
              :src="
                imguri + dp || 'https://www.w3schools.com/howto/img_avatar.png'
              "
              style="height:200px;width:200px;border-radius:999px;"
            />
          </div>
          <br />
          <div style="width:100%;height:2px;background-color:black" />
          <br />
          <p>
            First Name:<span
              style="font-size:25px;font-weight:bold;margin-left:20px"
              >{{ fname }}</span
            >
          </p>
          <br />
          <p>
            Middle Name:<span
              style="font-size:25px;font-weight:bold;margin-left:20px"
              >{{ mname }}</span
            >
          </p>
          <br />
          <p>
            Last Name:<span
              style="font-size:25px;font-weight:bold;margin-left:20px"
              >{{ lname }}</span
            >
          </p>
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
          <div
            style="width:100%;height:2px;background-color:black;margin-top:50%"
          />
          <br />
          <p style="font-size:25px;text-decoration:underline">
            Permanent Address:
          </p>
          <br />
          {{ pAdd }}
          <p><strong>Dist:</strong> {{ dist }}</p>
          <p><strong>Tal:</strong> {{ tahsil }}</p>
          <p><strong>State:</strong> {{ state }}</p>
          <p><strong>Country:</strong> {{ country }}</p>
          <p><strong>PIN:</strong> {{ pin }}</p>
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
            :src="
              af
                ? imguri + af
                : 'https://spiderimg.amarujala.com/assets/images/2017/12/02/750x506/demo-pic_1512220322.jpeg'
            "
            width="40%"
            style="margin-top:20px"
          />
          <img
            :src="
              ab
                ? imguri + ab
                : 'https://spiderimg.amarujala.com/assets/images/2017/12/02/750x506/demo-pic_1512220322.jpeg'
            "
            style="width:50px;margin-left:20px"
          />
          <br /><br />
          Fingerprint<br />
          <img
            :src="
              fp
                ? imguri + fp
                : 'https://spiderimg.amarujala.com/assets/images/2017/12/02/750x506/demo-pic_1512220322.jpeg'
            "
            style="width:50px;margin-left:20px"
          /><br /><br />
          Sign<br />
          <img
            :src="
              sign
                ? imguri + sign
                : 'https://spiderimg.amarujala.com/assets/images/2017/12/02/750x506/demo-pic_1512220322.jpeg'
            "
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
      imguri: "https://image.matrixbox.in/employee/",
      dp: null,
      af: null,
      ab: null,
      sign: null,
      fp: null,
    };
  },
  async created() {
    const config = {
      method: "GET",
      url: "https://api.matrixbox.in/admin/employee/" + this.$route.params.id,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        Authorization: this.$store.state.user.token,
      },
    };
    let resp = await axios(config);
    console.log(resp);
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
    this.dp = resp.data.data.image;
    this.af = resp.data.data.aadharFront;
    this.ab = resp.data.data.aadharBack;
    this.sign = resp.data.data.sign;
    this.fingerprint = resp.data.data.fingerprint;
    console.log(this.imguri + this.dp);
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

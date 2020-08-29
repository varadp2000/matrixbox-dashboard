<template>
  <div style="margin-top:50px">
    <v-row>
      <v-col cols="6">
        <img
          src="../../../assets/fulllogo.png"
          width="100%"
          style="margin-top:20%"
        />
      </v-col>
      <v-col cols="6">
        <v-container style="margin-top:25%;">
          <v-form>
            <v-text-field
              style="background-color:white;height:50px;padding:10px;margin-bottom:10px;border-radius:5px"
              label="Username"
              v-model="uname"
            ></v-text-field>
            <v-text-field
              style="background-color:white;height:50px;padding:10px;margin-bottom:10px;border-radius:5px"
              label="Password"
              type="password"
              v-model="pass"
            ></v-text-field>
            <v-row>
              <v-col cols="2">
                <v-btn
                  text
                  style="height:70px;margin-right:30px"
                  @click="fp = !fp"
                  ><v-icon
                    style="margin-left:10px;color:white;padding:10px;font-size:50px;border-radius:9999px;transition:1s;border:solid;"
                    :style="[
                      fp == true ? { color: 'green' } : { color: 'red' },
                    ]"
                    >{{ fp ? "fas fa-check" : "fas fa-fingerprint" }}</v-icon
                  ></v-btn
                >
              </v-col>
              <v-col cols="1" />
              <v-col cols="4">
                <v-btn
                  style="width:100%;background-color:#ff3232;color:white;margin-top:10px"
                  @click="$router.push('/')"
                  >Home</v-btn
                >
              </v-col>
              <v-col cols="4">
                <v-btn
                  style="width:100%;background-color:#0DC043;color:white;margin-top:10px"
                  @click="submit"
                  :loading="loading"
                  >Submit</v-btn
                >
              </v-col>
              <v-col cols="1" />
            </v-row>
            <br />
          </v-form>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      fp: false,
      uname: "",
      pass: "",
      loading: false,
    };
  },
  created() {
    if (this.$store.isLoggedIn) this.$router.push("/admin");
    //this.$router.push("/");
  },
  methods: {
    async submit() {
      this.loading = true;
      const config = {
        method: "post",
        url: "http://matrixbox.in:3000/admin/auth/login",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, DELETE, PUT, OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        },
        data: { user: this.uname, password: this.pass },
      };
      try {
        let resp = await axios(config);
        alert(`Welcome ${resp.data.data.user}`);
        this.$store.state.user.id = resp.data.data.id;
        this.$store.state.isLoggedIn = true;
        this.$store.state.user.email = resp.data.data.email;
        this.$store.state.user.type = resp.data.data.type;
        this.$store.state.user.user = resp.data.data.user;

        this.$router.push("/admin");
      } catch (err) {
        alert("Enter Valid UserName and Password");
        console.log(err);
      }
      this.loading = false;
    },
  },
};
</script>

<style></style>

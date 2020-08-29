<template>
  <div>
    <div style="background-color:#4F0000;height:300px">
      <v-row style="height:30px" />
      <v-row>
        <v-col cols="1" />
        <v-col cols="4">
          <img
            src="../../../assets/logo.png"
            style="width:80%;padding-top:30px"
          />
        </v-col>
        <v-col cols="4" style="color:white;text-align:left;padding-top:40px">
          <p>
            <i
              class="fa fa-map-marker"
              style="font-size:20px"
              aria-hidden="true"
            ></i
            ><span style="font-size:20px;margin-right:7px">Address:</span> Flat
            No 6, Block AB,Dillipur Tower, 6 Sapru Marg,<br />
            <span style="margin-left:110px"
              >Adjecent to Hotel Gomti,Lucknow-226001</span
            >
          </p>
          <br />
          <p>
            <i
              class="fa fa-phone-alt"
              style="font-size:20px"
              aria-hidden="true"
            ></i
            ><span style="font-size:20px;margin-right:2px">Phone No:</span>+91
            70685 07001
          </p>
          <br />
          <p>
            <i
              class="fa fa-envelope"
              style="font-size:20px"
              aria-hidden="true"
            ></i
            ><span style="font-size:20px;margin-right:25px">E-Mail:</span
            >Admin@matrixbox.in<br />
          </p>
          <br />
        </v-col>
        <v-col cols="3" style="color:white;padding-top:80px;text-align:center">
          <p style="font-size:20px">_____FIND US ON_____</p>
          <br />
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-google-plus-square"></i>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-whatsapp-square"></i>
          <i class="fab fa-linkedin"></i>
        </v-col>
      </v-row>
      <v-row style="margin-top:60px;height:40px">
        <v-col cols="12" style="background-color:black"
          ><p style="color:white;text-align:center">
            ©2020 All Rights Reserved Matrixbox Couries Pvt. Ltd | Designed And
            Maintained By Hackplanet Technologies Pvt. Ltd.
          </p></v-col
        >
      </v-row>
    </div>
  </div></template
>

<script>
export default {};
</script>

<style>
.fa {
  font-size: 50px;
  margin-left: 7px;
  margin-right: 7px;
  color: white;
}

.crossed {
  background: linear-gradient(
      to top left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) calc(50% - 0.8px),
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0) calc(50% + 0.8px),
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(
      to top right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) calc(50% - 0.8px),
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0) calc(50% + 0.8px),
      rgba(0, 0, 0, 0) 100%
    );
}
.fab {
  font-size: 40px;
  margin-left: 20px;
}
</style>

<template>
  <div style="margin-top:10vh;text-align:center">
    <v-container
      style="width:100%;margin-bottom:10vh;border-radius:20px;padding:30px;height:700px"
    >
      <h1 style="margin-bottom:20px">Track Package Here</h1>
      <v-text-field
        label="Enter Package ID"
        style="background-color:white;margin-bottom:20px;padding:5px;height:50px;border-radius:10px"
      ></v-text-field>
      <v-btn
        style="background-color:green;color:white"
        @click="dialog = !dialog"
        >Track</v-btn
      >
      <v-card
        style="width:80%;height:80%;position:absolute;top:25%;left:10%;z-index:1000;border:solid;margin-bottom:50px"
        v-show="dialog"
      >
        <v-card-title
          class="headline grey lighten-2 text-center"
          style="background-color:#6D0000"
        >
          <img src="../../assets/logo.png" width="200px" /> <v-spacer />
          <v-btn style="color:white;background-color:orange;margin-right:50px"
            ><v-icon style="font-size:25px;margin-right:5px"
              >fas fa-print</v-icon
            >Print</v-btn
          >
          <v-btn text
            ><strong style="font-size:50px;color:white">×</strong></v-btn
          >
        </v-card-title>

        <v-divider></v-divider><br /><br />
        <h1>Your Order No #0987654443 Arriving Soon</h1>

        <br /><br />
        <v-divider />
        <v-row style="text-align:left;padding-left:30px;padding-right:30px">
          <v-col cols="4" style="border:solid">
            <p><strong>SENDER DETAILS</strong></p>
            <p>Name:<br />SENDER NAME</p>
            <br />
            <p>
              Address:<br />House No. APT,<br />STREET NAME, CITY,<br />TAL,
              DIST<br />PIN
            </p>
            <br />
            <p>PHONE:<br />+91 98765 43210</p>
          </v-col>
          <v-col cols="4" style="border:solid"
            ><strong>RECEIVER DETAILS</strong>
            <p><strong>SENDER DETAILS</strong></p>
            <p>Name:<br />SENDER NAME</p>
            <br />
            <p>
              Address:<br />House No. APT,<br />STREET NAME, CITY,<br />TAL,
              DIST<br />PIN
            </p>
            <br />
            <p>PHONE:<br />+91 98765 43210</p>
          </v-col>
          <v-col cols="4" style="border:solid"
            ><strong>COURIER BOY DETAILS</strong
            ><strong>RECEIVER DETAILS</strong>
            <p><strong>SENDER DETAILS</strong></p>
            <p>Name:<br />SENDER NAME</p>
            <br />
            <p>
              Address:<br />House No. APT,<br />STREET NAME, CITY,<br />TAL,
              DIST<br />PIN
            </p>
            <br />
            <p>PHONE:<br />+91 98765 43210</p></v-col
          >
          <!--<v-col cols="2" style="padding-left:30px">
            <p>
              Sender Name:<br />
              TEST IS SENT
            </p>
            <br />
            <p>
              Address:<br />
              Room No, Soceity<br />Locality, City,<br />Town, State<br />Country-
              PINCODE
            </p>
            <v-img
              width="100px"
              src="https://www.docsketch.com/assets/vip-signatures/muhammad-ali-signature-6a40cd5a6c27559411db066f62d64886c42bbeb03b347237ffae98b0b15e0005.svg"
            ></v-img>
          </v-col>
          <v-col cols="2">
            <p>
              RECEIVER<br />
              Name:<br />
              TEST IS SENT
            </p>
            <br />
            <p>
              Address:<br />
              Room No, Soceity<br />Locality, City,<br />Town, State<br />Country-
              PINCODE
            </p>
          </v-col>
          <v-col cols="2">
            <p>
              <v-icon>fa fa-calendar-o</v-icon>Pick up date:<br /><span
                style="text-align:center"
              >
                17/12/2020</span
              >
            </p>
            <br />
            <p>
              <v-icon>fa fa-calendar-check-o</v-icon>Scheduled Delivery:<br />
              <span style="text-align:center">20/12/2020</span>
            </p>
          </v-col>
          <v-col cols="3">
            <p>
              Courier Name:<br />
              TEST IS SENT
            </p>
            <br />
            <p>
              Contact No:<br />
              +91 99999 99999
            </p>
            <br /><br />
            <p>
              Mumbai_____
              <v-icon style="">fa fa-truck</v-icon>_____ Delhi
            </p>
          </v-col>
          <v-col cols="2">
            <img
              style="height:30%"
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
            /><br />
            <img
              style="width:200px"
              src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2016/05/fingerprint.jpg?w=400&h=200&crop=1"
            /><br />
            <v-btn style="background-color:green;color:white"> Okay</v-btn>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<v-btn
              style="background-color:red;color:white"
              >Print</v-btn
            >
          </v-col>-->
        </v-row>
        <v-row style="padding-left:30px;padding-right:30px">
          <v-col cols="4">
            <img
              src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
              style="width:100px"
            />
          </v-col>
          <v-col cols="4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Dave_Bautista_signature.svg"
              style="width:200px"
            />
          </v-col>
          <v-col cols="4">
            <img
              style="height:100px"
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
            />
            <img
              style="width:150px"
              src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2016/05/fingerprint.jpg?w=400&h=200&crop=1"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      i: 0,
    };
  },
  mounted() {},
};
</script>

<style></style>

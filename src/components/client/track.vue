<template>
  <div style="margin-top:10vh;text-align:center">
    <v-img>
      <v-container
        style="width:100%;margin-bottom:10vh;border-radius:20px;padding:30px"
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
          style="width:100%;height:100%;position:absolute;top:0%;left:0%;padding:10px"
          v-show="dialog"
        >
          <v-card-title class="headline grey lighten-2 text-center">
            Your Package Details
          </v-card-title>

          <v-divider></v-divider>
          <v-row style="text-align:left">
            <v-col>
              <p>Sender Name: TEST IS SENT</p>
              <br />
              <p>
                Address: Room No, Soceity<br />Locality, City,<br />Town,
                State<br />Country- PINCODE
              </p>
            </v-col>
            <v-col>
              <p>RECEIVER Name: TEST IS SENT</p>
              <br />
              <p>
                Address: Room No, Soceity<br />Locality, City,<br />Town,
                State<br />Country- PINCODE
              </p>
            </v-col>
            <v-col>
              <p><v-icon>fa fa-calendar-o</v-icon>Pick up date: 17/12/2020</p>
              <br />
              <p>
                <v-icon>fa fa-calendar-check-o</v-icon>Scheduled Delivery date:
                20/12/2020
              </p>
            </v-col>
            <v-col>
              <p>Courier Name: TEST IS SENT</p>
              <br />
              <p>
                Contact No: +91 99999 99999
              </p>
              <br /><br />
              <p>
                Mumbai_____
                <v-icon style="">fa fa-truck</v-icon>_____ Delhi
              </p>
            </v-col>
          </v-row>

          <v-card-actions>
            <v-row
              ><p>
                For any delivery releted queries feel free to call us at +91
                99999 99999 or write us at admin@matrixbox.in
              </p></v-row
            >
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              Okay
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-img>
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

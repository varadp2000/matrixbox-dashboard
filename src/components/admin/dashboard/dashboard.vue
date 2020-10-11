<template>
  <div style>
    <v-row style="margin-top:70px">
      <v-col cols="3">
        <v-card
          class="d-inline-block mx-auto"
          height="150px"
          style="width:100%;margin-bottom:30px;background-color:#16656D;"
          shaped
          default
        >
          <v-row>
            <v-col
              cols="6"
              style="margin-top:30px;text-align:right;padding-top:20px;"
            >
              <p style="font-style:50px">
                <span style="font-size:30px;font-weight:bold;color:#006ffa">{{
                  emp
                }}</span
                ><br />
                <span style="font-size:20px;color:white">Total Admins:</span>
              </p>
            </v-col>
            <v-col cols="2" style="text-align:left;">
              <i
                style="font-size:50px;text-align:left;color:#F8A555;padding:15px;border-radius:5px;margin-top:30px;margin-left:5px"
                class="fas fa-users-cog"
              ></i>
            </v-col>
            <v-col cols="2" />
          </v-row>
        </v-card>
        <v-card
          class="d-inline-block mx-auto"
          height="150px"
          style="width:100%;margin-bottom:30px;background-color:#16656D;"
          shaped
        >
          <v-row>
            <v-col cols="6" style="margin-top:30px;text-align:right;">
              <p style="font-style:50px">
                <span style="font-size:30px;font-weight:bold;color:#FF9700">{{
                  trck
                }}</span
                ><br />
                <span style="font-size:20px;color:white;margin-left:10px">Total Trackers:</span>
              </p>
            </v-col>
            <v-col cols="2" style="text-align:left;">
              <i
                style="font-size:50px;text-align:left;color:#F8A555;padding:15px;border-radius:5px;margin-top:30px;margin-left:5px"
                class="fas fa-users"
              ></i>
            </v-col>
            <v-col cols="2" />
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
          class="d-inline-block mx-auto"
          height="150px"
          style="width:100%;margin-bottom:30px;background-color:#16656D;"
          shaped
          default
        >
          <v-row>
            <v-col
              cols="6"
              style="margin-top:30px;text-align:right;padding-top:20px;"
            >
              <p style="font-style:50px">
                <span style="font-size:30px;font-weight:bold;color:#006ffa">{{
                  db
                }}</span
                ><br />
                <span style="font-size:20px;color:white">Total Delivery Boys:</span>
              </p>
            </v-col>
            <v-col cols="2" style="text-align:left;">
              <i
                style="font-size:50px;text-align:left;color:#F8A555;padding:15px;border-radius:5px;margin-top:30px;margin-left:5px"
                class="fas fa-baby-carriage"
              ></i>
            </v-col>
            <v-col cols="2" />
          </v-row>
        </v-card>
        <v-card
          class="d-inline-block mx-auto"
          height="150px"
          style="width:100%;margin-bottom:30px;background-color:#16656D;"
          shaped
        >
          <v-row>
            <v-col cols="6" style="margin-top:30px;text-align:right;">
              <p style="font-style:50px">
                <span style="font-size:30px;font-weight:bold;color:#FF9700">{{
                  pkgpend
                }}</span
                ><br />
                <span style="font-size:20px;color:white">Pending Packages:</span>
              </p>
            </v-col>
            <v-col cols="2" style="text-align:left;">
              <i
                style="font-size:50px;text-align:left;color:#F8A555;padding:15px;border-radius:5px;margin-top:30px;margin-left:5px"
                class="fas fa-clock"
              ></i>
            </v-col>
            <v-col cols="2" />
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
          class="d-inline-block mx-auto"
          height="150px"
          style="width:100%;margin-bottom:30px;background-color:#16656D;"
          shaped
          default
        >
          <v-row>
            <v-col
              cols="6"
              style="margin-top:30px;text-align:right;padding-top:20px;"
            >
              <p style="font-style:50px">
                <span style="font-size:30px;font-weight:bold;color:#006ffa">{{
                  pkgdel
                }}</span
                ><br />
                <span style="font-size:20px;color:white">Packages Delivered:</span>
              </p>
            </v-col>
            <v-col cols="2" style="text-align:left;">
              <i
                style="font-size:50px;text-align:left;color:#F8A555;padding:15px;border-radius:5px;margin-top:30px;margin-left:5px"
                class="fas fa-check"
              ></i>
            </v-col>
            <v-col cols="2" />
          </v-row>
        </v-card>
        <v-card
          class="d-inline-block mx-auto"
          height="150px"
          style="width:100%;margin-bottom:30px;background-color:#16656D;"
          shaped
        >
          <v-row>
            <v-col cols="6" style="margin-top:30px;text-align:right;">
              <p style="font-style:50px">
                <span style="font-size:30px;font-weight:bold;color:#FF9700"
                  >50</span
                ><br />
                <span style="font-size:20px;color:white">Total Packages:</span>
              </p>
            </v-col>
            <v-col cols="2" style="text-align:left;">
              <i
                style="font-size:50px;text-align:left;color:#F8A555;padding:15px;border-radius:5px;margin-top:30px;margin-left:5px"
                class="fas fa-box"
              ></i>
            </v-col>
            <v-col cols="2" />
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
          class="d-inline-block mx-auto"
          height="150px"
          style="width:100%;margin-bottom:30px;background-color:#16656D;"
          shaped
        >
          <v-row>
            <v-col cols="6" style="margin-top:30px;text-align:right;">
              <p style="font-style:50px">
                <span style="font-size:30px;font-weight:bold;color:#FF7CC9">{{
                  todaypkg
                }}</span
                ><br />
                <span style="font-size:20px;color:white">Todays Packages:</span>
              </p>
            </v-col>
            <v-col cols="2" style="text-align:left;">
              <i
                style="font-size:50px;text-align:left;color:#F8A555;padding:15px;border-radius:5px;margin-top:30px;margin-left:5px"
                class="fas fa-truck"
              ></i>
            </v-col>
            <v-col cols="2" />
          </v-row>
        </v-card>
        <v-card
          class="d-inline-block mx-auto"
          height="150px"
          style="width:100%;margin-bottom:30px;background-color:#16656D;"
          tile
          shaped
        >
          <v-row>
            <v-col cols="6" style="margin-top:30px;text-align:right;">
              <p style="font-style:50px">
                <span style="font-size:30px;font-weight:bold;color:#62D1C2">{{
                  todaydel
                }}</span
                ><br />
                <span style="font-size:20px;color:white">Packages Delivered Today:</span>
              </p>
            </v-col>
            <v-col cols="2" style="text-align:left;">
              <i
                style="font-size:50px;text-align:left;padding:15px;color:#F8A555;border-radius:5px;margin-top:30px;margin-left:5px"
                class="fas fa-archive"
              ></i>
            </v-col>
            <v-col cols="2" />
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!--    <v-row cols="6">
      <v-col>
        <div style="width:100%;">
          <v-card
            class="mx-auto"
            shaped
            height="500px"
            style="background-image:linear-gradient(to right,#4102B3, #9E41B9);text-align:center;color:white;padding-top:30px;width:100%;height:100%"
          >
            <v-card-title
              style="font-size:50px;padding-left:40%;padding-top:5%;font-weight:bold;margin-top:60px"
              >500</v-card-title
            >
            <v-card-subtitle
              style="font-size:30px;padding-top:5%;color:white;margin-bottom:5%;padding-bottom:10%"
            >
              Packages Delivered Past Week
            </v-card-subtitle>
          </v-card>
        </div>
      </v-col>
      <v-col>
        <div style="width:100%">
          <v-card
            class="mx-auto text-center"
            style="background-color: #4CAF50;width:100%;"
            dark
          >
            <v-card-text>
              <v-sheet color="#439A46">
                <v-sparkline
                  :value="value"
                  color="rgba"
                  height="100"
                  padding="24"
                  stroke-linecap="round"
                  smooth
                >
                  <template v-slot:label="item"> ${{ item.value }} </template>
                </v-sparkline>
              </v-sheet>
            </v-card-text>

            <v-card-text>
              <div class="display-1 font-weight-thin">Sales Last 24h</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="justify-center">
              <v-btn block style="background-color:#439A46" text
                >Go to Report</v-btn
              >
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      emp: null,
      db: null,
      trck: null,
      pkgpend: null,
      pkgdel: null,
      todaypkg: null,
      todydel: null,
    };
  },
  async created() {
    console.log(this.$store.state.isLoggedIn);
    if (!this.$store.state.isLoggedIn) this.$router.push("/admin/login");
    if (this.$store.state.user.type == "Employee")
      this.$router.replace("/employee");
    if (this.$store.state.user.type == "Tracker")
      this.$router.replace("/tracker");

    let config = {
      method: "POST",
      url: "https://api.matrixbox.in/admin/dashboard/status",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        Authorization: this.$store.state.user.token,
      },
    };
    let resp = await axios(config);
    this.emp = resp.data.data.totalEmployee;
    this.db = resp.data.data.deliveryBoysCount;
    this.trck = resp.data.data.trackersCount;
    this.pkgpend = resp.data.data.packagePending;
    this.pkgdel = resp.data.data.packageDelivered;
    this.todaypkg = resp.data.data.todayPackages;
    this.todaydel = resp.data.data.todayAssignedPackage;
  },
};
</script>

<style></style>

<template>
  <div>
    <v-row style="margin-top:10px">
      <v-col>
        <v-card
          class="d-inline-block mx-auto"
          height="150px"
          style="width:100%;margin-bottom:30px;background-color:#16656D"
          shaped
          default
        >
          <v-row>
            <v-col
              cols="6"
              style="margin-top:30px;text-align:right;padding-top:20px;"
            >
              <p style="font-style:50px">
                <span style="font-size:30px;font-weight:bold;color:white">{{
                  tdpkg
                }}</span
                ><br />
                <span style="font-size:20px;color:white">Today Package:</span>
              </p>
            </v-col>
            <v-col cols="2" style="text-align:left;">
              <i
                style="font-size:50px;text-align:left;color:lightgrey;padding:15px;border-radius:5px;margin-top:30px;margin-left:5px;color:orange"
                class="fas fa-users-cog"
              ></i>
            </v-col>
            <v-col cols="2" />
          </v-row>
        </v-card> </v-col
      ><v-col>
        <v-card
          class="d-inline-block mx-auto"
          height="150px"
          style="width:100%;margin-bottom:30px;background-color:#16656D"
          shaped
          default
        >
          <v-row>
            <v-col
              cols="6"
              style="margin-top:30px;text-align:right;padding-top:20px;"
            >
              <p style="font-style:50px">
                <span style="font-size:30px;font-weight:bold;color:white">{{
                  totalpkg
                }}</span
                ><br />
                <span style="font-size:20px;color:white">Total Packages:</span>
              </p>
            </v-col>
            <v-col cols="2" style="text-align:left;">
              <i
                style="font-size:50px;text-align:left;color:lightgrey;padding:15px;border-radius:5px;margin-top:30px;margin-left:5px;color:orange"
                class="fas fa-users-cog"
              ></i>
            </v-col>
            <v-col cols="2" />
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" />
      <v-col cols="6">
        <v-text-field
          label="Search"
          style="background-color:white;height:60px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding-right:20px;;padding-left:20px;"
          append-icon="fas fa-search"
        />
      </v-col>
    </v-row>
    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 19.987861, lng: 72.730943 },
      markers: [],
      places: [],
      currentPlace: null,
      tdpkg: null,
      totalpkg: null
    };
  },

  mounted() {
    this.geolocate();
  },
  async created() {
    console.log(this.$store.state.isLoggedIn);
    if (!this.$store.state.isLoggedIn) this.$router.push("/admin/login");
    if (
      this.$store.state.user.type == "Super" ||
      this.$store.state.user.type == "Admin"
    )
      this.$router.replace("/superadmin");
    if (this.$store.state.user.type == "employee")
      this.$router.replace("/employee");

    let config = {
      method: "POST",
      url: "https://api.matrixbox.in/admin/dashboard/status",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        Authorization: this.$store.state.user.token
      }
    };
    let resp = await axios(config);
    console.log(resp);
    this.tdpkg = 1;
    this.totalpkg = resp.data.data.totalPackage;
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style></style>

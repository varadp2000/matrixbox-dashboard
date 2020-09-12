<template>
  <div>
    <v-form style="border:solid;padding:30px;border-color:white">
      <v-row>
        <v-col cols="9" style="border:solid;border-color:white">
          <v-row>
            <v-col>
              <v-text-field
                label="First Name"
                v-model="fname"
                style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
              />
            </v-col>
            <v-col>
              <v-text-field
                label="Middle Name"
                v-model="midname"
                style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
              />
            </v-col>
            <v-col>
              <v-text-field
                label="Last Name"
                v-model="lname"
                style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                v-model="tempAdd"
                label="Temporary Address"
                style="background-color:white;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
              />
            </v-col>
            <v-col>
              <v-textarea
                v-model="pAdd"
                label="Permanent Address"
                style="background-color:white;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <country-select
                style="background-color:white;height:50px;border-radius:0px;padding:10px;margin-top:5px;width:100%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                v-model="country"
                :country="country"
                topCountry="IN"
              />
            </v-col>
            <v-col cols="4">
              <region-select
                style="background-color:white;height:50px;border-radius:0px;padding:10px;margin-top:5px;width:100%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                v-model="region"
                :country="country"
                :region="region"
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="District"
                v-model="dist"
                style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-radio-group v-model="vlg">
                <v-radio
                  label="Village"
                  style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                  value="true"
                />
                <v-radio
                  label="City"
                  style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                  value="false"
                />
              </v-radio-group>
            </v-col>
            <v-col>
              <v-row>
                <v-col>
                  <v-text-field
                    :disabled="vlg != 'true'"
                    label="Village"
                    v-model="vlgName"
                    style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                  />
                  <v-text-field
                    :disabled="vlg == 'true' || vlg == null"
                    label="City"
                    v-model="cityName"
                    style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :disabled="vlg != 'true'"
                    label="Tahsil"
                    style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                    v-model="tahsil"
                  />
                  <v-text-field
                    :disabled="vlg == 'true' || vlg == null"
                    label="Tahsil"
                    style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                    v-model="tahsil"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :disabled="vlg != 'true'"
                    label="Post"
                    style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                    v-model="post"
                  />
                  <v-text-field
                    :disabled="vlg == 'true' || vlg == null"
                    label="Post"
                    style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                    v-model="post"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :disabled="vlg != 'true'"
                    label="Police Station"
                    style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                    v-model="policeStation"
                  />
                  <v-text-field
                    :disabled="vlg == 'true' || vlg == null"
                    label="Police Station"
                    style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                    v-model="policeStation"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                label="Primary Contact No."
                v-model="phn"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                label="Emergency Contact No."
                v-model="ePhn"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                style="background-color:white;height:50px;border-radius:0px;padding:10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                label="Email"
                type="email"
                v-model="email"
              />
            </v-col>
            <v-col>
              <select
                style="background-color:white;height:50px;border-radius:0px;padding:10px;width:100%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
                :items="states"
                v-model="edu"
                Placeholder="Educational Qualification"
                :rules="[(e) => e != 1 || 'Select Educational Qualification']"
              >
                <option value="1">Select Education</option>
                <option value="2">10th</option>
                <option value="3">12th</option>
                <option value="4">Graduation</option>
                <option value="5">Post Graduation</option>
                <option value="6">Ph. D</option>
              </select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-checkbox
                v-model="wex"
                label="Previous Work Experience"
                required
                style="background-color:white;height:50px;border-radius:0px;padding:10px;padding-left:30px"
              ></v-checkbox>
            </v-col>
            <v-col>
              <v-row>
                <v-col
                  ><v-text-field
                    style="background-color:white;height:50px;border-radius:0px;padding:10px"
                    label="Position"
                    v-model="prevpos"
                    :disabled="wex == false"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    style="background-color:white;height:50px;border-radius:0px;padding:10px"
                    label="Company"
                    v-model="prevCmp"
                    :disabled="wex == false"
                  ></v-text-field
                ></v-col>
              </v-row>
              <v-row v-show="$route.name != 'newdeliveryboy'">
                <v-col
                  ><v-text-field
                    style="background-color:white;height:50px;border-radius:0px;padding:10px"
                    label="User Name"
                    v-model="uname"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    style="background-color:white;height:50px;border-radius:0px;padding:10px"
                    label="Password"
                    type="password"
                    v-model="pass"
                  ></v-text-field
                ></v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3" style="Text-align:right;">
          <img
            :src="
              img ||
                'https://cdn2.iconfinder.com/data/icons/e-commerce-navigation/1024/Avatar-512.png'
            "
            style="height:150px;width:150px;background-color:#22A8C3;padding:5px;border-radius:999px;margin-left:50px"
          /><br />
          <v-btn style="width:90%">Select Image </v-btn>
          <v-row style="margin-top:15px;">
            <v-col>
              <v-btn style="padding:5px;width:100%"
                ><v-icon style="margin-right:10px">fas fa-signature</v-icon>Sign
                Here</v-btn
              >
              <v-btn style="padding:5px;margin-top:20px;width:100%"
                ><v-icon style="margin-right:10px">fas fa-id-card</v-icon
                >Aadhar</v-btn
              >
            </v-col>
            <v-col>
              <v-btn style=" margin-left:10px;height:80px;width:30px"
                ><v-icon style="font-size:50px"
                  >fas fa-fingerprint</v-icon
                ></v-btn
              >
            </v-col>
            <v-checkbox
              label="I Agree Terms And Conditions"
              style="margin-left:11px;padding-right:5px"
              :rules="[(e) => e || 'You must agree terms and conditions.']"
            ></v-checkbox>
            <v-btn
              style="margin-left:11px;width:250px;margin-top:5px;background-color:red;color:white"
              >Reset</v-btn
            >
            <v-btn
              style="margin-left:11px;width:250px;margin-top:5px;background-color:green;color:white"
              @click="submit"
              >Submit</v-btn
            >
          </v-row>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      states: [
        "SSC",
        "HSC",
        "Diploma",
        "Degree(Graduation)",
        "Post Graduation",
        "Ph.D",
      ],
      edu: 1,
      img: null,
      vlg: null,
      items: [
        "SSC",
        "HSC",
        "Diploma",
        "Degree(Graduation)",
        "Post Graduation",
        "Ph.D",
      ],
      country: "",
      region: "",
      wex: false,
      fname: "",
      midname: "",
      lname: "",
      tempAdd: "",
      pAdd: "SAME AS TEMP",
      dist: "",
      type: "",
      addname: "",
      tahsil: "",
      post: "",
      policeStation: "",
      phn: "",
      ePhn: "",
      mail: "",
      prevpos: null,
      prevCmp: null,
      cat: null,
      vlgName: null,
      cityName: null,
      uname: null,
      pass: null,
    };
  },
  methods: {
    async submit() {
      //😍😍😍😍
      let catagory = "";
      if (this.$route.name == "newadmin") catagory = "Super";
      if (this.$route.name == "newemp") catagory = "Admin";
      if (this.$route.name == "newtracker") catagory = "Tracker";
      if (this.$route.name == "newdeliveryboy") catagory = "Delivery Boy";

      let data = {
        firstName: this.fname,
        middleName: this.midname,
        lastName: this.lname,
        temporaryAddress: this.tempAdd,
        permanentAddress: this.pAdd,
        country: this.country,
        region: this.region,
        district: this.dist,
        addressType: this.vlg ? "Village" : "City",
        addressName: this.vlgName || this.cityName,
        tahsil: this.tahsil,
        post: this.post,
        policeStation: this.policeStation,
        phone: this.phn,
        emergencyPhone: this.ePhn,
        email: this.email,
        previousWork: this.wex,
        previousPosition: this.prevpos,
        previousCompany: this.prevCmp,
        category: catagory,
      };
      let config = {
        method: "POST",
        url: "https://api.matrixbox.in/admin/employee/create",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          Accept: "*/*",
          Authorization: this.$store.state.user.token,
        },
        data,
      };
      console.log(JSON.stringify(data));
      let resp = await axios(config).catch((err) => (this.resp = err));
      alert("User Registered Success");
      if (catagory != "Delivery Boy") {
        data = {
          user: this.uname,
          password: this.pass,
          category: catagory,
          email: this.email,
        };
        config = {
          method: "POST",
          url: "https://api.matrixbox.inmin/auth/create",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            Accept: "*/*",
            Authorization: this.$store.state.user.token,
          },
          data,
        };
        resp = await axios(config).catch((err) => (this.resp = err));
        console.log(resp);
      }
      this.$router.replace("/admin");
    },
  },
};
</script>

<style></style>

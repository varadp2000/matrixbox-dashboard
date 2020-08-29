<template>
  <div style>
    <v-row style="margin-top:10px">
      <v-col>
        <v-card
          class="d-inline-block mx-auto"
          height="150px"
          style="width:100%;margin-bottom:30px"
          shaped
          default
        >
          <v-row>
            <v-col
              cols="6"
              style="margin-top:30px;text-align:right;padding-top:20px;"
            >
              <p style="font-style:50px">
                <span style="font-size:30px;font-weight:bold;color:#006ffa"
                  >100</span
                ><br />
                <span style="font-size:20px">Total Employees:</span>
              </p>
            </v-col>
            <v-col cols="2" style="text-align:left;">
              <i
                style="font-size:50px;text-align:left;color:lightgrey;padding:15px;border-radius:5px;margin-top:30px;margin-left:5px"
                class="fas fa-users-cog"
              ></i>
            </v-col>
            <v-col cols="2" />
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="d-inline-block mx-auto"
          height="150px"
          style="width:100%;margin-bottom:30px"
          shaped
        >
          <v-row>
            <v-col cols="6" style="margin-top:30px;text-align:right;">
              <p style="font-style:50px">
                <span style="font-size:30px;font-weight:bold;color:#FF9700"
                  >100</span
                ><br />
                <span style="font-size:20px">Total Employees:</span>
              </p>
            </v-col>
            <v-col cols="2" style="text-align:left;">
              <i
                style="font-size:50px;text-align:left;color:lightgrey;padding:15px;border-radius:5px;margin-top:30px;margin-left:5px"
                class="fas fa-users-cog"
              ></i>
            </v-col>
            <v-col cols="2" />
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="d-inline-block mx-auto"
          height="150px"
          style="width:100%;margin-bottom:30px"
          shaped
        >
          <v-row>
            <v-col cols="6" style="margin-top:30px;text-align:right;">
              <p style="font-style:50px">
                <span style="font-size:30px;font-weight:bold;color:#FD3550"
                  >100</span
                ><br />
                <span style="font-size:20px">Total Employees:</span>
              </p>
            </v-col>
            <v-col cols="2" style="text-align:left;">
              <i
                style="font-size:50px;text-align:left;color:lightgrey;padding:15px;border-radius:5px;margin-top:30px;margin-left:5px"
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
          style="width:100%;margin-bottom:30px"
          shaped
        >
          <v-row>
            <v-col cols="6" style="margin-top:30px;text-align:right;">
              <p style="font-style:50px">
                <span style="font-size:30px;font-weight:bold;color:#FD3550"
                  >100</span
                ><br />
                <span style="font-size:20px">Total Employees:</span>
              </p>
            </v-col>
            <v-col cols="2" style="text-align:left;">
              <i
                style="font-size:50px;text-align:left;color:lightgrey;padding:15px;border-radius:5px;margin-top:30px;margin-left:5px"
                class="fas fa-users-cog"
              ></i>
            </v-col>
            <v-col cols="2" />
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-data-table
        :search="search"
        :headers="headers"
        :items="employee"
        multi-sort
        style="width:100%"
      >
        <template v-slot:item.fullname="{ item }">
          {{ `${item.fname} ${item.lname}` }}
        </template>
        <template v-slot:item.actions="{ item }">
          <router-link
            :to="`/admin/view/${item.id}`"
            style="text-decoration:none;margin-left:15px;"
            ><v-icon style="color:green"> fas fa-eye </v-icon></router-link
          >
          <router-link
            :to="`/admin/view/${item.id}`"
            style="text-decoration:none;margin-left:15px;"
            ><v-icon style="color:green"> fas fa-qrcode </v-icon></router-link
          >
        </template>
      </v-data-table>
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
const gradients = [
  ["#61AB84"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];
export default {
  created() {
    console.log(this.$store.state.isLoggedIn);
    //if (!this.$store.state.isLoggedIn) this.$router.push("/employee/login");
  },
  data: function() {
    return {
      value: [423, 446, 675, 510, 590, 610, 760],
      gradient: gradients[5],
      headers: [
        {
          text: "id",
          value: "id",
          aligb: "start",
        },
        {
          text: "Name",
          value: `fullname`,
        },
        {
          text: "Phone",
          value: "phone",
        },
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Location",
          value: "area",
        },
        {
          text: "Actions",
          value: "actions",
        },
        {
          text: "Status",
          value: "id",
        },
      ],
      employee: [
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Delhi",
          email: "JohnDoe@examiple.com",
          phone: "+91 99999 99999",
        },
        {
          id: 0,
          fname: "John",
          lname: "Kumar",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "Ravi",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 5,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
        {
          id: 0,
          fname: "John",
          lname: "Doe",
          area: "Mumbai",
        },
      ],
    };
  },
};
</script>

<style></style>

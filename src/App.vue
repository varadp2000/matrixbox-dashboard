<template>
  <div
    :style="[
      $route.name == 'login'
        ? {
            backgroundImage: 'linear-gradient(to right, #3CCDBB,#16C9F5)',
            height: '98vh',
          }
        : {},
    ]"
  >
    <img
      src="./assets/loader.gif"
      width="100%"
      height="100%"
      v-show="loading"
      style="z-index:9999px;position:absolute;top:5%"
    />
    <div
      v-if="
        $route.name == 'home' ||
          $route.name == 'about' ||
          $route.name == 'contact' ||
          $route.name == 'mission' ||
          $route.name == 'track'
      "
      v-show="!loading"
    >
      <navbar />
      <router-view />
      <footelr />
    </div>
    <div v-else>
      <v-toolbar
        v-show="$store.state.isLoggedIn"
        style="background-color:#223035;"
        height="100px"
      >
        <v-toolbar-title style=" color:white;font-size:50px;font-weight:bold;"
          ><img
            src="./assets/logo.png"
            height="114px"
            style="padding-top:30px;padding-left:5px"
        /></v-toolbar-title>
        <v-spacer></v-spacer>
        <p style="font-size:20px;color:white">
          <v-icon
            style="font-size:25px;color:white;margin-bottom:7px;margin-right:10px;"
            >fas fa-user</v-icon
          >Welcome {{ this.$store.state.user.user }}
        </p>
      </v-toolbar>
      <v-row>
        <v-col cols="1" v-show="$route.name != 'login'">
          <v-navigation-drawer
            v-show="$store.state.isLoggedIn"
            v-model="drawer"
            :expand-on-hover="true"
            :mini-variant="true"
            absolute
            style="background-color:#223035;transition:0.5s;overflow: auto;margin-top:100px;"
          >
            <v-divider />
            <v-list dense nav style="height:60px;margion-top:30px">
              <v-list-item
                v-for="btn in btns"
                style="height:60px;margin-right:10px"
                :key="btn.id"
                link
              >
                <v-list-item-icon>
                  <v-icon
                    style="color:white;background-color:purple;font-size:30px;margin-left:5px"
                    >fa-address-book</v-icon
                  >
                </v-list-item-icon>
                <router-link
                  style="color:white;text-decoration:none;"
                  :to="btn.routerlinks"
                >
                  <v-list-item-title
                    style="font-size:20px;margin-bottom:10px;margin-left:10px"
                  >
                    {{ btn.name }}
                  </v-list-item-title>
                </router-link>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-col>
        <v-col cols="11">
          <v-container>
            <router-view />
          </v-container>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
//import navbar from "./components/layout/navbar";
import navbar from "./components/client/layout/navbar";
import footelr from "./components/client/layout/footer";
import store from "./store";
export default {
  name: "App",
  beforeCreate() {
    this.$store = store;
  },
  data: function() {
    return {
      drawer: true,
      btns: [
        {
          id: 8,
          name: "Dashboard",
          routerlinks: "/admin/",
        },
        {
          id: 0,
          name: "Add Admin",
          routerlinks: "/admin/newadmin",
        },
        {
          id: 1,
          name: "View Admin",
          routerlinks: "/admin/viewadmin",
        },
        {
          id: 2,
          name: "Add Employee",
          routerlinks: "/admin/newemployee",
        },
        {
          id: 3,
          name: "View Employee",
          routerlinks: "/admin/viewemp",
        },
        {
          id: 4,
          name: "Add Tracker",
          routerlinks: "/admin/newtracker",
        },
        {
          id: 5,
          name: "View Tracker",
          routerlinks: "/admin/viewtracker",
        },
        {
          id: 6,
          name: "Add Delivery Boy",
          routerlinks: "/admin/newdeliveryboy",
        },
        {
          id: 7,
          name: "View Delivery Boy",
          routerlinks: "/admin/viewdeliveryboy",
        },
      ],
      loading: false,
    };
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
  components: {
    navbar,
    footelr,
  },
};
</script>

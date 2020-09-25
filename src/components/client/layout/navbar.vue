<template>
  <div>
    <div>
      <v-row style="height:135px;background-color:#16656D;color:white;">
        <div
          class="lowerTriangle"
          style="position:absolute;left:469px;top:-4px;"/>
        <v-row
          style="width:100%;height:20px;font-size:10px;margin-bottom:10px;"
        >
          <v-col cols="4">
            <img
              src="../../../assets/logo.png"
              style="margin-left:200px;padding-top:10px"
              width="180px"
            />
          </v-col>
          <v-col
            cols="8"
            style="background-color:#F8A555;color:white;height:30px;padding-bottom:3px;border-bottom-left-radius:999px"
          >
            <v-btn
              style="height:10px;font-size:10px;margin-bottom:12px"
              text
              dark
              >Why Us?</v-btn
            >
            |
            <v-btn
              style="height:10px;font-size:10px;margin-bottom:12px"
              @click="$router.push('track')"
              text
              dark
              >Track Package</v-btn
            >
          </v-col>
        </v-row>
        <v-col cols="4" style="padding-left:10px;height:70px"></v-col>
        <v-col cols="2" style="height:70px;"
          ><p style="font-size:13px;margin-top:9px">
            Call Us<br />+91 70685 07001
          </p></v-col
        >
        <v-col cols="2" style="height:70px"
          ><p style="font-size:13px;margin-top:9px">
            Email<br />Admin@matrixbox.in
          </p></v-col
        >
        <v-col cols="2" style="height:70px"
          ><p style="font-size:13px;margin-top:9px">
            Working Hours<br />8:00A.M. - 9:00P.M.
          </p></v-col
        >
        <v-col cols="2" style="height:70px"
          ><v-btn
            style="color:#16656D;background-color:white;margin-top:9px"
            outlined
            dark
            @click="$router.push('/admin')"
            >EMPLOYEE LOGIN</v-btn
          ></v-col
        >
        <div
          class="bottomTriangle"
          style="position:absolute;right:331px;top:126px"/>

        <v-row style="color:white;margin-top:10px;z-index:999;border-bottom-left-radius:999px;border-bottom-right-radius:999px">
          <v-col
            cols="9"
            style="background-color:white;color:#6D0000;padding-left:40px;height:50px;padding-bottom:30px;border-top-right-radius:999px"
          >
            <v-btn
              style="color:#6D0000;margin-left:5px;font-size:15px;height:30px;margin-bottom:10px"
              outlined
              dark
              @click="$router.push('/')"
              >Home</v-btn
            >
            <v-btn
              style="color:#6D0000;margin-left:5px;font-size:15px;height:30px;margin-bottom:10px"
              outlined
              dark
              @click="$router.push('/about')"
              >About Us</v-btn
            >
            <v-btn
              style="color:#6D0000;margin-left:5px;font-size:15px;height:30px;margin-bottom:10px"
              outlined
              dark
              @click="$router.push('/mission')"
              >Mission & Vision</v-btn
            >
            <v-btn
              style="color:#6D0000;margin-left:5px;font-size:15px;height:30px;margin-bottom:10px"
              outlined
              dark
              @click="$router.push('/contact')"
              >Careers</v-btn
            >
            <v-btn
              style="color:#6D0000;margin-left:5px;font-size:15px;height:30px;margin-bottom:10px"
              outlined
              dark
              @click="$router.push('/contact')"
              >Contact Us</v-btn
            >
          </v-col>
          <v-col cols="3"></v-col> </v-row
      ></v-row>
    </div>
    <!--<div clsss="showsm" style="background-color:black;">
      <v-app-bar dark>
        <img src="../../../assets/logo.png" style="width:200px" /><v-spacer />
        <v-btn color="primary" dark @click="menu = !menu">Click ME</v-btn>
        <v-list v-show="menu" style="background-color:white;z-index:999999">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title style="color:black;background-color:white">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-app-bar>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },
};
</script>

<style scoped>
.showsm {
  display: none;
}

.hiddensm {
  display: block;
}
@media only screen and (max-width: 600px) {
  .hiddensm {
    display: none;
  }
  .showsm {
    display: block;
  }
}

</style>

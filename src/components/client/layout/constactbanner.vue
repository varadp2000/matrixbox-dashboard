<template>
  <div style="margin-bottom:30px">
    <v-container>
      <v-img src="../../assets/contactimg.png" style="height:200px">
        <v-row>
          <v-col cols="1" />
          <v-col cols="6">
            <h3 style="color:white">
              // We Carry More Than Just Good Coding Skills
            </h3>
            <h1 style="color:grey;font-weight:bold;font-size:45px">
              Let's Build Your Website!
            </h1>
          </v-col>
          <v-col cols="2"></v-col>
          <v-col cols="2">
            <v-btn
              style="border-radius:0px;color:white;background-color:#43BAFF;margin-top:80px"
              >Contact Us</v-btn
            >
          </v-col>
          <v-col cols="1" />
        </v-row>
      </v-img>
    </v-container>
    <testimonial />
  </div>
</template>

<script>
import testimonial from "./testimonials";
export default {
  components: {
    testimonial,
  },
};
</script>

<style></style>

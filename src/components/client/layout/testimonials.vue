<template>
  <div style="">
    <h1 style="text-align:center;margin-top:50px">Testimonials</h1>
    <v-container style="width:95%;padding:20px">
      <carousel :nav="false" number="4" :loop="true">
        <v-card width="350px" style="margin:5px;padding:10px"
          ><v-row>
            <v-col cols="6">
              <img src="https://www.w3schools.com/howto/img_avatar.png" />
            </v-col>
            <v-col cols="6">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </v-col>
          </v-row></v-card
        >
        <v-card width="350px" style="margin:5px;padding:10px"
          ><v-row>
            <v-col cols="6">
              <img src="https://www.w3schools.com/howto/img_avatar.png" />
            </v-col>
            <v-col cols="6">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </v-col>
          </v-row></v-card
        >
        <v-card width="350px" style="margin:5px;padding:10px"
          ><v-row>
            <v-col cols="6">
              <img src="https://www.w3schools.com/howto/img_avatar.png" />
            </v-col>
            <v-col cols="6">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </v-col>
          </v-row></v-card
        >
        <v-card width="350px" style="margin:5px;padding:10px"
          ><v-row>
            <v-col cols="6">
              <img src="https://www.w3schools.com/howto/img_avatar.png" />
            </v-col>
            <v-col cols="6">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </v-col>
          </v-row></v-card
        >
        <v-card width="350px" style="margin:5px;padding:10px"
          ><v-row>
            <v-col cols="6">
              <img src="https://www.w3schools.com/howto/img_avatar.png" />
            </v-col>
            <v-col cols="6">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </v-col>
          </v-row></v-card
        >
        <v-card width="350px" style="margin:5px;padding:10px"
          ><v-row>
            <v-col cols="6">
              <img src="https://www.w3schools.com/howto/img_avatar.png" />
            </v-col>
            <v-col cols="6">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </v-col>
          </v-row></v-card
        >
      </carousel>
    </v-container>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
};
</script>

<style></style>

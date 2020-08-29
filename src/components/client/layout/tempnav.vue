<template>
  <div>
    <v-row style="height:135px;background-color:lightgrey;color:white;">
      <div
        class="lowerTriangle"
        style="position:absolute;left:469px;top:-4px;"
      />
      <v-row style="width:100%;height:20px;font-size:10px;margin-bottom:10px;">
        <v-col cols="4">
          <img
            src="../../assets/logo.png"
            style="margin-left:200px;padding-top:30px"
            width="180px"
          />
        </v-col>
        <v-col
          cols="8"
          style="background-color:black;color:white;height:30px;padding-bottom:3px"
        >
          <v-btn style="height:10px;font-size:10px;margin-bottom:12px" text dark
            >Buy Now</v-btn
          >
          |
          <v-btn style="height:10px;font-size:10px;margin-bottom:12px" text dark
            >Why Us?</v-btn
          >
          |
          <v-btn style="height:10px;font-size:10px;margin-bottom:12px" text dark
            >Track Package</v-btn
          >
        </v-col>
      </v-row>
      <v-col cols="4" style="padding-left:10px;height:70px"></v-col>
      <v-col cols="2" style="height:70px;"
        ><p style="font-size:13px;margin-top:9px">
          Call Us<br />+91 99999 99999
        </p></v-col
      >
      <v-col cols="2" style="height:70px"
        ><p style="font-size:13px;margin-top:9px">
          Email<br />Admin@matrixbox.in
        </p></v-col
      >
      <v-col cols="2" style="height:70px"
        ><p style="font-size:13px;margin-top:9px">
          Working Hours<br />8AM - 9PM
        </p></v-col
      >
      <v-col cols="2" style="height:70px"
        ><v-btn style="color:white;background-color:green;margin-top:9px"
          >GET A FREE QUOTE</v-btn
        ></v-col
      >
      <div
        class="bottomTriangle"
        style="position:absolute;left:330px;top:126px"
      />

      <v-row style="color:white;;height:100%;height:51px;margin-top:10px">
        <v-col cols="3"></v-col>
        <v-col
          cols="9"
          style="background-color:#A91606;color:white;padding-left:40px;height:40px"
        >
          <v-btn text dark>Home</v-btn> | <v-btn text dark>About</v-btn> |
          <v-btn text dark>Contact Us</v-btn> |
          <v-btn text dark>Our Services</v-btn>
        </v-col>
      </v-row></v-row
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
.lowerTriangle {
  border-left: 23px solid transparent;
  border-right: 23px solid transparent;
  border-bottom: 23px solid black;
  transform: rotate(45deg);
}
.bottomTriangle {
  border-left: 28px solid transparent;
  border-right: 28px solid transparent;
  border-bottom: 28px solid #a91606;
  transform: rotate(135deg);
}
</style>

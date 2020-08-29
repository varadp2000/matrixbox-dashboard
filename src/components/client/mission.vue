<template>
  <div
    style="margin-top:30px;height:700px;text-align:center;padding-bottom:1300px"
  >
    <h1 style="margin-left:100px;font-size:50px">Our Mission</h1>
    <v-row
      style="border-top:solid;width:98%;text-align:center;margin-left:1%;border-color:#D6DFDC;"
    >
      <v-col cols="1" style="height:500px" />
      <v-col cols="5">
        <v-row>
          <v-img
            src="data:image/jpeg;base64,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"
            height="300px"
            style="margin-top:100px;border-top-right-radius:999px;border-bottom-right-radius:999px;"
          >
            <div
              style="width:100%;height:100%;background-image:linear-gradient(to right, red, blue);opacity:0.3"
            >
              <svg height="100" width="100"></svg>
            </div>
          </v-img>
        </v-row>
      </v-col>
      <v-col cols="1" />
      <v-col cols="4" style="text-align:left">
        <p style="margin-top:170px;font-size:20px">
          <strong style="font-size:30px"
            ><v-icon
              style="font-size:25px;color:#55B57D;border-color:#55B57D;border:solid;padding:10px;border-radius:999px"
              >fa fa-binoculars</v-icon
            >Our Vision</strong
          ><br /><br />
          Our vision is providing responsive, efficient, reliable and
          high-quality services to our valuable clients. It shall be the
          endeavour of MatrixBox to surpass customer expectations through
          Innovation, Creativity and an uncompromising commitment to Quality,
          Transparency and Integrity in offering total logistic solutions.
        </p>
      </v-col>
      <v-col cols="1" />
    </v-row>
    <v-row style="width:98%;text-align:center;margin-left:1%;">
      <v-col cols="1" style="height:500px" />

      <v-col cols="4" style="text-align:left">
        <p style="margin-top:70px">
          <strong style="font-size:30px"
            ><v-icon
              style="font-size:25px;color:#40ABB8;border-color:#40ABB8;border:solid;padding:10px;border-radius:999px"
              >fa fa-rocket</v-icon
            >Our Mission</strong
          ><br />
          Lorm Ipsum Dolor Sit Amitrd wafaf ewqf wfe wqwefg wfwe ew wafqeqewfqw
          ewqga qe qeqegwag wqenifq qeuib qeuifb wibu
        </p>
        <p style="margin-top:70px">
          <strong style="font-size:30px"
            ><v-icon
              style="font-size:25px;color:#55B57D;border-color:#55B57D;border:solid;padding:10px;border-radius:999px"
              >fa fa-binoculars</v-icon
            >Our Vision</strong
          ><br />
          Lorm Ipsum Dolor Sit Amitrd wafaf ewqf wfe wqwefg wfwe ew wafqeqewfqw
          ewqga qe qeqegwag wqenifq qeuib qeuifb wibu
        </p>
        <p style="margin-top:70px">
          <strong style="font-size:30px"
            ><v-icon
              style="font-size:25px;color:#40ABB8;border-color:#40ABB8;border:solid;padding:10px;border-radius:999px"
              >fa fa-dot-circle-o</v-icon
            >Target</strong
          ><br />
          Lorm Ipsum Dolor Sit Amitrd wafaf ewqf wfe wqwefg wfwe ew wafqeqewfqw
          ewqga qe qeqegwag wqenifq qeuib qeuifb wibu
        </p>
      </v-col>
      <v-col cols="1" />
      <v-col cols="5">
        <v-row>
          <v-img
            src="data:image/jpeg;base64,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"
            height="300px"
            style="margin-top:100px;border-top-left-radius:999px;border-bottom-left-radius:999px;"
          >
            <div
              style="width:100%;height:100%;background-image:linear-gradient(to right, red, blue);opacity:0.3"
            >
              <svg height="100" width="100"></svg>
            </div>
          </v-img>
        </v-row>
      </v-col>
      <v-col cols="1" />
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

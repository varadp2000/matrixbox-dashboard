<template>
  <div>
    <div v-show="!loading">
      <div
        style="height:75vh;background-color:black;opacity:0.9;background-position: center;
  background-repeat: no-repeat;
  background-size: cover;"
        class="hidesm"
      >
        <vue-particles
          color="#dedede"
          style="width:100%;height:100%;background-color:black;opacity:0.6"
        >
        </vue-particles>

        <v-img
          src="https://signalwealth.ai/images/slider/ai-brain.png"
          width="500px"
          style="position:absolute;top:100px;right:10%"
          data-aos="fade-left"
          data-aos-duration="1500"
        />
        <p
          data-aos="fade-right"
          data-aos-duration="1500"
          style="color:white;position:absolute;top:350px;left:10%"
        >
          <span style="font-size:50px;font-weight:bold">MATRIXBOX</span><br />
          Delivered With Secure Layers
        </p>
        <div
          style="background-color:#F8A555;width:50%;height:600px;margin-left:50%;"
        >
          <svg
            style="margin-top:50px;margin-left:-300px"
            height="100"
            width="100"
          >
            <circle cx="50" cy="50" r="40" fill="#16656D"></circle>
          </svg>
          <svg style="margin-top:50px" height="100" width="100">
            <circle cx="50" cy="50" r="40" fill="#16656D"></circle>
          </svg>
          <svg style="margin-top:50px" height="100" width="100">
            <circle cx="50" cy="50" r="40" fill="#16656D"></circle>
          </svg>
          <svg style="margin-top:50px" height="100" width="100">
            <circle cx="50" cy="50" r="40" fill="white"></circle>
          </svg>
          <svg style="margin-top:50px" height="100" width="100">
            <circle cx="50" cy="50" r="40" fill="white"></circle>
          </svg>
          <svg style="margin-top:50px" height="100" width="100">
            <circle cx="50" cy="50" r="40" fill="white"></circle>
          </svg>
        </div>
      </div>

      <div style="margin-top:100px">
        <cardrow />
        <partner />
        <technologies />
        <testimonials />
      </div>
    </div>
  </div>
</template>

<script>
import cardrow from "./layout/cardrow";
import partner from "./layout/partner";
import technologies from "./layout/technologies";
import testimonials from "./layout/testimonials";
export default {
  components: {
    cardrow,
    partner,
    technologies,
    testimonials,
  },
};
</script>

<style scoped>
.bottomTriangle {
  border-left: 62px solid transparent;
  border-right: 62px solid transparent;
  border-bottom: 62px solid #6d0000;
  transform: rotate(135deg);
}
.hidesm {
  display: block;
}
@media and(max-width:600px) {
  .hidsm {
    display: none;
  }
}
</style>

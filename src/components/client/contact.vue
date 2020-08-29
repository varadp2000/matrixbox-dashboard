<template>
  <div id="About">
    <div id="ribbion">
      <p id="title">Contact us</p>
      <p id="context">
        Not experience optimum Gaming ? <br />
        We are here to Help you with Anything you need
      </p>
      <img
        src="https://images.unsplash.com/photo-1506422748879-887454f9cdff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        id="background"
      />
    </div>

    <!-- Hello -->

    <div id="columns">
      <div id="rows">
        <div id="row">
          <a href="tel:+919999999999" target="_blank">
            <img
              title="Contact Number"
              draggable="false"
              class="icon"
              src="@/assets/phone.png"
            />
          </a>
          <p>Just Give us a call at +91 70685 07001</p>
        </div>
        <div id="row">
          <a
            href="https://api.whatsapp.com/send?phone=+917068507001"
            target="_blank"
            ><img
              title="Whatsapp"
              draggable="false"
              class="icon2"
              src="@/assets/whatsapp.png"
          /></a>
          <p>For any Query or Issue ping us at our Whatsapp Number</p>
        </div>
        <div id="row">
          <div class="icon3 flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img draggable="false" class="icon3" src="@/assets/map.png" />
                <p>To reach us out.</p>
              </div>
              <div class="flip-card-back">
                <iframe
                  class="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.175539349539!2d77.36355711553793!3d28.624500582420996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45c02adce33%3A0x9c29fed45319b390!2sHack%20Planet%20Technologies%20(P)%20Ltd.!5e0!3m2!1sen!2sin!4v1598255008909!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hello -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#About {
  cursor: default;
  background-color: #f6f6f6;
  #ribbion {
    background: linear-gradient(
      to bottom,
      #0b0704,
      #140f0a,
      #1a140f,
      #201913,
      #261d16
    );
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column;
    width: 100vw;
    height: 40em;
    #background {
      position: absolute;
      opacity: 0.15;
      width: 100vw;
      height: 40em;
    }
    #title {
      color: #ffe5b4;
      font-size: 4em;
      font-weight: 600;
    }
    #context {
      color: #f6f6f6;
      font-size: 2em;
      font-weight: 550;
    }
  }
  #columns {
    display: flex;
    flex-flow: column;
    color: #303030;
    height: 40em;
    background-color: #f0f0f0;
    align-items: center;
    justify-content: center;
    #rows {
      display: flex;
      #row {
        height: 30em;
        width: 30em;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;
        background-color: #e0e0e0;
        margin: 3em 2em;
        transition: all 0.6s;
        &:hover {
          background-color: #d0d0d0;
          box-shadow: 10px 10px 5px 0px #e0e0e0;
        }
        img {
          cursor: pointer;
          height: 10em;
        }
        p {
          font-size: 20px;
          color: #303030;
        }
        .map {
          display: none;
        }
        .icon3:hover .map {
          display: block;
        }
      }
    }
  }
}

.flip-card {
  background-color: transparent;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: auto;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}
</style>

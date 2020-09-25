<template>
  <div id="About" style="padding-top:100px">
    <!-- Hello -->

    <!-- Hello -->
    <v-container>
      <div class="know">
        <p class="p1" style="text-align:center">KNOW ABOUT US</p>
        <hr />
        <p class="p2">
          At the MatrixBox, our goal is to deliver our customers' packages
          swiftly and securely, at an excellent price. We pride ourselves on
          offering exceptional standards of service and going the extra mile for
          our customers.
          <br /><br />

          Our range of courier services include Same Day delivery for when
          you're in a hurry, we have a base in Lucknow. call us today to talk
          through your parcel delivery needs with one of our friendly team. They
          will take the time to offer you the ideal logistics solution for you
          and your business.
        </p>
      </div>
    </v-container>
    <!-- Hello -->
    <!--
    <div id="columns">
      <h1 id="title">What We Provide</h1>
      <div id="rows">
        <div id="row">
          <img draggable="false" class="icon" src="@/assets/play.png" />
          <p>Available In Many Platforms & Free to Play</p>
        </div>
        <div id="row">
          <img draggable="false" class="icon2" src="@/assets/controller.png" />
          <p>Best Third Person Play Experience</p>
        </div>
        <div id="row">
          <img draggable="false" class="icon3" src="@/assets/multiplayer.png" />
          <p>Multiplayer Best Game</p>
        </div>
      </div>
    </div>
    -->
    <!-- Hello -->

    <div class="slanted">
      <div class="shape">
        <h3>
          Our range of courier services include Same Day delivery for when
          you're in a hurry, we have a base in Lucknow. call us today to talk
          through your parcel delivery needs with one of our friendly team. They
          will take the time to offer you the ideal logistics solution for you
          and your business
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#About {
  cursor: default;
  background-color: #f0f0f0;
  display: block;
  #temp {
    background-color: #f0f0f0;
    display: flex;
    height: 26em;
    .helo {
      content: "";
      position: absolute;
      top: 4.5em;
      left: 0em;
      width: 99vw;
      height: 26em;
      background-image: linear-gradient(
        to bottom,
        #0b0704,
        #140f0a,
        #1a140f,
        #201913,
        #261d16
      );
      -webkit-transform-origin: 100% 0;
      -ms-transform-origin: 100% 0;
      transform-origin: 100% 0;
      -webkit-transform: skew(-45deg);
      -ms-transform: skew(-45deg);
      transform: skew(-45deg);
      #background {
        width: 100%;
        height: 100%;
        opacity: 0.4;
      }
      #text {
        display: flex;
        position: absolute;
        color: white;
        bottom: 3em;
        left: 15em;
        font-display: block;
        -webkit-transform: skew(45deg);
        -ms-transform: skew(45deg);
        transform: skew(45deg);
        flex-flow: column;
        font-size: 2.5em;
        #row {
          display: flex;
          justify-content: space-between;
          .small {
            font-size: 0.6em;
            color: #ffe5b4;
          }
          .p1 {
            color: #f6f6f6;
          }
          .p2 {
            margin-left: 0.3em;
            margin-right: 0.3em;
            color: #ffe5b4;
          }
        }
      }
    }
    .logo {
      position: absolute;
      height: 20em;
      width: 35em;
      top: 10em;
      right: 0em;
      transform: translateZ(100degx);
      z-index: 200;
    }
  }
  .know {
    height: 25em;
    background-color: #f0f0f0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    color: #303030;
    .p1 {
      font-size: 2em;
      font-family: monospace;
      font-weight: 600;
    }
    hr {
      width: 4em;
      height: 0.14em;
      margin-top: 2em;
      margin-bottom: 2em;
      margin-left: auto;
      margin-right: auto;
      color: #303030;
      background-color: #303030;
    }
    .p2 {
      font-size: 1.5em;
    }
  }

  //

  #slide {
    background-color: #303030;
    display: flex;
    justify-content: center;
    height: 40em;
    overflow: hidden;
    #left {
      width: 90em;
      color: #ffe5b4;
      display: flex;
      align-items: center;
      letter-spacing: 0.1em;
      line-height: 2em;
    }
    #right {
      width: 60em;
      transform: skew(-20deg);
      background: url("https://upload.wikimedia.org/wikipedia/commons/e/e7/The_Banner_Saga_combat_screenshot.jpg")
        50% 50%;
    }
  }

  //

  #columns {
    display: flex;
    flex-flow: column;
    color: #303030;
    height: 40em;
    background-color: #f0f0f0;
    align-items: center;
    justify-content: center;
    #title {
      font-size: 2em;
      font-family: monospace;
      font-weight: 600;
    }
    #rows {
      display: flex;
      #row {
        height: 30em;
        width: 20em;
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
          height: 10em;
        }
        p {
          font-size: 2em;
          color: #303030;
        }
      }
    }
  }
  .slanted {
    background: no-repeat
      url("https://images.ctfassets.net/hrltx12pl8hq/3TDofoEgZPCt3qpncet5bm/0a2f0a3858b94f64dc5d5a8bfd07056d/compressed_shutterstock_626223680.jpg?fit=fill&w=800&h=300")
      fixed;

    background-size: 100% 103%;
    box-sizing: border-box;
    height: 30em;
    width: 100%;
    position: relative;
    padding: 20px;
    display: flex;
    .shape {
      background: orange;
      opacity: 0.8;
      height: 30em;
      width: 75em;
      position: relative;
      bottom: 1.5em;
      left: -1.5em;
      h3 {
        position: relative;
        top: 10em;
        color: white;
        text-align: center;
        margin-left: 30px;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
    .shape::before {
      position: absolute;
      background: orange none repeat scroll 0 0;
      content: "";
      height: 30em;
      right: -10em;
      transform: skew(-20deg);
      width: 20em;
    }
  }

  .slanted:before {
    content: "";
    height: 40px;
    transform: skewY(2deg);
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .slanted:after {
    content: "";
    height: 50px;
    transform: skewY(1deg);
    position: absolute;
    background-color: orange;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .slanted:before {
    top: -20px;
  }

  .slanted:after {
    bottom: -30px;
  }
}
</style>

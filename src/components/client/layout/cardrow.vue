<template>
  <div style="margin-bottom:50px">
    <v-row style="height:500px;background-color:lightgrey;padding-top:100px">
      <v-col cols="1" />
      <v-col cols="3" style="">
        <p style="color:purple">#TRANSFORMINGBUISNESS</p>
        <h1>
          Our CIA Policy<br />
          Thousands of Happy Customers
        </h1></v-col
      >
      <v-col cols="7"> <br /><br /> </v-col>
      <v-col cols="1" />
      <v-row>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="https://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/flipbox1.jpg"
                alt="Avatar"
                style="width:100%;height:100%;"
              />
              <h2 style="position:absolute;top:50%;left:20%;color:white">
                CONFIDENTIALITY
              </h2>
            </div>
            <div
              class="flip-card-back"
              style="text-align:left;font-size:20px;padding:30px;padding-top:100px"
              s
            >
              <p>
                Matrixbox works with trustworthy employees for safety and
                confidentiality for customers packages and valuable information.
              </p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="https://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/flipbox2.jpg"
                alt="Avatar"
                style="width:100%;height:100%;"
              />
              <h2 style="position:absolute;top:50%;left:35%;color:white">
                INTEGRITY
              </h2>
            </div>
            <div
              class="flip-card-back"
              style="text-align:left;font-size:20px;padding:30px;padding-top:100px"
            >
              <p>
                Matrixbox have all the records of employees on employee’s
                database for safety from any unpleasant accident.
              </p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <v-img
                src="https://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/flipbox3.jpg"
                alt="Avatar"
                style="width:100%;height:100%;"
              >
                <h2 style="position:absolute;top:50%;left:30%;color:white">
                  AVAILABILITY
                </h2>
              </v-img>
            </div>
            <div
              style="text-align:left;font-size:20px;padding:30px;padding-top:100px"
              class="flip-card-back"
            >
              <p>
                Matrixbox create database of packages for further records of
                customers.
              </p>
            </div>
          </div>
        </div>
      </v-row>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.flip-card {
  background-color: transparent;
  width: 400px;
  height: 300px;
  border: 1px solid #f1f1f1;
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

/* Style the back side */
.flip-card-back {
  background-color: #16656D;
  color: white;
  transform: rotateY(180deg);
}
</style>

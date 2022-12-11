<template>
<div class="homepage_info_container">
  <div class="text_container">
      <div class="column">
          <p id="what_we_do"> What we do </p>
          <h1> SHAPING THE <br> WFH LANDSCAPE </h1>
          <p id="main_para">
            At Remotely, we are redefining teleworking to embrace a new world that is evolving. We are creating a world where employees don’t need to live expensively beside their offices, where students can choose to study from anywhere they want and where entrepreneurs can build their empires from any city they choose. The future of work and study is not going to be bound by location, but rather embraced by it.
          </p>
      </div>
      <div class="column">
          <img :src="OfficeCartoons">
      </div>
  </div>
</div>
</template>

<script>
import OfficeCartoons from '@/assets/workfromanywhere2.svg';

export default {
  name: 'HomePageWhatWeDo',
  data () {
    return {
      OfficeCartoons: OfficeCartoons,
    };
  }
}
</script>

<style>
.homepage_info_container {
  height: 400px;
  background-color: #ededed;
}

.homepage_info_container .text_container {
    height:100%;
    width: 750px;
    margin: 0 auto;
    margin-top: 20px;
}

.homepage_info_container .text_container p {
    text-align: left;
}

.homepage_info_container .text_container #what_we_do {
    font-size: 25px;
    font-family: Avenir;
    color: #7600ED;
    margin-top: 10px;
    margin-bottom: 20px;
}

.homepage_info_container .text_container h1 {
    text-align: left;
    font-size: 30px;
    margin-top: -10px;
    line-height: 1.0;
}

.homepage_info_container .column {
  float: left;
  width: 50%;
  margin-top:20px;
}

.homepage_info_container .column img {
    margin-top: 15px;
    width: 353px;
    margin-left: 75px;
}

</style>
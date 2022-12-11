<template>

    <div class="ratingstars">
        <h1>Rate your reservation at</h1>
        <h1 class= "reservelocation"> 200 University Ave.<br>Jan 30th, 2021</h1>
        <div class="stars">
            <form action="">
            <input class="star star-1" id="star-1-2" type="radio" name="star"/>
            <label class="star star-1" for="star-1-2"></label>
            <input class="star star-2" id="star-2-2" type="radio" name="star"/>
            <label class="star star-2" for="star-2-2"></label>
            <input class="star star-3" id="star-3-2" type="radio" name="star"/>
            <label class="star star-3" for="star-3-2"></label>
            <input class="star star-4" id="star-4-2" type="radio" name="star"/>
            <label class="star star-4" for="star-4-2"></label>
            <input class="star star-5" id="star-5-2" type="radio" name="star"/>
            <label class="star star-5" for="star-5-2"></label>
            <div class="rev-box">
                <textarea class="review" col="30" name="review" placeholder="Write a review.."></textarea>
            </div>
            </form>
        </div>
        <button class="circular_button purple_button">Submit Review</button>
    </div>

</template>

<script>
</script>

<style>

.reservelocation {
    margin-top:20px;
    font-size:32px;
}

.ratingstars{
  width: 93%;
  max-width: 500px;
  text-align: center;
  margin: 4% auto;
  padding: 30px 0;
  overflow: hidden;
}

div.stars{
  width: 333px;
  display: inline-block;
}

input.star{
  display: none;
}

label.star {
  float: right;
  padding: 10px;
  font-size: 50px;
  color: #444;
  transition: all .2s;
}

input.star:checked ~ label.star:before {
  content:'\f005';
  color: #7600ED;
  transition: all .25s;
}


input.star-5:checked ~ label.star:before {
  color: #7600ED;
}

input.star-1:checked ~ label.star:before {
  color: #7600ED;
}

label.star:hover{
  transform: rotate(-15deg) scale(1.3);
}

label.star:before{
  content:'\f006';
  font-family: FontAwesome;
}

.rev-box{
  overflow: hidden;
  height: 0;
  width: 100%;
  transition: all .25s;
}

textarea.review{
  background: #ffffff;
  border: 2px solid #7600ED;
  width: 100%;
  max-width: 100%;
  height: 300px;
  padding: 10px;
  box-sizing: border-box;
  color: black;
  font-family: Avenir;
}

label.review{
  display: block;
  transition:opacity .25s;
}

input.star:checked ~ .rev-box{
  height: 125px;
  overflow: visible;
}

.ratingstars button {
    border: none;
    color: white;
    border-radius: 20%;
    background-color: #7600ED;
    width: 300px;
    font-size: 20px;
    height: 50px;
    border-radius: 25px;
    margin-top: 9px;
    font-family:Avenir;
}

</style>
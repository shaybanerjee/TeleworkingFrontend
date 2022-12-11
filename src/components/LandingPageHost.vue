<template>
    <div class="landing_page_host">
        <div class="top_section">
            <div class="column">
                <div class = "intro">
                    <div class="column">
                        <img src="../assets/sample_host_picture.jpg" class= "host_headshot">
                    </div>
                    <div class="column">
                        <p> Hi, my name is Aida and I'll be your host. It's a paragraph. Click here to add your own test and edit me. It's easy. HOST DETAILS </p>
                    </div>
                </div>
                <h3 id="address"> 200 University Avenue, Waterloo ON </h3>
                <p id="host_details"> I'm a paragraph. Click here to add your own text and edit me. It's easy.
                    I'm a paragraph. Click here to add your own text and edit me. It's easy.
                    OFFICE DETAILS. I'm Click here to add your own text and edit. OFFICE DETAILS
                </p>
                <h3 id="title"> Video Tour </h3>
                <iframe width="460" height="250" src="https://www.youtube.com/embed/E-EW8JXRBM4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3 id="title"> Ameneties </h3>
                <ul class="tags">
                    <li class="tag"> Wifi </li>
                    <li class="tag"> Outlet </li>
                    <li class="tag"> Monitor </li>
                    <li class="tag"> Air Conditioning </li>
                    <li class="tag"> Complimentary Coffee </li>
                    <li class="tag"> Near Windows </li>
                    <li class="tag"> Parking </li>
                    <li class="tag"> Wheel Chair Access </li>
                    <li class="tag"> Elavator </li>
                    <li class="tag"> Adjustable Seating </li>
                </ul>
            </div>

            <div class="column dates_and_checkout">
                <img id="calender" src="../assets/calender.png">
                <div class="column">
                    <form>
                        <input class="date_inputs" placeholder="From">
                    </form>
                </div>
                <div class="column">
                    <form>
                        <input class="date_inputs" placeholder="To" style="margin-left: -63px;">
                    </form>
                </div>
                <div class="payment_info">
                    <div>
                        <div class="column" style="width:40%; margin-left:10%;">
                            Reservation
                        </div>
                        <div class="column">
                            $43.23
                        </div>
                    </div>
                    <div>
                        <div class="column" style="width:40%; margin-left:10%;">
                            Service Fee
                        </div>
                        <div class="column">
                            $4
                        </div>
                    </div>
                    <div>
                        <div class="column" style="width:40%; margin-left:10%;">
                            Taxes
                        </div>
                        <div class="column">
                            $2.50
                        </div>
                    </div>
                </div>
                <hr style="margin-top: 124px; width: 271px; color: black; margin: 124 auto auto 0;">
                <div>
                    <div>
                        <div class="column" style="width:40%; margin-left:10%;">
                            Total
                        </div>
                        <div class="column">
                            $49.73
                        </div>
                    </div>
                </div>
                <button class="circular_button purple_button reserve_seat">Reserve your seat</button>
            </div>
        </div>
        <div class="bottom_section">
            <h3 id="title"> Reviews </h3>
            <div class="rating">
                <div class="column">
                    <p id="customer_review"> Average Customer Rating </p>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    <div id="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        4/5
                    </div>
                </div>
                <div class="column">
                </div>
            </div>
             <div class="review_comments">
                <div>
                    <div class="reviewer_img">
                        <img src="../assets/sample_host_picture.jpg" class= "">
                    </div>
                    <div class="review_comment">
                        <b> <p class="date"> January 9th, 2021 </p> </b>
                        <p> I'm a paragraph. Click here to add your own text and edit me.
                            It's easy.I'm a paragraph. Click here to add your own text and
                            edit me. It's easy. REVIEWS. I'm Click here to add your own text
                            and edit. REVIEWS
                        </p>
                    </div>
                </div>
                <div>
                    <div class="reviewer_img">
                        <img src="../assets/sample_host_picture.jpg">
                    </div>
                    <div class="review_comment">
                        <b> <p class="date"> January 9th, 2021 </p> </b>
                        <p> I'm a paragraph. Click here to add your own text and edit me.
                            It's easy.I'm a paragraph. Click here to add your own text and
                            edit me. It's easy. REVIEWS. I'm Click here to add your own text
                            and edit. REVIEWS
                        </p>
                    </div>
                </div>
                <div>
                    <div class="reviewer_img">
                        <img src="../assets/sample_host_picture.jpg" class= "">
                    </div>
                    <div class="review_comment">
                        <b> <p class="date"> January 9th, 2021 </p> </b>
                        <p> I'm a paragraph. Click here to add your own text and edit me.
                            It's easy.I'm a paragraph. Click here to add your own text and
                            edit me. It's easy. REVIEWS. I'm Click here to add your own text
                            and edit. REVIEWS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

</script>

<style>
.landing_page_host {
    margin: 0 auto;
    width: 910px;
}

.landing_page_host .top_section {
    height: 863px;
}

#calender {
    width: 268px;
}

.payment_info {
    margin-top: 50px;
}

.landing_page_host .bottom_section #customer_review {
    margin-top:-1px;
    width: 50%;
    float: left;
    text-align: left;
}

.dates_and_checkout .date_inputs {
    border: none;
    border-bottom: 1.5px solid #7600ED;
    width: 110px;
    margin-left: 72px;
}

.dates_and_checkout .date_inputs::placeholder {
    color: #7600ED;
}


.landing_page_host .bottom_section .review_comments .reviewer_img {
    width: 10%;
    float:left;
}

.landing_page_host .bottom_section .review_comments .reviewer_img img {
    width: 90%;
    margin-top: 16px;
    border-radius: 50%;
}

.landing_page_host .bottom_section .review_comments .review_comment {
    padding-left: 3%;
    width: 85%;
    float:left;
}

.landing_page_host .bottom_section .review_comments {
    margin-top: 70px;
}

.landing_page_host .reserve_seat {
    border: none;
    color: white;
    border-radius: 20%;
    background-color: #7600ED;
    width: 144px;
    font-size: 12px;
    height: 28px;
    border-radius: 25px;
    margin-top: 14px;
}

.landing_page_host .bottom_section .review_comments p {
    text-align: left;
}

.landing_page_host .bottom_section #stars {
    text-align: right;
    float: left;
    width: 50%;
}

.landing_page_host .bottom_section .checked {
    color: #7600ED;
}

.landing_page_host .host_headshot {
    width: 160px;
    height: 160px;
    border-radius: 50%;
}

.landing_page_host .intro p {
    margin-top: 84px;
    text-align: left;
    margin-left: -15px;
}

.landing_page_host .column2 {
  float: left;
  width: 50%;
}

.landing_page_host #address {
    margin-top: 250px;
    text-align: left;
}

.landing_page_host #host_details {
    text-align: left;
}

.landing_page_host #title {
    text-align: left;
}

.tags {
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
}

.tags li {
  float: left;
  font-size:13px;
}

.tag {
  background: #2F4A69;
  color: white;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 5px 5px 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;
}
</style>
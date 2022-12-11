<template>
    <div class="bookings">

        <div class="bookingtitle">
            <h1>View your pending reservations below</h1>
            <img class="reservephoto" src="../assets/booking.svg" object-fit="cover" alt="Screen 3"/>
        </div>

        <div class="booking1">
            <img src="../assets/sample_host_picture.jpg" object-fit="cover" alt="Screen 3"/>
            <div>
                <h1>Elisabeth Tisdale</h1>
                <div id="stars">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    4/5
                </div>
            </div> 
            <div class="booking_details">
                    <h1>200 University Ave.<br>Seat #12</h1>
                    <h1>March 8th, 2021<br>9:00am to 5:00pm</h1>
            </div>
            <div class="price_details">
                    <h1>Total</h1>
                    <div class="line1"></div>
                    <h1>$23.45</h1>
            </div>
            <div class="accept_decline">
                <a href="#default"><h1 id="accept">Accept</h1></a>
                <a href="#default"><h1 id="decline">Decline</h1></a>
            </div>  
        </div>

        <div class="booking1">
            <img src="../assets/sample_host_picture.jpg" object-fit="cover" alt="Screen 3"/>
            <div class="namestar">
                <h1>Elisabeth Tisdale</h1>
                <div id="stars">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    4/5
                </div>
            </div> 
            <div class="booking_details">
                    <h1>200 University Ave.<br>Seat #12</h1>
                    <h1>March 8th, 2021<br>9:00am to 5:00pm</h1>
            </div>
            <div class="price_details">
                    <h1>Total</h1>
                    <div class="line1"></div>
                    <h1>$23.45</h1>
            </div>
            <div class="accept_decline">
                <a href="#default"><h1 id="accept">Accept</h1></a>
                <a href="#default"><h1 id="decline">Decline</h1></a>
            </div>  
        </div>

        <div class="booking1">
            <img src="../assets/sample_host_picture.jpg" object-fit="cover" alt="Screen 3"/>
            <div class="namestar">
                <h1>Elisabeth Tisdale</h1>
                <div id="stars">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    4/5
                </div>
            </div> 
            <div class="booking_details">
                    <h1>200 University Ave.<br>Seat #12</h1>
                    <h1>March 8th, 2021<br>9:00am to 5:00pm</h1>
            </div>
            <div class="price_details">
                    <h1>Total</h1>
                    <div class="line1"></div>
                    <h1>$23.45</h1>
            </div>
            <div class="accept_decline">
                <a href="#default"><h1 id="accept">Accept</h1></a>
                <a href="#default"><h1 id="decline">Decline</h1></a>
            </div>  
        </div>




    </div>
</template>

<script>
</script>

<style>

.bookingtitle {
    height: 170px;
    width: 950px;
    margin: 50px auto;
}

.booking1 img {
    max-height: 160px;
    max-width: 160px;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    border-radius: 50%;
    margin: auto;
    margin-left:10px;
}

.booking1 stars {
    float: left;
    width: 200px;
    padding: 40px 0;
    margin: 0 0 0 200px;
    float: left;
}


.bookingtitle h1 {
    text-align:left;
    margin:0px auto;
    font-size:35px;
    width:700px;
    float:left;
}

.booking1 {
    width:1000px;
    height:200px;
    position:relative;
    margin: 30px auto;
    border: 2px solid black;
    border-radius:40px;
}

.reservephoto {
    width:250px;
    float:left;
}

.booking1 h1 {
    font-size: 30px;
    max-width: 200px;

}

.namestar {
    float:left;
    margin-left:200px;
    margin-top:42px
}

.booking_details h1 {
    font-size:19px;
    text-align: center;
    padding: 10px 10px 10px 10px;
    margin-bottom:10px;
    border: 2px solid black;
    border-radius:20px;
}

.booking_details {
    float:left;
    margin-left:30px;
    margin-top:25px;
}

.price_details h1 {
    font-size:26px;
    text-align: center;
    padding: 10px 10px 5px 10px;
    margin-bottom:0px;
}

.price_details {
    float:left;
    margin-left:50px;
    margin-top:50px;
}
.price_details .line1 {
    border: 2px solid #7600ED;
}

.accept_decline {
    float:left;
    margin-left:35px;
    margin-top:36px
}

.accept_decline #accept {
    font-size:30px;
    border: 2px solid #7600ED;
    border-radius:20px;
    width: 150px;
    height: 50px;
    background-color:#7600ED;
    color:white;
    padding: 5px;
    margin-bottom:10px;
}

.accept_decline #decline {
    font-size:30px;
    border: 2px solid #7600ED;
    border-radius:20px;
    width:150px;
    height:50px;
    background-color:white;
    padding: 5px;
    margin-top:20px;
    color:#7600ED;
}

</style>

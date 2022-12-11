<template>
<div class="main_contact_container">
    <div class="contact_container">
        <div class="column col">
            <div class="contact_text">
                <h2 id="info"> More Info </h2>
                <ul>
                    <li> <a style="color:black;" href="/AboutUsPage"> About us </a> </li>
                    <li style="color:black;"> Legalities  </li>
                    <li style="color:black;"> privacy & terms </li>
                    <li style="color:black;"> Email: <a style="color:#7600ED" href="mailto:remotely.leads@gmail.com"> remotely.leads@gmail.com </a></li>
                </ul>
                <a href="/"> <p id="listings"> Back to top of homepage ↑ </p> </a>
            </div>
        </div>
        <div class="column">
            <div class="vue-tempalte">
                <form @submit.prevent="contactus" id="contact_form">
                    <h3> CONTACT US! </h3>
                    <div class="column">
                        <div class="form-group" style="margin-right:20px;">
                            <label>Enter Your Name</label>
                            <input id="name" type="name" v-model="name" class="form-control form-control-lg" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="form-group">
                            <label>Enter Your Email</label>
                            <input id="email" type="email" v-model="email" class="form-control form-control-lg" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Enter Your Message</label>
                        <textarea class="form-control" id="message" v-model="message" rows="3"></textarea>
                    </div>
                    <p v-if="Error" id="form-error" style="color: red;"> Please fill out the entire form. </p>
                    <button v-if="!Success && !InternalError" type="submit" class="btn btn-dark btn-lg btn-block"> Contact Our Agents Now! </button>
                    <p v-if="Success" id="form-error" style="color: #7600ED;"> <b> Thank you! <br> An agent will get back to you shortly.</b> </p>
                    <p v-if="InternalError" id="form-error" style="color: red;"> Internal Error - please contact remotely.leads@gmail.com for any inquiries. </p>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {Error: false, Success: false, InternalError: false}
        },
        methods: {
            contactus: function() {
                if ((typeof(this.name) === 'undefined' || this.name === null || this.name.trim() === "") || (typeof(this.email) === 'undefined' || this.email === null || this.email.trim() === "") || (typeof(this.message) === 'undefined' || this.message === null || this.message.trim() === ""))
                {
                    console.log("HEHRE");
                    this.Error = true;
                    return;
                }
                axios.post(`http://127.0.0.1:8000/contact_us`, {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }).then(response => {
                    this.Error = false;
                    this.InternalError = false;
                    this.Success = true;
                    console.log(response);
                }).catch(e => {
                    // display internal error
                    this.InternalError = true;
                    console.log(e);
                });
            }
        }
    }
</script>

<style>
.main_contact_container {
    height: 620px;
    background-color: #ededed;
}

.main_contact_container .contact_container {
    margin: 20px auto;
    width: 100%;
}

.main_contact_container .contact_container .col {
    width: 100%;
}

.main_contact_container .contact_container .contact_text {
    float: left;
    margin-top: 170px;
    width: 50%;
    text-align:right;
    padding-right: 70px;
}

.main_contact_container .contact_container div #info {
    margin-bottom: 2px;
    margin-top: 20px;
    color: #7600ED;

}

.main_contact_container .contact_container #rectangle {
    height: 385px;
    width: 355px;
    background:#121218;
    margin-bottom: 30px;
    margin-top: 50px;
}

.main_contact_container .contact_container #rectangle #email {
    margin-left: 15px;
}

.main_contact_container .contact_container #rectangle h1 {
    color: #7600ED;
    margin-left: 25px;
    margin-top: 35px;
}

.main_contact_container .contact_container #rectangle p {
    color: #7600ED;
    margin-left: 25px;
    font-size: 13px;
    margin-top: -10px;
    margin-bottom: 7px;
}

.main_contact_container .contact_container #rectangle #message {
    margin-top: 70px;
}

.main_contact_container .contact_container #rectangle #thanks {
    margin-top: 10px;
    text-align: center;
    margin-left: 15px;
}


.main_contact_container .contact_container #rectangle #input1 {
    height: 20px;
    width: 140px;
    margin-left: 25px;
}

.main_contact_container .contact_container #rectangle #input2 {
    height: 20px;
    width: 140px;
    margin-left: 0px;
    margin-top:-3px;
}

.main_contact_container .contact_container #rectangle #input3 {
    height: 100px;
    width: 301px;
    margin-left:12px;
}

.main_contact_container .contact_container #rectangle button {
    width: 310px;
    margin-left: 12px;
    height: 35px;
    margin-top: 10px;
    background-color: #7600ED;
    border: none;
}


.main_contact_container .contact_container div ul {
    list-style-type: none;
    padding-left: 0;
}

.main_contact_container .contact_container div #listings {
    color: #7600ED;
    font-size: 20px;
    margin-top: 44px;
}

.main_contact_container .contact_container #contact_form {
    padding-left: 34px;
    padding-right: 34px;
    background-color: #FAFAFB;
    float:left;
    width: 400px;
    margin-top: 20px;
}

.main_contact_container .contact_container #contact_form input {
    height: 35px;

}

.main_contact_container .contact_container .vue-tempalte {
    margin-top: 43px;
    padding: 40px 0;
}
</style>
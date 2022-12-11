<template>
    <div class="navbar_header">
      <a href="/" class="logo">
        <img src="../assets/remotely_logo2.png" style="width:225px;">
      </a>
      <div>
        <div v-if="isLoggedIn">
            <div :data-initials="initials" v-on:click="logout()"></div>
        </div>
        <div v-else>
          <div class="topnav-login">
          </div>
        </div>
      </div>
      <div class="topnav">
        <a href="AboutUsPage">About</a>
        <a class="active" href="/">Home</a>
      </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
          isLoggedIn: false,
          initials: "",
          first_name: "",
          last_name: "",
          role: ""
        }
    },
    methods: {
        refreshToken: function () {
            axios.post(`http://127.0.0.1:8000/token/refresh/`, {
                    "refresh": localStorage.getItem('refresh')
            }).then(response => {
                localStorage.setItem('refresh', response.data.refresh);
                localStorage.setItem('access', response.data.access);
            }).catch(e => {
                console.log(e);
            })
        },
        getInitials: function() {
          var first_name = localStorage.getItem('first_name');
          var last_name = localStorage.getItem('last_name');
          this.initials = first_name.charAt(0).toUpperCase() + last_name.charAt(0).toUpperCase();
        },
        logout: function () {
          localStorage.removeItem('refresh');
          localStorage.removeItem('access');
          localStorage.removeItem('user_id');
          localStorage.removeItem('first_name');
          localStorage.removeItem('last_name');
          this.isLoggedIn = false;
        },
        loggedIn: function() {
        var accessToken = localStorage.getItem('access');
        this.isLoggedIn = accessToken != null
        if (this.isLoggedIn) {
          this.getInitials();
        }
      }
    },
    beforeMount() {
      this.refreshToken();
    },
    mounted() {
      this.loggedIn();
    }
}
</script>



<style>
/* Style the navbar, .navbar_header encapuslates the entire navbar */
.navbar_header {
  overflow: hidden;
  background-color: white;
  padding: 10px 20px;
  text-align:centre;
  margin: 0 auto;
}

.navbar_header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.navbar_header a.logo {
  font-size: 32px;
  font-weight: bold;
  color:#2F4A69
}

/* Style the links inside the navigation bar */
.navbar_header .topnav a {
  float: right;
  margin: auto;
  color: #666666;
  text-align: center;
  padding: 16px 16px;
  text-decoration: none;
  font-size: 17px;
  font:Avenir;
}

.navbar_header .topnav-login a {
  float: right;
  margin: auto;
  background-color:#7600ED;
  color: white;
  text-align: center;
  padding: 10px 15px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 25px;
  border: 2px solid white;
}

.navbar_header .topnav-login a:hover {
  background-color: #7a49a5;
}

.navbar_header .topnav-login a:active {
  background-color: #7a49a5;
  box-shadow: 0 2px #666;
  transform: translateY(2px);
}

.navbar_header .topnav-signup a {
  float: right;
  margin: auto;
  background-color:white;
  color: #7600ED;
  text-align: center;
  padding: 8px 10px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 25px;
  border: 2px solid #7600ED;
}

/* Change the color of links on hover */
.navbar_header .topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.navbar_header .topnav a.active {
  color: #7600ED;
}

.navbar_header

[data-initials]:before {
background: #7600ED;
color: white;
opacity: 1;
content: attr(data-initials);
display: inline-block;
font-weight: bold;
border-radius: 50%;
vertical-align: middle;
margin-right: 0.5em;
margin-top: 5px;
width: 40px;
height: 40px;
line-height: 40px;
text-align: center;
float: right;
cursor: pointer;
}




</style>


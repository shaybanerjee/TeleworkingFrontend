<template>
    <div class="vue-tempalte">
        <form @submit.prevent="login">
            <h3>Host Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input id="email" type="email" v-model="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input id="password" type="password" v-model="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>

            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>

        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {}
        },
        methods: {
            login: function() {
                axios.get(`http://127.0.0.1:8000/login_user`, {
                    params: {"user_name": this.email, "password": this.password}
                }).then(response => {
                    console.log("SUCCESS");
                    console.log(response);
                    localStorage.setItem('user_id', response.data.id);
                    localStorage.setItem('first_name', response.data.first_name);
                    localStorage.setItem('last_name', response.data.last_name);

                    axios.post(`http://127.0.0.1:8000/token/`, {
                        username: this.email,
                        password: this.password
                    }).then(response => {
                        console.log(response);
                        localStorage.setItem('refresh', response.data.refresh);
                        localStorage.setItem('access', response.data.access);
                        this.$router.push({ path : '/' });
                    }).catch(e => {
                        console.log("here");
                        console.log("FAILURE");
                        console.log(e);
                    })
                }).catch(e => {
                    console.log("FAILURE");
                    console.log(e);
                })

            }
        }
    }
</script>
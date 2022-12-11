<template>
    <div class="vue-tempalte">
            <form @submit.prevent="handleSignUp">
                <h3>Host Sign Up</h3>

                <div class="form-group">
                    <label>First Name</label>
                    <input id="first_name" v-model="first_name" type="text" class="form-control form-control-lg"/>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input id="last_name" v-model="last_name" type="text" class="form-control form-control-lg"/>
                </div>


                <div class="form-group">
                    <label>Email address</label>
                    <input id="email_address" v-model="email_address" type="email" class="form-control form-control-lg" />
                </div>

                <div class="form-group">
                    <label>Company</label>
                    <input id="company" v-model="company" type="text" class="form-control form-control-lg" />
                </div>

                <div class="form-group">
                    <label>City</label>
                    <input id="city" v-model="city" type="text" class="form-control form-control-lg" />
                </div>

                <div class="form-group">
                    <label>Country</label>
                    <select id="country" v-model="country" class="custom-select form-control">
                        <option selected>Select Country</option>
                        <option value="Canada">Canada</option>
                        <option value="United States">United States</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Germany">Germany</option>
                        <option value="England">England</option>
                        <option value="Russia">Russia</option>
                        <option value="Portugal">Portugal</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Profile Picture</label>
                    <input type="file" class="form-control form-control-lg" id="customFile" />
                </div>

                <div class="form-group">
                    <label>Phone Number</label>
                    <input id="phone_number" v-model="phone_number" type="text" class="form-control form-control-lg" />
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input id="password" v-model="password" type="password" class="form-control form-control-lg" />
                </div>

                <div class="form-group">
                    <label>Verify Password</label>
                    <input id="verify_password" v-model="verified_password" type="password" class="form-control form-control-lg" />
                </div>

                <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

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
            handleSignUp: function () {

                console.log(this.email_address);
                console.log(this.first_name);
                console.log(this.last_name);
                console.log(this.password);
                console.log(this.company);
                console.log(this.city);
                console.log(this.country);
                console.log(this.phone_number);


                axios.post(`http://127.0.0.1:8000/create_user`, {
                        "date_of_birth": "1998-04-19",
                        "email": this.email_address,
                        "first_name": this.first_name,
                        "last_name": this.last_name,
                        "gender": "1",
                        "password": this.password,
                        "company": this.company,
                        "city": this.city,
                        "country": this.country,
                        "profile_picture": null,
                        "is_verified": "False",
                        "phone_number": this.phone_number
                }).then(response => {
                    console.log("SUCCESS");
                    console.log(response);
                    localStorage.setItem('user_id', response.data.id);
                    localStorage.setItem('first_name', response.data.first_name);
                    localStorage.setItem('last_name', response.data.last_name);

                    axios.post(`http://127.0.0.1:8000/token/`, {
                        username: this.email_address,
                        password: this.password
                    }).then(response => {
                        console.log(response);
                        localStorage.setItem('refresh', response.data.refresh);
                        localStorage.setItem('access', response.data.access);
                        this.$router.push({ path : '/' });
                    }).catch(e => {
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
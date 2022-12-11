import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import SearchPage from '@/views/SearchPage.vue';
import HomePage from '@/views/HomePage.vue';
import AboutUsPage from '@/views/AboutUsPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import ForgotPasswordPage from '@/views/ForgotPasswordPage.vue';
import RateReservationPage from '@/views/RateReservationPage.vue';
import ViewBookingsPage from '@/views/ViewBookingsPage.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomePage,
            name: 'HomePage',
        },
        {
            path: '/RateReservationPage',
            component: RateReservationPage,
            name: 'RateReservationPage',
        },
        {
            path: '/ViewBookingsPage',
            component: ViewBookingsPage,
            name: 'ViewBookingsPage',
        },
        {
            path: '/LandingPage',
            component: LandingPage,
            name: 'LandingPage',
        },
        {
            path: '/SearchPage',
            component: SearchPage,
            name: 'SearchPage',
        },
        {
            path: '/AboutUsPage',
            component: AboutUsPage,
            name: 'AboutUsPage',
        },
        {
            path: '/SignUpPage',
            component: SignUpPage,
            name: 'SignUpPage',
        },
        {
            path: '/LoginPage',
            component: LoginPage,
            name: 'LoginPage',
        },
        {
            path: '/ForgotPasswordPage',
            component: ForgotPasswordPage,
            name: 'ForgotPasswordPage',
        },
    ],
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});

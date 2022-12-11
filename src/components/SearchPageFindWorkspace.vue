<template>
    <div class="FindWorkspace">
        <div class="search column">
            <h1> Find Your <br> Workspace </h1>
            <vue-google-autocomplete
                ref="address"
                id="map"
                classname="form-control"
                placeholder="Enter the city"
                v-on:placechanged="getAddressData"
                country="ca"
                types="(cities)"
                style="width: 250px;">
            </vue-google-autocomplete>
            <date-picker v-model="range" lang="en" range type="date" format="YYYY-MM-DD" style="float:left;" width="209 !important" placeholder="Pick a date"></date-picker>
            <button class="circular_button purple_button" style="margin-left:10px;">Search</button>
            <div>
                <GmapMap
                :center="{lat:45.421532, lng:-75.697189}"
                :zoom="12"
                map-type-id="terrain"
                style="width: 98%; height: 700px; margin-top: 60px;"
                >
                <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                />
                </GmapMap>
            </div>
        </div>
        <div class="column" style="float:left; width: 45%; margin-top: 112px; max-height:700px; overflow-y:scroll;">
            <h3> Listing spaces in Ottawa, Ontario </h3>
            <div class="space_card" style="height: 150px; margin-top: 19px; border-radius: 5px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                <div class="img" style="width: 20%; float:left;">
                    <img src="../assets/office_image1.jpg" alt="Cinque Terre" width="160" height="110"  style=" width:130px; margin-top: 21px; margin-left:16px; border-radius: 5px;">
                </div>
                <div class="description" style="float: left; width: 60%; margin: 0 auto;">
                        <p style="text-align: left; padding-top: 16px; margin-left: 22px; margin-bottom: 0px;"> <a href="" style="color:#7600ED;"> <b> Desk in quiet office, situated near train station... </b></a> </p>

                        <p style="text-align: left; margin-left: 22px; margin-bottom: 0px; font-size: 12px;"> <b> 6892 AppleSize Cres., Ontario, K4O 9JK </b></p>

                        <p style="text-align: left; font-size:12px; margin-left: 22px; margin-bottom: 0px; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </div>
                <div class="pricedetails" style="margin-top: 17px; width: 20%; float:right;">
                    <p> <b> $17 / hour </b></p>
                    <button style="margin-left:14px;" class="circular_button purple_button">View Details</button>
                </div>
            </div>
            <div class="space_card" style="height: 150px; margin-top: 19px; border-radius: 5px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                <div class="img" style="width: 20%; float:left;">
                    <img src="../assets/office_image1.jpg" alt="Cinque Terre" width="160" height="110"  style=" width:130px; margin-top: 21px; margin-left:16px; border-radius: 5px;">
                </div>
                <div class="description" style="float: left; width: 60%; margin: 0 auto;">
                        <p style="text-align: left; padding-top: 16px; margin-left: 22px; margin-bottom: 0px;"> <a href="" style="color:#7600ED;"> <b> Desk in quiet office, situated near train station... </b></a> </p>

                        <p style="text-align: left; margin-left: 22px; margin-bottom: 0px; font-size: 12px;"> <b> 6892 AppleSize Cres., Ontario, K4O 9JK </b></p>

                        <p style="text-align: left; font-size:12px; margin-left: 22px; margin-bottom: 0px; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </div>
                <div class="pricedetails" style="margin-top: 17px; width: 20%; float:right;">
                    <p> <b> $17 / hour </b></p>
                    <button style="margin-left:14px;" class="circular_button purple_button">View Details</button>
                </div>
            </div>
                        <div class="space_card" style="height: 150px; margin-top: 19px; border-radius: 5px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                <div class="img" style="width: 20%; float:left;">
                    <img src="../assets/office_image1.jpg" alt="Cinque Terre" width="160" height="110"  style=" width:130px; margin-top: 21px; margin-left:16px; border-radius: 5px;">
                </div>
                <div class="description" style="float: left; width: 60%; margin: 0 auto;">
                        <p style="text-align: left; padding-top: 16px; margin-left: 22px; margin-bottom: 0px;"> <a href="" style="color:#7600ED;"> <b> Desk in quiet office, situated near train station... </b></a> </p>

                        <p style="text-align: left; margin-left: 22px; margin-bottom: 0px; font-size: 12px;"> <b> 6892 AppleSize Cres., Ontario, K4O 9JK </b></p>

                        <p style="text-align: left; font-size:12px; margin-left: 22px; margin-bottom: 0px; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </div>
                <div class="pricedetails" style="margin-top: 17px; width: 20%; float:right;">
                    <p> <b> $17 / hour </b></p>
                    <button style="margin-left:14px;" class="circular_button purple_button">View Details</button>
                </div>
            </div>
            <div class="space_card" style="height: 150px; margin-top: 19px; border-radius: 5px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                <div class="img" style="width: 20%; float:left;">
                    <img src="../assets/office_image1.jpg" alt="Cinque Terre" width="160" height="110"  style=" width:130px; margin-top: 21px; margin-left:16px; border-radius: 5px;">
                </div>
                <div class="description" style="float: left; width: 60%; margin: 0 auto;">
                        <p style="text-align: left; padding-top: 16px; margin-left: 22px; margin-bottom: 0px;"> <a href="" style="color:#7600ED;"> <b> Desk in quiet office, situated near train station... </b></a> </p>

                        <p style="text-align: left; margin-left: 22px; margin-bottom: 0px; font-size: 12px;"> <b> 6892 AppleSize Cres., Ontario, K4O 9JK </b></p>

                        <p style="text-align: left; font-size:12px; margin-left: 22px; margin-bottom: 0px; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </div>
                <div class="pricedetails" style="margin-top: 17px; width: 20%; float:right;">
                    <p> <b> $17 / hour </b></p>
                    <button style="margin-left:14px;" class="circular_button purple_button">View Details</button>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import VueGoogleAutocomplete from 'vue-google-autocomplete'
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';

    export default {
        components: { VueGoogleAutocomplete, DatePicker },

        data: function () {
            return {
              address: '',
              datetime: '',
              range:''
            }
        },

        mounted() {
            // To demonstrate functionality of exposed component functions
            // Here we make focus on the user input
            this.$refs.address.focus();
        },

        methods: {
            /**
            * When the location found
            * @param {Object} addressData Data of the found location
            * @param {Object} placeResultData PlaceResult object
            * @param {String} id Input container ID
            */
            // eslint-disable-next-line no-unused-vars
            getAddressData: function (addressData, placeResultData, id) {
                this.address = addressData;
            }
        }
    }
</script>

<style>

.FindWorkspace .search
{
    margin-top:10px;
    float:left;
    margin-left: 40px;
}
.FindWorkspace .search h1
{
    text-align: left;
}

.FindWorkspace .search input
{
    float: left;
    margin-right: 10px;
    height: 30px;
}

.mx-icon-calendar {
    display: none;
}

.mx-datepicker-range
{
    width:200px;
}

.mx-calendar-content .cell.active {
    background-color: #7600ED;
}

.mx-calendar-content .cell.in-range, .mx-calendar-content .cell.hover-in-range
{
    background-color: #e5dbfb;
}

.vue-map-container .vue-map {
    border-radius: 5px;
}

.FindWorkspace button
{
    float: left;
    border: none;
    color: white;
    border-radius: 20%;
    background-color: #7600ED;
    width: 100px;
    box-shadow:5px 5px 5px #888888;
    font-size: 12px;
    height: 28px;
    border-radius: 25px;
}

.FindWorkspace button:active {
    box-shadow: 4px 4px 4px #666666;
}
</style>

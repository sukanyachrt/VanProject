<template>
    <div>

        <!-- <b-row class="text-center">
            <b-col cols="12">
                <div class="text-center">
                    <h1><b>ข้อมูลรายการรถบรรทุก</b></h1>
                    <h5>จำนวน 10 รายการ</h5>
                    <hr>
                </div>
            </b-col>
        </b-row> -->
        <div class="wrapper">
            <h2 class="mb-4">ข้อมูลรายการรถบรรทุก จำนวน 10 รายการ</h2>
            <div class="col-md-6 col-lg-6 mb-4">
                <router-link to="/vans/create">
                    <b-button block variant="info">
                        <i class="fa fa-check-square-o">เพิ่มข้อมูลรถ</i> </b-button>
                </router-link>

            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="card mx-30">
                            <img src="https://i.postimg.cc/mgKqKwcf/2.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">
                                    ป้ายทะเบียนรถ : คษท 86</h5>
                                <h6>
                                    ยี่ห้อรถ : testdddd</h6>

                                <h6>
                                    ราคา : 1000000</h6>
                                <p class="card-text">
                                    รายละเอียด : ipsum dolor sit amet, consectetur adipisicing.</p>

                            </div>
                            <div class="card-footer bg-white border-info text-center">

                                <a href="#" @click="dataVans('Detail', 1)" class="badge badge-success badge-sm"><i
                                        class="fa fa-search">ดูรายละเอียด</i> </a>
                                <a href="#" @click="dataVans('Edit', 1)" class="text-white badge badge-warning badge-sm"><i
                                        class="fa fa-check-square-o">
                                        แก้ไขรายการ</i></a>
                                <a href="#" @click="dataVans('Del', 1)" class="badge badge-danger badge-sm"><i
                                        class="fa fa-times">ลบรายการนี้ </i></a>

                            </div>

                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="card mx-30">
                            <img src="https://i.postimg.cc/WzjcC7Hb/1.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">
                                    ป้ายทะเบียนรถ : คษท 86</h5>
                                <h6>
                                    ยี่ห้อรถ : testdddd</h6>

                                <h6>
                                    ราคา : 1000000</h6>
                                <p class="card-text">
                                    รายละเอียด : ipsum dolor sit amet, consectetur adipisicing.</p>

                            </div>
                            <div class="card-footer bg-white border-info text-center">

                                <a href="#" @click="dataVans('Detail', 1)" class="badge badge-success badge-sm"><i
                                        class="fa fa-search">ดูรายละเอียด</i> </a>
                                <a href="#" @click="dataVans('Edit', 1)" class="text-white badge badge-warning badge-sm"><i
                                        class="fa fa-check-square-o">
                                        แก้ไขรายการ</i></a>
                                <a href="#" @click="dataVans('Del', 1)" class="badge badge-danger badge-sm"><i
                                        class="fa fa-times">ลบรายการนี้ </i></a>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="card mx-30">
                            <img src="https://i.postimg.cc/Y9zsGBdM/3.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">
                                    ป้ายทะเบียนรถ : คษท 86</h5>
                                <h6>
                                    ยี่ห้อรถ : testdddd</h6>

                                <h6>
                                    ราคา : 1000000</h6>
                                <p class="card-text">
                                    รายละเอียด : ipsum dolor sit amet, consectetur adipisicing.</p>

                            </div>
                            <div class="card-footer bg-white border-info text-center">

                                <a href="#" @click="dataVans('Detail', 1)" class="badge badge-success badge-sm"><i
                                        class="fa fa-search">ดูรายละเอียด</i> </a>
                                <a href="#" @click="dataVans('Edit', 1)" class="text-white badge badge-warning badge-sm"><i
                                        class="fa fa-check-square-o">
                                        แก้ไขรายการ</i></a>
                                <a href="#" @click="dataVans('Del', 1)" class="badge badge-danger badge-sm"><i
                                        class="fa fa-times">ลบรายการนี้ </i></a>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="card mx-30">
                            <img src="https://i.postimg.cc/mgKqKwcf/4.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">
                                    ป้ายทะเบียนรถ : คษท 86</h5>
                                <h6>
                                    ยี่ห้อรถ : testdddd</h6>

                                <h6>
                                    ราคา : 1000000</h6>
                                <p class="card-text">
                                    รายละเอียด : ipsum dolor sit amet, consectetur adipisicing.</p>

                            </div>
                            <div class="card-footer bg-white border-info text-center">

                                <a href="#" @click="dataVans('Detail', 1)" class="badge badge-success badge-sm"><i
                                        class="fa fa-search">ดูรายละเอียด</i> </a>
                                <a href="#" @click="dataVans('Edit', 1)" class="text-white badge badge-warning badge-sm"><i
                                        class="fa fa-check-square-o">
                                        แก้ไขรายการ</i></a>
                                <a href="#" @click="dataVans('Del', 1)" class="badge badge-danger badge-sm"><i
                                        class="fa fa-times">ลบรายการนี้ </i></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        };
    },

    methods: {

        async dataVans(typeCheck, objId) {
            if (typeCheck == 'Del') {
                let result = confirm("คุณแน่ใจนะ ที่จะลบรายการนี้?");
                if (result) {

                }
            }
            else if (typeCheck == 'Edit') {
                this.$router.push('vans/edit/1');
            }
            else{
                this.$router.push('vans/1');
            }
            
        },
    },
};
</script>

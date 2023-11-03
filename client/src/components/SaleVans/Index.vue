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
            <h2 class="mb-4">สั่งซื้อรายการรถบรรทุก จำนวน 3 รายการ</h2>
            <div class="col-md-6 col-lg-6 mb-4">
                <router-link to="/vans/create">
                    <b-button block variant="info">
                        <i class="fa fa-check-square-o">เพิ่มข้อมูลการสั่งซื้อ</i> </b-button>
                </router-link>

            </div>
            <div class="container">
                <div class="card">
                    <div class="row g-0">
                        <div class="col-sm-5">
                            <img src="https://i.postimg.cc/mgKqKwcf/2.jpg" class="card-img-top h-100" alt="...">
                        </div>
                        <div class="col-sm-7">
                            <div class="card-body">
                                <h4 class="card-title">
                                    รายการที่ 1
                                </h4>
                                <h5 class="card-title">
                                    ป้ายทะเบียนรถ : คษท 86</h5>
                                <h6>
                                    ยี่ห้อรถ : testdddd</h6>

                                <h6>
                                    ราคาที่จำหน่าย : 1000000
                                </h6>
                                <p class="card-text">
                                    ชื่อ - นามสุกลผู้ซื้อ : Firstname Lastname.</p>
                                <h6>
                                    วันที่จำหน่าย : 3/11/2023
                                </h6>
                            </div>
                            <div class="card-footer bg-white border-info text-center">
                                <button type="button" @click="dataSaleVans('Detail', 1)" class="btn btn-warning text-white">
                                    <i class="fa fa-check-square-o"> ดูรายละเอียด </i>
                                </button>
                                
                                    <button type="button" @click="dataSaleVans('Edit', 1)" class="btn btn-secondary">
                                        <i class="fa fa-arrow-circle-o-left"> แก้ไขการสั่งซื้อ </i>
                                    </button>
                               
                                
                                    <button type="button" @click="dataSaleVans('Del', 1)" class="btn btn-secondary">
                                        <i class="fa fa-arrow-circle-o-left"> ลบข้อมูลการสั่งซื้อ </i>
                                    </button>
                                
                            </div>

                        </div>
                    </div>

                </div>
                <div class="card">
                    <div class="row g-0">
                        <div class="col-sm-5">
                            <img src="https://i.postimg.cc/mgKqKwcf/2.jpg" class="card-img-top h-100" alt="...">
                        </div>
                        <div class="col-sm-7">
                            <div class="card-body">
                                <h4 class="card-title">
                                    รายการที่ 2
                                </h4>
                                <h5 class="card-title">
                                    ป้ายทะเบียนรถ : คษท 47</h5>
                                <h6>
                                    ยี่ห้อรถ : กกกกก</h6>

                                <h6>
                                    ราคาที่จำหน่าย : 1000000
                                </h6>
                                <p class="card-text">
                                    ชื่อ - นามสุกลผู้ซื้อ : Firstname Lastname.</p>
                                <h6>
                                    วันที่จำหน่าย : 3/11/2023
                                </h6>
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

        async dataSaleVans(typeCheck, objId) {
            if (typeCheck == 'Del') {
                let result = confirm("คุณแน่ใจนะ ที่จะลบรายการนี้?");
                if (result) {

                }
            }
            else if (typeCheck == 'Edit') {
                this.$router.push('salevans/edit/1');
            }
            else{
                this.$router.push('salevans/1');
            }
            
        },
    },
};
</script>

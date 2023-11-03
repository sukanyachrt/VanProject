<template>
    <div class="wrapper">
        <div class="container">
            <div class="card">
                <h5 class="card-header bg-info text-white">รายละเอียดข้อมูลรถบรรทุก | หมายเลขทะเบียนรถ </h5>

                <div class="row g-0">
                    <div class="col-sm-5">
                        <img src="https://i.postimg.cc/mgKqKwcf/2.jpg" class="card-img-top h-100" alt="...">
                    </div>
                    <div class="col-sm-7">
                        <div class="card-body">
                            <h5 class="card-title">
                                ป้ายทะเบียนรถ : คษท 86</h5>
                            <h6>
                                ยี่ห้อรถ : testdddd</h6>

                            <h6>
                                ราคาที่จำหน่าย : 1000000</h6>
                            <p class="card-text">
                                วันที่จำหน่าย : ---วันที่จำหน่าย*---
                            </p>
                            <p class="card-text">
                                ชื่อ - นามสุกลผู้ซื้อ : ---ชื่อผู้ซื้อ---
                            </p>

                        </div>
                        <div class="card-footer bg-white border-info text-center">

                        </div>

                    </div>
                </div>

            </div>
            <br />
            <div class="row">
                <div class="col-12 text-center">
                    <button type="button" @click="dataSaleVans(1)"  class="btn btn-warning text-white">
                        <i class="fa fa-check-square-o"> แก้ไขรายการนี้ </i>
                    </button>
                    <router-link to="/salevans">
                        <button type="button" class="btn btn-secondary">
                            <i class="fa fa-arrow-circle-o-left"> ย้อนกลับ </i>
                        </button>
                    </router-link>
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

        async dataSaleVans(objId) {
           
             this.$router.push('edit/'+objId);
           
            
        },
    },
};
</script>

<template>
    <div class="card">
        <h5 class="card-header bg-info text-white">ข้อมูลรายการรถบรรทุก | เพิ่มข้อมูลรถบรรทุก</h5>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">ป้ายทะเบียนรถ :</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="ป้ายทะเบียนรถ">
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">ยี่ห้อรถ :</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="ยี่ห้อรถ">
                </div>

                <div class="form-group">
                    <label for="formGroupExampleInput2">ราคา :</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="ราคา">
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">รายละเอียด :</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        placeholder="รายละเอียด"></textarea>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">เลือกรูปภาพ :</label>
                    <input class="form-control form-control-lg" id="formFileLg" type="file">
                </div>
                <div class="container">
                    <div class="col-md-12 text-center">
                        <button type="button" class="btn btn-info"> <i class="fa fa-save"> บันทึกรายการรถ </i></button>
                        <router-link to="/vans">
                            <button type="button" class="btn btn-secondary"> <i class="fa fa-arrow-circle-o-left"> ย้อนกลับ </i></button>
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
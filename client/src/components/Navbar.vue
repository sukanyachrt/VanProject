<template>
    <nav id="sidebar" :class="{ active: isVisible }">
        <div class="custom-menu">
            <button type="button" id="sidebarCollapse" @click="ToggleMenu()" class="btn btn-primary">
                <i class="fa fa-bars"></i>
                <span class="sr-only">Toggle Menu</span>
            </button>
        </div>
        <div class="p-4">
            <h1><a href="index.html" class="logo">VAN Thailand<span>จัดการข้อมูลรถบรรทุก</span></a></h1>
            <ul class="list-unstyled components mb-5">
                <li class="active">
                    <a href="/vans"><span class="fa fa-car mr-3"></span> ดูข้อมูลรถบรรทุก</a>
                </li>
                <li>
                    <a href="/salevans"><span class="fa fa-money mr-3"></span> สั่งซื้อรถบรรทุก</a>
                </li>
                

            </ul>
        </div>
    </nav>
</template>
<script>

export default {
  data() {
    return {
        isVisible : false
    };
  },
  methods: {
    ToggleMenu(){
        this.isVisible = !this.isVisible;
    }
  }
}
</script>
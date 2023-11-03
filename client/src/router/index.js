import Vue from 'vue'
import Router from 'vue-router'


// new
import VanIndex from '@/components/vans/Index'
import CreateVans from '@/components/vans/CreateVans'
import EditVans from '@/components/vans/EditVans'
import DetailVans from '@/components/vans/DetailVans'


//จำหน่ายรถ
import SaleVanindex from '@/components/SaleVans/Index'
import CreateSaleVans from '@/components/SaleVans/CreateSaleVans'
import EditSaleVans from '@/components/SaleVans/EditSaleVans'
import DetailSaleVans from '@/components/SaleVans/DetailSaleVans'



Vue.use(Router)

export default new Router({
  mode:'history',
  
  routes: [
    {
      path: '/vans',
      name: 'vans',
      component: VanIndex
    },
    {
      path: '/vans/create',
      name: 'vans-create',
      component: CreateVans
    },
    {
      path: '/vans/edit/:id',
      name: 'vans-edit',
      component: EditVans
    },
    {
      path: '/vans/:id',
      name: 'vans',
      component: DetailVans
    },
    {
      path: '/salevans',
      name: 'salevans',
      component: SaleVanindex
    },
    {
      path: '/salevans/create',
      name: 'salevans-create',
      component: CreateSaleVans
    },
    {
      path: '/salevans/edit/:id',
      name: 'salevans-edit',
      component: EditSaleVans
    },
    {
      path: '/salevans/:id',
      name: 'salevans',
      component: DetailSaleVans
    },
    
    

  ]
})

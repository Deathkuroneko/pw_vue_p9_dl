import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConsultarTokenView from '@/views/ConsultarTokenView.vue'
import IngresarVehículo from '@/components/IngresarVehículo.vue'
import MostarTablaVehiculos from '@/components/MostarTablaVehiculos.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/consultar-token',
    name: 'consultar-token',
    component: ConsultarTokenView
  },
  {
    path: '/crear-vehiculo',
    name: 'crear-vehiculo',
    component: IngresarVehículo
  },  
  {
    path: '/mostrar-tabla-vehiculos',
    name: 'mostrar-tabla-vehiculos',
    component: MostarTablaVehiculos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['consultar-token', 'crear-vehiculo', 'mostrar-tabla-vehiculos']; 
  const authRequired = !publicPages.includes(to.name); 
  const token = localStorage.getItem('token'); 

  if (authRequired && !token) {
    next({ name: 'consultar-token' });
  } else {
    
    next();
  }
});


export default router

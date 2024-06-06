import HomeView from '../views/HomeView.vue'
import DialisisView from '../views/DialisisView.vue'
import NutricionView from '../views/NutricionView.vue'
import ConsejosView from '../views/ConsejosView.vue'
import AvisoLegalView from '../views/AvisoLegalView.vue'
import CookiesView from '../views/CookiesView.vue'
import PrivacidadView from '../views/PrivacidadView.vue'
import ConsultaPotasio from '../views/ConsultaPotasio.vue'
import ConsultaFosforo from '../views/ConsultaFosforo.vue'
import ReproductorView from '../views/ReproductorView.vue'


const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/dialisis',
      name: 'Dialisis',
      component: DialisisView
    },
    {
      path: '/nutricion_en_dialisis',
      name: 'Nutricion',
      component: NutricionView
    },
    {
      path: '/consejos_para_dialisis',
      name: 'Consejos',
      component: ConsejosView
    },
    {
      path: '/reproductor_de_musica',
      name: '🎶 Música',
      component: ReproductorView
    },
    {
      path: '/potasio_alimentos',
      name: 'Con_Potasio',
      component: ConsultaPotasio
    },
    {
      path: '/fosforo_alimentos',
      name: 'Con_Fosforo',
      component: ConsultaFosforo
    },


    {
      path: '/aviso_legal',
      name: 'avisoLegal',
      component: AvisoLegalView
    },
    {
      path: '/cookies',
      name: 'cookies',
      component: CookiesView
    },
    {
      path: '/politica_de_privacidad',
      name: 'privacidad',
      component: PrivacidadView
    }
  ]

  export default routes;
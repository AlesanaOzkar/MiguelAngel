import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio/Inicio'
import Precios from '@/components/Precios/Precios'
import Servicios from '@/components/Servicios/Servicios'
import Sobre from '@/components/Sobre/Sobre'
import Contacto from '@/components/Contacto/Contacto'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
		  path: '/',
		  name: 'inicio',
		  component: Inicio
		},
		{
		  path: '/quien_soy',
		  name: 'quien_soy',
		  component: Sobre
		},
		{
		  path: '/servicios',
		  name: 'servicios',
		  component: Servicios
		},
		{
		  path: '/precios',
		  name: 'precios',
		  component: Precios
		},
		{
		  path: '/contacto',
		  name: 'contacto',
		  component: Contacto
		}
	]
})

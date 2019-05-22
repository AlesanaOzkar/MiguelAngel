<template>
	<div id="barra">
	    <v-toolbar
	    	class="bg-barra"
	    >

	      <v-toolbar-title>Psic. Miguel Angel</v-toolbar-title>
			<v-spacer></v-spacer>
	      <v-toolbar-items class="hidden-sm-and-down menu">
	        <v-btn  flat tag="li"  >
	        	<router-link exact :to="{ name: 'inicio'}">Inicio</router-link>
	        </v-btn>
	        <v-btn flat tag="li"  >
	        	<router-link exact :to="{ name: 'quien_soy'}">Quien Soy</router-link>
	        </v-btn>
	        <v-btn flat tag="li" >			
	        	<router-link exact :to="{ name: 'servicios'}">Servicios</router-link>
	        </v-btn>
	        <v-btn  flat tag="li" >
	        	
	        	<router-link exact :to="{ name: 'precios'}">Precios</router-link>
	        </v-btn>
	        <v-btn  flat tag="li"  >
	        	<router-link exact :to="{ name: 'contacto'}">Contacto</router-link>
	        </v-btn>
			
	      </v-toolbar-items>
	    </v-toolbar>

	</div>
</template>
<script>
	export default{
	  	name: 'barra'
	}
</script>

<style>
	
	.menu a:hover{
		color:#FFC824 !important;
		background: none !important;
	}
	.router-link-exact-active{
		color: #AA8924 !important;
	}

	.bg-activo{
		color: solid red;
	}

	.menu a{
		color:#FFF;
		text-decoration: none;
	}
	.bg-barra{
		background-color: #2f2f2f !important;
		color:#FFF !important;
	}
</style>
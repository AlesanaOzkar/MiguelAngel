<template>
	<div id="inicio">
	  	<carousel></carousel>
		<servicios></servicios>
	</div>
</template>
<script>
	import Carousel from '@/components/partials/Carousel'
	import Card from '@/components/inicio/partials/Card'
	import Servicios from '@/components/inicio/partials/Servicios'
	export default{
	  	name: 'Inicio',
	  	components:{
	  		Carousel,Card,Servicios
	  	},
	  	data () {
		    return {
		    	img:'@/assets/logo.png',
		      	titulo: 'Inicio',
		      	cards:[
	      			{
      					url: require('@/assets/card_1.png'),
      					titulo:'Individual',
      					texto:'Impulsamos el desarrollo humano y encontramos soluciones a conflictos'
		      		},
		      		{
      					url:require('@/assets/card_2.png'),
      					titulo:'Parejas',
      					texto:'dsfsd'
		      		},
		      		{
      					url:require('@/assets/card_3.png'),
      					titulo:'Familia',
      					texto:'fsdf'
		      		},
		      		{
      					url:require('@/assets/card_4.png'),
      					titulo:'Adolescente',
      					texto:'fdsdf'
		      		},
		      		{
      					url:require('@/assets/card_5.png'),
      					titulo:'Infantil',
      					texto:'fdsf'
		      		}

	      		]
		    }
	  	}
	}
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
.borde-h2{
    border: solid 1px;
    padding: 15vh 3vh;
}
.v-responsive__content{
	display: flex;
    align-items: center;
    justify-content: center;
}
.justify-content-center{
	justify-content: center;
}
</style>
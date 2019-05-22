<template>
	<div id="cards">
		<v-container fluid grid-list-md text-xs-center amber lighten-1>
			<h2 class="display-1">Acompañamiento <br> profesional Psicológico:</h2>
		    <v-container>
				<v-layout row wrap mx-auto text-xs-left>
					<v-flex xs12>
						<h2 class="display-1">Psicoterapia:</h2>
					</v-flex>
				</v-layout>
			      <v-layout row wrap mx-auto>
			      <v-flex xs12 sm12 md2 mx-auto v-for="(card,i) of cards" :key="i">
        			<card :card="card"></card>	
		      	</v-flex>
		  		</v-layout>
		    </v-container>
	    </v-container>
	</div>
</template>
<script>
	import Card from '@/components/inicio/partials/Card'
	export default{
	  	name: 'servicios',
	  	components:{
	  		Card
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
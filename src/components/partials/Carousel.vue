<template>
	<div id="carrousel">
		<v-carousel
			hide-delimiters
			interval="10000"
			
		>
		
			<v-carousel-item
				v-for="(item,i) in items"
        
				:key="i"
				:src="item.src"
				transition="fade-transition"
			>

			<v-responsive dark>
            <v-container fill-height>
              <v-layout align-center>
                <v-flex>
                  <h5 class="display-1 text-center"><span class="display-1">{{item.titulo}}</span></h5>
                  <span class="subheading">{{item.subtitulo}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-responsive>
			</v-carousel-item>
			
		</v-carousel>
	</div>
</template>
<script>
  export default {
  	name:'carousel',
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            titulo:'La vida no es siempre fácil, hablemos al respecto!',
            subtitulo:'Nos especializamos en entender las dificultades de la vida y los tiempos difíciles para que no tengas que hacerlo solo.'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            titulo:'Tenemos la estrategia para lograr lo que deseas!',
            subtitulo:'Si te sientes como si estuvieras cargando el mundo, como si no pudieras tomar un descanso o una desición, o tal vez sea simplemente demasiado, entonces estamos aquí para escucharte.'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            titulo:'La vida no es siempre fácil, hablemos al respecto!',
            subtitulo:''
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            titulo:'Deja de sufrir...Impulsa tu desarrollo',
            subtitulo:'Póngase en contacto hoy para obtener más información sobre cómo podemos ayudarlo a volver al buen camino.'
          }
        ]
      }
    }
  }
</script>
<style>
	.text-center{
		text-align: center;
	}
</style>
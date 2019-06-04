<template>
	<div>
		<v-hover>
			<v-card
				slot-scope="{ hover }"
				class="mx-auto"
				color="grey lighten-4"
				max-width="600"
				height="280"
			>
		    <v-img
		      :aspect-ratio="16/9"
		      height="280"
		      :src="card.url"
		    >
			<h2  class="white--text borde-h2">{{card.titulo}}</h2>
		  		<v-scale-transition>
		            <div
		              v-if="hover"
		              class="d-flex display-5 v-card--reveal opacity-1  white--text"
		              style="height: 100%;">
		              {{card.texto}}
		            </div>
		  		</v-scale-transition>
		    </v-img>
		  </v-card>
		</v-hover>
	</div>
</template>
<script>
	export default{
		props:['card'],
		name:'card'
	}
</script>
<style scoped>
	.opacity-0{
		opacity: 0 !important;
	}	
	.opacity-1{
		opacity: 1 !important;
	}
</style>
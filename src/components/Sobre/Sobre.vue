<template>
	<div>
		<servicios></servicios>	
	</div>
</template>
<script>
	import Servicios from '@/components/inicio/partials/Servicios'

	export default{
	  	name: 'Sobre',
	  	data () {
		    return {
		      titulo: 'Quien soy'
		    }
	  	},components:{
	  		Servicios
	  	}
	}
</script>
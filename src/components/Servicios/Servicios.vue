<template>
	<div>
		<tarjetas></tarjetas>	
	</div>
</template>
<script>
	import Tarjetas from '@/components/inicio/partials/Servicios'
	export default{
	  	name: 'Servicios',
	  	data () {
		    return {
		      titulo: 'Servicios'
		    }
	  	},components:{
	  		Tarjetas
	  	}
	}
</script>
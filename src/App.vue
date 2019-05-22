<template>
  <div>
    <v-app id="app">
      <navegacion></navegacion>
      <router-view/>
        <pie></pie>
    </v-app>

  </div>

</template>

<script>
import Navegacion from '@/components/partials/BarraNavegacion'
  import Pie from '@/components/partials/Footer'
import Carousel from '@/components/partials/Carousel'


export default {
  name: 'App',
  components:{
    Navegacion,Carousel,Pie
  }
}
</script>

<style>

</style>

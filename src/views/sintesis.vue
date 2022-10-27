<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center
      .col-md-10
        .titulo-sexto.color-acento-botones.mb-2.pr-2
          h5 Gestión de Analítica de Datos
          p.pt-3 Síntesis: fundamentos de programación 
    
        p.pt-5.pb-5 En el siguiente mapa podrá apreciar un resumen de los temas trabajados con los conceptos básicos de la programación.


      .row.justify-content-center
        .col-lg-10.mb-5
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
    

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

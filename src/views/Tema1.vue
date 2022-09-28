<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos y lógica de Programación

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-12
        p Los fundamentos y la lógica de programación es la parte inicial del recorrido, es aquí, donde se adoptarán los conceptos claves y la lógica que apoyará el resto del camino, de modo que, se pueda resolver un problema complejo utilizando técnicas que permitan convertirlos en unidades más pequeñas y fáciles de solucionar.

    .titulo-secundario.color-acento-contenido
      .titulo-secundario__numero
      h2 1.1 Pensamiento computacional
        .col-md-10.align-center
          text-center.h-100
            img(src="@/assets/curso/temas/tema1/pensamiento_computacional.svg")

      br
              
      .col-12
       p El pensamiento computacional fomenta las habilidades que tienen las personas para resolver problemas, ya que, este tipo de pensamiento implica descomponer un problema en unidades más pequeñas e identificar los patrones y características comunes de estas partes, para luego enfocarse en la información relevante y finalmente, solucionar el problema paso a paso a través de algoritmos.
   
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

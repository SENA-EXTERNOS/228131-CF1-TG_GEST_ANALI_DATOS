<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      
      .col-12.col-md-8.col-lg-8
        p.mb-4 Estimado aprendiz, reciba una cordial bienvenida a este recurso de aprendizaje. Durante su desarrollo se abordarán los principios básicos de programación, los fundamentos de la lógica de programación, los paradigmas y estándares de programación. Podrá desarrollar desde programas sencillos hasta sofisticados códigos; posteriormente se aprenderá a manejar estructuras concretas: variables, tipos de datos, instrucciones de decisión, de repetición, entre otras. Finalmente, aprenderá a programar en un entorno de desarrollo en línea Google Colab que permite ejecutar código escrito en lenguaje Python una herramienta esencial para crear soluciones de software que le servirán de insumo para adentrarse en el campo de la analítica de datos.
        
        p.mb-4 A continuación, en el video introductorio podrá ver de forma ampliada las diferentes temáticas a desarrollar a lo largo del componente formativo.

        p.mb-4 ¡Le deseamos una experiencia de aprendizaje significativa y memorable!

      .col-12.col-md-4.col-lg-4
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/temas/introduccion.svg", alt="Texto que describa la imagen")

    .row
      .container.tarjeta.tarjeta--blanca
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

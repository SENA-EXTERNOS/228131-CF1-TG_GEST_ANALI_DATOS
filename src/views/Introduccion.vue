<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.align-items-lg-stretch
      
      .col-12.col-md-8.col-lg-8
        p.mb-4 Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán los principios básicos de programación, los fundamentos de la lógica de programación y los paradigmas y estándares de programación. Podrá desarrollar desde programas sencillos hasta sofisticados códigos; posteriormente, aprenderá a manejar estructuras concretas: variables, tipos de datos, instrucciones de decisión, de repetición, entre otras. Finalmente, aprenderá a programar en un entorno de desarrollo en línea Google Colab que permite ejecutar código escrito en lenguaje Python, herramienta esencial para crear soluciones de software que le servirán de insumo, para adentrarse en el campo de la analítica de datos.
        
        p.mb-4 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

      .col-12.col-md-4.col-lg-4
        img.img-a.img-t(src="@/assets/curso/temas/introduccion.svg", alt="Texto que describa la imagen")

    .row
      .container.tarjeta.tarjeta--blanca
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/D1On_9Bdi08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          

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

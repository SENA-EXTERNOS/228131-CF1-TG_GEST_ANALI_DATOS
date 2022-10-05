<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Paradigmas y estándares de programación

    .row.justify-content-center.pt-5
      .col-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0.pb-3 Los paradigmas y estándares de programación son los modos o estilos que se utilizan para programar. 
                p.mb-0.pb-3 Los lenguajes de programación pueden adoptar uno o varios paradigmas. Python es un lenguaje multiparadigma.
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/tema4/paradigmas.svg").img100
    p.b.pt-3 Entre los paradigmas de programación más utilizados se encuentran los siguientes:

    .row
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones       
          .tarjeta.clr--gris(titulo="Paradigma imperativo")
            .row.tarjeta.tarjeta--azul.align-middle 
              .col-12.col-md-8.col-lg-8
                .tarjeta.d-flex.p-4.align-middle
                  p.b.pb-3 Paradigma imperativo
                  p.mb-4 El desarrollador describe las instrucciones u órdenes y la máquina las ejecuta paso a paso. 
                  p.mb-4 Algunos lenguajes de programación de este paradigma son: Pascal, Python, C, C++, Basic, entre otros.
              .col-12.col-md-4.col-lg-4
                .tarjeta.h-50.d-flex.p-4.align-middle
                  figure
                    img(src="@/assets/curso/temas/tema4/paradigma_imperativo.svg", alt="paradigma_imperativo").img100
          .tarjeta.clr--gris(titulo="Paradigma declarativo")
            .row.tarjeta.tarjeta--azul.align-middle 
              .col-12.col-md-8.col-lg-8
                .tarjeta.d-flex.p-4.align-middle
                  p.b.mb-4 Paradigma declarativo
                  p.mb-4 El desarrollador declara las condiciones o restricciones que describen la problemática que se quiere resolver, pero no los pasos necesarios para llegar a la solución.
                  p.mb-4 Lenguajes como Haskell, Miranda y SQL hacen parte de este paradigma.
              .col-12.col-md-4.col-lg-4
                .tarjeta.h-50.d-flex.p-4.align-middle
                  figure
                    img(src="@/assets/curso/temas/tema4/paradigma_declarativo.svg", alt="paradigma_declarativo").img100
          .tarjeta.clr--gris(titulo="Paradigma orientado a objetos")
            .row.tarjeta.tarjeta--azul.align-middle 
              .col-12.col-md-8.col-lg-8
                .tarjeta.d-flex.p-4.align-middle
                  p.b.mb-4 Paradigma orientado a objetos
                  p.mb-4 El desarrollador construye “objetos” que representan a cada uno de los elementos que hacen parte del problema que se va a resolver. Estos objetos tienen características y funciones que permiten minimizar su creación y mantenimiento. Además, se disminuyen los errores y permiten la reutilización de código.
                  p.mb-4 Entre los lenguajes representativos de este paradigma están: Java, Python y C# entre otros.
              .col-12.col-md-4.col-lg-4
                .tarjeta.h-50.d-flex.p-4.align-middle
                  figure
                    img(src="@/assets/curso/temas/tema4/object_oriented.svg", alt="paradigma_orientado_objetos").img100

    #t_4_1.titulo-segundo.color-primario.pt-3.pb-3
      h2 4.1  Programación estructurada
    .row.justify-content-center.pt-5
      .col-12
        p La programación estructurada hace parte del paradigma imperativo y está diseñado para promover la claridad, calidad y el tiempo de desarrollo de las aplicaciones, utilizando las siguientes estructuras:   
    .row.justify-content-center.pt-5
      .col-8
        .row.align-middle
          .titulo-sexto.color-secundario.mb-2.pr-2
            h5 Figura 22.
            span Tipos de estructuras
        .row
          .col-12
            img(src="@/assets/curso/temas/tema4/estructuras.svg", alt="estructuras").img100
</template>

<script>
export default {
  name: 'Tema3',
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

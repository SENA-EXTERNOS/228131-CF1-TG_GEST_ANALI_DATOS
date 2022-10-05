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
            .tarjeta.clr--gris(titulo="Cantidad de lenguajes soportados:")
              .row.tarjeta.tarjeta--azul.align-middle 
                .col-12.col-md-8.col-lg-8
                  .tarjeta.d-flex.p-4.align-middle
                    p.mb-4 Cantidad de lenguajes soportados: existen IDE que solamente son compatibles con un lenguaje de programación, por lo tanto, son mejores para un estilo de programación en especial, entre ellos, tenemos como ejemplo a IntellinJ, que se conoce como un IDE exclusivo para Java. Por otra parte, están los IDE que soportan varios lenguajes de programación, como es el caso de Eclipse, con el que se puede programar en Java, Python, JavaScript, PHP, C++, entre otros.
                .col-12.col-md-4.col-lg-4
                  .tarjeta.h-50.d-flex.p-4.align-middle
                    figure
                      img(src="@/assets/curso/temas/tema2/tipo_ide_1.svg", alt="alt").img100

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

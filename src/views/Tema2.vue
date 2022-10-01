<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Entorno de Desarrollo


    .titulo-secundario.color-acento-contenido
      .titulo-secundario__numero
      h2 1.1 Pensamiento computacional
        .col-md-10.align-center
          text-center.h-100
            img(src="@/assets/curso/temas/tema2/main.svg" style="width: 800px;")  

    p Este tipo de aplicaciones ofrecen herramientas como la depuración de errores y automatización de compilaciones locales, que le proporcionan al programador o desarrollador de software, ser más eficientes en la codificación de los programas.

    b ¿Por qué los programadores utilizan los Entornos de Desarrollo Integrado IDE?

    br

    b Tipos de IDE

    br

    p Existen opciones tanto comerciales como open source en el mercado que suplen la demanda existente. Entre las características que distinguen los IDE resaltan las siguientes:

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
                    img(src="@/assets/curso/temas/tema2/tipo_ide_1.svg", alt="Texto que describa la imagen")
          .tarjeta.clr--gris(titulo="Sistemas operativos soportados:")
            .row.tarjeta.tarjeta--azul.align-middle 
              .col-12.col-md-8.col-lg-8
                .tarjeta.d-flex.p-4.align-middle
                  p.mb-4 Sistemas operativos soportados: en función del sistema operativo que utiliza el programador se establece el tipo de IDE que es compatible, con excepción de los IDE que están implementados en la nube, los cuales al contar con acceso web son multiplataforma. También está condicionado por el sistema operativo al que está destinada la aplicación que se va a desarrollar, por ejemplo, si es una aplicación para Android o iOS.
              .col-12.col-md-4.col-lg-4
                .tarjeta.h-50.d-flex.p-4.align-middle
                  figure
                    img(src="@/assets/curso/temas/tema2/tipo_ide_2.svg", alt="Texto que describa la imagen")

          .tarjeta.clr--gris(titulo="Performance:")
            .row.tarjeta.tarjeta--azul.align-middle 
              .col-12.col-md-8.col-lg-8
                .tarjeta.d-flex.p-4.align-middle
                  p.mb-4 Performance: el programador debe tener en cuenta si el IDE se va a ejecutar en conjunto con otras herramientas que requieran mucha memoria, dado que, el rendimiento del IDE puede verse afectado, realizando sus operaciones con lentitud.
              .col-12.col-md-4.col-lg-4
                .tarjeta.h-50.d-flex.align-middle
                  figure
                    img(src="@/assets/curso/temas/tema2/tipo_ide_3.svg", alt="Texto que describa la imagen")

          .tarjeta.clr--gris(titulo="Extensiones y Plugins:")
            .row.tarjeta.tarjeta--azul.align-middle 
              .col-12.col-md-8.col-lg-8
                .tarjeta.d-flex.p-4.align-middle
                  p.mb-4 Extensiones y Plugins: existen IDE que admiten la personalización de los flujos de trabajo, de tal forma que, el programador lo puede adaptar a lo que necesite y prefiere.
              .col-12.col-md-4.col-lg-4
                .tarjeta.h-50.d-flex.p-4.align-middle
                  figure
                    img(src="@/assets/curso/temas/tema2/tipo_ide_4.svg", alt="Texto que describa la imagen")

    br

    .row 
       .titulo-segundo.color-primario
        h2 2.1 Lenguajes compilados y lenguajes interpretados

    p A continuación, podrá conocer acerca de algunos lenguajes, lo que le permitirá comprender mejor los conceptos de programación:

    .row
      .row
        .col-1 
        .col-10.col-md-10.col-lg-10.tarjeta.tarjeta--azul.align-middle
          .tarjeta.d-flex.p-4.align-middle
            p.mb-4 Cuando se inicia en el mundo del desarrollo de software, la selección del lenguaje de programación es uno de los factores que más se tiene en cuenta para dar los primeros pasos.  También es fundamental conocer si el lenguaje elegido es compilado o interpretado.
        .col-1
    
    br

    .row
      .container.tarjeta.tarjeta--blanca
        TabsC.color-primario
          .py-3.py-md-4(titulo="The splendor of the mystery")
            .row
              .col-md-6.p-4
                figure
                  img(src='@/assets/curso/temas/tema2/lenguaje_compilado.svg', style="width: 300px;", alt='Texto que describa la imagen')
              .col-md-6
                h4 Lenguajes Compilados
                p Este tipo de lenguaje de programación traduce el código fuente en sentencias que la máquina puede entender. Estas sentencias son agrupadas en un archivo binario ejecutable, que, por lo general, está limitado a un determinado sistema, permitiendo que se puedan ejecutar sin la instalación de otro programa complementario, ya que todo lo que necesita para funcionar correctamente se encuentra embebido en ese único archivo ejecutable. Entre los lenguajes compilados está C, C++, Swift, Go, Ada, entre otros.
          .py-3.py-md-4(titulo="Don’t lie to yourself")
            .row
              .col-md-6.p-4
                figure
                  img(src='@/assets/curso/temas/tema2/lenguaje_interpretado.svg', style="width: 300px;", alt='Texto que describa la imagen')
              .col-md-6
                h4 Lenguajes Interpretados
                p En un lenguaje interpretado el código fuente se ejecuta en caliente, instrucción a instrucción o paso a paso, por lo tanto, el código no es expuesto a un proceso de compilación, sino que existe un programa complementario que se llama intérprete, que se encarga de leer las instrucciones en tiempo real y las va ejecutando una a una.  Entre los lenguajes interpretados están: Python, Perl, JavaScript, Ruby, PHP, MATLAB, Visual Basic .NET, ASP entre otros. 

            
</template>

<script>
export default {
  name: 'Tema2',
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

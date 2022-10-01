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

      .row.p-4
        .titulo-segundo.color-primario
          h2 1.1  Pensamiento computacional 
      .row.pt-1.pb-4 
        .col-12
          .row.align-middle 
            .col-12.col-md-10.col-lg-4
              figure
                img(src="@/assets/curso/temas/tema1/pensamiento_computacional.svg")

      br
              
      .col-12
       p El pensamiento computacional fomenta las habilidades que tienen las personas para resolver problemas, ya que, este tipo de pensamiento implica descomponer un problema en unidades más pequeñas e identificar los patrones y características comunes de estas partes, para luego enfocarse en la información relevante y finalmente, solucionar el problema paso a paso a través de algoritmos.
   
      p.center.align-items-center.align-items-lg-stretch Figura 1. Pensamiento computacional.

        .col-12.col-md-10.align-center
              img(src="@/assets/curso/temas/tema1/figura_1.svg")
      br

      .row.pt-4
      .titulo-segundo.color-primario
        h2 1.2  Algoritmos e instrucciones
      br

      p A continuación, se abordarán los conceptos de algoritmos y sus tipos:

      br

    .tarjeta.tarjeta--gris.p-4
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p Un algoritmo en términos generales es una secuencia de pasos que se deben ejecutar en un orden predefinido, con el fin de realizar una tarea específica o resolver un problema en particular. Un claro ejemplo de los algoritmos, son los manuales, porque en ellos encontramos los pasos para resolver los problemas, como los pasos para armar un artefacto o qué hacer en caso de que se presente algún inconveniente o falla con un dispositivo.
          .col-md-6
            figure
              img(src='', alt='Profesor con alumnos')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h6 Inicio y fin
            br
            p Una característica de los algoritmos es que los pasos que lo conforman deben ser finitos y contar con un principio y un final..
          .col-md-6
            figure
              img(src='', alt='Profesora y tablero')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h6 Ejemplo de un algoritmo en la vida cotidiana
            br
            p nombre del algoritmo: realizar una llamada. Paso 1. Encender el teléfono.Paso 2. Marcar el número del destino. Paso 3. Si contestan: 
            p Saludar, dialogar con la persona, despedirse Si no contestan: Volver al paso 2. Paso 4. Colgar la llamada.
          .col-md-6
            figure
              img(src='', alt='Joven con un telefono')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            br
            p Como se muestra en el ejemplo anterior, los algoritmos están presentes en muchas situaciones de la vida cotidiana y no son solamente fórmulas matemáticas complejas.  
          .col-md-6
            figure
              img(src='', alt='Joven con un tablero')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h6 Ejemplo 2: una receta de cocina.
            br
            p Para mayor claridad respecto al concepto de algoritmos, se revisará otro ejemplo clásico donde se describen los pasos para preparar una comida:
          .col-md-6
            figure
              img(src='', alt='Receta ade cocina')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h6 Algoritmos = Programación
            br
            p Ahora bien, los algoritmos se asocian con la programación porque para crear un sistema o aplicación como juegos o software, se necesitan los pasos ordenados y predefinidos para crear dicho sistema. 
            br
            p Los algoritmos son el núcleo, la base de los programas.
          .col-md-6
            figure
              img(src='', alt='imagen de PC')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h6 Lenguajes y algoritmos
            br
            p Para que la máquina (computador o dispositivo) entienda los pasos o instrucciones que contienen los algoritmos, se requiere de un lenguaje de programación que traduce el algoritmo en órdenes a la máquina. 
            br
            p Es importante resaltar que los algoritmos son independientes de los lenguajes de programación, ya que, un mismo algoritmo puede ser traducido a diferentes lenguajes.
          .col-md-6
            figure
              img(src='', alt='computador')
        .row.justify-content-center.align-items-center.my-lg-4   
          .col-md-6
            b Ejemplo de algoritmo para iniciar sesión en una aplicación. 
            br
            figure
             img(src='@/assets/curso/temas/tema1/slide_8_texto.svg', alt='Algoritmo_Inicio_De_sesion')                                    
          .col-md-6
            figure
              img(src='', alt='Inicio_De_sesion')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h6 Tipos de algoritmos
            br
            p Los algoritmos pueden ser gráficos y no gráficos: los algoritmos gráficos son los que representan las operaciones con imágenes, por ejemplo, los diagramas de flujo. Por otra parte, los algoritmos no gráficos tratan las operaciones a través de una forma descriptiva, y entre ellos tenemos al pseudocódigo. 
            br
            p A continuación, se trabajarán ambos tipos de algoritmos de forma más detallada.
          .col-md-6
            figure
              img(src='', alt='pseudocodigo vs diagrama de flujo')
            br

    .row.pt-4
      .titulo-segundo.color-primario
        h2 1.3 Diagramas de flujo

    .row.pt-4.pb-4 
      .col-12
        .row.align-middle 
          .col-12.col-md-3.col-lg-3
            img(src="@/assets/curso/temas/tema1/diagrama_flujo.svg", alt="alt").img100
          .col-12.col-md-9.col-lg-9
              p.pb-2 Los diagramas de flujo son representaciones gráficas de los algoritmos para representar de manera clara, puntual y organizada la información que se desea tratar. También son llamados flujogramas.
              p Los flujogramas cuentan con una simbología establecida por el Instituto Nacional Estadounidense de Estándares (ANSI). A continuación, se relacionan los símbolos más usados:

    .row.pt-4.pb-4 
      .col-12
        .row.align-middle 
          .col-12.col-md-4.col-lg-4
            img(src="@/assets/curso/temas/tema1/diagrama_1.svg", alt="alt").img100
            figcaption Símbolo para Iniciar y Finalizar
          .col-12.col-md-4.col-lg-4
            img(src="@/assets/curso/temas/tema1/diagrama_2.svg", alt="alt").img100
            figcaption Símbolo para realizar una acción o proceso
          .col-12.col-md-4.col-lg-4
            img(src="@/assets/curso/temas/tema1/diagrama_3.svg", alt="alt").img100
            figcaption Símbolo de decisión

    .row.justify-content-center
      .col-12
        .row.align-middle 
          .col-12.col-md-4.col-lg-4
            img(src="@/assets/curso/temas/tema1/diagrama_4.svg", alt="alt").img100
            figcaption Símbolo para las entradas y salidas
          .col-12.col-md-4.col-lg-4
            img(src="@/assets/curso/temas/tema1/diagrama_5.svg", alt="alt").img100
            figcaption Símbolo para conectar

    .row.justify-content-center.pt-5
      .col-8
        .row.align-middle
          .titulo-sexto.color-secundario.mb-2.pr-2
            h5 Tabla 3.
            span Lenguajes compilados Vs. interpretados
        .row
          .col-12
            img(src="@/assets/curso/temas/tema1/diagrama_ejemplo.svg", alt="alt").img100
            figcaption Ejemplo de diagrama de flujo para determinar si un número es positivo o negativo.
      
    .row.justify-content-center.pt-5.mb-5
      fugure 
        img(src="@/assets/curso/temas/tema1/likevsdislike.svg", alt="likevsdislike").img100
         
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/PSe_Int.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Existen herramientas como PSeInt que asisten a los estudiantes para dar sus primeros pasos en programación. PSeInt cuenta con la opción de crear flujogramas. 
          br
          br
          | A continuación, encontrará un video que muestra la instalación de esta herramienta en un sistema operativo Windows y la creación de un diagrama de flujo de ejemplo.
    p.pt3 Te invitamos a ver el tutorial que explica el proceso de instalación de la herramienta Pseint titulado “Instalación de Pseint” de Tordecilla, (2022) y que encuentras en material complementario
    .row.justify-content-center
          .container.tarjeta.tarjeta--blanca.p-3.p-md-5
           figure
              .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video 
    .row.pt-4
      .titulo-segundo.color-primario
        h2 1.4  Pseudocódigo
    .row.justify-content-center.pb-5
      .col-10
        .row.tarjeta--azul.align-middle 
          .col-12.col-md-4.col-lg-4.mt-5
            .tarjeta.h-50.d-flex.p-4.align-middle
              figure
                img(src="@/assets/curso/temas/tema1/pseudocodigo.svg", alt="pseudocodigo").img100
          .col-12.col-md-8.col-lg-8.mt-4
              div.pb-4 
              p.pb-3 El pseudocódigo es un lenguaje que se emplea para documentar los programas paso a paso, de la forma más detalladamente posible. No existe ninguna sintaxis para escribir un pseudocódigo, por lo que se encuentran muchas maneras según la forma particular de escribir del autor.
              p.pb-4 Un pseudocódigo no tiene reglas predefinidas y no se utiliza para programar, sino que se emplea para familiarizarse y acercarse a los lenguajes de programación (Trejos, 2021).                     
    .row.justify-content-center.pt-5
      .col-8
        .row.align-middle
          .titulo-sexto.color-primario.mb-2.pr-2
            h5 Figura 5
            span Algoritmo área del rectángulo
    .row.justify-content-center.pb-5
      .col-8
        .row.tarjeta--gris.align-middle 
          .col-8.col-md-4.col-lg-4.mt-5
            p Algoritmo área_rectangulo.mb-2
            p Inicio
            p       Escribir "Cálculo del área del rectángulo"
            p       Escribir "Digite la base (en centímetros)"  
            p       Leer base
            p       Escribir "Digite la altura (en centímetros)"
            p       Leer altura
            p       altura         base  *  altura
            p       Escribir "Área es: ", base, "centímetros cuadrados"
            p Fin     
    .row.justify-content-center.pt-5
      b Para tener más claridad del concepto de pseudocódigo, a continuación, se presenta el siguiente ejemplo: 
    .row.justify-content-center.pt-5
      .col-12
        .row.align-left
          .titulo-sexto.color-primario.mb-2.pr-2
            h5 Tabla 2.
            span Ejemplo de algoritmo Vs. representación en seudocódigo
    .row.justify-content-center.pt-0
      .col-12
        figure
          img(src="@/assets/curso/temas/tema1/algoritmo_pseudocodigo.svg", alt="cuadro_comparativo").img100
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

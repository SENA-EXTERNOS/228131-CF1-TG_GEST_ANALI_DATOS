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
   
        

      p.center.align-items-center.align-items-lg-stretch Figura 1. Pensamiento computacional.

        .col-12.col-md-10.align-center
            text-center.h-100
              img(src="@/assets/curso/temas/tema1/figura_1.svg")


      br


      titulo-secundario.color-acento-contenido
        .titulo-secundario__numero
        h2 1.2 Algoritmos e instrucciones
        .col-md-10.align-center
          text-center.h-100

      br

      p A continuación, se abordarán los conceptos de algoritmos y sus tipos:

      br

      

    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p Un algoritmo en términos generales es una secuencia de pasos que se deben ejecutar en un orden predefinido, con el fin de realizar una tarea específica o resolver un problema en particular. Un claro ejemplo de los algoritmos, son los manuales, porque en ellos encontramos los pasos para resolver los problemas, como los pasos para armar un artefacto o qué hacer en caso de que se presente algún inconveniente o falla con un dispositivo.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/slide_1.svg', alt='Profesor con alumnos')
              
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0

            h6 Inicio y fin

            br

            p Una característica de los algoritmos es que los pasos que lo conforman deben ser finitos y contar con un principio y un final..

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/slide_2.svg', alt='Profesora y tablero')
           

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
          .col-md-6.mb-4.mb-md-0

            h6 Ejemplo de algoritmo para iniciar sesión en una aplicación

            br

            p  Algoritmo para iniciar sesión:
            p Inicio
            p Paso 1. Cargar formulario de ingreso.
            p Paso 2. Capturar usuario y contraseña.
            p Paso 3. Consultar base de datos.
            p Paso 4. Verificar usuario y contraseña:
            P Si existen y son iguales a los ingresados:
            P    Iniciar sesión.
            P Sí no:
            P    Mostrar error.
            P Fin.
           
          .col-md-6
            figure
              img(src='', alt='ejemplo formulario de ingreso')        

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
            

    .titulo-secundario.color-acento-contenido
        .titulo-secundario__numero
        h2 1.3 Diagramas de flujo
        .col-md-10.align-center
          text-center.h-100
     

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

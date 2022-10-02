<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Principios básicos de programación

    .row.justify-content-center.pb-5
      .col-12.tarjeta.tarjeta--azul
        p.p-3 Programar consiste en escribir detalladamente órdenes que una máquina debe seguir para completar una tarea. Estas órdenes se escriben en un lenguaje que la máquina puede entender de forma directa o a través de un intérprete o compilador. 
        p.p-3 En esta unidad se estudiarán las herramientas más comunes de las que disponen todos los lenguajes de programación.

    .row.pb-3 
       .titulo-segundo.color-primario
        h2 3.1 Tipos de variables

    .row.justify-content-center.pb-5
      .col-12
        p.pb-3 Programar consiste en escribir detalladamente órdenes que una máquina debe seguir para completar una tarea. Estas órdenes se escriben en un lenguaje que la máquina puede entender de forma directa o a través de un intérprete o compilador. 

    .row.justify-content-center.pb-5
      .col-12
        b Tipos de datos:

        .row.justify-content-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/tema3/tipo_dato_estatica.svg", alt="alt").img400.m-auto
          .col-lg-8
            p.pb-2 Los tipos de datos pueden ser:

            SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-4")
              .tarjeta.tarjeta--slyder.p-4.border
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema3/tipo_dato_carrusel_1.svg", alt="alt").img200     
                p.text-center.pb-2 Números: números enteros o de punto flotante.

              .tarjeta.tarjeta--slyder.p-4.border
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema3/tipo_dato_carrusel_2.svg", alt="alt").img100.m-auto        
                p.text-center.pb-2 Texto: son cadenas de caracteres.

              .tarjeta.tarjeta--slyder.p-4.border
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema3/tipo_dato_carrusel_3.svg", alt="alt").img100.m-auto       
                p.text-center.pb-2 Booleanos: toman valores de falso o verdadero.

              .tarjeta.tarjeta--slyder.p-4.border
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema3/tipo_dato_carrusel_4.svg", alt="alt").img100.m-auto       
                p.text-center.pb-2 Listas: una lista es un conjunto de datos

              .tarjeta.tarjeta--slyder.p-4.border
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema3/tipo_dato_carrusel_5.svg", alt="alt").img100.m-auto       
                p.text-center Tuplas: son también un conjunto de datos, pero no se pueden modificar. 

    .row.pb-3 
      .titulo-segundo.color-primario
        h2 3.2 Variables y Operadores Booleanos

    .row.justify-content-center.pb-5
      .col-12
        .row
          .col-12.col-md-4.col-lg-4
            img(src="@/assets/curso/temas/tema3/variables_operadores_1.svg", alt="alt").img100
          .col-12.col-md-8.col-lg-8
            p.pb-3 Las variables están identificadas por un nombre con las siguientes reglas:
            ul.lista-ul
              li 
                i.fas.fa-angle-right.txt--orange
                | El nombre no puede iniciar con un número
              li 
                i.fas.fa-angle-right.txt--orange
                | El nombre debe estar en minúsculas
              li 
                i.fas.fa-angle-right.txt--orange
                | Si el nombre tiene varias palabras, estas se dividen por un guion bajo (_)
              li 
                i.fas.fa-angle-right.txt--orange
                | Seguidamente del nombre de la variable se escribe un símbolo de asignación (=)

    .row.justify-content-center.pb-4
      .col-6
        .titulo-sexto.color-secundario.mb-2.pr-2
          h5 Figura 7.
          span Ejemplo de creación de variables en Python
        .col-12
          img(src="@/assets/curso/temas/tema3/variables_operadores_2.svg", alt="alt").img100

    b.pb-5 Python tiene los siguientes operadores aritméticos:

    .row.justify-content-center.pb-5
      .col-6
        .col-12
          img(src="@/assets/curso/temas/tema3/variables_operadores_3.svg", alt="alt").img100 

    b.pb-3 Operadores booleanos o lógicos:

    p.pb-3 Los operadores booleanos u operadores lógicos son símbolos que actúan como conectores de entre conceptos y se emplean para realizar búsquedas, incrementar o limitar los datos.  Dentro de los operadores booleanos más comunes se encuentran:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Operador AND")
        .col-md-6.mb-4.mb-md-0
          p Este operador sirve para realizar una búsqueda de los elementos comunes entre los dos conjuntos comparados
        .col-md-6
          img(src='@/assets/curso/temas/tema3/operador_booleanos_logico_1.svg', alt='alt').img100

      div(titulo="Operador OR")
        .row
          .col-md-6.mb-4.mb-md-0
            p El operador OR, halla elementos de la unión de los dos conjuntos, por lo tanto, es de utilidad para asociar palabras.
          .col-md-6
            img(src='@/assets/curso/temas/tema3/operador_booleanos_logico_1.svg', alt='alt').img100
      
      div(titulo="Operador NOT")
        .row 
          .col-md-6.mb-4.mb-md-0
            p Con el operador NOT, la búsqueda solo devuelve el elemento que está en el primer conjunto y no en el segundo
          .col-md-6
            img(src='@/assets/curso/temas/tema3/operador_booleanos_logico_1.svg', alt='alt').img100
    
    b.pt-5.pb-5 En Python se trabaja con operadores booleanos así:
    br
    .row.justify-content-center.pt-4.pb-4
      .col-10
        .titulo-sexto.color-secundario.mb-2.pr-2
          h5 Figura 7.
          span Ejemplo de creación de variables en Python
        .col-12
          .tabla-b.color-acento-contenido
            .tabla-b__header
              tr
                th.border-0.m-0.p-0 Operador
                td.border-0.m-0.p-0 Descripción
            table
              tr
                th AND
                td La salida es True si ambos elementos son True.
              tr
                th ORD
                td La salida es True si por lo menos un elemento es True.
              tr
                th NOT
                td La salida devuelve el contrario, por ejemplo, si es False, la salida será True.

    b.pt-5.pb-5 Operador AND en Python:

    .row.justify-content-center.pb-4
      .col-6
        .titulo-sexto.color-secundario.mb-2.pr-2
          h5 Figura 9.
          span Ejemplo de creación de variables en Python
        .col-12
          img(src="@/assets/curso/temas/tema3/operador_booleano_and_1.svg", alt="alt").img100
    
    .row.justify-content-center.pb-4
      .col-6
        .titulo-sexto.color-secundario.mb-2.pr-2
          h5 Figura 10.
          span Ejemplo de creación de variables en Python
        .col-12
          img(src="@/assets/curso/temas/tema3/operador_booleano_and_2.svg", alt="alt").img100

    .row.justify-content-center.pb-4
      .col-6
        .titulo-sexto.color-secundario.mb-2.pr-2
          h5 Figura 11.
          span Ejemplo de creación de variables en Python
        .col-12
          img(src="@/assets/curso/temas/tema3/operador_booleano_and_3.svg", alt="alt").img100

    .row.pb-3 
      .titulo-segundo.color-primario
        h2 3.3 Ciclos (Do While, While y For)

    .row.justify-content-center.pb-5
      .col-12
        .row
          .col-12.col-md-4.col-lg-4
            img(src="@/assets/curso/temas/tema3/ciclos_1.svg", alt="alt").img100
          .col-12.col-md-8.col-lg-8
            p.pb-3 En programación los ciclos o bucles son secuencias de instrucciones que se ejecutan varias veces, hasta cumplir con una condición o que la condición inicial deja de cumplirse.
            p.pb-3 Cabe mencionar que existen dos tipos de ciclos:
            ul.lista-ul
              li 
                i.fas.fa-angle-right.txt--orange
                | Definidos: son los que tienen un número de iteraciones conocidas
              li 
                i.fas.fa-angle-right.txt--orange
                | No definidos: son los que tienen un número de iteraciones desconocidas

    .tarjeta.tarjeta--gris.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            p.pb-3 Ciclo While
            p.pb-3 En esta clase de bucles, el bloque de código se repetirá mientras una condición predefinida se cumpla y se deja repetir o finalizará cuando la condición ya no es verdadera.
            p.pb-3 En el ejemplo de la imagen se observa que:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Se declara una variable i y se le asigna un valor de 0
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Si i < 5 es verdadero se ejecutará el bloque de código que está dentro del bucle, de lo contrario finaliza el ciclo. 
              li 
                .lista-ol--cuadro__vineta
                  span a
                | Dentro del bucle While, la variable i se incrementa en 1 con la instrucción “i + = 1”
              li 
                .lista-ol--cuadro__vineta
                  span b
                | Finalmente se imprime el valor de la variable            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/ciclos_2.svg', alt='alt')
        .row.justify-content-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            p.pb-3 Ciclo While
            p.pb-3 Es un tipo de bucle muy similar al While, con la diferencia que el código se ejecutará una vez antes de evaluar la condición.
            p.pb-3 Es muy útil cuando se necesita que la aplicación se ejecute por lo menos una vez, por ejemplo, en las aplicaciones que reciben datos de los usuarios para validar si cumple o no con un requerimiento.
            p.pb-3 En el código de la imagen se observa que:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Se establece el nombre de la palabra secreta
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Se crea un contador para iniciar en 0
              li 
                .lista-ol--cuadro__vineta
                  span a
                | Dentro del While, se crea una variable llamada palabra que almacenará los datos que ingrese el usuario y luego se comparará con la palabra secreta establecida al principio del código. 
              li 
                .lista-ol--cuadro__vineta
                  span b
                | Si el resultado de la validación es True (verdadera) el ciclo terminará, de lo contrario, continuará hasta que el usuario escriba la palabra secreta o hasta que el contador llegue a 3; es decir, el usuario tendrá 3 intentos antes de finalizar el bucle.
          .col-md-6
            .titulo-sexto.color-secundario.mb-2.pr-2
              h5 Figura 7.
              span Ejemplo de creación de variables en Python
            figure
              img(src='@/assets/curso/temas/tema3/ciclos_3.svg', alt='alt')
        
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            p.pb-3 Ciclo For
            p.pb-3 También es un tipo de bucle similar al While, pero con la diferencia que, la cantidad de iteraciones es conocida desde el principio, mientras que en el ciclo While no. 
            p.pb-3 En los ciclos For las iteraciones están definidas por un rango finito y no están controladas por una condición. En la práctica este tipo de bucles son muy utilizados para recorrer listas y evaluar cada uno de sus elementos.
            p.pb-3 En el ejemplo de la imagen se observa que:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Se tiene una variable i que es iterada 5 veces desde 0
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Imprime el valor de i en cada recorrido del bucle 
              li 
                .lista-ol--cuadro__vineta
                  span a
                | La salida son los números del 0 hasta el 4
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/ciclos_4.svg', alt='')
  
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

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

    #t_3_1.titulo-segundo.color-primario.pb-3
      h2 3.1 Tipos de variables

    .row.justify-content-center.pb-5
      .col-12
        p.pb-3 Una variable es un espacio reservado en la memoria del computador donde se guardan datos u objetos como números, imágenes, texto, entre otros. 

    .row.justify-content-center.pb-5
      .col-12
        h5 Tipos de datos:

        .row.justify-content-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/tema3/tipo_dato_estatica.png", alt="alt").img400.m-auto
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
    
    Separador

    #t_3_2.titulo-segundo.color-primario.pb-3
      h2 3.2 Variables y Operadores Booleanos

    .row.justify-content-center.pb-5
      .col-12
        .row
          .col-12.col-md-3.col-lg-3
            img(src="@/assets/curso/temas/tema3/variables_operadores_1.svg", alt="alt").img100
          .col-12.col-md-7.col-lg-7
            p.ps-3.pb-3 Las variables están identificadas por un nombre con las siguientes reglas:
            ul.lista-ul.ps-3
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
        .titulo-sexto.color-acento-contenido.mb-2.pr-2
          h5 Figura 7.
          br
          em Ejemplo de creación de variables en Python
        .col-12
          img(src="@/assets/curso/temas/tema3/variables_operadores_2.svg", alt="alt").img100

    b.py-5 Python tiene los siguientes operadores aritméticos:

    .row.justify-content-center.py-5
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

    h5.pt-5.pb-3 En Python se trabaja con operadores booleanos así:
    
    .row.justify-content-center.pt-4.pb-4
      .col-10
        .titulo-sexto.color-acento-contenido.mb-2.pr-2
          h5 Tabla 4.
          br
          em Operadores booleanos en Python
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

    h5.pt-5.pb-3 Operador AND en Python:

    .row.justify-content-center.pb-4
      .col-9
        .titulo-sexto.color-acento-contenido.mb-2.pr-2
          h5 Figura 9.
          br
          em Uso de operador AND en Python
        .col-12
          img(src="@/assets/curso/temas/tema3/operador_booleano_and_1.svg", alt="alt").img100
    
    .row.justify-content-center.pb-4
      .col-9
        .titulo-sexto.color-acento-contenido.mb-2.pr-2
          h5 Figura 10.
          br
          em Uso de operador OR en Python
        .col-12
          img(src="@/assets/curso/temas/tema3/operador_booleano_and_2.svg", alt="alt").img100

    .row.justify-content-center.pb-4
      .col-9
        .titulo-sexto.color-acento-contenido.mb-2.pr-2
          h5 Figura 11.
          br
          em Uso de operador NOT en Python
        .col-12
          img(src="@/assets/curso/temas/tema3/operador_booleano_and_3.svg", alt="alt").img100

    Separador

    #t_3_3.titulo-segundo.color-primario.pb-3
      h2 3.3 Ciclos (Do While, While y For)

    .row.justify-content-center.pb-5
      .col-12
        .row
          .col-12.col-md-3.col-lg-3
            img(src="@/assets/curso/temas/tema3/ciclos_1.svg", alt="alt").img100
          .col-12.col-md-7.col-lg-7
            p.ps-3.pb-3 En programación los ciclos o bucles son secuencias de instrucciones que se ejecutan varias veces, hasta cumplir con una condición o que la condición inicial deja de cumplirse.
            p.ps-3.pb-3 Cabe mencionar que existen dos tipos de ciclos:
            ul.ps-3.lista-ul
              li 
                i.fas.fa-angle-right.txt--orange
                | <b class="px-1">Definidos:</b> son los que tienen un número de iteraciones conocidas
              li 
                i.fas.fa-angle-right.txt--orange
                | <b class="px-1">No definidos:</b> son los que tienen un número de iteraciones desconocidas

    .tarjeta.tarjeta--gris.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0.ps-4
            b.pb-3 Ciclo <em>While</em>
            p.pt-3.pb-3 En esta clase de bucles, el bloque de código se repetirá mientras una condición predefinida se cumpla y se deja repetir o finalizará cuando la condición ya no es verdadera.
            p.pb-3 En el ejemplo de la imagen se observa que:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Se declara una variable i y se le asigna un valor de 0
              li 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 Con el ciclo<em class="px-1">While</em>se establece una condición para evaluar si i es menor que 5
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Si i &lt 5 es verdadero se ejecutará el bloque de código que está dentro del bucle, de lo contrario finaliza el ciclo. 
              li 
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 Dentro del bucle <em class="px-1">While</em>, la variable i se incrementa en 1 con la instrucción “i + = 1”
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Finalmente se imprime el valor de la variable            
          .col-md-6.px-4
            .col-12.align-center
              .titulo-sexto.color-acento-contenido.mb-2.pr-2
                h5 Figura 12.
                br
                em Ejemplo de ciclo While en el que se imprimen los números del 1 al 5
            figure
              img(src='@/assets/curso/temas/tema3/ciclos_2.svg', alt='alt').img100
        .row.justify-content-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            b.pb-3 Ciclo <em>Do While</em>
            p.pt-3 Es un tipo de bucle muy similar al While, con la diferencia que el código se ejecutará una vez antes de evaluar la condición.
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
                p.mb-0 Se crea un contador para iniciar en 0 posteriormente se crea el ciclo<em class="px-1">While</em>que se ejecutará por lo menos una vez.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 Dentro del <em class="px-1">While</em>, se crea una variable llamada palabra que almacenará los datos que ingrese el usuario y luego se comparará con la palabra secreta establecida al principio del código.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Si el resultado de la validación es True (verdadera) el ciclo terminará, de lo contrario, continuará hasta que el usuario escriba la palabra secreta o hasta que el contador llegue a 3; es decir, el usuario tendrá 3 intentos antes de finalizar el bucle.
          .col-md-6
            .titulo-sexto.color-acento-contenido.mb-2.pr-2
              h5 Figura 13.
              br
              em Ejemplo de ciclo Do While.
            figure
              img(src='@/assets/curso/temas/tema3/ciclos_3.svg', alt='alt').img100
        
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            b.pb-3 Ciclo <em>For</em> 
            p.pb-3 También es un tipo de bucle similar al<em class="px-1">While</em>,pero con la diferencia que, la cantidad de iteraciones es conocida desde el principio, mientras que en el ciclo<em class="px-1">While</em>no. 
            p.pb-3 En los ciclos<em class="px-1">For</em>las iteraciones están definidas por un rango finito y no están controladas por una condición. En la práctica este tipo de bucles son muy utilizados para recorrer listas y evaluar cada uno de sus elementos.
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
                  span 3
                | La salida son los números del 0 hasta el 4
          .col-md-6
            .titulo-sexto.color-acento-contenido.mb-2.pr-2
              h5 Figura 14.
              br
              em Ejemplo de ciclo For.
            figure
              img(src='@/assets/curso/temas/tema3/ciclos_4.svg', alt='').img100

    Separador

    #t_3_4.titulo-segundo.color-primario.p-3
      h2 3.4  Condicionales

    .row.justify-content-center
      .col-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Los condicionales sirven para modificar el flujo en la ejecución de la aplicación, de modo que, con ellos se puede controlar qué bloque de código es ejecutado y en qué momento, de acuerdo con las entradas que ingresan al programa. 
            .col-4.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/tema3/condicionales.svg").img100
         
    .row.pt-5
      .container.tarjeta.tarjeta--blanca
        TabsC.color-primario
          .py-3.py-md-4(titulo="Condicional IF")
            .row
              .col-md-6
                p.pb-2 Se utiliza cuando se desean comparar las entradas en un programa y ejecutar un bloque de código si cumple una condición.
                p.pb-2 Por ejemplo, se tienen dos valores “m” y “n” para realizar una división, pero antes es importante verificar que “n” sea distinto de cero.
                p.pb-2 El código en Python para realizar este algoritmo es el que se aprecia en la imagen:
              .col-md-6.p-4
                .titulo-sexto.color-acento-contenido.mb-2.pr-2
                  h5 Figura 15.
                  br
                  em Código Python para realizar la división de dos números
                figure
                  img(src='@/assets/curso/temas/tema3/condicional_if.svg', alt='alt').img100
 
          .py-3.py-md-4(titulo="Condicionales else y elif")
            .row
              .col-md-6
                p.pb-2 El <em>else</em> se utiliza cuando, después de validar una condición, se quiere ejecutar instrucciones que no cumplen con lo propuesto y el elif, se utiliza en los casos donde hay varias condiciones que requirieren códigos distintos. 
                p.pb-2 A continuación, se ilustra un ejemplo con los condicionales <em>else</em> y <em>elif</em> en el lenguaje de programación Python:
              .col-md-6.pb-4
                .titulo-sexto.color-acento-contenido.mb-2.pr-2
                  h5 Figura 16.
                  br
                  em Ejemplo de condicionales else y elif en Python
                figure
                  img(src='@/assets/curso/temas/tema3/condicional_elif.svg', alt='alt').img100

    Separador

    #t_3_5.titulo-segundo.color-primario
      h2 3.5  Arreglos               
    
    .row.justify-content-center.pt-4.pb-4 
      .col-10
        .row.align-middle 
          .col-12.col-md-3.align-center
            img(src="@/assets/curso/temas/tema3/arreglos.svg", alt="arreglos_imagen").img50
          .col-12.col-md-9.col-lg-9
              p.pb-2 En programación un arreglo es un identificador que hace referencia a una colección de datos, los cuales son del mismo tipo, por ejemplo, el conjunto de los números 1, 2, 3, 4 y 5. 
              p.pb-4 Para acceder y/o modificar la información que está dentro del arreglo se utilizan índices que ubican la posición del dato que se quiere tratar. 
    
    .row.justify-content-center.pt-5
      .col-8
        .row.align-middle
          .titulo-sexto.color-acento-contenido.mb-2.pr-2
            h5 Figura 17.
            br
            em Ejemplo de un arreglo en Python
        .row
          .col-12
            img(src="@/assets/curso/temas/tema3/array_example.svg", alt="array_example").img100
    
    .row.justify-content-center.pb-5.pt-5
      .col-10
        .cajon.color-acento-botones.p-4
          p En el ejemplo de la imagen, el resultado sería imprimir el dato que se encuentra en la posición 1 del arreglo, el cual es el número 2, ya que, las posiciones empiezan con el índice 0.
    
    Separador    

    #t_3_6.titulo-segundo.color-primario.pt-3
      h2 3.6  Listas
    
    .row.justify-content-center.pt-3
      .col-12
        p.b-3 Las listas a diferencia de los arreglos, permiten guardar datos de cualquier tipo y pueden ser dinámicas o variables para proporcionar flexibilidad en la manipulación de la información. 
        p.b-3 La siguiente lista está formada por un número entero, una cadena de carácter y un número flotante:
    
    .row.justify-content-center.pt-3
      .col-md-8
        .row-align-middle  
          .titulo-sexto.color-acento-contenido.mb-2.pr-2
            h5 Figura 18.
            br
            em Ejemplo de una lista en Python
        .row.pb-5
          .col-12
            img(src="@/assets/curso/temas/tema3/lista.svg", alt="ejemplo_de_lista").img100
    
    Separador

    #t_3_7.titulo-segundo.color-primario.pt-3
      h2 3.7 Tuplas
    
    .row.justify-content-center
      .col-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Las tuplas, a diferencia de las listas, no son dinámicas. Lo que significa que, no permiten modificaciones en sus elementos, pero en términos de rendimiento son más eficientes:
            .col-4.mb-4.mb-lg-0(data-aos="fade-left")
              figure.max-width-80
                img(src="@/assets/curso/temas/tema3/tuplas.svg").img100
    
    .row.justify-content-center.pt-5
      .col-8
        .row.align-middle
          .titulo-sexto.color-acento-contenido.mb-2.pr-2
            h5 Figura 19.
            br
            em Ejemplo de una tupla en Python
        .row.pb-5
          .col-12
            img(src="@/assets/curso/temas/tema3/tuplas_2.svg", alt="tuplas_2").img100

    Separador

    #t_3_8.titulo-segundo.color-primario.pt-5
        h2 3.8  Funciones

    .row.justify-content-center.pt-3
      .col-2.pb-3.md-5
        figure
          img(src="@/assets/curso/temas/tema3/funciones.svg", alt="tuplas_2").img100
      .col-10.pb-3.md-5
        p Las funciones son bloques de código que se usan para realizar una tarea específica y que permiten ser reutilizadas en cualquier parte del programa sin necesidad de volver a escribir las instrucciones que la conforman. 
        p.pt-2 Los lenguajes de programación como Python cuentan con funciones nativas como len (), que obtienen la longitud de una lista, pero también se pueden crear funciones personalizadas con instrucciones y finalidad definidas por el programador.
    
    .row.justify-content-center.pb-5.pt-5
      .col-8
        .cajon.color-acento-botones.p-4
          p En Python para crear una función se empieza con la palabra reservada <b>def</b>. 

    b.pt-3.pb-3  A continuación, se define de forma general la estructura de una función: 
    .row.justify-content-center.pt-5
      .col-8
        .row.align-middle
          .titulo-sexto.color-acento-contenido.mb-2.pr-2
            h5 Figura 20.
            br
            em Ejemplo de una función en Python
          .col-12.pb-3
            figure
              img(src="@/assets/curso/temas/tema3/funcion_example.svg", alt="funcion").img50
    
    Separador

    #t_3_9.titulo-segundo.color-primario.pt-5
      h2 3.9  Matrices

    .row.justify-content-center.pt-3
      .col-12
        .row  
          .col-2.pb-3.md-5
            figure
              img(src="@/assets/curso/temas/tema3/matrices.svg", alt="matrices").img50
          .col-10.pb-3.md-5
            p Las matrices son estructuras de datos que están conformadas por filas y columnas (como una tabla en Excel), también se les conoce como arreglos multidimensionales.
            p.pt-2 Python no tiene un tipo de datos predeterminado para tratar las matrices, sin embargo, se puede ver una lista de una lista como matriz, por ejemplo:
    .row.justify-content-center.pt-5
      .col-8
        .row.align-middle
          .titulo-sexto.color-acento-contenido.mb-2.pr-2
            h5 Figura 21.
            br
            em Ejemplo del manejo de una lista como una matriz en Python
          .col-12.pb-3
            figure
              img(src="@/assets/curso/temas/tema3/matrices_2.svg", alt="matrices").img50

</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema3',
  components: { Separador },
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

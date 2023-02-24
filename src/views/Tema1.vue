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

    h3 Pensamiento computacional 
      
    .row.justify-content-center
      .col-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Para Adell, #[i et al.], (2019), el pensamiento computacional “Implica resolver problemas, diseñar sistemas y comprender el comportamiento humano, basándose en los conceptos fundamentales de la ciencia de la computación” (pag. 3). 
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
              figure.max-width-80 
                img(src="@/assets/curso/temas/tema1/pensamiento_computacional.svg").img100

      .col-12.pt-5
       p El pensamiento computacional fomenta las habilidades que tienen las personas para resolver problemas, ya que, este tipo de pensamiento implica descomponer un problema en unidades más pequeñas e identificar los patrones y características comunes de estas partes, para luego enfocarse en la información relevante y finalmente, solucionar el problema paso a paso a través de algoritmos.
   
      p.center.align-items-center.align-items-lg-stretch 
      
      .col-12.col-md-10.align-center.mb-5
        .titulo-sexto.color-acento-contenido.mb-2.pr-2
          h5 Figura 1
          br
          em Pensamiento computacional
        figure
          img(src="@/assets/curso/temas/tema1/figura_1.svg")
      
    h3 Algoritmos e instrucciones
      
    .tarjeta.tarjeta--gris.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            p Un algoritmo en términos generales es una secuencia de pasos que se deben ejecutar en un orden predefinido, con el fin de realizar una tarea específica o resolver un problema en particular. Un claro ejemplo de los algoritmos, son los manuales, porque en ellos encontramos los pasos para resolver los problemas, como los pasos para armar un artefacto o qué hacer en caso de que se presente algún inconveniente o falla con un dispositivo.
          .col-md-6
            figure.border-end-5.border-light
              img(src='@/assets/curso/temas/tema1/algoritmos_instrucciones_1.png')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            h5 Inicio y fin
            br
            p Una característica de los algoritmos es que los pasos que lo conforman deben ser finitos y contar con un principio y un final.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/algoritmos_instrucciones_2.png')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            h5 Ejemplo de un algoritmo en la vida cotidiana
            br
            p Nombre del algoritmo: realizar una llamada.
            p #[b Paso 1.] Encender el teléfono.
            p #[b Paso 2.] Marcar el número del destino. 
            p #[b Paso 3.] Si contestan: 
            ul.lista-ul.ps-3
              li 
                i.fas.fa-angle-right.ps-3
                p.mb-0 Saludar.
              li 
                i.fas.fa-angle-right.ps-3
                p.mb-0 dialogar con la persona.
              li 
                i.fas.fa-angle-right.ps-3
                p.mb-0 despedirse. 
              li 
                i.fas.fa-angle-right
                p.mb-0 Si no contestan:
              li 
                i.fas.fa-angle-right
                p.mb-0 Volver al paso 2.
            p #[b Paso 4.] Colgar la llamada.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/algoritmos_instrucciones_3.png')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            br
            p Como se muestra en el ejemplo anterior, los algoritmos están presentes en muchas situaciones de la vida cotidiana y no son solamente fórmulas matemáticas complejas.  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/algoritmos_instrucciones_4.png')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            h5 Ejemplo 2: una receta de cocina.
            br
            p Para mayor claridad respecto al concepto de algoritmos, se revisará otro ejemplo clásico donde se describen los pasos para preparar una comida:
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/1.png')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            h5 Algoritmos = Programación
            br
            p Ahora bien, los algoritmos se asocian con la programación porque para crear un sistema o aplicación como juegos o software, se necesitan los pasos ordenados y predefinidos para crear dicho sistema. 
            br
            p Los algoritmos son el núcleo, la base de los programas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/algoritmos_instrucciones_6.png')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            h5 Lenguajes y algoritmos
            br
            p Para que la máquina (computador o dispositivo) entienda los pasos o instrucciones que contienen los algoritmos, se requiere de un lenguaje de programación que traduce el algoritmo en órdenes a la máquina. 
            br
            p Es importante resaltar que los algoritmos son independientes de los lenguajes de programación, ya que, un mismo algoritmo puede ser traducido a diferentes lenguajes.
          .col-md-6
            figure.border
              img(src='@/assets/curso/temas/tema1/algoritmos_instrucciones_7.png')
        .row.justify-content-center.align-items-center   
          .col-md-5
            b Ejemplo de algoritmo para iniciar sesión en una aplicación. 
            br
            p Algoritmo para iniciar sesión: 

            p Inicio
            p Paso 1. #[b Cargar formulario de ingreso.]
            p Paso 2. #[b Capturar usuario y contraseña.]
            p Paso 3. #[b Consultar base de datos.]
            p Paso 4. #[b Verificar usuario y contraseña.]
            p #[b Si existen y son iguales a los ingresados: ]
            ul.lista-ul.ps-3
              li 
                i.fas.fa-angle-right.ps-3
                p.mb-0 #[b iniciar sesión.]
            p Sí no son iguales: 
            ul.lista-ul.ps-3
              li 
                i.fas.fa-angle-right.ps-3
                p.mb-0 #[b mostrar error.]
            p Fin
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/2.png')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            h5 Tipos de algoritmos
            br
            p Los algoritmos pueden ser gráficos y no gráficos: los algoritmos gráficos son los que representan las operaciones con imágenes, por ejemplo, los diagramas de flujo. Por otra parte, los algoritmos no gráficos tratan las operaciones a través de una forma descriptiva, y entre ellos tenemos al pseudocódigo. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/3.png')

    h3 Diagramas de Flujo

    .row.pt-4.pb-4 
      .col-12
        .row.align-middle 
          .col-12.col-md-3.col-lg-3
            img(src="@/assets/curso/temas/tema1/diagrama_flujo.svg", alt="alt").img100
          .col-12.col-md-9.col-lg-9
              p.pb-2 Los diagramas de flujo son representaciones gráficas de los algoritmos para representar de manera clara, puntual y organizada la información que se desea tratar. También son llamados flujogramas.
              p Los flujogramas cuentan con una simbología establecida por el Instituto Nacional Estadounidense de Estándares (ANSI). A continuación, se relacionan los símbolos más usados:

    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure 
              img(src="@/assets/curso/temas/tema1/diagrama_1.svg", alt="alt")
          .crd_hover_txt--body
            h5.mb-3 Símbolo para Iniciar y Finalizar:
            p.mb-0 este símbolo comúnmente contiene la palabra “Inicio” o “Fin”. 

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/diagrama_2.svg", alt="alt")
          .crd_hover_txt--body
            h5.mb-3 Símbolo para realizar una acción o proceso: 
            p.mb-0 es representado por un rectángulo y solo se permite realizar un solo paso por proceso (cortar las papas) o bien sea un subproceso completo (hacer papas fritas).

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/diagrama_3.svg", alt="alt")
          .crd_hover_txt--body
            h5.mb-3 Símbolo de decisión:
            p.mb-0 es ilustrado por un rombo que representa la toma de decisiones dependiendo de la condición evaluada, con base en los valores falso o verdadero.

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/diagrama_4.svg", alt="alt")
          .crd_hover_txt--body
            h5.mb-3 Símbolo para las entradas y salidas:
            p.mb-0 es ilustrado por un paralelogramo que representa los datos que entran y salen del sistema.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/diagrama_5.svg", alt="alt")
          .crd_hover_txt--body
            h5.mb-3 Símbolo para conectar:
            p.mb-0 es representado por un círculo que indica continuación del flujo donde se coloca un símbolo similar que contiene la misma letra.

    p.mt-5 La siguiente figura muestra un ejemplo de diagrama de flujo para determinar si un número es positivo o negativo:

    .row.justify-content-center.pt-5
      .col-8
        .row.align-middle
          .titulo-sexto.color-acento-contenido.mb-2.pr-2
            h5 Figura 2
            br
            em Ejemplo de diagrama de flujo
        .row
          .col-12
            img(src="@/assets/curso/temas/tema1/diagrama_ejemplo.svg", alt="alt").img100

    p.my-5 El uso de flujogramas puede acarrear algunos beneficios pero, al mismo tiempo, algunas desventajas:      
    .row.justify-content-center.ps-3.pe-3.pb-5
      .col-12.col-md-6.tarjeta.back-like.p-0
        .row.justify-content-center
          .figure.col-5.p-0
            img(src="@/assets/curso/temas/like.svg", alt="alt").img50
        .row.justify-content-center.p-0  
          .col-8.pb-5
            b.title-like Ventajas de los diagramas de flujo:
        .row.justify-content-center.pb-5  
          .col-7
            ul.lista-ul.m-0
              li.mb-0
                i.fas.fa-angle-right
                | Ayudan a comprender la lógica de la programación.
              li.mb-0
                i.fas.fa-angle-right
                | Contribuyen en la detección de errores.
              li.mb-0
                i.fas.fa-angle-right
                | Facilitan la identificación de procesos.
              li.mb-0
                i.fas.fa-angle-right
                | Son útiles para mostrar al cliente las fases o transacciones que realiza el sistema.

      .col-12.col-md-6.tarjeta.back-dislike.p-0
        .row.justify-content-center
          .figure.col-5.p-0
            img(src="@/assets/curso/temas/dislike.svg", alt="alt").img50
        .row.justify-content-center.p-0  
          .col-8.pb-5
            b.title-like Desventajas de los diagramas de flujo:
        .row.justify-content-center.pb-5  
          .col-7
            ul.lista-ul.m-0
              li.mb-0
                i.fas.fa-angle-right
                | Son difíciles para realizarles cambios en su estructura o diseño.
              li.mb-0
                i.fas.fa-angle-right
                | No son recomendables para la lógica de programas complejos.
              li.mb-0
                i.fas.fa-angle-right
                | Pueden retrasar el desarrollo del <em class="ps-1">software</em>.

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/tema1/pseint.png", alt="alt", style="width:150px").img100
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0.pb-4 Existen herramientas como <b>PSeInt</b> que asisten a los estudiantes para dar sus primeros pasos en programación. <b>PSeInt</b> cuenta con la opción de crear flujogramas.  
            p.mb-0 A continuación, encontrará un video que muestra la instalación de esta herramienta en un sistema operativo Windows y la creación de un diagrama de flujo, como ejemplo:
   
    
    .row.justify-content-center
      .container.tarjeta.tarjeta--blanca.p-3.p-md-5
        figure
          .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/b2YEEuNMA3U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
           
    
    h3 Pseudocódigo

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

    p.mt-5 Preste atención a lo expuesto en el siguiente esquema:
    .row.justify-content-center.pt-5
      .col-6
        .row.align-middle
          .titulo-sexto.color-acento-contenido.mb-2.pr-2
            h5 Figura 3
            br
            em Algoritmo área del rectángulo
    
    .row.justify-content-center.pb-5
      .col-6
        .row.tarjeta--gris
          .col-12.pt-5.pb-5.code
            p.ms-2 Algoritmo área_rectangulo.mb-2
            p.ms-2 Inicio
            p.ms-5 Escribir "Cálculo del área del rectángulo"
            p.ms-5 Escribir "Digite la base (en centímetros)"  
            p.ms-5 Leer base
            p.ms-5 Escribir "Digite la altura (en centímetros)"
            p.ms-5 Leer altura
            p.ms-5 altura base  *  altura
            p.ms-5 Escribir "Área es: ", base, "centímetros cuadrados"
            p.ms-2 Fin     
    
    h5.pt-5.pb-5 Es importante tener mayor claridad sobre el concepto pseudocódigo; para lograrlo, analice con atención el ejemplo que se expone en la siguiente tabla: 

    .titulo-sexto.color-acento-contenido.mb-2.pr-2
      h5 Tabla 1
      br
      em Ejemplo de algoritmo, versus representación en pseudocódigo

    .tabla-a
      table
        thead
          tr
            th Algoritmo
            th Pseudocódigo
        tbody
          tr
            td.tarjeta--gris 
              .row.justify-content-center.pb-5
                .col-12
                  p.pb-2.ms-3 <b>Paso 1.</b> Solicitar los datos de un usuario (nombre, valor por hora, número de horas laboradas).
                  p.pb-2.ms-3 <b>Paso 2.</b> Condicionado al número total de horas trabajadas en la semana:
                  ol.lista-ol--cuadro.pb-2.ms-3
                    li 
                      .lista-ol--cuadro__vineta.color-primario
                        span a
                      | Si el número de horas no es mayor a 40, hacer el cálculo sin horas extras.
                    li 
                      .lista-ol--cuadro__vineta
                        span b
                      | Si el número de horas es mayor a 40, realizar el cálculo del sueldo, teniendo en cuenta que, la hora extra se cancela con 1.5% más por encima del valor de la hora normal.
                  p.ms-3 <b>Paso 3.</b> Presentar el nombre del usuario y el respectivo salario que va a recibir.
            td.tarjeta--gris 
              .row.justify-content-center.pb-5
                .col-12
                  .code.ps-3
                    p.ms-2 Inicio
                    p.ms-2 Defina Nombre= '  ', ValorHr = 0
                    p.ms-2 Defina Hrs_Lab = 0, Salario = 0
                    p.ms-2 Presentar 'Digite los datos del usuario'
                    p.ms-2 Capturar Nombre, ValorHr, Hrs_Lab
                    p.ms-3.ps-2  Si Hrs_Lab <=40
                    p.ms-4.ps-3 Entonces
                    p.ms-5.ps-4    Salario= Hrs_Lab * ValorHr
                    p.ms-4.ps-3 Sino
                    p.ms-5.ps-4    Salario=40 * ValorHr + (Hrs_Lab - 40)*(1.5*ValorHr)
                    p.ms-3.ps-2 FinSi
                    p.ms-2 Presentar 'El salario de', Nombre, 'es', Salario

                    p.ms-2 Fin
</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema1',
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

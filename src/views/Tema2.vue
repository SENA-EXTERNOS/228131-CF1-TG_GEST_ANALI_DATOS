<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Entorno de Desarrollo
  
    .row.justify-content-center
      .col-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Los entornos de desarrollo o entornos de desarrollo integrado, también llamados IDE, por sus siglas en inglés <em>(Integrated Development Environment)</em>, son aplicaciones informáticas especializadas que emplean los programadores para escribir el código fuente en cualquiera de los lenguajes de programación existentes como son: <em>Python, PHP, Javascript, Java, C, C++, C#, GO</em>, Ruby entre otros.
            .col-4.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/tema2/introduccion.svg").img100
    
    p.mb-5 Este tipo de aplicaciones ofrecen herramientas como la depuración de errores y automatización de compilaciones locales, que le proporcionan al programador o desarrollador de 
      em software
      | , ser más eficientes en la codificación de los programas.

    .row.justify-content-center.mb-5
      .col-10
        b ¿Por qué los programadores utilizan los Entornos de Desarrollo Integrado IDE?

    .row.justify-content-center.mb-5
      .col-10.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema2/introduccion_2.svg", alt="alt", style="width: 400px;").img250
        .crd.crd--avatarHorizontal.crd--first.clr--azul.py-4.back-yellow
          .row.align-items-center
            .col-8.ms-4
              p Los IDE permiten que los programadores inicien a desarrollar nuevas aplicaciones con gran rapidez, debido a que, con ellos no se requiere preparar ni combinar de forma manual las herramientas que hacen parte de los procesos de configuración. También aportan en la optimización del tiempo con el auto relleno inteligente de código, lo cual suprime la necesidad de escribir secuencias enteras de caracteres.
        .crd.crd--avatarHorizontal.py-4.back-yellow-2
          .row.align-items-center
            .col-8.ms-4
              p Otra característica fundamental de los IDE es el análisis de código en tiempo real, esto permite que, mientras se está codificando, se pueden visualizar los errores en las líneas de código y hasta las posibles correcciones.
        .crd.crd--avatarHorizontal.crd--first.clr--azul.py-4.back-yellow
          .row.align-items-center
            .col-8.ms-4
              p Es importante destacar que es posible crear programas sin utilizar ningún IDE o que los programadores diseñen un IDE personalizado que integre varias herramientas de forma manual, como los editores de texto: <em>Notepad++, VIM, Sublime Text</em>, entre otros. Sin embargo, en los entornos empresariales, es altamente beneficioso minimizar tiempos con la estandarización de un IDE, a invertirlo en las opciones manuales, por lo que la mayor parte de las organizaciones prefieren los IDE preconfigurados que se adaptan a sus casos de usos particulares.

  
    b Tipos de IDE
    p Existen opciones tanto comerciales como open source en el mercado que suplen la demanda existente. Entre las características que distinguen los IDE resaltan las siguientes:

    .row
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones       
          .tarjeta.clr--gris(titulo="Cantidad de lenguajes soportados:")
            .row.tarjeta.tarjeta--azul.align-middle 
              .col-12.col-md-8.col-lg-8
                .tarjeta.d-flex.p-4.align-middle
                  p.mb-4 Existen IDE que solamente son compatibles con un lenguaje de programación, por lo tanto, son mejores para un estilo de programación en especial, entre ellos, tenemos como ejemplo a IntellinJ, que se conoce como un IDE exclusivo para Java. Por otra parte, están los IDE que soportan varios lenguajes de programación, como es el caso de Eclipse, con el que se puede programar en 
                    em Java, Python, JavaScript
                    | , PHP, C++, entre otros.
              .col-12.col-md-4.col-lg-4
                .tarjeta.h-50.d-flex.p-4.align-middle
                  figure
                    img(src="@/assets/curso/temas/tema2/tipo_ide_1.svg", alt="alt").img100
          .tarjeta.clr--gris(titulo="Sistemas operativos soportados:")
            .row.tarjeta.tarjeta--azul.align-middle 
              .col-12.col-md-8.col-lg-8
                .tarjeta.d-flex.p-4.align-middle
                  p.mb-4 En función del sistema operativo que utiliza el programador se establece el tipo de IDE que es compatible, con excepción de los IDE que están implementados en la nube, los cuales al contar con acceso web son multiplataforma. También está condicionado por el sistema operativo al que está destinada la aplicación que se va a desarrollar, por ejemplo, si es una aplicación para <em>Android o iOS</em>.
              .col-12.col-md-4.col-lg-4
                .tarjeta.h-50.d-flex.p-4.align-middle
                  figure
                    img(src="@/assets/curso/temas/tema2/tipo_ide_2.svg", alt="alt")

          .tarjeta.clr--gris(titulo="Performance:")
            .row.tarjeta.tarjeta--azul.align-middle 
              .col-12.col-md-8.col-lg-8
                .tarjeta.d-flex.p-4.align-middle
                  p.mb-4 El programador debe tener en cuenta si el IDE se va a ejecutar en conjunto con otras herramientas que requieran mucha memoria, dado que, el rendimiento del IDE puede verse afectado, realizando sus operaciones con lentitud.
              .col-12.col-md-4.col-lg-4
                .tarjeta.h-50.d-flex.align-middle
                  figure
                    img(src="@/assets/curso/temas/tema2/tipo_ide_3.svg", alt="alt")

          .tarjeta.clr--gris(titulo="Extensiones y Plugins:")
            .row.tarjeta.tarjeta--azul.align-middle 
              .col-12.col-md-8.col-lg-8
                .tarjeta.d-flex.p-4.align-middle
                  p.mb-4 <b>Extensiones y <em>Plugins</em>:</b> existen IDE que admiten la personalización de los flujos de trabajo, de tal forma que, el programador lo puede adaptar a lo que necesite y prefiere.
              .col-12.col-md-4.col-lg-4
                .tarjeta.h-50.d-flex.p-4.align-middle
                  figure
                    img(src="@/assets/curso/temas/tema2/tipo_ide_4.svg", alt="Texto que describa la imagen")

    Separador

    #t_2_1.titulo-segundo.color-primario.pt-5
      h2 2.1 Lenguajes compilados y lenguajes interpretados

    p.mb-5 A continuación, podrá conocer acerca de algunos lenguajes, lo que le permitirá comprender mejor los conceptos de programación:

    .row.justify-content-center.mb-5
      .col-10
        .cajon.color-primario
          .tarjeta--azul.align-middle
            .tarjeta.d-flex.p-4.align-middle
              p Cuando se inicia en el mundo del desarrollo de 
                em software
                | , la selección del lenguaje de programación es uno de los factores que más se tiene en cuenta para dar los primeros pasos.  También es fundamental conocer si el lenguaje elegido es compilado o interpretado.
  
    .row.pb-5
      .container.tarjeta.tarjeta--blanca
        TabsC.color-primario
          .py-3.py-md-4(titulo="Lenguajes Compilados", style="font-weight:bolder;")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema2/lenguaje_compilado.svg', style="width: 300px;", alt='Texto que describa la imagen')
              .col-md-6
                p Este tipo de lenguaje de programación traduce el código fuente en sentencias que la máquina puede entender. Estas sentencias son agrupadas en un archivo binario ejecutable, que, por lo general, está limitado a un determinado sistema, permitiendo que se puedan ejecutar sin la instalación de otro programa complementario, ya que todo lo que necesita para funcionar correctamente se encuentra embebido en ese único archivo ejecutable. Entre los lenguajes compilados está <em>C, C++, Swift, Go, Ada</em>, entre otros.
          .py-3.py-md-4(titulo="Lenguajes Interpretados", style="font-weight:bolder;")
            .row
              .col-md-6.p-4
                figure
                  img(src='@/assets/curso/temas/tema2/lenguaje_interpretado.svg', style="width: 300px;", alt='Texto que describa la imagen')
              .col-md-6
                p En un lenguaje interpretado el código fuente se ejecuta en caliente, instrucción a instrucción o paso a paso, por lo tanto, el código no es expuesto a un proceso de compilación, sino que existe un programa complementario que se llama intérprete, que se encarga de leer las instrucciones en tiempo real y las va ejecutando una a una.  Entre los lenguajes interpretados están: <em>Python, Perl, JavaScript, Ruby, PHP, MATLAB, Visual Basic .NET, ASP</em> entre otros. 

    p.pb-3 <b>Lenguajes Compilados VS Interpretados</b>

    .titulo-sexto.color-acento-contenido.mb-2.pr-2
      h5 Tabla 3.
      br
      em Lenguajes compilados Vs. interpretados

    .tabla-a
      table
        thead
          tr
            th Lenguajes compilados
            th Lenguajes interpretados
        tbody
          tr
            td Para que la aplicación se ejecute, primero se debe terminar de codificar el programa.
            td Se ejecuta instrucción a instrucción, por lo tanto, no se requiere terminar de codificar el programa para que funcione.
          tr
            td La compilación se realiza una sola vez y solamente será necesario volver a compilar cuando se requieran cambios en el código fuente.
            td Cada vez que se ejecute la aplicación se debe interpretar el código fuente.
          tr
            td Se emplean mayormente en aplicaciones de escritorio.
            td Se utilizan principalmente en aplicaciones web.
          tr
            td Se usan cuando la prioridad es la eficiencia.
            td Se aplican cuando la prioridad es la portabilidad, en otras palabras, cuando la preocupación es que la aplicación pueda ejecutarse sobre cualquier plataforma.
          tr
            td La aplicación obtenida con estos lenguajes es más eficiente y rápida.
            td La aplicación tiende a ser un poco más lenta que las aplicaciones compiladas.
          tr
            td Los archivos ejecutables por lo general tienen un tamaño considerable en disco.
            td Los ejecutable generados son de un reducido tamaño y no consumen mucho espacio en disco.
      
    Separador

    #t_2_2.titulo-segundo.color-primario
      h2 2.2 
        em Python 
        | y/o R

    .row.justify-content-center.pb-5
        .col-12
          .row.align-middle 
            .col-12.col-md-4.col-lg-4
              .tarjeta.h-50.d-flex.p-4.align-middle
                figure
                  img(src="@/assets/curso/temas/tema2/python_1.svg", alt="alt").img100
            .col-12.col-md-8.col-lg-8.mt-4
                p.pt-2 La analítica de datos es un campo de trabajo emocionante que combina habilidades estadísticas y cuantitativas avanzadas con habilidades de programación del mundo real. Los aspirantes a científicos de datos pueden considerar especializarse en muchos lenguajes de programación. En este componente formativo el enfoque estará en el uso de 
                  em Python.
                p.pb-2 La habilidad de programar es fundamental en la gestión y analítica de datos, no obstante, hay algunos lenguajes como 
                  em Python, R, MATLAB y SQL 
                  | que se destacan como los principales y más usados en dicha gestión. En este componente formativo el enfoque estará en el uso de 
                  em Python.

    .row.justify-content-center.pb-5
      .col-10
        .row.tarjeta--azul.align-middle 
          .col-12.col-md-4.col-lg-4.mt-5
            .tarjeta.h-50.d-flex.p-4.align-middle
              figure
                img(src="@/assets/curso/temas/tema2/python_2.svg", alt="alt").img100
          .col-12.col-md-8.col-lg-8.mt-4
              div.pb-4 
                b Lenguaje de programación 
                  em Python
              p.pb-4 
                em Python 
                | es un lenguaje de programación multiplataforma y open source que puede ser empleado para desarrollos 
                em web
                | , analítica de datos, automatización de operaciones y en la elaboración de programas escalables. Grandes gigantes tecnológicos como Google, Netflix y Facebook utilizan este lenguaje como base de servicios.
          

    .row.justify-content-center.pb-5
      .col-12
        .row.align-middle 
          .col-12.col-md-6.col-lg-6.mt-4
              div.mb-4
                b Ventajas de programar en 
                  em Phyton
              ul.lista-ul.mb-0
                
                li                 
                  i.fas.fa-angle-right.txt--orange
                  | Rápido de aprender: su curva de aprendizaje es corta.
                li                 
                  i.fas.fa-angle-right.txt--orange
                  | Potente y multifuncional: se utiliza prácticamente en todas las ramas de la tecnología.
                li                 
                  i.fas.fa-angle-right.txt--orange
                  | Simple y práctico: para crear aplicaciones se necesitan menos líneas de código que en otros lenguajes como Java, C, C++, entre otros.
                li                 
                  i.fas.fa-angle-right.txt--orange
                  p.mb-0 Amplia documentación: 
                    em Python 
                    | cuenta con una enorme comunidad que soporta el lenguaje y es de gran utilidad cuando se necesita apoyo para resolver cualquier duda en su manejo.
                li                 
                  i.fas.fa-angle-right.txt--orange
                  | Colección de Bibliotecas: las bibliotecas también conocidas como librerías son importantes porque permiten la reutilización de código y aumentan la rapidez en el desarrollo.
          .col-12.col-md-6.col-lg-6
            .titulo-sexto.color-acento-contenido.mb-2.pr-2
              h5 Figura 6.
              br
              em Características de python.
            .tarjeta.h-50.d-flex.p-4.align-middle
              figure.tarjeta--blanca
                img(src="@/assets/curso/temas/tema2/python_3.svg", alt="alt").img100
    

    p Le invitamos a ver el video donde se muestra la instalación de 
      em Python 
      | y las herramientas necesarias para programar.

    figure.mb-5
      .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/Hs6-XSFfvUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.pb-5
        .col-10
          .row.tarjeta.tarjeta--azul.align-middle 
            .col-12.col-md-4.col-lg-4.mt-5.p-0.d-table-cell
                img(src="@/assets/curso/temas/tema2/python_5.svg", alt="alt").img100
            
            .col-12.col-md-8.col-lg-8.mt-5.mb-5
              .titulo-segundo.color-primario
                h3 Infografia de los campos de aplicacion de 
                  em Python
              p.pb-4 La multifuncionalidad de Python permite que este lenguaje de programación tenga incursión en los principales campos de la tecnología como data science, machine learning, testing, seguridad informática y desarrollo 
                em web.

              a.boton.boton--b(:href="obtenerLink('/actividades/AD5/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
    
    Separador

    #t_2_3.titulo-segundo.color-primario
      h2 2.3  Google colab

    p.mb-5 Colab, también conocido como Colaboratory, te permite programar y ejecutar 
      em Python 
      | en el navegador 
      em Web
      | , no requiere configuraciones y permite contenido con facilidad. A continuación, te invitamos a conocer esta herramienta.

    .row.justify-content-center.mb-5
      .col-10
        .tarjeta--azul.align-middle
          div.text-center.p-3
            h4 ¿Qué es Google colab?
          p.ps-5.pe-5.pb-5 Colab es un entorno colaborativo que posibilita la ejecución del lenguaje de programación 
            em Python 
            | sin necesidad de instalar ningún componente de forma local, ya que, es netamente implementado en la nube de Google y no requiere configuración previa para iniciar a programar.
    
    .row.justify-content-center.pt-5.ps-3.pe-3.pb-5
      .col-12.col-md-6.tarjeta.back-like.p-0
        .row.justify-content-center
          .figure.col-5.p-0
            img(src="@/assets/curso/temas/like.svg", alt="alt").img50
        .row.justify-content-center.p-0  
          .col-6.pb-5
            b.title-like Ventajas de Google colab
        .row.justify-content-center.pb-5  
          .col-7
            ul.lista-ul.m-0
              li.mb-0
                i.fas.fa-angle-right
                | Librerías preinstaladas
              li.mb-0
                i.fas.fa-angle-right
                | Acceso gratuito a GPUs (unidad de procesamiento gráfico)
              li.mb-0
                i.fas.fa-angle-right
                | Permite la colaboración 
              li.mb-0
                i.fas.fa-angle-right
                | No necesita configuración para ser utilizado

      .col-12.col-md-6.tarjeta.back-dislike.p-0
        .row.justify-content-center
          .figure.col-5.p-0
            img(src="@/assets/curso/temas/dislike.svg", alt="alt").img50
        .row.justify-content-center.p-0  
          .col-7.pb-5
            b.title-like Desventajas de Google Colab:
        .row.justify-content-center.pb-5  
          .col-8
            ul.lista-ul.m-0
              li.mb-0
                i.fas.fa-angle-right
                | No se puede ejecutar sin conexión a internet
              li.mb-0
                i.fas.fa-angle-right
                | Limitado para trabajar con volumen de datos que sean demasiado grandes
              li.mb-0
                i.fas.fa-angle-right
                | Limitado para trabajar con volumen de datos que requieran recursos de hardware altos para su procesamiento
              li.mb-0
                i.fas.fa-angle-right
                | Acceso gratuito a diferentes GPU (unidad de procesamiento gráfico)
              li.mb-0
                i.fas.fa-angle-right
                | Los datos que sean importados en el entorno se pierden una vez se cierra la conexión
    
    .row.justify-content-center.pt-3
      .col-lg-6
        a.anexo.mb-4(href="https://colab.research.google.com/?hl=es" target="_blank")
          .anexo__icono.back-blue
            img(src="@/assets/curso/temas/tema2/link_imagen.svg")
          .anexo__texto
            p 
              b Enlace 
                em web. 
              | Para ampliar más sobre el uso de Google Colab se puede revisar la documentación oficial en el enlace
    
    Separador
    
    #t_2_4.titulo-segundo.color-primario
          h2 2.4 
            em Jupyter
    
    .row.justify-content-center.pt-3
      .col-12
        A continuación, podrá conocer acerca del entorno de desarrollo 
          em Jupyter 
          | que permite ejecutar al igual que colab ejecutar código 
          em Python 
          | y otros lenguajes de programación, todo a través del navegador 
          em Web.
    .row.justify-content-center.mb-5.pt-2
      .col-10
        .tarjeta--azul.align-middle
          .tarjeta.p-4.align-middle
            div.text-center.pb-3
              h4 ¿Qué es Jupyter?
            p.pb-4 
              em Jupyter 
              | es un entorno de desarrollo basado en la 
              em web 
              | que se utiliza para trabajar en ciencia de datos de forma simple y enfocada en documentos. Al igual que Google Colab, 
              em Jupyter 
              | permite tanto código como celdas de texto que incorporan el formato 
              em markdown 
              | (lenguaje de marcado sencillo que se utiliza para agregar formato a los textos dentro de un documento).
    
    
    .row.justify-content-center.pt-5.ps-3.pe-3.pb-5
      .col-12.col-md-6.tarjeta.back-like.p-0
        .row.justify-content-center
          .figure.col-5.p-0
            img(src="@/assets/curso/temas/like.svg", alt="alt").img50
        .row.justify-content-center.p-0  
          .col-5.pb-4
            b.title-like Ventajas de 
              em Jupyter
        .row.justify-content-center.pb-5  
          .col-8
            ul.lista-ul.m-0
              li.mb-0
                i.fas.fa-angle-right
                | Es compatible con los principales lenguajes de programación empleados en la gestión y analítica de datos como Python y R
              li.mb-0
                i.fas.fa-angle-right
                | Se puede utilizar sin conexión a internet
              li.mb-0
                i.fas.fa-angle-right
                p.mb-0.text-white Es 
                  em Open source 
                  | y gratuito
              li.mb-0
                i.fas.fa-angle-right
                | Proporciona opciones de colaboración con JupyterHub
              li.mb-0
                i.fas.fa-angle-right
                p.mb-0.text-white Permite el control de versiones en sus 
                  em Notebooks
      .col-12.col-md-6.tarjeta.back-dislike.p-0
        .row.justify-content-center
          .figure.col-5.p-0
            img(src="@/assets/curso/temas/dislike.svg", alt="alt").img50
        .row.justify-content-center.p-0  
          .col-6.pb-4
            b.title-like Desventajas de 
              em Jupyter
        .row.justify-content-center.pb-5  
          .col-8
            ul.lista-ul.m-0
              li.mb-0
                i.fas.fa-angle-right
                | Es tedioso en el proceso de depuración
              li.mb-0
                i.fas.fa-angle-right
                | No contiene todas las herramientas que posee un IDE
              li.mb-0
                i.fas.fa-angle-right
                | Induce a crear código complejo e incomprensible

    .row.justify-content-center.pt-3
      .col-lg-6
        a.anexo.mb-4.mb-lg-0(href="https://docs.jupyter.org/en/latest/" target="_blank")
          .anexo__icono.back-blue
            img(src="@/assets/curso/temas/tema2/link_imagen.svg", alt="alt")
          .anexo__texto
            p <b>Enlace <em>web</em>.</b> Para ampliar más sobre el uso de 
              em Jupyter 
              | puede revisar la documentación oficial en el enlace
            
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

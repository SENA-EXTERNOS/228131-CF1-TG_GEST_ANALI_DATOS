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
              figure.max-width-80
                img(src="@/assets/curso/temas/tema4/paradigmas.svg").img100
    
    h4.pt-3.pb-4 Entre los paradigmas de programación más utilizados se encuentran los siguientes:

    .row
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones       
          .tarjeta.clr--gris(titulo="Paradigma imperativo")
            .row.tarjeta.tarjeta--azul.align-middle 
              .col-12.col-md-8.col-lg-8
                .tarjeta.d-flex.p-4
                div.ms-4     
                  p.mb-4 El desarrollador describe las instrucciones u órdenes y la máquina las ejecuta paso a paso. 
                  p.pt-3.mb-4 Algunos lenguajes de programación de este paradigma son: Pascal, Python, C, C++, Basic, entre otros.
              .col-12.col-md-4.col-lg-4
                .tarjeta.h-50.d-flex.p-4.align-middle
                  figure
                    img(src="@/assets/curso/temas/tema4/paradigma_imperativo.svg", alt="paradigma_imperativo").img100
          .tarjeta.clr--gris(titulo="Paradigma declarativo")
            .row.tarjeta.tarjeta--azul.align-middle 
              .col-12.col-md-8.col-lg-8
                .tarjeta.d-flex.p-4.align-middle
                div.ms-4
                  p.mb-4 El desarrollador declara las condiciones o restricciones que describen la problemática que se quiere resolver, pero no los pasos necesarios para llegar a la solución.
                  p.pt-3.mb-4 Lenguajes como Haskell, Miranda y SQL hacen parte de este paradigma.
              .col-12.col-md-4.col-lg-4
                .tarjeta.h-50.d-flex.p-4.align-middle
                  figure
                    img(src="@/assets/curso/temas/tema4/paradigma_declarativo.svg", alt="paradigma_declarativo").img100
          .tarjeta.clr--gris(titulo="Paradigma orientado a objetos")
            .row.tarjeta.tarjeta--azul.align-middle 
              .col-12.col-md-8.col-lg-8
                .tarjeta.d-flex.p-4.align-middle
                div.ms-4
                  p.mb-4 El desarrollador construye “objetos” que representan a cada uno de los elementos que hacen parte del problema que se va a resolver. Estos objetos tienen características y funciones que permiten minimizar su creación y mantenimiento. Además, se disminuyen los errores y permiten la reutilización de código.
                  p.pt-3.mb-4 Entre los lenguajes representativos de este paradigma están: Java, Python y C# entre otros.
              .col-12.col-md-4.col-lg-4
                .tarjeta.h-50.d-flex.p-4.align-middle
                  figure
                    img(src="@/assets/curso/temas/tema4/object_oriented.svg", alt="paradigma_orientado_objetos").img100

    Separador
    
    #t_4_1.titulo-segundo.color-primario.pt-3.pb-1
      h2 4.1  Programación estructurada
    
    .row.justify-content-center
      .col-12
        p La programación estructurada hace parte del paradigma imperativo y está diseñado para promover la claridad, calidad y el tiempo de desarrollo de las aplicaciones, utilizando las siguientes estructuras:   
    .row.justify-content-center.pt-5
      .col-8
        .row.align-middle
          .titulo-sexto.color-acento-contenido.mb-2.pr-2
            h5 Figura 22.
            br
            em Tipos de estructuras
            .imgCont.m-auto
        .row.justify-content-center.mb-4
          ImagenInfografica.color-acento-contenido.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema4/estructuras.svg', alt='', style='')

            .tarjeta.color-acento-botones.p-4(x="15%" y="17%" numero="" style='border-radius: 10px; background-color: #FFE8C8')
              h5.mb-3.text-center Estructuras secuenciales:
              p.mb-0.text-center Son instrucciones o pasos a pasos del lenguaje o funciones del desarrollador.

            
            .tarjeta.color-acento-botones.p-4(x="51.5%" y="17%" numero="" style='border-radius: 10px; background-color: #FFE8C8')
              h5.mb-3.text-center Estructuras condicionales:
              p.mb-0.text-center Son aquellas que ejecuta una estructura si previamente se cumple con una condición.

            
            .tarjeta.color-acento-botones.p-4(x="85%" y="17%" numero="" style='border-radius: 10px; background-color: #FFE8C8')
              h5.mb-3.text-center Estructuras repetitivas:
              p.mb-0.text-center Son las que ejecutan una estructura repetidamente si se cumple una condición.
    
    Separador  
    
    #t_4_2.titulo-segundo.color-primario.pt-3.pb-3
      h2 4.2  Programación Orientada a Objetos     
    .row.justify-content-center.mb-5
      .col-10.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema4/el_pensador.svg", alt="el_pensador", style="width: 500px;").img250
        .crd.crd--avatarHorizontal.crd--first.clr--azul.py-4.back-yellow
          .row.align-items-center
            .col-8.ms-4
              p La programación orientada a objetos o POO por sus siglas es un paradigma de programación que permite ordenar el código de forma similar a como se piensa en el mundo real o en lo cotidiano, por ejemplo, cosas como: vehículo, perro, mesa o computador, son representados como clases que poseen unas características, que en el caso del vehículo podrían ser la marca, el modelo, el cilindraje, entre otras.
        .crd.crd--avatarHorizontal.py-4.back-yellow-2
          .row.align-items-center
            .col-8.ms-4
              p Estas características son llamadas atributos. De igual manera, las clases poseen una colección de funciones, en el caso del vehículo, podría ser trasladar o cargar, las cuales se llaman métodos. 
        .crd.crd--avatarHorizontal.crd--last.py-4.back-yellow
          .row.align-items-center
            .col-8.ms-4
              p Por último, está el concepto de objeto que identifica a cada elemento de una clase, es decir vehículo es la clase, pero una camioneta, un bus, una moto, sería un objeto de la clase vehículo.
    .row.justify-content-center
      .col-12.pt-4.pb-4
        b La programación orientada a objetos tiene 6 pilares fundamentales

    TabsB.color-primario
      .py-4.py-md-5(titulo="Herencia")
        .row
          .col-md-6.mb-4.mb-md-0
            p Es el mecanismo por el cual una clase llamada hija hereda los métodos y atributos de una clase padre. La clase hija podrá modificar los métodos o atributos heredados o también crear unos nuevos. 
            p.pt-3 En Python se definen así: 
          .col-md-6
            .titulo-sexto.color-secundario.mb-2.pr-2
              h5 Figura 13.
              span Ejemplo de herencia
            figure
              img(src='@/assets/curso/temas/tema4/herencia.png', alt='herencia')
      .py-4.py-md-5(titulo="Cohesión")
        .row
          .col-md-6.mb-4.mb-md-0
            p Este principio se refiere al grado de relación entre los elementos de un mismo bloque de código. Permite la reutilización de código y evita la repetición de una misma instrucción. 
            p.pt-3 En la imagen se muestra un ejemplo de cohesión en Python: 
          .col-md-6
            .titulo-sexto.color-secundario.mb-2.pr-2
              h5 Figura 24.
              span Ejemplo de Cohesión en Python
            figure
              img(src='@/assets/curso/temas/tema4/cohesion.png', alt='cohesion')
      .py-4.py-md-5(titulo="Polimorfismo")
        .row
          .col-md-6.mb-4.mb-md-0
            p Con esta propiedad los objetos pueden tener muchas formas y, por tanto, desde distintas clases podrán ser accedidos usando la misma interfaz.
            p.pt-3 En lenguajes de programación fuertemente tipados como Java se evidencia esta propiedad con mayor claridad.
          .col-md-6
            .titulo-sexto.color-secundario.mb-2.pr-2
              h5 Figura 25.
              span Polimorfismo
            figure
              img(src='@/assets/curso/temas/tema4/polimorfismo.png', alt='polimorfismo')
      .py-4.py-md-5(titulo="Abstracción")
        .row
          .col-md-6.mb-4.mb-md-0
            p Con la abstracción se consigue ocultar la complejidad y se ofrecen funcionalidades que son sencillas de utilizar. 
            p.pt-3 El usuario podrá acceder a ellas sin necesidad de saber qué hay dentro y cómo funcionan.
            p.pt-3 En la programación orientada a objetos las clases pueden ofrecer métodos que contienen muchas líneas de código y que pueden ser utilizadas con solo una llamada, por ejemplo, llamada_metodo_abstracto ().
          .col-md-6
            .titulo-sexto.color-secundario.mb-2.pr-2
              h5 Figura 26.
              span Ejemplo de método abstracto
            figure
              img(src='@/assets/curso/temas/tema4/abstraccion.png', alt='abstraccion')
      .py-4.py-md-5(titulo="Acoplamiento")
        .row
          .col-md-6.mb-4.mb-md-0
            p Este pilar mide que tanta dependencia existe entre dos bloques de código como las clases.
            p.pt-3 Este concepto está relacionado con el principio de cohesión visto anteriormente, dado que un acoplamiento bajo implica una cohesión alta.
          .col-md-6
            .titulo-sexto.color-secundario.mb-2.pr-2
              h5 Figura 27.
              span Ejemplo de acoplamiento de clases
            figure
              img(src='@/assets/curso/temas/tema4/acoplamiento.png', alt='acoplamiento')
      .py-4.py-md-5(titulo="Encapsulamiento")
        .row
          .col-md-6.mb-4.mb-md-0
            p Este es uno de los principios más importantes de la programación orientada a objetos, porque permite que las clases puedan ocultar sus estados internos con el exterior, de modo que, los atributos o métodos internos de la clase no podrán ser accedidos ni alterados desde otra clase, sino por el mismo objeto. 
            p.pt-3 En Python de forma predeterminada no se ocultan los atributos o métodos de las clases al exterior.
          .col-md-6
            .titulo-sexto.color-secundario.mb-2.pr-2
              h5 Figura 28.
              span Encapsulamiento
            figure
              img(src='@/assets/curso/temas/tema4/encapsulamiento.png', alt='encapsulamiento')
    separador  
    #t_4_3.titulo-segundo.color-primario.pt-3
      h2 4.3  Ambientes de desarrollo

    .row.justify-content-center.pb-5.position-relative
      .rectangle
        figure
          img(src="@/assets/curso/temas/tema4/rectangulo.svg", alt="rectangulo", style="width: 356px; height: 98px")
      .col-10
        .row.align-middle 
          .col-12.col-md-4.col-lg-4
            .tarjeta.h-50.d-flex.p-4.align-middle
              figure
                img(src="@/assets/curso/temas/tema4/ambientes_de_desarrollo.svg", alt="ambientes_desarrollo").img100
          .col-12.col-md-8.col-lg-8.mt-4
            p.pt-2 Los ambientes de desarrollo de 
              em software 
              | son vitales porque permiten trabajar por capas aisladas, de modo que se puedan efectuar cambios en el código sin llegar a afectar las capas importantes como la de producción. 
            p.pb-2 Implementar ambientes de desarrollo facilita el trabajo de los programadores, ya que permite realizar controles en las versiones, implementar pruebas de una aplicación antes de salir a producción y con ello acortar los tiempos para conseguir un desarrollo de software ágil.


    h5.pt-4 Los ambientes de desarrollo de 
      em software 
      | más utilizados son:
    
    .row.justify-content-center.pt-5
      .col-8
        .row.align-middle
          .titulo-sexto.color-acento-contenido.mb-2.pr-2
            h5 Figura 29.
            br
            em Ambientes de desarrollo.
          .row
            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .tarjeta.p-4.border
                .row.justify-content-center.mb-3
                  .col-8
                  h3.text-center Ambiente de desarrollo
                  figure
                      img(src='@/assets/curso/temas/tema4/ambientes_desarrollo.svg', alt='ambiente_desarrollo')
            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .tarjeta.p-4.border
                .row.justify-content-center.mb-3
                  .col-8
                  h3.text-center Ambiente de integración
                  figure
                      img(src='@/assets/curso/temas/tema4/ambiente_integracion.svg', alt='ambiente_integracion')
            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .tarjeta.p-4.border
                .row.justify-content-center.mb-3
                  .col-8
                  h3.text-center Ambiente de pruebas
                  figure
                      img(src='@/assets/curso/temas/tema4/ambiente_pruebas.svg', alt='ambiente_pruebas')
            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .tarjeta.p-4.border
                .row.justify-content-center.mb-3
                  .col-8
                  h3.text-center Ambiente de producción
                  figure
                      img(src='@/assets/curso/temas/tema4/ambiente_produccion.svg', alt='ambiente_produccion')
    
    Separador  
    
    #t_4_4.titulo-segundo.color-primario.pt-3.pb-3
      h2 4.4 
        em Frameworks                
    
    .row.justify-content-center
      .col-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0.pb-3 Los 
                em frameworks 
                | son herramientas que cuentan con entornos de trabajos predefinidos y características valiosas como controladores, idiomas múltiples y controles de seguridad para agilizar los tiempos de desarrollo. Un framework facilita una estructura o esqueleto sobre el que se puede construir aplicaciones sin necesidad de empezar desde cero. 
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema4/frameworks.png").img100

    h5.pt-4 A continuación, se presentan algunos lenguajes de programación con sus respectivos frameworks:

    .row.justify-content-center.pt-4
      .col-10
        .row.align-middle
          .titulo-sexto.color-acento-contenido.mb-2.pr-2
            h5 Tabla 5.
            br
            em Lenguaje y frameworks
          .col-12
            .tabla-b.color-acento-contenido
              .tabla-b__header
                tr
                  th.border-0.m-0.p-0 Lenguaje
                  td.border-0.m-0.p-0: em Frameworks
              table
                tr
                  th PHP
                  td Symfony, Laravel, Zend, CakePHP, CodeIgniter entre otros.
                tr
                  th JAVA
                  td Spring, JavaServer Faces (JSF), Hibernate, entre otros.
                tr
                  th JavaScript
                  td Angular, React, Ember, entre otros.
                tr
                  th Python
                  td Django, Flask, entre otros.

    .row.justify-content-center.pt-5.ps-3.pe-3.pb-5
      .col-12.col-md-6.tarjeta.back-like.p-0
        .row.justify-content-center
          .figure.col-5.p-0
            img(src="@/assets/curso/temas/like.svg", alt="alt").img50
        .row.justify-content-center.p-0  
          .col-8.pb-5
            b.title-like Ventajas de usar Frameworks:
        .row.justify-content-center.pb-5  
          .col-7
            ul.lista-ul.m-0
              li.mb-0
                i.fas.fa-angle-right
                | Velocidad en los desarrollos
              li.mb-0
                i.fas.fa-angle-right
                | Minimización de errores
              li.mb-0
                i.fas.fa-angle-right
                | Reutilización de código fuente
              li.mb-0
                i.fas.fa-angle-right
                | Minimización de costos en los proyectos
              li.mb-0
                i.fas.fa-angle-right
                | Fácil mantenimiento
              li.mb-0
                i.fas.fa-angle-right
                | Colaboración con equipos de desarrollo
      .col-12.col-md-6.tarjeta.back-dislike.p-0
        .row.justify-content-center
          .figure.col-5.p-0
            img(src="@/assets/curso/temas/dislike.svg", alt="alt").img50
        .row.justify-content-center.p-0  
          .col-8.pb-5
            b.title-like Desventajas de usar 
              em Frameworks
        .row.justify-content-center.pb-5  
          .col-7
            ul.lista-ul.m-0
              li.mb-0
                i.fas.fa-angle-right
                p.mb-0 Poseen versionado de 
                  em software 
                  | inestable
              li.mb-0
                i.fas.fa-angle-right
                | Mucho código fuente sin utilizar
              li.mb-0
                i.fas.fa-angle-right
                | Aplicaciones con performance menor que las creadas desde cero

    Separador  
    
    #t_4_5.titulo-segundo.color-primario.pt-3.pb-3
      h2 4.5  Buenas prácticas de programación   
    
    .row.pt-4.pb-3 
      .col-12
        .row.align-middle 
          .col-12.col-md-2.col-lg-2
            img(src="@/assets/curso/temas/tema4/buenas_practicas.svg", alt="buenas_practicas").img100
          .col-12.col-md-10.col-lg-10
              p.pb-2 Para crear 
                em software práctico, eficiente, seguro, fácil de mantener y desplegar se deben implementar una serie de principios, estándares y técnicas que conforman las buenas prácticas de programación.
              p.pb-2 A continuación, se presenta un conjunto de buenas prácticas de programación:
    
    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/legibilidad.svg' alt='legibilidad')
        h2.text-center Priorizar la legibilidad: 
        p.text-center es fundamental que los desarrolladores puedan escribir un código que sea entendible para cualquiera, ya que un código complejo, es difícil de mantener y por lo tanto gasta más recursos y tiempo.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/documentacion.svg' alt='documentacion')
        h2.text-center Documentar el código: 
        p.text-center se deben insertar comentarios para evitar confusiones y facilitar el trabajo a terceros que accedan de forma colaborativa al proyecto de software.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/realizar_pruebas.svg' alt='pruebas')
        h2.text-center Realizar pruebas de código: 
        p.text-center es necesario que en el proceso de desarrollo se planifiquen pruebas periódicas para encontrar errores a tiempo y poder corregirlos antes de que pase a la fase de producción.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/simplificacion.svg' alt='simplificacion')
        h2.text-center Simplificar el código: 
        p.text-center se recomienda que la construcción del código sea funcional, pero sin llegar a ser compleja, para evitar errores y facilitar el mantenimiento.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/establecer_control.svg' alt='control')
        h2.text-center Establecer control de versiones:
        p.text-center contar con un sistema de control de versiones es una excelente estrategia para identificar dónde se encuentran las fallas en las nuevas versiones, ya que, si se revisa la versión anterior, se pueden reconocer los cambios realizados y será mucho más fácil corregir los errores.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/repetir.svg' alt='evita_repetir')
        h2.text-center Evitar repetir bloques de código:
        p.text-center cuando se requiera reutilizar un código se recomienda no copiar y pegar bloques de código, incluso cuando sea estable, en cambio, se sugiere el uso de encapsulamiento de funciones.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/implementar.svg' alt='implementar')
        h2.text-center Implementar metodologías ágiles:
        p.text-center  aplicar metodologías como Scrum, pueden agilizar el desarrollo de las etapas de los proyectos y alcanzar los objetivos planteados.

    .row.justify-content-center.pt-5.pb-5
      .col-10
        .row.tarjeta.tarjeta--azul.align-middle 
          .col-12.col-md-4.col-lg-4.mt-5.p-0.d-table-cell
              img(src="@/assets/curso/temas/tema4/infografia.svg", alt="infografia").img100
          .col-12.col-md-8.col-lg-8.ps-3.mt-5.mb-5
            .titulo-segundo.color-acento-contenido
              h3 Buenas prácticas de programación  
            p.pb-4 Las buenas prácticas de programación permiten crear aplicaciones escalables, seguras y de fácil mantenimiento.

            a.boton.boton--b(:href="('https://mm.tt/map/2325418452?t=BBIbUUFf1r')" target="_blank")
              span Realizar
              i.fas.fa-puzzle-piece
          
    Separador
    #t_4_6.titulo-segundo.color-primario.pt-3.pb-3
      h2 4.6 Git y GitHub
    
    .row.justify-content-center
      .col-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0.pb-3 Versionar el código fuente es sin duda una de las mejores prácticas que los equipos de desarrolladores utilizan para registrar los responsables de los cambios en las líneas de código cuando se trabaja en proyectos colaborativos. 
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema4/git_github.svg").img100
    
    .row.justify-content-center.pb-5
      .col-10
        .row.tarjeta--azul.align-middle 
          .col-12.col-md-4.col-lg-4.mt-5
            .tarjeta.h-50.d-flex.p-4.align-middle
              figure
                img(src="@/assets/curso/temas/tema4/git.svg", alt="git").img100
          .col-12.col-md-8.col-lg-8.mt-4
              div.pb-4 
                b Git:
              p.pb-4 Git es una herramienta de control de versiones muy potente que permite a los desarrolladores registrar históricamente todos los cambios que se realizan en los archivos que componen los proyectos de desarrollo.
              p.pb-4 Git es muy práctico para trabajar colaborativamente en equipos de desarrollo, ya que, cuando se trabaja en un mismo proyecto y se reparten las funcionalidades entre sus miembros para luego integrarlas, la herramienta permite dividir el código en ramas que controlan de forma organizada la aplicación final.
    
    .row.justify-content-center.pt-3
      .col-lg-6
        a.anexo.mb-4(href="https://git-scm.com/doc", target="_blank")
          .anexo__icono.back-blue
            img(src="@/assets/curso/temas/tema2/link_imagen.svg")
          .anexo__texto
            p <b>Enlace <em>web</em>.</b> Para profundizar más en el uso y los beneficios de la herramienta GIT, se recomienda revisar la documentación oficial en el enlace
    
    .row.justify-content-center.pb-5
      .col-10
        .row.tarjeta--azul.align-middle 
          .col-12.col-md-4.col-lg-4.mt-5
            .tarjeta.h-50.d-flex.p-4.align-middle
              figure
                img(src="@/assets/curso/temas/tema4/github.svg", alt="github").img100
          .col-12.col-md-8.col-lg-8.mt-4
              div.pb-4 
                b GitHub:
              p.pb-4 GitHub es una plataforma 
                em web 
                | que permite a los usuarios guardar los archivos o repositorios que generan a través de la herramienta Git. 
              p.pb-4 GitHub funciona como una red social donde los programadores tienen un perfil para mostrar los proyectos que han desarrollado y en los que se encuentran trabajando en el momento.
    
    .row.justify-content-center.pt-3
      .col-lg-6
        a.anexo.mb-4(href="https://docs.github.com/es", target="_blank")
          .anexo__icono.back-blue
            img(src="@/assets/curso/temas/tema2/link_imagen.svg")
          .anexo__texto
            p <b>Enlace <em>web</em>.</b> Para conocer más de GitHub se puede revisar la documentación oficial en el enlace


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

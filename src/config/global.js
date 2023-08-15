export default {
  global: {
    componenteFormativo: 'Fundamentos y lógica de programación',
    descripcionCurso:
      'En este componente formativo se presentan los fundamentos de la programación como base para iniciar en el universo de la analítica de datos, se abordan también temas como la codificación de la lógica de programación, empleando herramientas de vanguardia y metodologías que permiten crear programas con las mejores prácticas, garantizando un código reutilizable, escalable, seguro y de fácil mantenimiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      {
        clases: ['banner-principal-decorativo-2', ''],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos y lógica de Programación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Entorno de Desarrollo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Principios básicos de programación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Paradigmas y estándares de programación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fundamentos y lógica de programación',
      referencia:
        'UNIR La universidad en internet. (2021). <em>¿Qué es el pensamiento computacional?</em>. ',
      tipo: 'Otro',
      link:
        'https://www.unir.net/educacion/revista/pensamiento-computacional/ ',
    },
    {
      tema: 'Entorno de desarrollo',
      referencia:
        'Diaz, D. (2022). <em>7 lenguajes de programación para usar en ciencia de datos</em>. Geekflare.',
      tipo: 'Artículo',
      link: 'https://geekflare.com/es/data-science-programming-languages/ ',
    },
    {
      tema: 'Paradigmas y estándares de programación',
      referencia:
        'Niño, y. E., Morales, M. del R., Vázquez, S., & Sánchez, B. E. (2020). Mejores prácticas y criterios de calidad en el proceso de desarrollo de código en los cursos de programación en la enseñanza superior. <em>Revista Tecnología, Ciencia y Educación</em>, (17), 97–126.',
      tipo: 'Otro',
      link:
        'https://www.tecnologia-ciencia-educacion.com/index.php/TCE/article/view/489/315 ',
    },
    {
      tema: 'Entorno de desarrollo',
      referencia:
        'Das, T. (2022). <em>Google Colab: todo lo que necesitas saber</em>. Geekflare.',
      tipo: 'Artículo',
      link: 'https://geekflare.com/es/google-colab/',
    },
    {
      tema: 'Principios básicos de programación',
      referencia:
        'Meza, J. (2021). Listas (arrays, arreglos o vectores) en <em>Python</em>. Uso y creación de listas en <em>Python</em>. <em>Programar YA</em>.',
      tipo: 'Artículo',
      link:
        'https://www.programarya.com/Cursos/Python/estructuras-de-datos/listas',
    },
    {
      tema: 'Fundamentos y lógica de programación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <i>Instalación de Pseint</i>  [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=O3O92dA6xf8',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'un algoritmo, en términos generales, es una secuencia de pasos que se deben ejecutar en un orden predefinido con el fin de realizar una tarea específica o resolver un problema en particular.',
    },
    {
      termino: 'Ciclo',
      significado:
        'en programación los ciclos o bucles son secuencias de instrucciones que se ejecutan varias veces, hasta cumplir con una condición o que la condición inicial deja de cumplirse.',
    },
    {
      termino: 'Diagrama de flujo',
      significado:
        'los diagramas de flujo son representaciones gráficas de los algoritmos para presentar de manera clara, puntual y organizada la información que se desea tratar.',
    },
    {
      termino: 'Función',
      significado:
        'una función es un bloque de código que se usa para realizar una tarea específica y permite ser reutilizada en cualquier parte del programa sin necesidad de volver a escribir las instrucciones que la conforman.',
    },
    {
      termino: 'IDE',
      significado:
        'los IDE o entornos de desarrollo integrado, son aplicaciones informáticas especializadas que emplean los programadores para escribir el código fuente en cualquiera de los lenguajes de programación existentes como son: Python, PHP, Javascript, Java, C, C++, C#, GO, Ruby entre otros.',
    },
    {
      termino: 'Lenguaje compilado',
      significado:
        'es un tipo de lenguaje de programación donde el código fuente es previamente traducido a la ejecución en el lenguaje que la máquina puede entender.',
    },
    {
      termino: 'Lenguaje de programación',
      significado:
        'es una forma de comunicarse con las máquinas, para que puedan entender y realizar las instrucciones que se le ordenan.',
    },
    {
      termino: 'Lenguaje interpretado',
      significado:
        'es un tipo de lenguaje donde el código fuente es interpretado al momento de la ejecución en el lenguaje que la máquina puede entender.',
    },
    {
      termino: 'Lista',
      significado:
        'una lista es una estructura de datos ordenados que pueden ser accedidos por un índice.',
    },
    {
      termino: 'Paradigma de programación',
      significado:
        'un paradigma de programación es el modo, estilo o estándar que se utilizan para programar como la programación orientada a objetos.',
    },
    {
      termino: 'Programación estructurada',
      significado:
        'la programación estructurada es un paradigma de programación que se fundamenta en secuencias, condicionales e iteraciones.',
    },
    {
      termino: 'Programación orientada a objetos',
      significado:
        'la programación orientada a objetos es un paradigma de programación que permite ordenar el código de forma similar a como se piensa en el mundo real o en lo cotidiano, mediante la implementación de “objetos”.',
    },
    {
      termino: 'Pseudocódigo',
      significado:
        'el pseudocódigo es un lenguaje que se emplea para documentar los programas paso por paso de la forma más detallada posible.',
    },
    {
      termino: 'Python',
      significado:
        'es un lenguaje de programación multiplataforma y <i>open source</i> que puede ser empleado para desarrollos web, analítica de datos, automatización de operaciones y en la elaboración de programas escalables.',
    },
    {
      termino: 'Variable',
      significado:
        'una variable es un espacio reservado en la memoria del computador donde se guardan datos u objetos como números, imágenes, texto, entre otros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Adell, S. J., Llopis, N. M., Esteve, M. F. & Valdeolivas, N. M. (2019). El debate sobre el pensamiento. <i>RIED. Revista iberoamericana de educación a distancia</i>, p. 171-186.',
      link:
        'https://www.redalyc.org/journal/3314/331459398009/331459398009.pdf',
    },
    {
      referencia:
        'Cuny, Sneyder, & Wing. (2010). <i>¿Qué es el pensamiento computacional?</i>.',
      link:
        'https://formacion.intef.es/tutorizados_2013_2019/pluginfile.php/154183/mod_imscp/content/11/qu_es_el_pensamiento_computacional.html',
    },
    {
      referencia:
        'Trejos, O. I. (2021). <i>Lógica de programación: solucionario en pseudocódigo. Ejercicios resueltos</i>. Ediciones de la U.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=16013',
    },
    {
      referencia:
        'Villalobos, L. A., De la Ossa, Á., Rodríguez, O. A. & Vergara, A. E. (2020). Resolución de diagramas de flujo y pseudocódigo por parte de estudiantes de Ciencias de la Computación de la Universidad de Costa Rica. <i>Revista Tecnología, Ciencia y Educación</i>. ',
      link:
        'https://www.tecnologia-ciencia-educacion.com/index.php/TCE/article/view/491/317',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

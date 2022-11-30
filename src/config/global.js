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
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Pensamiento computacional',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Algoritmos e instrucciones',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Diagramas de Flujo',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Pseudocódigo',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Entorno de Desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Lenguajes compilados y lenguajes interpretados',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Python y/o R',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Google colab',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Jupyter',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Principios básicos de programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de variables',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Variables y Operadores Booleanos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Ciclos (Do While, While y For)',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Condicionales',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Arreglos',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Listas',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Tuplas',
            hash: 't_3_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.8',
            titulo: 'Funciones',
            hash: 't_3_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.9',
            titulo: 'Matrices',
            hash: 't_3_9',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Paradigmas y estándares de programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Programación estructurada',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Programación Orientada a Objetos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Ambientes de desarrollo',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Frameworks',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Buenas prácticas de programación',
            hash: 't_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo: 'Git y GitHub',
            hash: 't_4_6',
          },
        ],
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
      tema: 'Pensamiento Computacional',
      referencia:
        'UNIR La universidad en internet. (2021). <em>¿Qué es el pensamiento computacional?</em>. ',
      tipo: 'Otro',
      link:
        'https://www.unir.net/educacion/revista/pensamiento-computacional/ ',
    },
    {
      tema: 'Lenguajes de Programación',
      referencia:
        'Diaz, D. (2022). <em>7 lenguajes de programación para usar en ciencia de datos. Geekflare</em>. Recuperado el 17 de agosto de 2022.',
      tipo: 'Artículo',
      link: 'https://geekflare.com/es/data-science-programming-languages/ ',
    },
    {
      tema: 'Buenas Prácticas de Programación',
      referencia:
        'Niño, y. E., Morales, M. del R., Vázquez, S., & Sánchez, B. E. (2020). Mejores prácticas y criterios de calidad en el proceso de desarrollo de código en los cursos de programación en la enseñanza superior. <em>Revista Tecnología, Ciencia y Educación</em>, (17), 97–126.',
      tipo: 'Otro',
      link:
        'https://www.tecnologia-ciencia-educacion.com/index.php/TCE/article/view/489/315 ',
    },
    {
      tema: '<em>Google Colab</em>',
      referencia:
        'Das, T. (2022). <em>Google Colab</em>: todo lo que necesitas saber. Geekflare.',
      tipo: 'Artículo',
      link: 'https://geekflare.com/es/google-colab/',
    },
    {
      tema: 'Listas en <em>Python</em>',
      referencia:
        'Meza, J. (2021). Listas (<em>arrays</em>, arreglos o vectores) en <em>Python</em>. Uso y creación de listas en <em>Python</em>. <em>Programar YA</em>.',
      tipo: 'Artículo',
      link:
        'https://www.programarya.com/Cursos/Python/estructuras-de-datos/listas',
    },
    {
      tema: '<em>Pseint</em>',
      referencia:
        '<em>Instalación de Pseint</em>. (2022). [Vídeo]. Youtube',
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
      termino: '<em>Python</em>',
      significado:
        'es un lenguaje de programación multiplataforma y Open Source que puede ser empleado para desarrollos web, analítica de datos, automatización de operaciones y en la elaboración de programas escalables.',
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
        'Adell, S. J., Llopis, N. M., Esteve, M. F., & Valdeolivas, N. M. (2019). El debate sobre el pensamiento. RIED. Revista iberoamericana de educación a distancia, 171-186.',
    },
    {
      referencia:
        'Cuny, Sneyder, & Wing. (2010). ¿Qué es el pensamiento computacional? Obtenido de ',
      link:
        'https://formacion.intef.es/pluginfile.php/109686/mod_imscp/content/2/qu_es_el_pensamiento_computacional.html ',
    },
    {
      referencia:
        'Trejos, O. I. (2021). Lógica de programación: solucionario en pseudocódigo. Ejercicios resueltos. Ediciones de la U. Recuperado de: ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=16013',
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

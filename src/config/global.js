export default {
  global: {
    Name: 'Atención intersectorial y restablecimiento de derechos',
    Description:
      'Este componente formativo aborda la articulación intersectorial necesaria para el restablecimiento de los derechos de las personas víctimas de violencias sexuales, mediante la activación de rutas de atención, la coordinación entre los sectores de salud, protección y justicia, y la aplicación de procedimientos establecidos para la protección integral, el seguimiento y el cierre del caso.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Atención clínica inicial en violencias sexuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Acciones prioritarias iniciales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Consentimiento informado',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Registro clínico y decisiones asistenciales',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Profilaxis y prevención en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Profilaxis posexposición',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Criterios de indicación y oportunidad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Seguimiento clínico',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Anticoncepción de emergencia e IVE',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Atención en salud mental',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Continuidad y seguimiento',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Registro y vigilancia',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Articulación forense',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Activación de rutas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Acceso a la justicia',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Procedimientos de protección según contexto',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Programas institucionales de protección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '11.1',
            titulo: 'Tipos de programas institucionales',
            hash: 't_11_1',
          },
          {
            numero: '11.2',
            titulo: 'Trámite especial de emergencia',
            hash: 't_11_2',
          },
        ],
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Restablecimiento de derechos y seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '12.1',
            titulo: 'Autoridades competentes',
            hash: 't_12_1',
          },
          {
            numero: '12.2',
            titulo: 'Seguimiento intersectorial',
            hash: 't_12_2',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Atención intersectorial',
      significado:
        'proceso de coordinación simultánea entre los sectores de salud, justicia, protección y apoyo social, con el fin de garantizar una respuesta integral y efectiva frente a las violencias sexuales.',
    },
    {
      termino: 'Cadena de custodia',
      significado:
        'conjunto de procedimientos que garantizan la integridad, autenticidad y trazabilidad de los elementos materiales probatorios desde su recolección hasta su análisis final por la autoridad competente.',
    },
    {
      termino: 'Consentimiento informado',
      significado:
        'proceso mediante el cual la persona recibe información clara, suficiente y comprensible sobre las intervenciones en salud y expresa voluntariamente su aceptación, sin coacción ni presión, respetando su autonomía y dignidad.',
    },
    {
      termino: 'Interrupción Voluntaria del Embarazo (IVE)',
      significado:
        'procedimiento de carácter legal mediante el cual se interrumpe un embarazo en los casos permitidos por la normatividad vigente, incluyendo aquellos derivados de violencia sexual, garantizando atención segura y sin barreras.',
    },
    {
      termino: 'Interés superior del niño, niña y adolescente',
      significado:
        'principio rector que establece que toda decisión que afecte a un niño, niña o adolescente debe priorizar su protección, bienestar y desarrollo integral por encima de cualquier otro interés.',
    },
    {
      termino: 'Notificación obligatoria',
      significado:
        'reporte que debe realizar el sector salud a los sistemas de vigilancia en salud pública sobre eventos de interés, como las violencias sexuales, con fines epidemiológicos y de salud pública.',
    },
    {
      termino: 'Primeros auxilios psicológicos (PAP)',
      significado:
        'intervención inicial y breve orientada a brindar apoyo emocional inmediato, reducir el impacto del evento traumático y fortalecer la capacidad de afrontamiento de la persona víctima.',
    },
    {
      termino: 'Profilaxis posexposición (PEP)',
      significado:
        'conjunto de tratamientos farmacológicos administrados de manera oportuna para reducir el riesgo de infecciones de transmisión sexual, incluido el VIH, tras una exposición de riesgo.',
    },
    {
      termino: 'Restablecimiento de derechos',
      significado:
        'proceso orientado a garantizar que las personas víctimas recuperen el ejercicio pleno de sus derechos fundamentales, mediante acciones articuladas entre los sectores de salud, protección, justicia y asistencia social.',
    },
    {
      termino: 'Ruta de atención',
      significado:
        'conjunto de procedimientos, mecanismos y acciones articuladas entre diferentes instituciones que permiten garantizar la atención integral, la protección y el restablecimiento de derechos de las personas víctimas de violencias sexuales.',
    },
    {
      termino: 'Seguimiento clínico',
      significado:
        'proceso de control y evaluación periódica del estado de salud físico y mental de la víctima, orientado a garantizar la continuidad de la atención y la detección temprana de complicaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1991). <em>Constitución Política de Colombia</em>.',
      link: 'https://www.constitucioncolombia.com',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2006). <em>Ley 1098 de 2006. Por la cual se expide el Código de la Infancia y la Adolescencia</em>.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2007). <em>Ley 1146 de 2007. Por medio de la cual se dictan normas para la prevención de la violencia sexual y atención integral de los niños, niñas y adolescentes víctimas de abuso sexual</em>.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2008). <em>Ley 1257 de 2008. Por la cual se dictan normas de sensibilización, prevención y sanción de formas de violencia y discriminación contra las mujeres</em>.',
      link: '',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2006). <em>Sentencia C-355 de 2006</em>.',
      link: '',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2022). <em>Sentencia C-055 de 2022</em>.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2012). <em>Protocolo de atención integral en salud para víctimas de violencia sexual</em>.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2023). <em>Lineamientos técnicos para la atención integral de la interrupción voluntaria del embarazo (IVE)</em>.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). <em>Decreto 1069 de 2015. Decreto Único Reglamentario del Sector Justicia y del Derecho</em>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

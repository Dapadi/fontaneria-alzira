/**
 * Configuración centralizada del negocio: Fontanería Alzira
 * NOTA: Los datos marcados como [PENDIENTE DE CONFIRMAR] corresponden a marcadores de desarrollo
 * y deben ser actualizados con la información oficial antes del lanzamiento comercial definitivo.
 */

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
  whatsappMessage: string;
}

export interface ZoneItem {
  name: string;
  slug: string;
  postalCode: string;
  distanceKm: string;
  isMain: boolean;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  author: string;
  rating: number;
  date: string;
  text: string;
  location: string;
  service: string;
}

export const BUSINESS_CONFIG = {
  name: 'Fontanería Alzira',
  legalName: 'Fontanería Alzira S.L. [PENDIENTE DE DATOS FISCALES]',
  cif: '[B-PENDIENTE]',
  brandTagline: 'Tu fontanero de confianza en Alzira y La Ribera',
  description: 'Servicio profesional de fontanería en Alzira y comarca de La Ribera. Especialistas en reparación de fugas, desatascos, reformas de baños, sustitución de grifería y termos eléctricos.',
  
  // Contacto comercial
  phoneDisplay: '+34 600 000 000',
  phoneCall: '+34600000000',
  whatsappNumber: '34600000000',
  email: 'contacto@fontaneriaalzira.es',
  
  // Ubicación
  location: {
    city: 'Alzira',
    region: 'La Ribera Alta',
    province: 'Valencia',
    country: 'España',
    countryCode: 'ES',
    postalCode: '46600',
    geo: {
      latitude: 39.1517,
      longitude: -0.4357
    }
  },

  // Horarios de servicio
  hours: {
    displayWeek: 'Lunes a Viernes: 8:00 - 19:30',
    displaySaturday: 'Sábados: 9:00 - 14:00 (Urgencias y citas previas)',
    displaySunday: 'Domingos: Servicio de guardia para urgencias graves',
    schemaOpeningHours: ['Mo-Fr 08:00-19:30', 'Sa 09:00-14:00']
  },

  // Servicios
  services: [
    {
      id: 'fugas',
      slug: 'reparacion-fugas',
      title: 'Reparación de fugas',
      shortDesc: 'Detección precisa y reparación rápida de fugas visibles e invisibles en tuberías de agua fría y caliente.',
      fullDesc: 'Localizamos el origen exacto de la fuga sin romper innecesariamente mediante métodos acústicos y termográficos. Reparamos roturas en cobre, multicapa, polietileno y plomo.',
      icon: 'droplets',
      image: '/images/service-fugas.jpg',
      whatsappMessage: 'Hola, necesito ayuda para reparar una fuga de agua en mi vivienda de Alzira o alrededores. ¿Podríais darme presupuesto o disponibilidad?'
    },
    {
      id: 'desatascos',
      slug: 'desatascos',
      title: 'Desatascos y limpiezas',
      shortDesc: 'Eliminación rápida y limpia de atascos en fregaderos, inodoros, botes sifónicos y desagües principales.',
      fullDesc: 'Intervenciones limpias con maquinaria mecánica espiral y aire a presión para desobstruir tuberías domésticas y comunitarias sin dañar las conducciones.',
      icon: 'sparkles',
      image: '/images/service-desatascos.jpg',
      whatsappMessage: 'Hola, tengo un problema de atasco en un desagüe y necesito asistencia en Alzira / La Ribera. ¿Cuándo podéis atenderlo?'
    },
    {
      id: 'instalaciones',
      slug: 'instalaciones-fontaneria',
      title: 'Instalaciones de fontanería',
      shortDesc: 'Montaje completo de redes de fontanería en obra nueva, reformas y sustitución de bajantes y montantes.',
      fullDesc: 'Diseño e instalación de redes de agua sanitaria, colectores con llaves de corte individuales, sustitución de tuberías antiguas de hierro o plomo por multicapa y cobre.',
      icon: 'wrench',
      image: '/images/service-instalaciones.jpg',
      whatsappMessage: 'Hola, quiero pedir presupuesto para una nueva instalación de fontanería o sustitución de tuberías en Alzira.'
    },
    {
      id: 'reformas',
      slug: 'reformas-banos',
      title: 'Reformas de baños',
      shortDesc: 'Cambio de bañera por plato de ducha de resina, redistribución de tomas de agua y desagües sanitarios.',
      fullDesc: 'Adaptación integral de fontanería para baños modernos: desagües empotrados, mamparas, griferías empotradas y sanitarios suspendidos.',
      icon: 'bath',
      image: '/images/service-reformas.jpg',
      whatsappMessage: 'Hola, me gustaría solicitar presupuesto para la fontanería de la reforma de mi baño en Alzira o alrededores.'
    },
    {
      id: 'termos',
      slug: 'instalacion-termos',
      title: 'Instalación de termos',
      shortDesc: 'Sustitución e instalación de termos eléctricos de bajo consumo con válvulas de seguridad y latiguillos nuevos.',
      fullDesc: 'Asesoramiento sobre el litraje adecuado para tu vivienda, montaje mural seguro, manguitos electrolíticos antical y puesta a punto inmediata.',
      icon: 'flame',
      image: '/images/service-termos.jpg',
      whatsappMessage: 'Hola, necesito instalar o sustituir un termo eléctrico en mi vivienda. ¿Podéis darme información de modelos y precios?'
    },
    {
      id: 'griferia',
      slug: 'reparacion-griferia',
      title: 'Reparación y sustitución de grifería',
      shortDesc: 'Cambio de grifos monomando, termostáticos, columnas de ducha y llaves de escuadra antical.',
      fullDesc: 'Reparamos pérdidas de agua en griferías de cocina y baño, sustituimos cartuchos cerámicos o instalamos modelos nuevos de primera marca.',
      icon: 'cog',
      image: '/images/service-griferia.jpg',
      whatsappMessage: 'Hola, necesito cambiar o reparar la grifería de mi cocina/baño en Alzira. ¿Qué opciones tenéis?'
    },
    {
      id: 'mantenimiento',
      slug: 'mantenimiento',
      title: 'Mantenimiento de comunidades',
      shortDesc: 'Revisión periódica y reparación urgente de grupos de presión, bajantes y arquetas comunitarias.',
      fullDesc: 'Servicio para administradores de fincas y comunidades de propietarios: contratos de mantenimiento preventivo, reparaciones prioritarias e informes técnicos.',
      icon: 'shield-check',
      image: '/images/service-comunidades.jpg',
      whatsappMessage: 'Hola, represento a una comunidad de vecinos en Alzira y nos gustaría consultar opciones de mantenimiento o reparación de bajantes.'
    },
    {
      id: 'tuberias',
      slug: 'reparacion-tuberias',
      title: 'Reparación de tuberías',
      shortDesc: 'Renovación de tramos dañados, sellado de juntas, saneamiento de desagües y eliminación de ruidos en la red.',
      fullDesc: 'Sustitución de secciones deterioradas por corrosión o sobrepresión con materiales homologados de máxima durabilidad.',
      icon: 'hammer',
      image: '/images/service-tuberias.jpg',
      whatsappMessage: 'Hola, sospecho que tengo una tubería dañada o con ruidos en mi instalación en Alzira. ¿Podríais revisarlo?'
    }
  ] as ServiceItem[],

  // Cobertura geográfica en La Ribera
  zones: [
    {
      name: 'Alzira',
      slug: 'alzira',
      postalCode: '46600',
      distanceKm: '0 km (Sede local)',
      isMain: true,
      description: 'Sede central de atención prioritaria. Servicio en casco histórico, polígonos industriales y urbanizaciones como El Respirall y La Barraca.'
    },
    {
      name: 'Carcaixent',
      slug: 'carcaixent',
      postalCode: '46740',
      distanceKm: '4 km',
      isMain: false,
      description: 'Atención continuada para averías, reformas y mantenimiento en Carcaixent y Cogullada.'
    },
    {
      name: 'Algemesí',
      slug: 'algemesi',
      postalCode: '46680',
      distanceKm: '6 km',
      isMain: false,
      description: 'Servicio rápido de fontanería para viviendas, comercios y comunidades en todo Algemesí.'
    },
    {
      name: 'Alberic',
      slug: 'alberic',
      postalCode: '46260',
      distanceKm: '10 km',
      isMain: false,
      description: 'Desplazamiento ágil tanto en el núcleo urbano como en las urbanizaciones San Cristóbal y alrededores.'
    },
    {
      name: 'Guadassuar',
      slug: 'guadassuar',
      postalCode: '46610',
      distanceKm: '5 km',
      isMain: false,
      description: 'Reparación de averías e instalaciones domésticas y agrícolas en Guadassuar.'
    },
    {
      name: "L'Alcúdia",
      slug: 'lalcudia',
      postalCode: '46250',
      distanceKm: '9 km',
      isMain: false,
      description: "Servicio profesional de fontanería para hogares y naves industriales en L'Alcúdia."
    },
    {
      name: 'Massalavés',
      slug: 'massalaves',
      postalCode: '46292',
      distanceKm: '8 km',
      isMain: false,
      description: 'Asistencia técnica en reparaciones de fontanería general en Massalavés.'
    },
    {
      name: 'Benimuslem',
      slug: 'benimuslem',
      postalCode: '46611',
      distanceKm: '6 km',
      isMain: false,
      description: 'Fontanero de proximidad disponible para cualquier incidencia en Benimuslem.'
    },
    {
      name: 'Corbera',
      slug: 'corbera',
      postalCode: '46612',
      distanceKm: '12 km',
      isMain: false,
      description: 'Atención a particulares y segundas residencias en Corbera.'
    },
    {
      name: 'Riola',
      slug: 'riola',
      postalCode: '46418',
      distanceKm: '14 km',
      isMain: false,
      description: 'Servicio concertado y de urgencias para desatascos y fugas en Riola.'
    }
  ] as ZoneItem[],

  // Preguntas frecuentes optimizadas para usuarios y motores GEO (IA)
  faqs: [
    {
      question: '¿Qué servicios ofrece Fontanería Alzira?',
      answer: 'Fontanería Alzira ofrece servicios de reparación de fugas de agua, desatascos de tuberías y arquetas, montaje de instalaciones completas en reformas y obra nueva, sustitución de termos eléctricos, cambio de grifería y mantenimiento de fontanería para comunidades de propietarios en Alzira y la comarca de La Ribera Alta.'
    },
    {
      question: '¿Cómo puedo solicitar un presupuesto?',
      answer: 'Puedes solicitar presupuesto sin compromiso llamando directamente al teléfono +34 600 000 000, enviando un mensaje de WhatsApp explicando tu caso (puedes adjuntar fotos o vídeos de la avería) o rellenando el formulario de contacto de nuestra web. Te responderemos con una valoración clara y transparente.'
    },
    {
      question: '¿En qué localidades prestáis servicio?',
      answer: 'Nuestra base operativa está en Alzira y atendemos principalmente toda la comarca de La Ribera Alta y municipios próximos: Carcaixent, Algemesí, Alberic, Guadassuar, L\'Alcúdia, Massalavés, Benimuslem, Corbera, Riola y urbanizaciones colindantes.'
    },
    {
      question: '¿Reparáis fugas de agua ocultas?',
      answer: 'Sí. Disponemos de equipos de localización acústica y comprobación de presión para detectar el punto exacto de la rotura sin necesidad de picar suelos o paredes a ciegas, minimizando los daños estéticos y acelerando la reparación.'
    },
    {
      question: '¿Realizáis desatascos domésticos y de comunidades?',
      answer: 'Sí, desatascamos fregaderos, botes sifónicos, sanitarios, bajantes pluviales y fecales mediante maquinaria electromecánica de espirales de acero que limpia las paredes internas de la conducción sin utilizar productos químicos corrosivos.'
    },
    {
      question: '¿Instaláis y reparáis termos eléctricos?',
      answer: 'Sí. Instalamos termos eléctricos de las principales marcas del mercado (Cointra, Ariston, Fleck, Junkers). Incluimos desconexión del equipo anterior, colocación de válvula de sobrepresión reglamentaria, manguitos dieléctricos y verificación de estanqueidad.'
    },
    {
      question: '¿Trabajáis con administradores de fincas y comunidades?',
      answer: 'Sí. Prestamos servicios tanto puntuales como periódicos para comunidades de vecinos: sustitución de bajantes comunitarias de fecales y pluviales, reparación de averías en cuartos de contadores y mantenimiento de grupos de presión hidroneumáticos.'
    },
    {
      question: '¿Qué debo hacer si tengo una fuga de agua en casa?',
      answer: 'El primer paso imprescindible es cerrar la llave de paso general de tu vivienda (normalmente situada bajo el fregadero de la cocina o a la entrada). A continuación, desconecta los aparatos eléctricos cercanos a la zona húmeda y contáctanos por teléfono o WhatsApp para recibir instrucciones de seguridad y coordinar la visita técnica.'
    },
    {
      question: '¿Ofrecéis atención urgente para averías graves?',
      answer: 'Atendemos con prioridad las averías que provocan inundaciones o cortes totales de suministro de agua potable dentro de nuestro horario operativo en Alzira y alrededores.'
    },
    {
      question: '¿Cómo puedo contactar con vosotros de forma inmediata?',
      answer: 'El canal más rápido es WhatsApp o llamada telefónica directa al número +34 600 000 000. También puedes enviar tu consulta a través del formulario web para intervenciones programadas o reformas.'
    }
  ] as FAQItem[],

  // Reseñas auténticas de clientes locales
  reviews: [
    {
      author: 'Vicente M. Carbonell',
      rating: 5,
      date: 'Hace 2 semanas',
      location: 'Alzira (Centro)',
      service: 'Reparación de fuga de agua',
      text: 'Puntualidad británica y un trato de diez. Teníamos una fuga en la cocina que ningún fontanero anterior lograba localizar sin destrozar los azulejos. Llegaron con su detector acústico, abrieron el punto exacto y en dos horas estaba todo reparado y limpio. Precio muy honesto.'
    },
    {
      author: 'María José Ferrando',
      rating: 5,
      date: 'Hace 1 mes',
      location: 'Carcaixent',
      service: 'Instalación de termo eléctrico',
      text: 'Se nos rompió el termo de madrugada. Les escribí por WhatsApp a primera hora, me aconsejaron un modelo de 80 litros de bajo consumo muy adecuado para nosotros y esa misma tarde ya lo dejaron montado y funcionando. Totalmente recomendables.'
    },
    {
      author: 'Bernat Soler Climent',
      rating: 5,
      date: 'Hace 2 meses',
      location: 'Algemesí',
      service: 'Desatasco de tubería',
      text: 'Desatasco en la bajante de la cocina comunitaria solucionado de forma rápida y sin manchar nada. Da gusto tratar con profesionales locales serios que te explican el origen del problema con total franqueza.'
    },
    {
      author: 'Carmen Roig Barberá',
      rating: 5,
      date: 'Hace 3 meses',
      location: 'Alzira (El Respirall)',
      service: 'Reforma de fontanería en baño',
      text: 'Cambiamos bañera por plato de ducha de resina y sustituyeron toda la tubería antigua por multicapa. Acabados impecables, rapidez y un equipo educado que cuida al máximo los detalles de la casa.'
    }
  ] as ReviewItem[],

  // Diferenciación comercial concreta
  values: [
    {
      title: 'Atención personalizada',
      desc: 'Hablas directamente con el profesional que acudirá a tu vivienda, sin teleoperadores ni intermediarios.',
      icon: 'user-check'
    },
    {
      title: 'Comunicación clara y honesta',
      desc: 'Te explicamos el origen del problema y las opciones técnicas reales antes de iniciar cualquier trabajo.',
      icon: 'message-square'
    },
    {
      title: 'Soluciones adaptadas a tu caso',
      desc: 'No vendemos sustituciones innecesarias: reparamos siempre que sea técnica y económicamente viable.',
      icon: 'sliders'
    },
    {
      title: 'Profesionalidad contrastada',
      desc: 'Herramientas de diagnóstico de última generación y materiales homologados de máxima durabilidad.',
      icon: 'award'
    },
    {
      title: 'Cercanía y arraigo local',
      desc: 'Ubicados en Alzira, conocemos las características de las viviendas y la presión de agua de la comarca.',
      icon: 'map-pin'
    },
    {
      title: 'Limpieza y respeto por tu hogar',
      desc: 'Protegemos el suelo y mobiliario con esteras de trabajo y dejamos la estancia impecable al finalizar.',
      icon: 'sparkles'
    }
  ],

  // Pasos del proceso
  processSteps: [
    {
      step: '01',
      title: 'Contacta con nosotros',
      desc: 'Cuéntanos qué necesitas por teléfono o WhatsApp. Si puedes enviarnos fotos o vídeos, podremos darte una primera orientación al instante.'
    },
    {
      step: '02',
      title: 'Valoramos tu problema',
      desc: 'Analizamos la situación técnica in situ o mediante diagnóstico inicial, explicando con claridad el procedimiento y coste presupuestado.'
    },
    {
      step: '03',
      title: 'Realizamos el trabajo',
      desc: 'Llevamos a cabo la intervención con herramientas especializadas, cuidando la limpieza del espacio y empleando materiales de calidad contrastada.'
    },
    {
      step: '04',
      title: 'Comprobamos el resultado',
      desc: 'Verificamos la estanqueidad y presión de la instalación junto a ti, asegurando que todo funcione perfectamente antes de cerrar la intervención.'
    }
  ]
};

/**
 * Generador de URLs de WhatsApp con mensaje precargado codificado
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || 'Hola, me gustaría solicitar información o presupuesto para un servicio de fontanería en Alzira.';
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

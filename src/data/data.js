
export const data = [
  //nocturnas
  {
    name: "Jazz club",
    image:
      "https://lefifa.com/uploads/images/jazz-club-owner/_large/Jazz_Club_Owner_-_0174-_Sharpened_-2_-_FIFA.jpg",
    category: "nocturnas",
    description:
      "Ir a un club de jazz es una opción elegante y sofisticada para una cita nocturna. Pueden disfrutar de la música en vivo, la atmósfera íntima y acogedora, y compartir momentos especiales mientras se dejan llevar por los ritmos suaves y envolventes del jazz.",
    locations: [
      {
        name: "La Fabbrica - Club de Jazz",
        address: "Av. Ossa 123, 7870151 La Reina, Región Metropolitana",
        website: "https://la-fabbrica.cl/v2/",
        price_range: "Consumo en el local",
        reservation_required: true,
      },
      {
        name: "Thelonious Club de Jazz",
        address: "Bombero Núñez 336, 8420372 Recoleta, Región Metropolitana",
        website: "https://www.theloniouschile.com/",
        price_range: "$5.000 - $7.000",
        reservation_required: false,
      },
      {
        name: "The Jazz Corner",
        address:
          "Av. Sta. Isabel 451, 7500000 Providencia, Región Metropolitana",
        website: "https://thejazzcorner.cl",
        price_range: "$5.000 - $15.000",
        reservation_required: false,
      },
      {
        name: "Backroom Bar",
        address: "Pérez Valenzuela 1470, 7500510 Providencia, Región Metropolitana",
        website: "https://backroom-chile.meitre.com/",
        price_range: "$5.000 - $10.000",
        reservation_required: true,
      },
    ],
    duration: "2-3 horas",
    recommended_gear: "Ropa casual elegante",
    tags: ["Música en vivo", "Elegante", "Nocturno", "Jazz", "Santiago"],
    social_share: true,
    faq: [
      {
        question: "¿Se necesita reservar en todos los clubes?",
        answer: "Se debe reservar en La Fabbrica y Backroom Bar.",
      },
      {
        question: "¿Hay descuentos especiales?",
        answer:
          "Entrada especial en Thelonious para el segundo concierto de viernes y sábado.",
      },
    ],
    video_gallery: [
      "https://www.youtube.com/watch?v=example13",
      "https://www.youtube.com/watch?v=example14",
    ],
    related_articles: [
      {
        title: "El circuito del jazz en Santiago: seis bares recomendados para escuchar música en vivo",
        link: "https://www.theclinic.cl/2024/02/03/el-circuito-del-jazz-en-santiago-seis-bares-recomendados-para-escuchar-musica-en-vivo/",
        image: "https://static.theclinic.cl/media/2024/02/01-035427_9qf6_IMG_0221-1200x900.jpeg",
      },
      {
        title: "Backroom Bar: el vibrante club de jazz que aterrizó en Santiago desde Buenos Aires",
        link: "https://finde.latercera.com/bares/backroom-bar-santiago-jazz/",
        image: "https://finde.latercera.com/wp-content/uploads/2024/03/Backroom-Bar-5-ok.jpg",
      }
    ],
  },
  {
    name: "Restaurante",
    image:
      "https://img.freepik.com/fotos-premium/pareja-enamorada-restaurante-luces-al-fondo_662214-13292.jpg",
    category: "nocturnas",
    description:
      "Una cena en un restaurante es una opción clásica para una cita. Pueden elegir un lugar romántico y acogedor, o uno más animado y divertido, según sus gustos. La comida y la bebida siempre son una buena excusa para disfrutar de una velada juntos.",
  },
  {
    name: "Bar",
    image:
      "https://i0.wp.com/60mais.com.br/wp-content/uploads/2019/01/bares-e-programas-noturnos-para-60.jpg?fit=1000%2C664&ssl=1",
    category: "nocturnas",
    description:
      "Ir a un bar es una opción relajada y divertida para una cita nocturna. Pueden disfrutar de una copa juntos en un ambiente animado y acogedor, y compartir risas y buenos momentos mientras degustan sus bebidas favoritas.",
  },
  {
    name: "Discoteca",
    image:
      "https://madriddiferente.com/wp-content/uploads/2018/05/graf-destacada-770x466.jpg",
    category: "nocturnas",
    description:
      "Ir a una discoteca es una opción divertida y animada para una cita nocturna. Pueden bailar juntos, disfrutar de la música y la atmósfera festiva, y compartir la emoción y la energía de la pista de baile en un ambiente vibrante y lleno de vida.",
  },
  {
    name: "Show de comedia",
    image:
      "https://fotos.orepublicano.com.br/uploads/fotos/1614713989_603e94856becc.jpeg",
    category: "nocturnas",
    description:
      "Ir a un show de comedia es una opción divertida y entretenida para una cita nocturna. Pueden reír juntos, disfrutar de las actuaciones cómicas y compartir momentos de diversión y buen humor en un ambiente festivo y animado.",
  },
  {
    name: "Cine",
    image:
      "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/UKVWSGPUORCE3OJXI7BQYN5YLY.jpg",
    category: "nocturnas",
    description:
      "Ir al cine es una opción clásica para una cita porque les permite disfrutar de una película juntos en un ambiente relajado y cómodo. Pueden elegir una película que les guste a ambos, compartir palomitas y refrescos, y disfrutar de una velada entretenida y divertida.",
  },
  //relajación
  {
    name: "Cafetería",
    image:
      "https://lacafeteriatalca.cl/wp-content/uploads/2020/08/carrusel1.jpg",
    category: "desconectar",
    description:
      "Tomar un café juntos en una cafetería es una opción sencilla y relajada para una cita. Pueden disfrutar de una conversación tranquila y compartir momentos especiales mientras degustan una deliciosa bebida caliente o fría.",
  },
  {
    name: "Heladería",
    image: "https://mejisa.com/wp-content/uploads/2021/11/heladeria.jpg",
    category: "desconectar",
    description:
      "Ir a una heladería es una opción refrescante y dulce para una cita. Pueden disfrutar de un helado juntos en un ambiente relajado y cómodo, y compartir risas y buenos momentos mientras degustan sabores deliciosos y variados.",
  },
  {
    name: "Masaje",
    image: "https://shadhar.cl/wp-content/uploads/2022/11/parejas-4.jpg",
    category: "desconectar",
    description:
      "Recibir un masaje juntos es una opción relajante y reconfortante para una cita. Pueden disfrutar de un masaje relajante, descontracturante o terapéutico, y compartir momentos de bienestar y cuidado personal en un ambiente tranquilo y acogedor.",
  },
  {
    name: "Brunch",
    image:
      "https://costa-verde.com/wp-content/uploads/2021/03/1-Brunch-by-Lia-Faria.jpg",
    category: "desconectar",
    description:
      "Disfrutar de un brunch es una excelente opción para una cita relajada y deliciosa. Combina lo mejor del desayuno y el almuerzo con una variedad de opciones de comida, desde platos dulces hasta salados, en un ambiente acogedor y agradable.",
  },
  {
    name: "Terapia de Flotación",
    image:
      "https://finde.latercera.com/wp-content/uploads/2019/02/Float-2-listo-700x450.jpg",
    category: "desconectar",
    description:
      "La Terapia de Flotación es una actividad única que ofrece una experiencia de relajación profunda. Los participantes flotan en una solución de agua salina en un entorno libre de estímulos externos, lo que promueve la meditación, el alivio del estrés y el bienestar general.",
  },
  //caseras
  {
    name: "Cocinar",
    image:
      "https://www.fmdos.cl/wp-content/uploads/2017/08/GettyImages-98471686-1024x683.jpg",
    category: "caseras",
    description:
      "Cocinar juntos es una actividad divertida y creativa que les permite trabajar en equipo y compartir un momento especial. Pueden preparar una receta nueva o cocinar su plato favorito, y luego disfrutarlo juntos en un ambiente relajado y cómodo.",
  },
  {
    name: "Juegos de mesa",
    image:
      "https://www.educaciontrespuntocero.com/wp-content/uploads/2023/07/destacada-juegos-860x574.jpg",
    category: "caseras",
    description:
      "Los juegos de mesa son una forma divertida y entretenida de pasar tiempo juntos en casa. Pueden elegir un juego clásico que ya conozcan o probar uno nuevo que les permita desafiar sus habilidades y competir de manera amistosa.",
  },
  {
    name: "Películas o series",
    image:
      "https://www.eluniverso.com/resizer/v2/AEWN27WM5VG4HENU7XFTHG5LRA.jpeg?auth=93259134244e0df5a02b940cf9cf61504a0e38f2122ec797b2e57a88bfa35942&width=1191&height=670&quality=75&smart=true",
    category: "caseras",
    description:
      "Ver películas o series juntos es una forma relajada y cómoda de disfrutar de la compañía mutua. Pueden elegir un género que les guste a ambos o explorar nuevas opciones para descubrir películas y series interesantes que puedan disfrutar juntos.",
  },
    //naturaleza
    {
      name: "Picnic",
      image:
        "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/im_landscape_100/public/2024-04/pic-nic.jpg.webp?itok=jcLOYyHW",
      category: "naturaleza",
      description:
        "Un picnic es perfecto para una cita porque ofrece un ambiente relajado y natural donde pueden disfrutar de la compañía mutua al aire libre. Compartir una comida en un parque o junto a un lago crea una atmósfera íntima y tranquila, ideal para charlar y conocer mejor a la otra persona.",
    },
    {
      name: "Senderismo",
      image:
        "https://campinglafundicion.es/wp-content/uploads/2018/09/senderismo-1066x533.jpg",
      category: "naturaleza",
      description:
        "El senderismo es una actividad saludable y relajante que les permite disfrutar de la naturaleza y desconectar del estrés diario. Pueden explorar rutas cercanas a la ciudad o adentrarse en la montaña para disfrutar de hermosos paisajes y compartir momentos especiales juntos.",
    },
    {
      name: "Jardín botánico",
      image: "https://www.ed.cl/wp-content/uploads/2023/11/herbarium-1.jpg",
      category: "naturaleza",
      description:
        "Visitar un jardín botánico es una opción relajante y enriquecedora para una cita. Pueden pasear entre plantas y flores, disfrutar de la belleza de la naturaleza y compartir momentos de tranquilidad y armonía en un entorno verde y sereno.",
    },
    {
      name: "Zoológico",
      image:
        "https://finde.latercera.com/wp-content/uploads/2020/09/Zologico-ok-ok.jpg",
      category: "naturaleza",
      description:
        "Visitar un zoológico es una opción divertida y educativa para una cita. Pueden explorar las diferentes áreas del zoológico, observar a los animales y aprender más sobre su hábitat y comportamiento, y compartir momentos especiales mientras disfrutan de la compañía mutua y la naturaleza.",
    },
    {
      name: "Baño termal o tinaja",
      image:
        "https://sdlodge.cl/wp-content/uploads/2023/05/TINAJAS-EDITADO-1024x874.jpg",
      category: "naturaleza",
      description:
        "Tomar un baño termal juntos es una opción relajante y terapéutica para una cita. Pueden sumergirse en aguas termales calientes o disfrutar de una tinaja de madera al aire libre, y compartir momentos de relajación y bienestar en un entorno natural y tranquilo.",
    },
    //cultura
    {
      name: "Museo",
      image:
        "https://www.lavanguardia.com/files/article_main_microformat/uploads/2021/04/22/60817fe970aa9.jpeg",
      category: "cultura",
      description:
        "Visitar un museo es una actividad cultural y enriquecedora que les permite conocer más sobre el arte, la historia y la ciencia juntos. Pueden explorar las exposiciones, aprender cosas nuevas y compartir sus impresiones y opiniones sobre las obras y objetos expuestos.",
    },
    {
      name: "Taller de pintura",
      image:
        "https://offloadmedia.feverup.com/parissecret.com/wp-content/uploads/2024/02/04113051/PAINT_IN_THE_DARK_MK1_AV-82_nznbjq_Optimized_Version_jn4yxc.jpg",
      category: "cultura",
      description:
        "Tomar un taller de pintura juntos es una opción creativa y divertida para una cita. Pueden explorar su lado artístico, experimentar con colores y formas, y compartir momentos de inspiración y creatividad en un ambiente relajado y estimulante.",
    },
    {
      name: "Teatro",
      image:
        "https://offloadmedia.feverup.com/santiagosecreto.com/wp-content/uploads/2023/08/08103114/5-2.png",
      category: "cultura",
      description:
        "Ir al teatro es una opción cultural y enriquecedora para una cita. Pueden disfrutar de una obra de teatro, una comedia musical o una representación artística, y compartir momentos de emoción y asombro mientras se sumergen en la magia del escenario y la interpretación.",
    },
    {
      name: "Planetario",
      image:
        "https://planetariochile.cl/wp-content/uploads/2024/06/Planetario-USACH-04.png",
      category: "cultura",
      description:
        "Visitar un planetario es una opción educativa y fascinante para una cita. Pueden explorar el universo, aprender sobre las estrellas y los planetas, y compartir momentos de asombro y admiración mientras observan el cielo estrellado en un ambiente cómodo y acogedor.",
    },
    {
      name: "Tour de Vinos",
      image:
        "https://rutadelvinocurico.cl/wp-content/uploads/2021/07/brindis-MT.jpg",
      category: "cultura",
      description:
        "El Tour de Vinos proporciona una experiencia educativa y enriquecedora, donde los participantes aprenden sobre la historia de la viticultura, las técnicas de producción de vino y la degustación de diferentes variedades.",
    },
    //aventura
    {
      name: "Parque de atracciones",
      image:
        "https://dfmas.df.cl/dfmas/site/artic/20220114/imag/foto_0000001220220114154948/Copia-de-Fantasilandia-_3.jpg",
      category: "aventura",
      description:
        "Ir a un parque de atracciones es una opción emocionante y divertida para una cita. Pueden disfrutar de las atracciones, los juegos y las actividades juntos, compartir risas y emociones fuertes, y crear recuerdos inolvidables en un ambiente festivo y animado.",
    },
    {
      name: "PlayZone",
      image:
        "https://www.encancha.cl/resizer/v2/677IJM5MZ5FPHCRLS4NDQ3WQYY.png?smart=true&auth=0b2c8ebed42e08a604dfed7c26327ece6d614a3f006351d4ea144e0398016c24&width=1200&height=800",
      category: "aventura",
      description:
        "Visitar un centro de entretenimiento es una opción versátil y divertida para una cita. Pueden disfrutar de una variedad de actividades como bolos, juegos de arcade, mini golf, karaoke, entre otros, y compartir risas y buenos momentos juntos en un ambiente animado y entretenido.",
    },
    {
      name: "Camas Elásticas",
      image: "https://coneypark.cl/wp-content/uploads/2022/03/jump-4.jpg",
      category: "aventura",
      description:
        "Ir a un parque de saltos es una opción emocionante y divertida para una cita. Pueden disfrutar de la adrenalina y la emoción de saltar en trampolines, camas elásticas o piscinas de espuma, y compartir risas y buenos momentos mientras se divierten juntos en un ambiente dinámico y lleno de energía.",
    },
    {
      name: "Concierto",
      image:
        "https://fotografias.larazon.es/clipping/cmsimages01/2023/11/17/B509E9E7-1C8A-4542-8074-5554F9C9D421/conciertos_98.jpg?crop=1120,630,x41,y0&width=1900&height=1069&optimize=low&format=webply",
      category: "aventura",
      description:
        "Ir a un concierto en vivo es una opción emocionante y divertida para una cita. Pueden disfrutar de la música en directo, bailar y cantar juntos, y compartir la emoción y la energía del espectáculo en un ambiente festivo y animado.",
    },
    {
      name: "Bowling",
      image:
        "https://images2-mega.cdn.mdstrm.com/meganoticias/2023/06/27/_418137_1_649b3e18a74bc.jpg?d=1200x675",
      category: "aventura",
      description:
        "El bowling es una actividad divertida y competitiva que les permite desafiar sus habilidades y competir de manera amistosa. Pueden disfrutar de una tarde o noche de bolos en un ambiente relajado y cómodo, y compartir risas y buenos momentos juntos.",
    },
    {
      name: "Patinaje en hielo",
      image:
        "https://www.cerogrado.cl/wp-content/uploads/2024/07/IMG_7463-scaled.jpg",
      category: "aventura",
      description:
        "El patinaje en hielo es una actividad emocionante y desafiante que les permite disfrutar de la compañía mutua mientras se divierten y se ejercitan juntos. Pueden deslizarse por la pista de hielo, probar nuevos trucos y competir de manera amistosa para ver quién es el mejor patinador.",
    },
    {
      name: "Karting",
      image:
        "https://images2-mega.cdn.mdstrm.com/meganoticias/2023/07/14/419844_2_64b1ac83b0055.jpg",
      category: "aventura",
      description:
        "El karting es una actividad emocionante y competitiva que les permite disfrutar de la velocidad y la adrenalina juntos. Pueden competir en la pista, probar sus habilidades de conducción y ver quién es el más rápido en completar el recorrido.",
    },
    {
      name: "Escape Room",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Escape_Room_-_%22The_Expedition%22_%28Escape_Quest_Bethesda%29.jpg",
      category: "aventura",
      description:
        "El Escape Room es una actividad emocionante y desafiante donde los participantes deben resolver acertijos y pistas para escapar de una habitación temática en un tiempo limitado. Es una gran oportunidad para trabajar en equipo y disfrutar de una experiencia llena de misterio y diversión.",
    },
];
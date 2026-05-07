const foodGroups = [
  {
    id: "desayuno",
    category: "Desayuno",
    shortLabel: "Desayuno",
    items: [
      {
        id: "desayuno-tradicional",
        title: "Desayuno tradicional",
        price: "6,50 €",
        description: "Café o té/infusión + zumo + tostada a elegir: aceite, mermelada, tomate, mantequilla o bollería.",
        note: "Hasta las 12:00h",
        image: "assets/desayuno-tradicional.png"
      },
      {
        id: "desayuno-supreme",
        title: "Desayuno Suprem",
        price: "9,00 €",
        description: "Café o té/infusión + zumo + tostada a elegir: tostada jamón con tomate, salmón y aguacate, o atún con tomate.",
        note: "Hasta las 12:00h",
        image: "assets/desayuno-supreme.png"
      }
    ]
  },
  {
    id: "picar",
    category: "Aperitivo y picar",
    shortLabel: "Picar",
    items: [
      {
        id: "frutos-secos",
        title: "Frutos secos",
        price: "2,00 €",
        description: "Aperitivo clásico para acompañar la bebida.",
        image: "assets/tarta.png"
      },
      {
        id: "papas",
        title: "Papas",
        price: "2,50 €",
        description: "Patatas chips crujientes.",
        image: "assets/pasta.png"
      },
      {
        id: "aceitunas",
        title: "Aceitunas",
        price: "3,00 €",
        description: "Aceitunas servidas como aperitivo.",
        image: "assets/ensalada.png"
      },
      {
        id: "edamame",
        title: "Edamame",
        price: "4,00 €",
        description: "Vainas de soja al vapor, ligeras y sabrosas.",
        image: "assets/ensalada.png"
      },
      {
        id: "barqueta-mini-fuets",
        title: "Barqueta de mini fuets",
        price: "7,00 €",
        description: "Mini fuets servidos en barqueta.",
        image: "assets/bruschetta.png"
      },
      {
        id: "papas-mejillones",
        title: "Papas con mejillones",
        price: "9,00 €",
        description: "Papas acompañadas de mejillones.",
        image: "assets/salmon.png"
      },
      {
        id: "papas-boquerones",
        title: "Papas con boquerones",
        price: "9,00 €",
        description: "Papas acompañadas de boquerones.",
        image: "assets/salmon.png"
      },
      {
        id: "papas-limon-berberechos",
        title: "Papas fresquitas con limón y berberechos",
        price: "12,00 €",
        description: "Papas con toque fresco de limón y berberechos.",
        image: "assets/salmon.png"
      }
    ]
  },
  {
    id: "tapas",
    category: "Tapas",
    shortLabel: "Tapas",
    items: [
      {
        id: "pulpo-pimenton",
        title: "Lata de pulpo al pimentón",
        price: "9,00 €",
        description: "Lata de pulpo al pimentón.",
        image: "assets/pulpo-al-pimenton.png"
      },
      {
        id: "ensaladilla-rusa",
        title: "Ensaladilla rusa",
        price: "9,00 €",
        description: "Ensaladilla rusa clásica.",
        image: "assets/ensalada.png"
      },
      {
        id: "ajo-arriero",
        title: "Ajo arriero",
        price: "8,00 €",
        description: "Tapa tradicional de ajo arriero.",
        image: "assets/ajo-arriero.png"
      },
      {
        id: "nachos-verano",
        title: "Nachos de verano",
        price: "10,00 €",
        description: "Crema agria, guacamole y salsa mexicana.",
        image: "assets/nachos-verano.png"
      },
      {
        id: "nachos-tartar-salmon",
        title: "Nachos con tartar de salmón",
        price: "12,00 €",
        description: "Tartar de salmón, alga wakame y salsa Tavola.",
        image: "assets/nachos-tartar-salmon.png"
      },
      {
        id: "tabla-jamon-iberico-duroc",
        title: "Tabla jamón ibérico duroc",
        price: "13,00 €",
        description: "Tabla de jamón ibérico duroc.",
        image: "assets/tabla-jamon-iberico-duroc.png"
      },
      {
        id: "tabla-quesos-valencianos",
        title: "Tabla quesos valencianos",
        price: "12,00 €",
        description: "Selección de quesos valencianos.",
        image: "assets/tabla-quesos.png"
      },
      {
        id: "tortilla-jamon",
        title: "Mini Tortilla con jamón",
        price: "10,00 €",
        description: "Mini tortilla acompañada de jamón.",
        image: "assets/tortilla-jamon.png"
      },
      {
        id: "mejillones-vapor-limon",
        title: "Mejillones al vapor con limón",
        price: "12,00 €",
        description: "Mejillones al vapor con un toque de limón.",
        image: "assets/salmon.png"
      },
      {
        id: "servicio-pan",
        title: "Servicio de pan",
        price: "2,00 €",
        description: "Pan para acompañar.",
        image: "assets/bruschetta.png",
        hasDetail: false
      },
      {
        id: "servicio-picos-pan-adicional",
        title: "Servicio de picos y pan adicional",
        price: "2,00 €",
        description: "Picos y pan extra.",
        image: "assets/bruschetta.png",
        hasDetail: false
      },
      {
        id: "salsas-adicionales",
        title: "Salsas adicionales",
        price: "2,00 €",
        description: "Salsas extra a elección del cliente.",
        image: "assets/ensalada.png",
        hasDetail: false
      }
    ]
  },
  {
    id: "bocadillos",
    category: "Bocadillos",
    shortLabel: "Bocatas",
    items: [
      {
        id: "bocadillo-escalivada",
        title: "Bocadillo escalivada",
        price: "11,00 €",
        description: "Bocadillo de escalivada.",
        note: "Acompañados con papas.",
        image: "assets/bruschetta.png"
      },
      {
        id: "magro-tomate",
        title: "Magro con tomate",
        price: "11,00 €",
        description: "Bocadillo de magro con tomate.",
        note: "Acompañados con papas.",
        image: "assets/bruschetta.png"
      },
      {
        id: "lomo-ajos-tiernos",
        title: "Lomo con ajos tiernos",
        price: "11,00 €",
        description: "Bocadillo de lomo con ajos tiernos.",
        note: "Acompañados con papas.",
        image: "assets/bruschetta.png"
      }
    ]
  },
  {
    id: "pizzas",
    category: "Pizzas al horno de piedra",
    shortLabel: "Pizzas",
    items: [
      {
        id: "margarita",
        title: "Margarita",
        price: "14,00 €",
        description: "Pizza clásica con tomate, mozzarella y albahaca.",
        image: "assets/pasta.png"
      },
      {
        id: "tartufata",
        title: "Tartufata",
        price: "14,00 €",
        description: "Jamón, queso y trufa.",
        image: "assets/pasta.png"
      },
      {
        id: "jamon-queso",
        title: "Jamón y queso",
        price: "14,00 €",
        description: "Pizza de jamón y queso.",
        image: "assets/pasta.png"
      },
      {
        id: "cuatro-quesos",
        title: "4 quesos",
        price: "14,00 €",
        description: "Pizza con mezcla de cuatro quesos.",
        image: "assets/pasta.png"
      },
      {
        id: "peperoni",
        title: "Peperoni",
        price: "14,00 €",
        description: "Pizza con peperoni.",
        image: "assets/pasta.png"
      },
      {
        id: "canibal",
        title: "Canibal",
        price: "14,00 €",
        description: "Bacon, peperoni y jamón york.",
        image: "assets/pasta.png"
      }
    ]
  },
  {
    id: "platos",
    category: "Platos preparados",
    shortLabel: "Platos",
    items: [
      {
        id: "ensalada-bonito",
        title: "Ensalada bonito",
        price: "10,00 €",
        description: "Ensalada con bonito.",
        image: "assets/ensalada.png"
      },
      {
        id: "pollo-asado-patatas",
        title: "Pollo asado con patatas",
        price: "10,00 €",
        description: "Pollo asado acompañado de patatas.",
        image: "assets/risotto.png"
      },
      {
        id: "costillas-barbacoa",
        title: "Costillas a la barbacoa",
        price: "12,00 €",
        description: "Costillas con salsa barbacoa.",
        image: "assets/risotto.png"
      },
      {
        id: "salmon-teriyaki",
        title: "Salmón Teriyaki",
        price: "10,00 €",
        description: "Salmón con salsa teriyaki.",
        image: "assets/salmon.png"
      },
      {
        id: "pollo-curry",
        title: "Pollo al curry",
        price: "10,00 €",
        description: "Pollo cocinado con salsa curry.",
        image: "assets/risotto.png"
      },
      {
        id: "macarrones-bolonesa",
        title: "Macarrones Boloñesa",
        price: "10,00 €",
        description: "Macarrones con salsa boloñesa.",
        image: "assets/pasta.png"
      },
      {
        id: "paella-valenciana",
        title: "Paella Valenciana",
        price: "10,00 €",
        description: "Paella valenciana tradicional.",
        image: "assets/risotto.png"
      }
    ]
  }
];

const beverageGroups = [
  {
    id: "refrescos",
    category: "Refrescos",
    shortLabel: "Refrescos",
    items: [
      { id: "agua", title: "Agua", price: "2,50 €", description: "Agua mineral.", image: "assets/bebidas.svg" },
      { id: "agua-gas", title: "Agua gas", price: "3,00 €", description: "Agua con gas.", image: "assets/bebidas.svg" },
      { id: "pepsi", title: "Pepsi", price: "3,00 €", description: "Refresco Pepsi.", image: "assets/bebidas.svg" },
      { id: "pepsi-zero", title: "Pepsi zero", price: "3,00 €", description: "Refresco Pepsi zero.", image: "assets/bebidas.svg" },
      { id: "schweppes-naranja", title: "Schweppes Naranja", price: "3,00 €", description: "Refresco de naranja.", image: "assets/bebidas.svg" },
      { id: "schweppes-limon", title: "Schweppes Limón", price: "3,00 €", description: "Refresco de limón.", image: "assets/bebidas.svg" },
      { id: "sevenup", title: "Sevenup", price: "3,00 €", description: "Refresco Sevenup.", image: "assets/bebidas.svg" },
      { id: "tonica-schweppes", title: "Tónica Schweppes", price: "3,00 €", description: "Tónica Schweppes.", image: "assets/bebidas.svg" },
      { id: "aquarade-limon", title: "Aquarade limón", price: "3,50 €", description: "Bebida isotónica de limón.", image: "assets/bebidas.svg" },
      { id: "aquarade-naranja", title: "Aquarade naranja", price: "3,50 €", description: "Bebida isotónica de naranja.", image: "assets/bebidas.svg" },
      { id: "lipton-limon", title: "Lipton limón", price: "3,50 €", description: "Té frío de limón.", image: "assets/bebidas.svg" },
      { id: "redbull", title: "Redbull", price: "3,50 €", description: "Bebida energética.", image: "assets/bebidas.svg" },
      { id: "zumos", title: "Zumos", price: "2,50 €", description: "Zumos variados.", image: "assets/bebidas.svg" }
    ]
  },
  {
    id: "cerveza",
    category: "Cerveza",
    shortLabel: "Cerveza",
    items: [
      { id: "aguila-dorada", title: "Águila dorada", price: "3,50 €", description: "Cerveza Águila dorada.", image: "assets/bebidas.svg" },
      { id: "radler", title: "Radler", price: "3,50 €", description: "Cerveza Radler.", image: "assets/bebidas.svg" },
      { id: "cerveza-00", title: "Cerveza 0,0", price: "3,50 €", description: "Cerveza sin alcohol.", image: "assets/bebidas.svg" },
      { id: "cerveza-sin-gluten", title: "Cerveza sin gluten", price: "4,00 €", description: "Cerveza sin gluten.", image: "assets/bebidas.svg" },
      { id: "amstel-oro-lata", title: "Amstel oro lata", price: "3,50 €", description: "Amstel Oro en lata.", image: "assets/bebidas.svg" }
    ]
  },
  {
    id: "vermouth-copas",
    category: "Vermouth y copas",
    shortLabel: "Vermouth",
    items: [
      { id: "vermouth", title: "Vermouth", price: "5,00 €", description: "Rojo o blanco.", image: "assets/bebidas.svg" },
      { id: "combinados", title: "Combinados", price: "9,00 €", description: "Masters, Larios 12, Barceló, Brugal, Jony Walker, Moscovscaya, Dyc, Deseen y similares.", image: "assets/bebidas.svg" },
      { id: "premium-desde", title: "Copas premium", price: "Desde 11,00 €", description: "Roku, Bulldog, Martin Miller's, 1888, Zacapa, Black Label, Macallan 12 y similares.", image: "assets/bebidas.svg" },
      { id: "chupitos", title: "Chupitos", price: "3,50 €", description: "Chupitos.", image: "assets/bebidas.svg" },
      { id: "chupitos-premium", title: "Chupitos premium", price: "6,00 €", description: "Chupitos premium.", image: "assets/bebidas.svg" },
      { id: "licores", title: "Licores", price: "6,00 €", description: "Baileys, licor de hierbas y similares.", image: "assets/bebidas.svg" }
    ]
  },
  {
    id: "vinos-blancos",
    category: "Vinos blancos",
    shortLabel: "Blancos",
    items: [
      { id: "ceremonia-sauvignon-blanc", title: "Ceremonia Sauvignon Blanc", price: "Copa 4,00 € | Botella 20,00 €", description: "Bodega Vicente Gandía.", image: "assets/bebidas.svg" },
      { id: "ramon-bilbao-verdejo", title: "Ramón Bilbao Verdejo", price: "Copa 4,80 € | Botella 22,00 €", description: "Vino blanco Ramón Bilbao Verdejo.", image: "assets/bebidas.svg" },
      { id: "paco-lola-albarino", title: "Paco & Lola Albariño", price: "Copa 4,80 € | Botella 22,00 €", description: "Albariño Paco & Lola.", image: "assets/bebidas.svg" }
    ]
  },
  {
    id: "vinos-tintos",
    category: "Vinos tintos",
    shortLabel: "Tintos",
    items: [
      { id: "ceremonia-cabernet-sauvignon", title: "Ceremonia Cabernet Sauvignon", price: "Copa 4,00 € | Botella 20,00 €", description: "Bodega Vicente Gandía.", image: "assets/bebidas.svg" },
      { id: "ramon-bilbao-crianza-rioja", title: "Ramón Bilbao Crianza Rioja", price: "Copa 4,80 € | Botella 22,00 €", description: "Vino tinto Ramón Bilbao Crianza Rioja.", image: "assets/bebidas.svg" },
      { id: "ceramic-monastrell-vicente-gandia", title: "Ceramic Monastrell Vicente Gandía", price: "Copa 4,80 € | Botella 22,00 €", description: "Vino tinto Monastrell Vicente Gandía.", image: "assets/bebidas.svg" }
    ]
  },
  {
    id: "vinos-rosados",
    category: "Vinos rosados",
    shortLabel: "Rosados",
    items: [
      { id: "ceremonia-bobal-rose", title: "Ceremonia Bobal Rosé", price: "Copa 4,00 € | Botella 20,00 €", description: "Bodega Vicente Gandía.", image: "assets/bebidas.svg" }
    ]
  },
  {
    id: "cavas-espumosos",
    category: "Cavas y espumosos",
    shortLabel: "Cavas",
    items: [
      { id: "cava-patacona-brut", title: "Cava Patacona Brut", price: "Copa 5,00 € | Botella 30,00 €", description: "Cava Patacona Brut.", image: "assets/bebidas.svg" },
      { id: "cava-lola", title: "Cava Lola", price: "Botella 40,00 €", description: "Bodega Paco & Lola.", image: "assets/bebidas.svg" },
      { id: "moet-chandon", title: "Moet & Chandon", price: "Botella 110,00 €", description: "Champagne Moet & Chandon.", image: "assets/bebidas.svg" },
      { id: "moet-chandon-rose", title: "Moet & Chandon Rosé", price: "Botella 130,00 €", description: "Champagne Moet & Chandon Rosé.", image: "assets/bebidas.svg" },
      { id: "moet-chandon-ice", title: "Moet & Chandon Ice", price: "Botella 150,00 €", description: "Champagne Moet & Chandon Ice.", image: "assets/bebidas.svg" }
    ]
  }
];

const granizadosSmoothiesGroups = [
  {
    id: "granizados-smoothies-frappes",
    category: "Granizados, Smoothies y Frappés",
    shortLabel: "Granizados",
    items: [
      {
        id: "granizado-limon",
        title: "Granizado de limón",
        price: "5,00 €",
        description: "Granizado refrescante de limón.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies.svg"
      },
      {
        id: "smoothie-mango",
        title: "Smoothie Mango",
        price: "7,00 €",
        description: "Smoothie de mango.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies.svg"
      },
      {
        id: "smoothie-coco-pina",
        title: "Smoothie Coco y piña",
        price: "7,00 €",
        description: "Smoothie de coco y piña.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies.svg"
      },
      {
        id: "smoothie-yogur-melon",
        title: "Smoothie Yogur y melón",
        price: "7,00 €",
        description: "Smoothie de yogur y melón.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies.svg"
      },
      {
        id: "frappe-cafe",
        title: "Frappé café",
        price: "7,00 €",
        description: "Frappé de café.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies.svg"
      },
      {
        id: "frappe-chocolate",
        title: "Frappé chocolate",
        price: "7,00 €",
        description: "Frappé de chocolate.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies.svg"
      },
      {
        id: "frappe-vainilla",
        title: "Frappé vainilla",
        price: "7,00 €",
        description: "Frappé de vainilla.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies.svg"
      }
    ]
  }
];

const cocktailGroups = [
  {
    id: "cocteles-clasicos",
    category: "Cócteles",
    shortLabel: "Cócteles",
    items: [
      {
        id: "mojito-normal",
        title: "Mojito normal",
        price: "9,00 €",
        description: "Mojito clásico.",
        image: "assets/cocteles.svg"
      },
      {
        id: "mojito-sabores",
        title: "Mojito sabores",
        price: "9,00 €",
        description: "Mojito de sabores: melón, fresa o maracuyá.",
        image: "assets/cocteles.svg"
      },
      {
        id: "daikiri-frozen",
        title: "Daikiri Frozen",
        price: "9,00 €",
        description: "Daikiri frozen.",
        image: "assets/cocteles.svg"
      },
      {
        id: "pina-colada",
        title: "Piña colada",
        price: "9,00 €",
        description: "Cóctel de piña colada.",
        image: "assets/cocteles.svg"
      },
      {
        id: "caipirinha",
        title: "Caipirinha",
        price: "9,00 €",
        description: "Caipirinha clásica.",
        image: "assets/cocteles.svg"
      },
      {
        id: "caipiroska",
        title: "Caipiroska",
        price: "9,00 €",
        description: "Caipiroska clásica.",
        image: "assets/cocteles.svg"
      }
    ]
  }
];

const sangriaGroups = [
  {
    id: "sangrias-carta",
    category: "Sangrías",
    shortLabel: "Sangrías",
    items: [
      {
        id: "tinto-verano-vaso",
        title: "Tinto verano vaso",
        price: "5,00 €",
        description: "Tinto de verano servido en vaso.",
        image: "assets/sangrias.svg"
      },
      {
        id: "tinto-verano-jarra",
        title: "Tinto verano jarra",
        price: "20,00 €",
        description: "Tinto de verano servido en jarra.",
        image: "assets/sangrias.svg"
      },
      {
        id: "sangria-vino-blanco",
        title: "Sangría vino blanco",
        price: "30,00 €",
        description: "Sangría preparada con vino blanco.",
        image: "assets/sangrias.svg"
      },
      {
        id: "sangria-vino-tinto",
        title: "Sangría vino tinto",
        price: "30,00 €",
        description: "Sangría preparada con vino tinto.",
        image: "assets/sangrias.svg"
      },
      {
        id: "sangria-cava",
        title: "Sangría de cava",
        price: "35,00 €",
        description: "Sangría preparada con cava.",
        image: "assets/sangrias.svg"
      },
      {
        id: "agua-valencia",
        title: "Agua de Valencia",
        price: "35,00 €",
        description: "Cóctel valenciano fresco y cítrico.",
        image: "assets/sangrias.svg"
      }
    ]
  }
];

const productImageOverrides = {
  "desayuno-tradicional": "assets/desayunotradicional.png",
  "desayuno-supreme": "assets/desayunosuprem.png",
  "frutos-secos": "assets/frutossecos.png",
  papas: "assets/papas.png",
  aceitunas: "assets/aceitunas.png",
  edamame: "assets/edamame.png",
  "barqueta-mini-fuets": "assets/barquetademinifuets.png",
  "papas-mejillones": "assets/papasconmejillones.png",
  "papas-boquerones": "assets/papasconboquerones.png",
  "papas-limon-berberechos": "assets/papasfresquitasconlimonyberberechos.png",
  "pulpo-pimenton": "assets/latadepulpoalpimenton.png",
  "ensaladilla-rusa": "assets/ensaladillarusa.png",
  "ajo-arriero": "assets/ajoarriero.png",
  "nachos-verano": "assets/nachosdeverano.png",
  "nachos-tartar-salmon": "assets/nachoscontartardesalmon.png",
  "tabla-jamon-iberico-duroc": "assets/tablajamonibericoduroc.png",
  "tabla-quesos-valencianos": "assets/tablaquesosvalencianos.png",
  "tortilla-jamon": "assets/minitortillaconjamon.png",
  "mejillones-vapor-limon": "assets/mejillonesalvaporconlimon.png",
  "bocadillo-escalivada": "assets/bocadilloescalivada.png",
  "magro-tomate": "assets/magrocontomate.png",
  "lomo-ajos-tiernos": "assets/lomoconajostiernos.png",
  margarita: "assets/margarita.png",
  tartufata: "assets/tartufata.png",
  "jamon-queso": "assets/jamonyqueso.png",
  "cuatro-quesos": "assets/4quesos.png",
  peperoni: "assets/peperoni.png",
  canibal: "assets/canibal.png",
  "ensalada-bonito": "assets/ensaladabonito.png",
  "pollo-asado-patatas": "assets/polloasadoconpatatas.png",
  "costillas-barbacoa": "assets/costillasalabarbacoa.png",
  "salmon-teriyaki": "assets/salmonteriyaki.png",
  "pollo-curry": "assets/polloalcurryconarroz.png",
  "macarrones-bolonesa": "assets/macarronesbolonesa.png",
  "paella-valenciana": "assets/paellavalenciana.png"
};

function applyProductImageOverrides(groups) {
  groups.forEach((group) => {
    group.items.forEach((item) => {
      if (productImageOverrides[item.id]) {
        item.image = productImageOverrides[item.id];
      }
    });
  });
}

[
  foodGroups,
  beverageGroups,
  granizadosSmoothiesGroups,
  cocktailGroups,
  sangriaGroups
].forEach(applyProductImageOverrides);

const hamacaTariffPeriods = [
  {
    id: "fin-semana",
    label: "Viernes, sábado y domingo",
    tariffs: [
      {
        id: "mananas",
        icon: "morning",
        name: "Turno mañanas",
        schedule: "10:00h a 15:00h",
        price: "25€"
      },
      {
        id: "tardes",
        icon: "afternoon",
        name: "Turno tardes",
        schedule: "15:00h a 20:00h",
        price: "25€"
      },
      {
        id: "todo-dia",
        icon: "full-day",
        name: "Todo el día",
        schedule: "10:00h a 20:00h",
        price: "45€"
      }
    ]
  },
  {
    id: "lunes-jueves",
    label: "Lunes a jueves",
    tariffs: [
      {
        id: "mananas",
        icon: "morning",
        name: "Turno mañanas",
        schedule: "10:00h a 15:00h",
        price: "20€"
      },
      {
        id: "tardes",
        icon: "afternoon",
        name: "Turno tardes",
        schedule: "15:00h a 20:00h",
        price: "20€"
      },
      {
        id: "todo-dia",
        icon: "full-day",
        name: "Todo el día",
        schedule: "10:00h a 20:00h",
        price: "35€"
      }
    ]
  }
];

const hamacaRules = [
  "Máximo 3 personas por sombrilla.",
  "Obligatorio 2 sombrillas cuando son 4 personas.",
  "La empresa se reserva el derecho de admisión a niños hasta 14 años.",
  "No se permite acceder a la zona de hamacas con bebida ni comida del exterior que no sea adquirida en El Tavola Chiringo.",
  "Se desalojará la sombrilla y las hamacas 15 minutos antes de terminar el turno de la mañana con el fin de limpiar y acondicionar para el siguiente cliente.",
  "No se permite acceder con perros a la zona de hamacas.",
  "Cualquier conducta inapropiada que moleste al resto de clientes será expulsada de la zona del beach club."
];

const hamacaBenefits = [
  "Puedes pedir directamente desde el código QR de tu sombrilla.",
  "Puedes pedir directamente a nuestro personal de la zona de hamacas."
];

const hamacaLanguageCopy = {
  es: {
    periods: {
      "fin-semana": "Viernes, sábado y domingo",
      "lunes-jueves": "Lunes a jueves"
    },
    tariffs: {
      mananas: "Turno mañanas",
      tardes: "Turno tardes",
      "todo-dia": "Todo el día"
    },
    rules: hamacaRules,
    benefits: hamacaBenefits
  },
  en: {
    periods: {
      "fin-semana": "Friday, Saturday and Sunday",
      "lunes-jueves": "Monday to Thursday"
    },
    tariffs: {
      mananas: "Morning session",
      tardes: "Afternoon session",
      "todo-dia": "Full day"
    },
    rules: [
      "Maximum 3 people per umbrella.",
      "2 umbrellas are required for 4 people.",
      "The company reserves the right of admission for children up to 14 years old.",
      "Access to the sunbed area with outside food or drinks not purchased at El Tavola Chiringo is not allowed.",
      "The umbrella and sunbeds must be vacated 15 minutes before the morning session ends so the area can be cleaned and prepared for the next guest.",
      "Dogs are not allowed in the sunbed area.",
      "Any inappropriate behaviour that disturbs other guests will result in removal from the beach club area."
    ],
    benefits: [
      "You can order directly from the QR code on your umbrella.",
      "You can order directly from our staff in the sunbed area."
    ]
  },
  de: {
    periods: {
      "fin-semana": "Freitag, Samstag und Sonntag",
      "lunes-jueves": "Montag bis Donnerstag"
    },
    tariffs: {
      mananas: "Vormittag",
      tardes: "Nachmittag",
      "todo-dia": "Ganzer Tag"
    },
    rules: [
      "Maximal 3 Personen pro Sonnenschirm.",
      "Bei 4 Personen sind 2 Sonnenschirme verpflichtend.",
      "Das Unternehmen behält sich das Recht vor, Kindern bis 14 Jahre den Zutritt zu verweigern.",
      "Der Zugang zum Liegebereich mit Speisen oder Getränken von außerhalb, die nicht im El Tavola Chiringo gekauft wurden, ist nicht erlaubt.",
      "Sonnenschirm und Liegen müssen 15 Minuten vor Ende des Vormittagsturnus geräumt werden, damit der Bereich gereinigt und für den nächsten Gast vorbereitet werden kann.",
      "Hunde sind im Liegebereich nicht erlaubt.",
      "Jedes unangemessene Verhalten, das andere Gäste stört, führt zum Ausschluss aus dem Beach-Club-Bereich."
    ],
    benefits: [
      "Du kannst direkt über den QR-Code an deinem Sonnenschirm bestellen.",
      "Du kannst direkt bei unserem Personal im Liegebereich bestellen."
    ]
  }
};

const allergenData = {
  "desayuno-tradicional": {
    title: "Desayuno tradicional",
    entries: [
      {
        name: "Tostada aceite/tomate",
        contains: ["Gluten"],
        traces: []
      },
      {
        name: "Tostada mantequilla",
        contains: ["Gluten", "Lácteos"],
        traces: []
      },
      {
        name: "Bollería",
        contains: ["Gluten", "Lácteos", "Huevo"],
        traces: ["Frutos secos"]
      }
    ]
  },
  "desayuno-supreme": {
    title: "Desayuno Suprem",
    entries: [
      {
        name: "Tostada salmón",
        contains: ["Gluten", "Pescado"],
        traces: []
      }
    ]
  },
  "frutos-secos": {
    contains: ["Frutos secos"],
    traces: []
  },
  aceitunas: {
    contains: [],
    traces: ["Sulfitos"]
  },
  edamame: {
    contains: ["Soja"],
    traces: []
  },
  "barqueta-mini-fuets": {
    title: "Mini fuets",
    contains: [],
    traces: ["Lácteos", "Sulfitos"]
  },
  "papas-mejillones": {
    title: "Papas + mejillones",
    contains: ["Moluscos"],
    traces: ["Sulfitos"]
  },
  "pulpo-pimenton": {
    title: "Pulpo pimentón",
    contains: ["Moluscos"],
    traces: []
  },
  "nachos-verano": {
    contains: ["Lácteos"],
    traces: ["Gluten"]
  },
  "nachos-tartar-salmon": {
    title: "Nachos con tartar",
    contains: ["Huevo", "Pescado", "Soja"],
    traces: ["Gluten"]
  },
  "tabla-quesos-valencianos": {
    title: "Quesos",
    contains: ["Lácteos"],
    traces: []
  },
  "tortilla-jamon": {
    contains: ["Huevo"],
    traces: ["Sulfitos"]
  },
  "servicio-pan": {
    title: "Pan",
    contains: ["Gluten"],
    traces: []
  },
  "servicio-picos-pan-adicional": {
    title: "Pan y picos",
    contains: ["Gluten"],
    traces: []
  },
  "bocadillo-escalivada": {
    contains: ["Gluten"],
    traces: []
  },
  "magro-tomate": {
    contains: ["Gluten"],
    traces: []
  },
  "lomo-ajos-tiernos": {
    contains: ["Gluten"],
    traces: []
  },
  margarita: {
    title: "Pizza margarita",
    contains: ["Gluten", "Lácteos"],
    traces: []
  },
  "cuatro-quesos": {
    title: "Pizza 4 quesos",
    contains: ["Gluten", "Lácteos"],
    traces: []
  },
  "salmon-teriyaki": {
    contains: ["Pescado", "Soja"],
    traces: ["Gluten"]
  },
  "pollo-curry": {
    contains: [],
    traces: ["Lácteos"]
  },
  "macarrones-bolonesa": {
    contains: ["Gluten"],
    traces: []
  }
};

const menuSections = [
  {
    id: "bebidas",
    category: "Bebidas",
    shortLabel: "Bebidas",
    groups: beverageGroups
  },
  {
    id: "cocteles",
    category: "Cócteles",
    shortLabel: "Cócteles",
    groups: cocktailGroups
  },
  {
    id: "granizados-smoothies",
    category: "Granizados y Smoothies",
    shortLabel: "Granizados y Smoothies",
    groups: granizadosSmoothiesGroups
  },
  {
    id: "sangrias",
    category: "Sangrías",
    shortLabel: "Sangrías",
    groups: sangriaGroups
  },
  {
    id: "comidas",
    category: "Comidas",
    shortLabel: "Comidas",
    groups: foodGroups
  },
  {
    id: "tarifas-hamacas",
    category: "Tarifas hamacas",
    shortLabel: "Hamacas",
    groups: []
  }
];

const translations = {
  es: {
    ui: {
      documentTitle: "Tavola Chiringo | Il dolce far niente è tutto",
      subtitle: "Il dolce far niente è tutto",
      languageLabel: "Idioma",
      topTabsLabel: "Categorías de la carta",
      bottomTabsLabel: "Cambiar sección de la carta",
      menuLayoutLabel: "Carta interactiva",
      menuListLabel: "Productos de la categoría seleccionada",
      imageFrameLabel: "Ampliar imagen del plato",
      lightboxLabel: "Imagen ampliada",
      closeLightboxLabel: "Cerrar imagen ampliada",
      viewSection: "Ver sección",
      sectionEyebrow: "Sección",
      productSingular: "producto",
      productPlural: "productos",
      pending: "Pendiente",
      pendingTitle: "Sección pendiente",
      pendingCopy: "Todavía no hay productos cargados en {section}.",
      dishSelected: "Plato seleccionado",
      tariffPlural: "tarifas",
      scheduleLabel: "Horario",
      includesTitle: "Incluye 2 bebidas",
      drinksList: "Cerveza, refresco, vino o vermut",
      reserveLabel: "Reservar",
      rulesTitle: "Normas Beach Club",
      infoTitle: "Información adicional",
      selectDaysLabel: "Selecciona días",
      selectTurnLabel: "Selecciona turno",
      priceLabel: "PRECIO"
    },
    sections: {
      bebidas: { category: "Bebidas", shortLabel: "Bebidas" },
      cocteles: { category: "Cócteles", shortLabel: "Cócteles" },
      "granizados-smoothies": { category: "Granizados y Smoothies", shortLabel: "Granizados y Smoothies" },
      sangrias: { category: "Sangrías", shortLabel: "Sangrías" },
      comidas: { category: "Comidas", shortLabel: "Comidas" },
      "tarifas-hamacas": { category: "Tarifas hamacas", shortLabel: "Hamacas" }
    },
    groups: {
      desayuno: { category: "Desayuno", shortLabel: "Desayuno" },
      picar: { category: "Aperitivo y picar", shortLabel: "Picar" },
      tapas: { category: "Tapas", shortLabel: "Tapas" },
      bocadillos: { category: "Bocadillos", shortLabel: "Bocatas" },
      pizzas: { category: "Pizzas al horno de piedra", shortLabel: "Pizzas" },
      platos: { category: "Platos preparados", shortLabel: "Platos" },
      "granizados-smoothies-frappes": { category: "Granizados, Smoothies y Frappés", shortLabel: "Granizados" },
      "cocteles-clasicos": { category: "Cócteles", shortLabel: "Cócteles" },
      "sangrias-carta": { category: "Sangrías", shortLabel: "Sangrías" }
    },
    items: {
      "desayuno-tradicional": {
        title: "Desayuno tradicional",
        description: "Café o té/infusión + zumo + tostada a elegir: aceite, mermelada, tomate, mantequilla o bollería.",
        note: "Hasta las 12:00h"
      },
      "desayuno-supreme": {
        title: "Desayuno Suprem",
        description: "Café o té/infusión + zumo + tostada a elegir: tostada jamón con tomate, salmón y aguacate, o atún con tomate.",
        note: "Hasta las 12:00h"
      },
      "frutos-secos": {
        title: "Frutos secos",
        description: "Aperitivo clásico para acompañar la bebida."
      },
      papas: {
        title: "Papas",
        description: "Patatas chips crujientes."
      },
      aceitunas: {
        title: "Aceitunas",
        description: "Aceitunas servidas como aperitivo."
      },
      edamame: {
        title: "Edamame",
        description: "Vainas de soja al vapor, ligeras y sabrosas."
      },
      "barqueta-mini-fuets": {
        title: "Barqueta de mini fuets",
        description: "Mini fuets servidos en barqueta."
      },
      "papas-mejillones": {
        title: "Papas con mejillones",
        description: "Papas acompañadas de mejillones."
      },
      "papas-boquerones": {
        title: "Papas con boquerones",
        description: "Papas acompañadas de boquerones."
      },
      "papas-limon-berberechos": {
        title: "Papas fresquitas con limón y berberechos",
        description: "Papas con toque fresco de limón y berberechos."
      },
      "pulpo-pimenton": {
        title: "Lata de pulpo al pimentón",
        description: "Lata de pulpo al pimentón."
      },
      "ensaladilla-rusa": {
        title: "Ensaladilla rusa",
        description: "Ensaladilla rusa clásica."
      },
      "ajo-arriero": {
        title: "Ajo arriero",
        description: "Tapa tradicional de ajo arriero."
      },
      "nachos-verano": {
        title: "Nachos de verano",
        description: "Crema agria, guacamole y salsa mexicana."
      },
      "nachos-tartar-salmon": {
        title: "Nachos con tartar de salmón",
        description: "Tartar de salmón, alga wakame y salsa Tavola."
      },
      "tabla-jamon-iberico-duroc": {
        title: "Tabla jamón ibérico duroc",
        description: "Tabla de jamón ibérico duroc."
      },
      "tabla-quesos-valencianos": {
        title: "Tabla quesos valencianos",
        description: "Selección de quesos valencianos."
      },
      "tortilla-jamon": {
        title: "Mini Tortilla con jamón",
        description: "Mini tortilla acompañada de jamón."
      },
      "mejillones-vapor-limon": {
        title: "Mejillones al vapor con limón",
        description: "Mejillones al vapor con un toque de limón."
      },
      "servicio-pan": {
        title: "Servicio de pan",
        description: "Pan para acompañar."
      },
      "servicio-picos-pan-adicional": {
        title: "Servicio de picos y pan adicional",
        description: "Picos y pan extra."
      },
      "salsas-adicionales": {
        title: "Salsas adicionales",
        description: "Salsas extra a elección del cliente."
      },
      "bocadillo-escalivada": {
        title: "Bocadillo escalivada",
        description: "Bocadillo de escalivada.",
        note: "Acompañados con papas."
      },
      "magro-tomate": {
        title: "Magro con tomate",
        description: "Bocadillo de magro con tomate.",
        note: "Acompañados con papas."
      },
      "lomo-ajos-tiernos": {
        title: "Lomo con ajos tiernos",
        description: "Bocadillo de lomo con ajos tiernos.",
        note: "Acompañados con papas."
      },
      margarita: {
        title: "Margarita",
        description: "Pizza clásica con tomate, mozzarella y albahaca."
      },
      tartufata: {
        title: "Tartufata",
        description: "Jamón, queso y trufa."
      },
      "jamon-queso": {
        title: "Jamón y queso",
        description: "Pizza de jamón y queso."
      },
      "cuatro-quesos": {
        title: "4 quesos",
        description: "Pizza con mezcla de cuatro quesos."
      },
      peperoni: {
        title: "Peperoni",
        description: "Pizza con peperoni."
      },
      canibal: {
        title: "Canibal",
        description: "Bacon, peperoni y jamón york."
      },
      "ensalada-bonito": {
        title: "Ensalada bonito",
        description: "Ensalada con bonito."
      },
      "pollo-asado-patatas": {
        title: "Pollo asado con patatas",
        description: "Pollo asado acompañado de patatas."
      },
      "costillas-barbacoa": {
        title: "Costillas a la barbacoa",
        description: "Costillas con salsa barbacoa."
      },
      "salmon-teriyaki": {
        title: "Salmón Teriyaki",
        description: "Salmón con salsa teriyaki."
      },
      "pollo-curry": {
        title: "Pollo al curry",
        description: "Pollo cocinado con salsa curry."
      },
      "macarrones-bolonesa": {
        title: "Macarrones Boloñesa",
        description: "Macarrones con salsa boloñesa."
      },
      "paella-valenciana": {
        title: "Paella Valenciana",
        description: "Paella valenciana tradicional."
      },
      "granizado-limon": {
        title: "Granizado de limón",
        description: "Granizado refrescante de limón.",
        note: "Suplemento 3 € con alcohol."
      },
      "smoothie-mango": {
        title: "Smoothie Mango",
        description: "Smoothie de mango.",
        note: "Suplemento 3 € con alcohol."
      },
      "smoothie-coco-pina": {
        title: "Smoothie Coco y piña",
        description: "Smoothie de coco y piña.",
        note: "Suplemento 3 € con alcohol."
      },
      "smoothie-yogur-melon": {
        title: "Smoothie Yogur y melón",
        description: "Smoothie de yogur y melón.",
        note: "Suplemento 3 € con alcohol."
      },
      "frappe-cafe": {
        title: "Frappé café",
        description: "Frappé de café.",
        note: "Suplemento 3 € con alcohol."
      },
      "frappe-chocolate": {
        title: "Frappé chocolate",
        description: "Frappé de chocolate.",
        note: "Suplemento 3 € con alcohol."
      },
      "frappe-vainilla": {
        title: "Frappé vainilla",
        description: "Frappé de vainilla.",
        note: "Suplemento 3 € con alcohol."
      },
      "mojito-normal": {
        title: "Mojito normal",
        description: "Mojito clásico."
      },
      "mojito-sabores": {
        title: "Mojito sabores",
        description: "Mojito de sabores: melón, fresa o maracuyá."
      },
      "daikiri-frozen": {
        title: "Daikiri Frozen",
        description: "Daikiri frozen."
      },
      "pina-colada": {
        title: "Piña colada",
        description: "Cóctel de piña colada."
      },
      caipirinha: {
        title: "Caipirinha",
        description: "Caipirinha clásica."
      },
      caipiroska: {
        title: "Caipiroska",
        description: "Caipiroska clásica."
      },
      "tinto-verano-vaso": {
        title: "Tinto verano vaso",
        description: "Tinto de verano servido en vaso."
      },
      "tinto-verano-jarra": {
        title: "Tinto verano jarra",
        description: "Tinto de verano servido en jarra."
      },
      "sangria-vino-blanco": {
        title: "Sangría vino blanco",
        description: "Sangría preparada con vino blanco."
      },
      "sangria-vino-tinto": {
        title: "Sangría vino tinto",
        description: "Sangría preparada con vino tinto."
      },
      "sangria-cava": {
        title: "Sangría de cava",
        description: "Sangría preparada con cava."
      },
      "agua-valencia": {
        title: "Agua de Valencia",
        description: "Cóctel valenciano fresco y cítrico."
      }
    }
  },
  en: {
    ui: {
      documentTitle: "Tavola Chiringo | Il dolce far niente è tutto",
      subtitle: "Il dolce far niente è tutto",
      languageLabel: "Language",
      topTabsLabel: "Menu categories",
      bottomTabsLabel: "Change menu section",
      menuLayoutLabel: "Interactive menu",
      menuListLabel: "Products in the selected category",
      imageFrameLabel: "Enlarge dish image",
      lightboxLabel: "Enlarged image",
      closeLightboxLabel: "Close enlarged image",
      viewSection: "View section",
      sectionEyebrow: "Section",
      productSingular: "product",
      productPlural: "products",
      pending: "Pending",
      pendingTitle: "Section pending",
      pendingCopy: "There are no products loaded in {section} yet.",
      dishSelected: "Selected dish",
      tariffPlural: "rates",
      scheduleLabel: "Time",
      includesTitle: "Includes 2 drinks",
      drinksList: "Beer, soft drink, wine, or vermouth",
      reserveLabel: "Book",
      rulesTitle: "Beach Club Rules",
      infoTitle: "Additional information",
      selectDaysLabel: "Select days",
      selectTurnLabel: "Select session",
      priceLabel: "PRICE"
    },
    sections: {
      bebidas: { category: "Drinks", shortLabel: "Drinks" },
      cocteles: { category: "Cocktails", shortLabel: "Cocktails" },
      "granizados-smoothies": { category: "Slushies & Smoothies", shortLabel: "Slushies & Smoothies" },
      sangrias: { category: "Sangrias", shortLabel: "Sangrias" },
      comidas: { category: "Food", shortLabel: "Food" },
      "tarifas-hamacas": { category: "Sunbed rates", shortLabel: "Sunbeds" }
    },
    groups: {
      desayuno: { category: "Breakfast", shortLabel: "Breakfast" },
      picar: { category: "Snacks & nibbles", shortLabel: "Snacks" },
      tapas: { category: "Tapas", shortLabel: "Tapas" },
      bocadillos: { category: "Sandwiches", shortLabel: "Sandwiches" },
      pizzas: { category: "Stone oven pizzas", shortLabel: "Pizzas" },
      platos: { category: "Prepared dishes", shortLabel: "Dishes" },
      "granizados-smoothies-frappes": { category: "Slushies, Smoothies & Frappés", shortLabel: "Slushies" },
      "cocteles-clasicos": { category: "Cocktails", shortLabel: "Cocktails" },
      "sangrias-carta": { category: "Sangrias", shortLabel: "Sangrias" }
    },
    items: {
      "desayuno-tradicional": {
        title: "Traditional breakfast",
        description: "Coffee or tea/herbal infusion + juice + toast of your choice: olive oil, jam, tomato, butter, or pastry.",
        note: "Until 12:00."
      },
      "desayuno-supreme": {
        title: "Supreme breakfast",
        description: "Coffee or tea/herbal infusion + juice + toast of your choice: ham with tomato, salmon and avocado, or tuna with tomato.",
        note: "Until 12:00."
      },
      "frutos-secos": { title: "Mixed nuts", description: "Classic snack to pair with your drink." },
      papas: { title: "Potato chips", description: "Crispy potato chips." },
      aceitunas: { title: "Olives", description: "Olives served as an aperitif." },
      edamame: { title: "Edamame", description: "Steamed soybeans, light and tasty." },
      "barqueta-mini-fuets": { title: "Tray of mini fuets", description: "Mini fuets served in a tray." },
      "papas-mejillones": { title: "Potato chips with mussels", description: "Potato chips served with mussels." },
      "papas-boquerones": { title: "Potato chips with anchovies", description: "Potato chips served with anchovies." },
      "papas-limon-berberechos": { title: "Fresh chips with lemon and cockles", description: "Potato chips with a fresh touch of lemon and cockles." },
      "pulpo-pimenton": { title: "Tin of octopus with paprika", description: "Tin of octopus with paprika." },
      "ensaladilla-rusa": { title: "Russian salad", description: "Classic Russian salad." },
      "ajo-arriero": { title: "Ajo arriero", description: "Traditional ajo arriero tapa." },
      "nachos-verano": { title: "Summer nachos", description: "Sour cream, guacamole, and Mexican sauce." },
      "nachos-tartar-salmon": { title: "Nachos with salmon tartare", description: "Salmon tartare, wakame seaweed, and Tavola sauce." },
      "tabla-jamon-iberico-duroc": { title: "Iberian Duroc ham board", description: "Board of Iberian Duroc ham." },
      "tabla-quesos-valencianos": { title: "Valencian cheese board", description: "Selection of Valencian cheeses." },
      "tortilla-jamon": { title: "Mini Spanish omelette with ham", description: "Mini Spanish omelette served with ham." },
      "mejillones-vapor-limon": { title: "Steamed mussels with lemon", description: "Steamed mussels with a touch of lemon." },
      "servicio-pan": { title: "Bread service", description: "Bread to accompany your meal." },
      "servicio-picos-pan-adicional": { title: "Breadsticks and extra bread", description: "Extra breadsticks and bread." },
      "salsas-adicionales": { title: "Extra sauces", description: "Extra sauces of the customer's choice." },
      "bocadillo-escalivada": { title: "Escalivada sandwich", description: "Sandwich with escalivada grilled vegetables.", note: "Served with potato chips." },
      "magro-tomate": { title: "Pork with tomato", description: "Pork and tomato sandwich.", note: "Served with potato chips." },
      "lomo-ajos-tiernos": { title: "Pork loin with tender garlic", description: "Pork loin sandwich with tender garlic shoots.", note: "Served with potato chips." },
      margarita: { title: "Margherita", description: "Classic pizza with tomato, mozzarella, and basil." },
      tartufata: { title: "Tartufata", description: "Ham, cheese, and truffle." },
      "jamon-queso": { title: "Ham and cheese", description: "Ham and cheese pizza." },
      "cuatro-quesos": { title: "4 cheeses", description: "Pizza with a blend of four cheeses." },
      peperoni: { title: "Pepperoni", description: "Pizza with pepperoni." },
      canibal: { title: "Canibal", description: "Bacon, pepperoni, and York ham." },
      "ensalada-bonito": { title: "Tuna salad", description: "Salad with tuna." },
      "pollo-asado-patatas": { title: "Roast chicken with potatoes", description: "Roast chicken served with potatoes." },
      "costillas-barbacoa": { title: "BBQ ribs", description: "Ribs with barbecue sauce." },
      "salmon-teriyaki": { title: "Teriyaki salmon", description: "Salmon with teriyaki sauce." },
      "pollo-curry": { title: "Chicken curry", description: "Chicken cooked in curry sauce." },
      "macarrones-bolonesa": { title: "Macaroni Bolognese", description: "Macaroni with Bolognese sauce." },
      "paella-valenciana": { title: "Valencian paella", description: "Traditional Valencian paella." },
      "granizado-limon": { title: "Lemon slushie", description: "Refreshing lemon slushie.", note: "Alcohol supplement +3 €." },
      "smoothie-mango": { title: "Mango smoothie", description: "Mango smoothie.", note: "Alcohol supplement +3 €." },
      "smoothie-coco-pina": { title: "Coconut and pineapple smoothie", description: "Coconut and pineapple smoothie.", note: "Alcohol supplement +3 €." },
      "smoothie-yogur-melon": { title: "Yogurt and melon smoothie", description: "Yogurt and melon smoothie.", note: "Alcohol supplement +3 €." },
      "frappe-cafe": { title: "Coffee frappé", description: "Coffee frappé.", note: "Alcohol supplement +3 €." },
      "frappe-chocolate": { title: "Chocolate frappé", description: "Chocolate frappé.", note: "Alcohol supplement +3 €." },
      "frappe-vainilla": { title: "Vanilla frappé", description: "Vanilla frappé.", note: "Alcohol supplement +3 €." },
      "mojito-normal": { title: "Classic mojito", description: "Classic mojito." },
      "mojito-sabores": { title: "Flavoured mojito", description: "Flavoured mojito: melon, strawberry, or passion fruit." },
      "daikiri-frozen": { title: "Frozen daiquiri", description: "Frozen daiquiri." },
      "pina-colada": { title: "Piña colada", description: "Piña colada cocktail." },
      caipirinha: { title: "Caipirinha", description: "Classic caipirinha." },
      caipiroska: { title: "Caipiroska", description: "Classic caipiroska." },
      "tinto-verano-vaso": { title: "Tinto de verano glass", description: "Tinto de verano served by the glass." },
      "tinto-verano-jarra": { title: "Tinto de verano jug", description: "Tinto de verano served in a jug." },
      "sangria-vino-blanco": { title: "White wine sangria", description: "Sangria made with white wine." },
      "sangria-vino-tinto": { title: "Red wine sangria", description: "Sangria made with red wine." },
      "sangria-cava": { title: "Cava sangria", description: "Sangria made with cava." },
      "agua-valencia": { title: "Agua de Valencia", description: "Fresh citrus Valencian cocktail." }
    }
  },
  de: {
    ui: {
      documentTitle: "Tavola Chiringo | Il dolce far niente è tutto",
      subtitle: "Il dolce far niente è tutto",
      languageLabel: "Sprache",
      topTabsLabel: "Kategorien der Karte",
      bottomTabsLabel: "Bereich der Karte wechseln",
      menuLayoutLabel: "Interaktive Speisekarte",
      menuListLabel: "Produkte der ausgewählten Kategorie",
      imageFrameLabel: "Bild des Gerichts vergrößern",
      lightboxLabel: "Vergrößertes Bild",
      closeLightboxLabel: "Vergrößertes Bild schließen",
      viewSection: "Bereich anzeigen",
      sectionEyebrow: "Bereich",
      productSingular: "Produkt",
      productPlural: "Produkte",
      pending: "Ausstehend",
      pendingTitle: "Bereich ausstehend",
      pendingCopy: "In {section} sind noch keine Produkte eingetragen.",
      dishSelected: "Ausgewähltes Gericht",
      tariffPlural: "Tarife",
      scheduleLabel: "Uhrzeit",
      includesTitle: "Inklusive 2 Getränke",
      drinksList: "Bier, Softdrink, Wein oder Wermut",
      reserveLabel: "Reservieren",
      rulesTitle: "Beach Club Regeln",
      infoTitle: "Zusätzliche Informationen",
      selectDaysLabel: "Tage auswählen",
      selectTurnLabel: "Turnus auswählen",
      priceLabel: "PREIS"
    },
    sections: {
      bebidas: { category: "Getränke", shortLabel: "Getränke" },
      cocteles: { category: "Cocktails", shortLabel: "Cocktails" },
      "granizados-smoothies": { category: "Granitas & Smoothies", shortLabel: "Granitas & Smoothies" },
      sangrias: { category: "Sangrias", shortLabel: "Sangrias" },
      comidas: { category: "Speisen", shortLabel: "Speisen" },
      "tarifas-hamacas": { category: "Liegenpreise", shortLabel: "Liegen" }
    },
    groups: {
      desayuno: { category: "Frühstück", shortLabel: "Frühstück" },
      picar: { category: "Aperitif & Snacks", shortLabel: "Snacks" },
      tapas: { category: "Tapas", shortLabel: "Tapas" },
      bocadillos: { category: "Sandwiches", shortLabel: "Sandwiches" },
      pizzas: { category: "Pizzen aus dem Steinofen", shortLabel: "Pizzen" },
      platos: { category: "Zubereitete Gerichte", shortLabel: "Gerichte" },
      "granizados-smoothies-frappes": { category: "Granitas, Smoothies & Frappés", shortLabel: "Granitas" },
      "cocteles-clasicos": { category: "Cocktails", shortLabel: "Cocktails" },
      "sangrias-carta": { category: "Sangrias", shortLabel: "Sangrias" }
    },
    items: {
      "desayuno-tradicional": {
        title: "Traditionelles Frühstück",
        description: "Kaffee oder Tee/Kräutertee + Saft + Toast nach Wahl: Olivenöl, Marmelade, Tomate, Butter oder Gebäck.",
        note: "Bis 12:00 Uhr."
      },
      "desayuno-supreme": {
        title: "Supreme Frühstück",
        description: "Kaffee oder Tee/Kräutertee + Saft + Toast nach Wahl: Schinken mit Tomate, Lachs und Avocado oder Thunfisch mit Tomate.",
        note: "Bis 12:00 Uhr."
      },
      "frutos-secos": { title: "Gemischte Nüsse", description: "Klassischer Snack zum Getränk." },
      papas: { title: "Kartoffelchips", description: "Knusprige Kartoffelchips." },
      aceitunas: { title: "Oliven", description: "Oliven als Aperitif serviert." },
      edamame: { title: "Edamame", description: "Gedämpfte Sojabohnen, leicht und aromatisch." },
      "barqueta-mini-fuets": { title: "Schale mit Mini-Fuets", description: "Mini-Fuets in einer Schale serviert." },
      "papas-mejillones": { title: "Kartoffelchips mit Miesmuscheln", description: "Kartoffelchips mit Miesmuscheln." },
      "papas-boquerones": { title: "Kartoffelchips mit Sardellen", description: "Kartoffelchips mit Sardellen." },
      "papas-limon-berberechos": { title: "Frische Chips mit Zitrone und Herzmuscheln", description: "Kartoffelchips mit frischer Zitrone und Herzmuscheln." },
      "pulpo-pimenton": { title: "Dose Oktopus mit Paprika", description: "Dose Oktopus mit Paprika." },
      "ensaladilla-rusa": { title: "Russischer Salat", description: "Klassischer russischer Salat." },
      "ajo-arriero": { title: "Ajo arriero", description: "Traditionelle Ajo-arriero-Tapa." },
      "nachos-verano": { title: "Sommer-Nachos", description: "Sour Cream, Guacamole und mexikanische Sauce." },
      "nachos-tartar-salmon": { title: "Nachos mit Lachstatar", description: "Lachstatar, Wakame-Algen und Tavola-Sauce." },
      "tabla-jamon-iberico-duroc": { title: "Brett mit iberischem Duroc-Schinken", description: "Brett mit iberischem Duroc-Schinken." },
      "tabla-quesos-valencianos": { title: "Brett mit valencianischem Käse", description: "Auswahl valencianischer Käsesorten." },
      "tortilla-jamon": { title: "Mini-Tortilla mit Schinken", description: "Mini-Tortilla mit Schinken serviert." },
      "mejillones-vapor-limon": { title: "Gedämpfte Miesmuscheln mit Zitrone", description: "Gedämpfte Miesmuscheln mit einem Hauch Zitrone." },
      "servicio-pan": { title: "Brotservice", description: "Brot als Beilage." },
      "servicio-picos-pan-adicional": { title: "Picos und zusätzliches Brot", description: "Picos und extra Brot." },
      "salsas-adicionales": { title: "Zusätzliche Saucen", description: "Zusätzliche Saucen nach Wahl des Gastes." },
      "bocadillo-escalivada": { title: "Bocadillo mit Escalivada", description: "Bocadillo mit Escalivada.", note: "Mit Kartoffelchips serviert." },
      "magro-tomate": { title: "Schweinefleisch mit Tomate", description: "Bocadillo mit Schweinefleisch und Tomate.", note: "Mit Kartoffelchips serviert." },
      "lomo-ajos-tiernos": { title: "Schweinelende mit jungem Knoblauch", description: "Bocadillo mit Schweinelende und jungem Knoblauch.", note: "Mit Kartoffelchips serviert." },
      margarita: { title: "Margherita", description: "Klassische Pizza mit Tomate, Mozzarella und Basilikum." },
      tartufata: { title: "Tartufata", description: "Schinken, Käse und Trüffel." },
      "jamon-queso": { title: "Schinken und Käse", description: "Pizza mit Schinken und Käse." },
      "cuatro-quesos": { title: "4 Käse", description: "Pizza mit einer Mischung aus vier Käsesorten." },
      peperoni: { title: "Peperoni", description: "Pizza mit Peperoni." },
      canibal: { title: "Canibal", description: "Bacon, Peperoni und York-Schinken." },
      "ensalada-bonito": { title: "Thunfischsalat", description: "Salat mit Thunfisch." },
      "pollo-asado-patatas": { title: "Brathähnchen mit Kartoffeln", description: "Brathähnchen mit Kartoffeln." },
      "costillas-barbacoa": { title: "BBQ-Rippchen", description: "Rippchen mit Barbecue-Sauce." },
      "salmon-teriyaki": { title: "Teriyaki-Lachs", description: "Lachs mit Teriyaki-Sauce." },
      "pollo-curry": { title: "Hähnchen-Curry", description: "Hähnchen in Currysauce." },
      "macarrones-bolonesa": { title: "Makkaroni Bolognese", description: "Makkaroni mit Bolognese-Sauce." },
      "paella-valenciana": { title: "Valencianische Paella", description: "Traditionelle valencianische Paella." },
      "granizado-limon": { title: "Zitronen-Granita", description: "Erfrischende Zitronen-Granita.", note: "Aufpreis mit Alkohol: 3 €." },
      "smoothie-mango": { title: "Mango-Smoothie", description: "Mango-Smoothie.", note: "Aufpreis mit Alkohol: 3 €." },
      "smoothie-coco-pina": { title: "Kokos-Ananas-Smoothie", description: "Kokos-Ananas-Smoothie.", note: "Aufpreis mit Alkohol: 3 €." },
      "smoothie-yogur-melon": { title: "Joghurt-Melonen-Smoothie", description: "Joghurt-Melonen-Smoothie.", note: "Aufpreis mit Alkohol: 3 €." },
      "frappe-cafe": { title: "Kaffee-Frappé", description: "Kaffee-Frappé.", note: "Aufpreis mit Alkohol: 3 €." },
      "frappe-chocolate": { title: "Schokoladen-Frappé", description: "Schokoladen-Frappé.", note: "Aufpreis mit Alkohol: 3 €." },
      "frappe-vainilla": { title: "Vanille-Frappé", description: "Vanille-Frappé.", note: "Aufpreis mit Alkohol: 3 €." },
      "mojito-normal": { title: "Klassischer Mojito", description: "Klassischer Mojito." },
      "mojito-sabores": { title: "Mojito mit Geschmack", description: "Mojito mit Geschmack: Melone, Erdbeere oder Maracuja." },
      "daikiri-frozen": { title: "Frozen Daiquiri", description: "Frozen Daiquiri." },
      "pina-colada": { title: "Piña Colada", description: "Piña-Colada-Cocktail." },
      caipirinha: { title: "Caipirinha", description: "Klassische Caipirinha." },
      caipiroska: { title: "Caipiroska", description: "Klassische Caipiroska." },
      "tinto-verano-vaso": { title: "Tinto de verano Glas", description: "Tinto de verano im Glas serviert." },
      "tinto-verano-jarra": { title: "Tinto de verano Krug", description: "Tinto de verano im Krug serviert." },
      "sangria-vino-blanco": { title: "Weißwein-Sangria", description: "Sangria mit Weißwein." },
      "sangria-vino-tinto": { title: "Rotwein-Sangria", description: "Sangria mit Rotwein." },
      "sangria-cava": { title: "Cava-Sangria", description: "Sangria mit Cava." },
      "agua-valencia": { title: "Agua de Valencia", description: "Frischer, zitrischer Cocktail aus Valencia." }
    }
  }
};

const languageNames = {
  es: "Español",
  en: "English",
  de: "Deutsch"
};

const topTabs = document.querySelector("#topTabs");
const bottomTabs = document.querySelector("#bottomTabs");
const languageSwitcher = document.querySelector("#languageSwitcher");
const introCopy = document.querySelector("#introCopy");
const menuLayout = document.querySelector(".menu-layout");
const menuList = document.querySelector("#menuList");
const dishPreview = document.querySelector("#dishPreview");
const imageFrame = document.querySelector("#imageFrame");
const dishImage = document.querySelector("#dishImage");
const dishCategory = document.querySelector("#dishCategory");
const dishTitle = document.querySelector("#dishTitle");
const dishPrice = document.querySelector("#dishPrice");
const dishDescription = document.querySelector("#dishDescription");
const dishNote = document.querySelector("#dishNote");
const dishStatus = document.querySelector("#dishStatus");
const imageLightbox = document.querySelector("#imageLightbox");
const imageLightboxImg = document.querySelector("#imageLightboxImg");
const imageLightboxClose = document.querySelector("#imageLightboxClose");
const allergenModal = document.querySelector("#allergenModal");
const allergenModalClose = document.querySelector("#allergenModalClose");
const allergenTitle = document.querySelector("#allergenTitle");
const allergenModalContent = document.querySelector("#allergenModalContent");

let activeSectionId = "comidas";
let activeHamacaPeriodId = "fin-semana";
let activeHamacaTurnId = "mananas";
let currentLanguage = getSavedLanguage();
let lastFocusedElement = null;
let ignoreNextImageClick = false;
let imageDragState = null;
let activeDragReturn = null;
let previewUpdateToken = 0;

const imagePreloadCache = new Map();

function getSavedLanguage() {
  try {
    const savedLanguage = localStorage.getItem("tavolaLanguage");
    return translations[savedLanguage] ? savedLanguage : "es";
  } catch (error) {
    return "es";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("tavolaLanguage", language);
  } catch (error) {
    // Local storage can be unavailable in some private browsing modes.
  }
}

function getCopy() {
  return translations[currentLanguage] || translations.es;
}

function getUiCopy() {
  return getCopy().ui;
}

function getSectionText(section) {
  return getCopy().sections[section.id] || translations.es.sections[section.id] || section;
}

function getGroupText(group) {
  return getCopy().groups[group.id] || translations.es.groups[group.id] || group;
}

function getItemText(item) {
  return getCopy().items[item.id] || translations.es.items[item.id] || item;
}

function formatProductCount(count) {
  const ui = getUiCopy();
  const label = count === 1 ? ui.productSingular : ui.productPlural;

  return `${count} ${label}`;
}

function getActiveSection() {
  return menuSections.find((section) => section.id === activeSectionId) || menuSections[0];
}

function createTab(section, placement) {
  const button = document.createElement("button");
  const sectionText = getSectionText(section);
  button.className = placement === "bottom" ? "tab-button category-chip" : "tab-button";
  button.type = "button";
  button.dataset.category = section.id;
  button.setAttribute("aria-controls", "menuList");
  button.setAttribute("aria-pressed", "false");
  button.setAttribute("aria-label", `${getUiCopy().viewSection} ${sectionText.category}`);

  if (placement === "bottom") {
    const label = document.createElement("span");

    label.className = "category-label";
    label.textContent = sectionText.shortLabel;
    button.append(label);
  } else {
    button.textContent = sectionText.category;
  }

  button.addEventListener("click", () => setActiveSection(section.id));

  return button;
}

function renderTabs() {
  const topFragment = document.createDocumentFragment();
  const bottomFragment = document.createDocumentFragment();

  topTabs.textContent = "";
  bottomTabs.textContent = "";

  menuSections.forEach((section) => {
    topFragment.append(createTab(section, "top"));
    bottomFragment.append(createTab(section, "bottom"));
  });

  topTabs.append(topFragment);
  bottomTabs.append(bottomFragment);
}

function getAllergenInfo(item) {
  return allergenData[item.id] || null;
}

function createAllergenButton(item, itemText) {
  const button = document.createElement("button");
  const icon = document.createElement("img");
  const label = document.createElement("span");

  button.className = "allergen-trigger";
  button.type = "button";
  button.setAttribute("aria-label", `Ver alérgenos de ${itemText.title}`);
  icon.src = "assets/precaucion1.png";
  icon.alt = "";
  icon.setAttribute("aria-hidden", "true");
  label.textContent = "Ver alérgenos";
  button.append(icon, label);
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    openAllergenModal(item, button);
  });

  return button;
}

function createDishButton(item, sectionName) {
  const card = document.createElement("article");
  const isInteractive = item.hasDetail !== false;
  const button = document.createElement(isInteractive ? "button" : "div");
  const itemText = getItemText(item);
  const allergens = getAllergenInfo(item);

  card.className = "dish";
  card.dataset.dish = item.id;
  card.classList.toggle("has-allergens", Boolean(allergens));
  card.classList.toggle("is-static", !isInteractive);

  button.className = isInteractive ? "dish-select" : "dish-select is-static";

  if (isInteractive) {
    button.type = "button";
    button.setAttribute("aria-controls", "dishPreview");
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-label", `${itemText.title}, ${sectionName}, ${item.price}`);
  }

  const text = document.createElement("span");
  const title = document.createElement("strong");
  const description = document.createElement("small");
  const price = document.createElement("b");

  title.textContent = itemText.title;
  description.textContent = itemText.description;
  price.textContent = item.price;

  text.append(title, description);

  if (itemText.note) {
    const note = document.createElement("em");
    note.className = "dish-note-inline";
    note.textContent = itemText.note;
    text.append(note);
  }

  button.append(text, price);

  if (isInteractive) {
    button.addEventListener("click", () => showDish(item, sectionName));
  }

  card.append(button);

  if (allergens) {
    card.append(createAllergenButton(item, itemText));
  }

  return card;
}

function getSectionItemCount(section) {
  return section.groups.reduce((total, group) => total + group.items.length, 0);
}

function getFirstSectionDish(section) {
  const firstGroup = section.groups.find((group) => group.items.length > 0);

  if (!firstGroup) return null;

  return {
    dish: firstGroup.items[0],
    groupName: firstGroup.category
  };
}

function createEmptySection(section) {
  const emptyState = document.createElement("div");
  const title = document.createElement("strong");
  const copy = document.createElement("p");
  const ui = getUiCopy();
  const sectionText = getSectionText(section);

  emptyState.className = "empty-section";
  title.textContent = ui.pendingTitle;
  copy.textContent = ui.pendingCopy.replace("{section}", sectionText.category);

  emptyState.append(title, copy);
  return emptyState;
}

function getHamacaDrinkOptions() {
  const drinks = {
    es: ["Cerveza", "Refresco", "Vino", "Vermut"],
    en: ["Beer", "Soft drink", "Wine", "Vermouth"],
    de: ["Bier", "Softdrink", "Wein", "Wermut"]
  };

  return drinks[currentLanguage] || drinks.es;
}

function getHamacaCopy() {
  return hamacaLanguageCopy[currentLanguage] || hamacaLanguageCopy.es;
}

function getActiveHamacaPeriod() {
  return hamacaTariffPeriods.find((period) => period.id === activeHamacaPeriodId) || hamacaTariffPeriods[0];
}

function getActiveHamacaTariff() {
  const activePeriod = getActiveHamacaPeriod();

  return activePeriod.tariffs.find((tariff) => tariff.id === activeHamacaTurnId) || activePeriod.tariffs[0];
}

function createHamacaIcon(type) {
  const icon = document.createElement("span");
  const icons = {
    morning: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"></path>
      </svg>`,
    afternoon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 18h16"></path>
        <path d="M7 18a5 5 0 0 1 10 0"></path>
        <path d="M12 5v3M5.6 8.6l2.1 2.1M18.4 8.6l-2.1 2.1"></path>
      </svg>`,
    "full-day": `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="10" r="3.5"></circle>
        <path d="M12 2v2.5M12 15.5V18M4 10h2.5M17.5 10H20M6.3 4.3l1.8 1.8M15.9 13.9l1.8 1.8M17.7 4.3l-1.8 1.8M8.1 13.9l-1.8 1.8M5 21h14"></path>
      </svg>`,
    beach: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19c3-2 5-2 8 0s5 2 8 0"></path>
        <path d="M5 12a7 7 0 0 1 14 0"></path>
        <path d="M12 12v7"></path>
        <path d="M7 12h10"></path>
      </svg>`,
    drink: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3h10l-1 8a4 4 0 0 1-8 0L7 3Z"></path>
        <path d="M12 15v5"></path>
        <path d="M9 20h6"></path>
        <path d="M9 7h6"></path>
      </svg>`
  };

  icon.className = `hamaca-icon hamaca-icon-${type}`;
  icon.innerHTML = icons[type] || icons.morning;
  return icon;
}

function createHamacaRules() {
  const ui = getUiCopy();
  const hamacaCopy = getHamacaCopy();
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  const list = document.createElement("ul");

  details.className = "hamaca-accordion";
  summary.textContent = ui.rulesTitle;

  hamacaCopy.rules.forEach((rule) => {
    const item = document.createElement("li");

    item.textContent = rule;
    list.append(item);
  });

  details.append(summary, list);
  return details;
}

function createHamacaBenefits() {
  const ui = getUiCopy();
  const hamacaCopy = getHamacaCopy();
  const block = document.createElement("section");
  const title = document.createElement("h3");
  const grid = document.createElement("div");

  block.className = "hamaca-benefits";
  title.textContent = ui.infoTitle;
  grid.className = "hamaca-benefit-grid";

  hamacaCopy.benefits.forEach((benefit, index) => {
    const item = document.createElement("div");
    const mark = document.createElement("span");
    const copy = document.createElement("p");

    item.className = "hamaca-benefit";
    mark.className = "hamaca-benefit-mark";
    mark.textContent = index === 0 ? "QR" : "TAV";
    copy.textContent = benefit;
    item.append(mark, copy);
    grid.append(item);
  });

  block.append(title, grid);
  return block;
}

function createHamacaDaySelector(activePeriod) {
  const ui = getUiCopy();
  const hamacaCopy = getHamacaCopy();
  const block = document.createElement("section");
  const title = document.createElement("h3");
  const options = document.createElement("div");

  block.className = "hamaca-selector hamaca-days";
  title.textContent = ui.selectDaysLabel;
  options.className = "hamaca-choice-row";

  hamacaTariffPeriods.forEach((period) => {
    const button = document.createElement("button");
    const label = document.createElement("span");
    const isActive = period.id === activePeriod.id;

    button.className = "hamaca-choice hamaca-day-choice";
    button.type = "button";
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    label.textContent = hamacaCopy.periods[period.id] || period.label;
    button.append(createHamacaIcon("beach"), label);
    button.addEventListener("click", () => {
      activeHamacaPeriodId = period.id;
      renderActiveSection();
    });

    options.append(button);
  });

  block.append(title, options);
  return block;
}

function createHamacaTurnSelector(activePeriod, activeTariff) {
  const ui = getUiCopy();
  const hamacaCopy = getHamacaCopy();
  const block = document.createElement("section");
  const title = document.createElement("h3");
  const options = document.createElement("div");

  block.className = "hamaca-selector hamaca-turns";
  title.textContent = ui.selectTurnLabel;
  options.className = "hamaca-turn-grid";

  activePeriod.tariffs.forEach((tariff) => {
    const button = document.createElement("button");
    const text = document.createElement("span");
    const label = document.createElement("strong");
    const schedule = document.createElement("small");
    const isActive = tariff.id === activeTariff.id;

    button.className = "hamaca-choice hamaca-turn-choice";
    button.type = "button";
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    label.textContent = hamacaCopy.tariffs[tariff.id] || tariff.name;
    schedule.textContent = tariff.schedule;
    text.append(label, schedule);
    button.append(createHamacaIcon(tariff.icon), text);
    button.addEventListener("click", () => {
      activeHamacaTurnId = tariff.id;
      renderActiveSection();
    });

    options.append(button);
  });

  block.append(title, options);
  return block;
}

function createHamacaHeroCard(activePeriod, activeTariff) {
  const ui = getUiCopy();
  const hamacaCopy = getHamacaCopy();
  const card = document.createElement("article");
  const imageWrap = document.createElement("div");
  const image = document.createElement("img");
  const overlay = document.createElement("div");
  const turn = document.createElement("span");
  const schedule = document.createElement("strong");
  const info = document.createElement("div");
  const priceBlock = document.createElement("div");
  const priceLabel = document.createElement("span");
  const price = document.createElement("strong");
  const periodPill = document.createElement("small");
  const drinksBlock = document.createElement("div");
  const drinksCopy = document.createElement("div");
  const drinksTitle = document.createElement("strong");
  const drinksText = document.createElement("p");

  card.className = "hamaca-visual-card";
  imageWrap.className = "hamaca-visual-image";
  overlay.className = "hamaca-visual-overlay";
  info.className = "hamaca-visual-info";
  priceBlock.className = "hamaca-price-block";
  priceLabel.className = "hamaca-price-label";
  periodPill.className = "hamaca-period-pill";
  drinksBlock.className = "hamaca-drinks-block";

  image.src = "assets/hamaca1.png";
  image.alt = "Hamacas frente al mar en Tavola Chiringo";
  turn.textContent = hamacaCopy.tariffs[activeTariff.id] || activeTariff.name;
  schedule.textContent = activeTariff.schedule;
  priceLabel.textContent = ui.priceLabel;
  price.textContent = activeTariff.price;
  periodPill.textContent = hamacaCopy.periods[activePeriod.id] || activePeriod.label;
  drinksTitle.textContent = ui.includesTitle;
  drinksText.textContent = ui.drinksList;

  overlay.append(turn, schedule);
  imageWrap.append(image, overlay);
  priceBlock.append(priceLabel, price, periodPill);
  drinksCopy.append(drinksTitle, drinksText);
  drinksBlock.append(createHamacaIcon("drink"), drinksCopy);
  info.append(priceBlock, drinksBlock);
  card.append(imageWrap, info);
  return card;
}

function createHamacasSection() {
  const wrapper = document.createElement("div");
  const activePeriod = getActiveHamacaPeriod();
  const activeTariff = getActiveHamacaTariff();

  wrapper.className = "hamacas-section";
  wrapper.append(
    createHamacaDaySelector(activePeriod),
    createHamacaTurnSelector(activePeriod, activeTariff),
    createHamacaHeroCard(activePeriod, activeTariff),
    createHamacaRules(),
    createHamacaBenefits()
  );
  return wrapper;
}

function createFoodGroup(group, isExpanded) {
  const groupBlock = document.createElement("section");
  const toggle = document.createElement("button");
  const label = document.createElement("span");
  const title = document.createElement("strong");
  const count = document.createElement("small");
  const indicator = document.createElement("span");
  const panel = document.createElement("div");
  const groupText = getGroupText(group);

  groupBlock.className = "food-group";
  groupBlock.dataset.group = group.id;
  toggle.className = "food-group-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-controls", `food-group-${group.id}`);
  toggle.setAttribute("aria-expanded", String(isExpanded));

  label.className = "food-group-label";
  title.textContent = groupText.category;
  count.textContent = formatProductCount(group.items.length);
  label.append(title, count);

  indicator.className = "food-group-indicator";
  indicator.setAttribute("aria-hidden", "true");
  indicator.textContent = isExpanded ? "−" : "+";

  panel.className = "food-group-panel";
  panel.id = `food-group-${group.id}`;
  panel.hidden = !isExpanded;

  if (isExpanded) {
    groupBlock.classList.add("is-open");
  }

  group.items.forEach((item) => {
    panel.append(createDishButton(item, groupText.category));
  });

  toggle.append(label, indicator);
  toggle.addEventListener("click", () => toggleFoodGroup(groupBlock, panel, toggle, indicator, group));
  groupBlock.append(toggle, panel);

  return groupBlock;
}

function toggleFoodGroup(groupBlock, panel, toggle, indicator, group) {
  const shouldOpen = !groupBlock.classList.contains("is-open");

  document.querySelectorAll(".food-group.is-open").forEach((openGroup) => {
    if (openGroup === groupBlock) return;

    const openPanel = openGroup.querySelector(".food-group-panel");
    const openToggle = openGroup.querySelector(".food-group-toggle");
    const openIndicator = openGroup.querySelector(".food-group-indicator");

    openGroup.classList.remove("is-open");
    openPanel.hidden = true;
    openToggle.setAttribute("aria-expanded", "false");
    openIndicator.textContent = "+";
  });

  groupBlock.classList.toggle("is-open", shouldOpen);
  panel.hidden = !shouldOpen;
  toggle.setAttribute("aria-expanded", String(shouldOpen));
  indicator.textContent = shouldOpen ? "−" : "+";

  if (shouldOpen && group.items[0]) {
    const groupText = getGroupText(group);

    dishPreview.classList.remove("is-hidden");
    menuLayout.classList.remove("is-empty-section");
    showDish(group.items[0], groupText.category);
  }
}

function renderActiveSection() {
  const section = getActiveSection();
  const sectionText = getSectionText(section);
  const ui = getUiCopy();
  const sectionBlock = document.createElement("div");
  const heading = document.createElement("div");
  const eyebrow = document.createElement("p");
  const title = document.createElement("h2");
  const count = document.createElement("span");
  const itemCount = getSectionItemCount(section);

  menuList.textContent = "";
  menuLayout.classList.toggle("is-hamacas-section", section.id === "tarifas-hamacas");
  menuList.classList.toggle("is-hamacas-list", section.id === "tarifas-hamacas");
  sectionBlock.className = "menu-section active-section";
  heading.className = "section-heading";
  eyebrow.className = "section-eyebrow";
  title.id = "activeCategoryTitle";
  count.className = "section-count";

  eyebrow.textContent = ui.sectionEyebrow;
  title.textContent = sectionText.category;
  count.textContent = itemCount > 0 ? formatProductCount(itemCount) : ui.pending;

  heading.append(eyebrow, title, count);
  sectionBlock.append(heading);

  if (section.id === "tarifas-hamacas") {
    resetImageDrag();
    previewUpdateToken += 1;
    dishPreview.classList.add("is-hidden");
    menuLayout.classList.add("is-empty-section");
    sectionBlock.textContent = "";
    sectionBlock.classList.add("hamacas-active-section");
    sectionBlock.append(createHamacasSection());
    menuList.append(sectionBlock);
    menuList.setAttribute("aria-label", sectionText.category);
    return;
  }

  if (itemCount === 0) {
    resetImageDrag();
    previewUpdateToken += 1;
    dishPreview.classList.add("is-hidden");
    menuLayout.classList.add("is-empty-section");
    sectionBlock.append(createEmptySection(section));
    menuList.append(sectionBlock);
    menuList.setAttribute("aria-labelledby", "activeCategoryTitle");
    return;
  }

  if (section.id === "comidas" || section.id === "bebidas") {
    section.groups.forEach((group) => {
      sectionBlock.append(createFoodGroup(group, false));
    });

    menuList.append(sectionBlock);
    menuList.setAttribute("aria-labelledby", "activeCategoryTitle");
    resetImageDrag();
    previewUpdateToken += 1;
    dishPreview.classList.add("is-hidden");
    menuLayout.classList.add("is-empty-section");
    return;
  }

  section.groups.forEach((group) => {
    group.items.forEach((item) => {
      sectionBlock.append(createDishButton(item, sectionText.category));
    });
  });

  menuList.append(sectionBlock);
  menuList.setAttribute("aria-labelledby", "activeCategoryTitle");

  const firstDish = getFirstSectionDish(section);

  dishPreview.classList.remove("is-hidden");
  menuLayout.classList.remove("is-empty-section");

  if (firstDish) {
    showDish(firstDish.dish, sectionText.category);
  }
}

function updateActiveTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    const isSelected = button.dataset.category === activeSectionId;

    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function setActiveSection(sectionId) {
  if (sectionId === activeSectionId) return;

  activeSectionId = sectionId;
  renderActiveSection();
  updateActiveTabs();
}

function updateStaticText() {
  const ui = getUiCopy();

  document.documentElement.lang = currentLanguage;
  document.title = ui.documentTitle;
  introCopy.setAttribute("aria-label", ui.subtitle);
  languageSwitcher.setAttribute("aria-label", ui.languageLabel);
  topTabs.setAttribute("aria-label", ui.topTabsLabel);
  bottomTabs.setAttribute("aria-label", ui.bottomTabsLabel);
  menuLayout.setAttribute("aria-label", ui.menuLayoutLabel);
  menuList.setAttribute("aria-label", ui.menuListLabel);
  imageFrame.setAttribute("aria-label", ui.imageFrameLabel);
  imageLightbox.setAttribute("aria-label", ui.lightboxLabel);
  imageLightboxClose.setAttribute("aria-label", ui.closeLightboxLabel);

  languageSwitcher.querySelectorAll(".language-button").forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    const languageName = languageNames[button.dataset.lang] || button.dataset.lang;

    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute("aria-label", `${ui.languageLabel}: ${languageName}`);
  });
}

function setLanguage(language) {
  if (!translations[language] || language === currentLanguage) return;

  currentLanguage = language;
  saveLanguage(language);
  updateStaticText();
  renderTabs();
  renderActiveSection();
  updateActiveTabs();
}

function setupLanguageSwitcher() {
  languageSwitcher.querySelectorAll(".language-button").forEach((button) => {
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
}

function preloadImage(src) {
  if (imagePreloadCache.has(src)) {
    return imagePreloadCache.get(src);
  }

  const preload = new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      if (typeof image.decode === "function") {
        image.decode().catch(() => undefined).then(() => resolve(src));
        return;
      }

      resolve(src);
    };

    image.onerror = reject;
    image.src = src;
  });

  imagePreloadCache.set(src, preload);
  preload.catch(() => imagePreloadCache.delete(src));
  return preload;
}

async function showDish(selectedDish, sectionName) {
  const updateToken = ++previewUpdateToken;
  const itemText = getItemText(selectedDish);
  const ui = getUiCopy();

  resetImageDrag();
  dishPreview.classList.add("is-changing");

  document.querySelectorAll(".dish").forEach((card) => {
    const isSelected = card.dataset.dish === selectedDish.id;
    const selectButton = card.querySelector(".dish-select");

    card.classList.toggle("is-active", isSelected);

    if (selectButton?.tagName === "BUTTON") {
      selectButton.setAttribute("aria-pressed", String(isSelected));
    }
  });

  try {
    await preloadImage(selectedDish.image);
  } catch (error) {
    console.warn("No se pudo cargar la imagen:", selectedDish.image);
  }

  if (updateToken !== previewUpdateToken) return;

  dishImage.src = selectedDish.image;
  dishImage.alt = itemText.title;
  dishCategory.textContent = sectionName;
  dishTitle.textContent = itemText.title;
  dishPrice.textContent = selectedDish.price;
  dishDescription.textContent = itemText.description;
  dishStatus.textContent = `${ui.dishSelected}: ${itemText.title}.`;

  if (itemText.note) {
    dishNote.textContent = itemText.note;
    dishNote.classList.remove("is-hidden");
  } else {
    dishNote.textContent = "";
    dishNote.classList.add("is-hidden");
  }

  requestAnimationFrame(() => {
    if (updateToken === previewUpdateToken) {
      dishPreview.classList.remove("is-changing");
    }
  });
}

function createAllergenGroup(label, allergens, className) {
  if (!allergens?.length) return null;

  const group = document.createElement("div");
  const title = document.createElement("strong");
  const list = document.createElement("div");

  group.className = `allergen-group ${className}`;
  title.textContent = label;
  list.className = "allergen-chip-list";

  allergens.forEach((allergen) => {
    const chip = document.createElement("span");

    chip.textContent = allergen;
    list.append(chip);
  });

  group.append(title, list);
  return group;
}

function createAllergenEntry(entry, { showTitle = true } = {}) {
  const card = document.createElement("article");
  const contains = createAllergenGroup("Contiene", entry.contains, "contains");
  const traces = createAllergenGroup("Puede contener trazas", entry.traces, "traces");

  card.className = "allergen-entry";

  if (showTitle) {
    const title = document.createElement("h3");

    title.textContent = entry.name;
    card.append(title);
  }

  if (contains) {
    card.append(contains);
  }

  if (traces) {
    card.append(traces);
  }

  return card;
}

function openAllergenModal(item, sourceElement) {
  const itemText = getItemText(item);
  const info = getAllergenInfo(item);

  if (!info) return;

  const entries = info.entries || [
    {
      name: info.title || itemText.title,
      contains: info.contains || [],
      traces: info.traces || []
    }
  ];

  lastFocusedElement = sourceElement || document.activeElement;
  allergenTitle.textContent = info.title || itemText.title;
  allergenModalContent.textContent = "";

  entries.forEach((entry) => {
    allergenModalContent.append(createAllergenEntry(entry, { showTitle: entries.length > 1 }));
  });

  allergenModal.classList.add("is-open");
  allergenModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("allergen-open");
  allergenModalClose.focus({ preventScroll: true });
}

function closeAllergenModal() {
  allergenModal.classList.remove("is-open");
  allergenModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("allergen-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus({ preventScroll: true });
  }
}

function openImageLightbox() {
  lastFocusedElement = document.activeElement;
  imageLightboxImg.src = dishImage.currentSrc || dishImage.src;
  imageLightboxImg.alt = dishImage.alt;
  imageLightbox.classList.add("is-open");
  imageLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  imageLightboxClose.focus({ preventScroll: true });
}

function closeImageLightbox() {
  imageLightbox.classList.remove("is-open");
  imageLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus({ preventScroll: true });
  }
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function resetImageDrag() {
  if (imageDragState?.preview) {
    imageDragState.preview.remove();
  }

  clearActiveDragReturn();
  imageFrame.classList.remove("is-drag-source", "is-liquid-settle");
  imageDragState = null;
}

function clearActiveDragReturn({ settle = false } = {}) {
  const runningReturn = activeDragReturn;

  if (!runningReturn) return false;

  if (runningReturn.animation) {
    runningReturn.animation.cancel();
  }

  if (runningReturn.preview) {
    runningReturn.preview.remove();
  }

  activeDragReturn = null;
  imageFrame.classList.remove("is-drag-source");

  if (settle) {
    runImageFrameSettle();
  }

  return true;
}

function beginImageDrag(event) {
  if (!event.isPrimary || imageLightbox.classList.contains("is-open")) return;

  imageFrame.classList.remove("is-liquid-settle");

  imageDragState = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    rect: imageFrame.getBoundingClientRect(),
    preview: null,
    isDragging: false,
    scale: 1
  };

  imageFrame.setPointerCapture(event.pointerId);
}

function updateImageDrag(event) {
  if (!imageDragState || imageDragState.pointerId !== event.pointerId) return;

  const deltaX = event.clientX - imageDragState.startX;
  const deltaY = event.clientY - imageDragState.startY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  if (distance < 3) return;

  event.preventDefault();
  imageDragState.isDragging = true;

  if (!imageDragState.preview) {
    imageDragState.preview = createImageDragPreview(imageDragState.rect);
    imageFrame.classList.add("is-drag-source");
  }

  updateImageDragPreview(imageDragState, deltaX, deltaY, distance);
}

function finishImageDrag(event) {
  if (!imageDragState || imageDragState.pointerId !== event.pointerId) return;

  const wasDragging = imageDragState.isDragging;
  const dragState = imageDragState;

  if (imageFrame.hasPointerCapture(event.pointerId)) {
    imageFrame.releasePointerCapture(event.pointerId);
  }

  imageDragState = null;

  if (wasDragging) {
    ignoreNextImageClick = true;
    window.setTimeout(() => {
      ignoreNextImageClick = false;
    }, 450);
    animateImageDragBack(dragState);
  }
}

function handleImageFrameClick(event) {
  if (ignoreNextImageClick || imageDragState || imageLightbox.classList.contains("is-open")) {
    event.preventDefault();
    return;
  }

  event.preventDefault();
  openImageLightbox();
}

function cancelImageDrag(event) {
  if (!imageDragState || imageDragState.pointerId !== event.pointerId) return;
  resetImageDrag();
}

function createImageDragPreview(rect) {
  const preview = document.createElement("img");

  preview.className = "image-drag-preview";
  preview.src = dishImage.currentSrc || dishImage.src;
  preview.alt = dishImage.alt;
  preview.style.width = `${rect.width}px`;
  preview.style.height = `${rect.height}px`;
  preview.style.left = `${rect.left}px`;
  preview.style.top = `${rect.top}px`;

  document.body.append(preview);
  return preview;
}

function updateImageDragPreview(state, deltaX, deltaY, distance) {
  const rect = state.rect;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const threshold = viewportHeight * 0.55;
  const progress = Math.min(distance / threshold, 1);
  const eased = progress * progress * (3 - 2 * progress);
  const finalRect = getImageDragFinalRect(rect, viewportWidth, viewportHeight);
  const currentLeft = rect.left + (finalRect.left - rect.left) * eased;
  const currentTop = rect.top + (finalRect.top - rect.top) * eased;
  const currentWidth = rect.width + (finalRect.width - rect.width) * eased;
  const currentHeight = rect.height + (finalRect.height - rect.height) * eased;

  state.left = currentLeft;
  state.top = currentTop;
  state.width = currentWidth;
  state.height = currentHeight;
  state.progress = progress;
  state.preview.style.left = `${currentLeft}px`;
  state.preview.style.top = `${currentTop}px`;
  state.preview.style.width = `${currentWidth}px`;
  state.preview.style.height = `${currentHeight}px`;
}

function getImageDragFinalRect(rect, viewportWidth, viewportHeight) {
  const maxWidth = viewportWidth * 0.9;
  const maxHeight = viewportHeight * (viewportWidth <= 820 ? 0.72 : 0.76);
  const ratio = rect.height / rect.width;
  let width = Math.min(maxWidth, rect.width * (viewportWidth <= 820 ? 4.1 : 2.35));
  let height = width * ratio;

  if (height > maxHeight) {
    height = maxHeight;
    width = height / ratio;
  }

  const left = (viewportWidth - width) / 2;
  const top = clamp((viewportHeight - height) / 2, 20, Math.max(20, viewportHeight - height - 20));

  return { left, top, width, height };
}

function animateImageDragBack(state) {
  const preview = state.preview;
  const rect = state.rect;

  if (!preview) {
    imageFrame.classList.remove("is-drag-source");
    return;
  }

  const fromLeft = state.left ?? rect.left;
  const fromTop = state.top ?? rect.top;
  const fromWidth = state.width ?? rect.width;
  const fromHeight = state.height ?? rect.height;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || typeof preview.animate !== "function") {
    imageFrame.classList.remove("is-drag-source");
    window.setTimeout(() => preview.remove(), 180);
    return;
  }

  imageFrame.classList.remove("is-drag-source");

  const returnDuration = 400;
  const returnAnimation = preview.animate(
    [
      {
        left: `${fromLeft}px`,
        top: `${fromTop}px`,
        width: `${fromWidth}px`,
        height: `${fromHeight}px`,
        transform: "scale(1, 1)",
        opacity: 1,
        filter: "saturate(1)",
        offset: 0
      },
      {
        left: `${rect.left}px`,
        top: `${rect.top}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        transform: "scale(1, 1)",
        opacity: 1,
        filter: "saturate(1)",
        offset: 1
      }
    ],
    {
      duration: returnDuration,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      fill: "forwards"
    }
  );

  activeDragReturn = { animation: returnAnimation, preview };

  returnAnimation.onfinish = () => {
    if (activeDragReturn?.preview !== preview) return;

    activeDragReturn = null;
    preview.remove();
    runImageFrameSettle();
  };

  returnAnimation.oncancel = () => {
    if (activeDragReturn?.preview === preview) {
      activeDragReturn = null;
    }
  };
}

function runImageFrameSettle() {
  imageFrame.classList.remove("is-liquid-settle");
  void imageFrame.offsetWidth;
  imageFrame.classList.add("is-liquid-settle");
}

imageFrame.addEventListener("animationend", (event) => {
  if (event.animationName === "imageLiquidSettle") {
    imageFrame.classList.remove("is-liquid-settle");
  }
});

window.addEventListener(
  "scroll",
  () => {
    clearActiveDragReturn({ settle: true });
  },
  { passive: true }
);

setupLanguageSwitcher();
updateStaticText();
renderTabs();
renderActiveSection();
updateActiveTabs();

imageFrame.addEventListener("pointerdown", beginImageDrag);
imageFrame.addEventListener("pointermove", updateImageDrag);
imageFrame.addEventListener("pointerup", finishImageDrag);
imageFrame.addEventListener("pointercancel", cancelImageDrag);
imageFrame.addEventListener("click", handleImageFrameClick);

imageFrame.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openImageLightbox();
  }
});

imageLightboxClose.addEventListener("click", closeImageLightbox);

imageLightbox.addEventListener("click", (event) => {
  if (event.target === imageLightbox) {
    closeImageLightbox();
  }
});

allergenModalClose.addEventListener("click", closeAllergenModal);

allergenModal.addEventListener("click", (event) => {
  if (event.target === allergenModal) {
    closeAllergenModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageLightbox.classList.contains("is-open")) {
    closeImageLightbox();
  }

  if (event.key === "Escape" && allergenModal.classList.contains("is-open")) {
    closeAllergenModal();
  }
});

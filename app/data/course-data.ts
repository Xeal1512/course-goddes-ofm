export interface ModuleStep {
  id: string;
  title: string;
  description: string;
  details?: string[];
  codeOrPrompt?: {
    label: string;
    spanish?: string;
    english?: string;
    promptText?: string;
  };
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  linkCallout?: {
    text: string;
    url: string;
    buttonText: string;
  };
}

export interface CourseModule {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  iconName: string;
  badge?: string;
  summary: string;
  steps: ModuleStep[];
}

export const REFERRAL_LINK = "https://onlyfans.com?ref=538039483";
export const WHATSAPP_CONTACT = "AndreaGodde";
export const WHATSAPP_LINK = "https://wa.me/584123284813";

export const COURSE_MODULES: CourseModule[] = [
  {
    id: "paso-obligatorio",
    number: 0,
    title: "Paso Obligatorio Inicial",
    subtitle: "Registro Optimizado en OnlyFans",
    iconName: "ShieldCheck",
    badge: "Indispensable",
    summary:
      "Antes de comenzar cualquier lección o configuración, debes registrarte a través del enlace oficial optimizado para activar los beneficios de la comunidad Goddess OFM.",
    steps: [
      {
        id: "step-registro-obligatorio",
        title: "Registro Directo de Creadora",
        description:
          "Para descargar y registrarte en OnlyFans de forma optimizada y vinculada a la estrategia Goddess OFM, utiliza el enlace oficial directo de registro:",
        linkCallout: {
          text: "Enlace Oficial Directo para Creadoras OnlyFans:",
          url: REFERRAL_LINK,
          buttonText: "Registrarme en OnlyFans Ahora ➔",
        },
        details: [
          "Utiliza un correo electrónico nuevo creado exclusivamente para tu marca/alter ego.",
          "No vincules cuentas personales ni redes sociales personales.",
          "Guarda tus credenciales en un gestor de contraseñas seguro.",
        ],
      },
    ],
  },
  {
    id: "modulo-1",
    number: 1,
    title: "Módulo 1: De qué trata este negocio?",
    subtitle: "Conceptos Fundamentales",
    iconName: "Lightbulb",
    badge: "Fundamentos",
    summary:
      "Básicamente, el negocio consiste en atraer gringos y europeos desde una red social llamada Reddit hacia tu página de OnlyFans para sacarle dinero por chat.",
    steps: [
      {
        id: "m1-paso-1",
        title: "Paso 1: Tu personaje y tu cuerpo",
        description:
          "No intentes aparentar lo que no eres. Si eres flaquita, de cuerpo normal, o no tienes operaciones, ¡perfecto!",
        details: [
          "A muchísimos hombres les fascina la 'chica dulce y natural de al lado'.",
          "Vístete bonita, acomoda bien la luz, sonríe y cree tu propio personaje (una versión de ti que sea coqueta y cariñosa).",
          "Esto hace que el tipo sienta que habla con una chica real y no con un robot o un perfil falso."
        ],
      },
      {
        id: "m1-paso-2",
        title: "Paso 2: ¿Qué es Reddit y cómo se usa?",
        description:
          "Reddit es como una pared gigante llena de miles de carteleras (llamadas subreddits) divididas por temas.",
        details: [
          "¿Qué es el Karma? Son los puntos que te da Reddit cuando a la gente le gustan tus fotos o tus comentarios. Necesitas ganar puntos primero.",
          "El truco de la publicidad: No publiques en grupos que digan 'OnlyFans'. Publica tu foto bonita en grupos generales que peguen con tu cuerpo.",
          "Cómo traerlos a tu OnlyFans: Pones el link de tu OnlyFans pegado arriba en tu perfil de Reddit, y en la foto que publicas pones un comentario disimulado para que te busquen."
        ],
      },
      {
        id: "m1-paso-3",
        title: "Paso 3: La estrategia del OnlyFans Gratis y el Chat",
        description:
          "Para que la gente entre sin pensarlo tanto, tu página de OnlyFans debe ser gratis. Así entran miles de tipos sin pagar entrada. La plata no se la sacas en la entrada, se la sacas en el chat privado:",
        details: [
          "1. El tipo te escribe porque entró gratis.",
          "2. Le respondes lindo y corto (para romper el hielo).",
          "3. Pasas a un tono más coqueto (para picarlo).",
          "4. Llegas al tono hot y le dices que le tienes un video o foto especial.",
          "5. Le mandas el mensaje bloqueado con precio (por ejemplo, $10 o $20). Para poder ver la foto o el video, él tiene que pagar. ¡Ahí es donde haces el dinero!"
        ],
      },
      {
        id: "m1-paso-4",
        title: "Paso 4: ¿Cómo y cuándo cobras la plata?",
        description:
          "Al principio, cada vez que un cliente te paga por desbloquear una foto o te deja una propina, OnlyFans guarda ese dinero por 21 días antes de entregártelo.",
        details: [
          "Es una regla de ellos para revisar que todo esté en orden.",
          "Cumplidos los 21 días, ese dinero pasa a tu saldo disponible.",
          "Lo puedes retirar directamente a la cuenta o procesador de pago que tengas configurado."
        ],
      }
    ],
  },
  {
    id: "modulo-2",
    number: 2,
    title: "Módulo 2: Alter Ego y Nicho",
    subtitle: "Construcción de Identidad y Anonimato",
    iconName: "UserSecret",
    badge: "Privacidad",
    summary:
      "Diseña una personalidad pública atractiva para separar al 100% tu vida personal de tu trabajo en plataformas.",
    steps: [
      {
        id: "m2-alter-ego-concept",
        title: "1. ¿Qué es un Alter Ego y por qué lo necesitas?",
        description:
          "Un alter ego es la personalidad, nombre e imagen pública que creas exclusivamente para tu trabajo en plataformas. Te permite proteger totalmente tu vida personal, mantener tu privacidad y anonimato, y construir una marca atractiva, profesional y comercial.",
        details: [
          "Protección de identidad frente a conocidos o familiares.",
          "Libertad creativa para expresarte sin prejuicios.",
          "Creación de un activo comercial independiente.",
        ],
      },
      {
        id: "m2-alter-ego-steps",
        title: "2. Paso a Paso para Construir tu Alter Ego",
        description:
          "Sigue estos pilares clave para definir tu personaje:",
        details: [
          "Elección del Nombre: Elige un alias o nombre artístico llamativo que encaje con tu concepto (ej. Goddess, Angel, Sweet...). Evita usar tu nombre o apellidos reales.",
          "Historias e Identidad: Define pequeños gustos, hobbys y actitudes que caractericen a tu personaje (ej. una chica dulce, universitaria, amante de la lectura, los animales o la moda)."
        ],
      },
      {
        id: "m2-nichos",
        title: "3. Nichos",
        description:
          "Entender el concepto de nicho y construir un personaje sólido en OnlyFans no es solo una estrategia de marketing, es la base para crear una conexión real y duradera con tu audiencia.",
        details: [
          "Un nicho es la categoría específica que define tu estilo y propuesta visual, permitiéndote destacar en un mercado saturado.",
          "Si tienes claro cuál es tu nicho (ej. dulce, natural como la chica de al lado), encontrar los lugares adecuados en Reddit es más directo. Buscas subreddits hiperespecíficos como r/GirlNextDoor, r/RealGirls o r/CuteMode.",
          "Esto garantiza que tu contenido llegue a usuarios que valoran tu tipo de belleza.",
          "Identifica tu cuerpo y construye un personaje coherente con lo que muestras ante la cámara.",
          "El personaje no debe entenderse como un disfraz falso, sino como una versión magnificada de tu personalidad. Muestra consistencia en los detalles cotidianos para que los suscriptores sientan una presencia cercana e íntima."
        ],
      }
    ],
  },
  {
    id: "modulo-3",
    number: 3,
    title: "Módulo 3: Configuración Básica de OnlyFans",
    subtitle: "Verificación, PPV y Tracking Links",
    iconName: "Settings",
    badge: "Configuración",
    summary:
      "Aprende el paso a paso técnico para verificar tu cuenta, subir contenido al feed, configurar publicaciones de pago y rastrear tus fuentes de tráfico.",
    steps: [
      {
        id: "m3-verification",
        title: "1. Registro y Verificación de Identidad Paso a Paso",
        description:
          "El proceso de verificación legal de OnlyFans requiere atención a los detalles para ser aprobado a la primera:",
        details: [
          "1. Registro Inicial: Regístrate en la plataforma a través del enlace oficial. Utiliza un correo dedicado exclusivamente a tu marca.",
          "2. Sección de Verificación: Dirígete a Ajustes > Añadir Cuenta Bancaria / Verificación en el menú de la plataforma.",
          "3. Datos Personales: Rellena los datos reales de tu identidad. Esta información es estrictamente confidencial.",
          "4. Fotografías Requeridas: Toma una foto frontal y nítida de tu documento de identidad oficial. Además, tómate una selfie sosteniendo el mismo documento al lado de tu rostro.",
          "5. Condiciones Obligatorias: Las fotos deben tener iluminación natural óptima, sin filtros, sin gorras ni lentes, con todo el texto legible."
        ],
        linkCallout: {
          text: "Inicia tu registro y verificación aquí:",
          url: REFERRAL_LINK,
          buttonText: "Ir a Registro OnlyFans ➔",
        },
      },
      {
        id: "m3-feed-upload",
        title: "2. Cómo Subir Fotos y Videos al Muro (Feed)",
        description:
          "Publicar en el feed de OnlyFans es sencillo si sigues esta secuencia diaria:",
        details: [
          "Ve a la pantalla principal de OnlyFans y haz clic en el ícono de '+' o en 'Nueva Publicación'.",
          "Selecciona la foto o video desde tu galería de archivos.",
          "Agrega una descripción/texto dulce y coqueto en inglés (apoyándote en Gemini).",
          "Haz clic en 'Publicar'."
        ],
      },
      {
        id: "m3-ppv-pricing",
        title: "3. Cómo Ponerle Precio a tu Contenido (PPV / Publicaciones con Cerrojo)",
        description:
          "Maximiza tus ingresos bloqueando contenido exclusivo en el feed o enviándolo por mensaje privado:",
        details: [
          "Publicaciones con Cerrojo en el Muro: Si tu cuenta es de acceso gratuito, puedes bloquear publicaciones individuales haciendo clic en el ícono del signo de dólar ($) o candado antes de publicar.",
          "Mensajes Privados Masivos (PPV): Entra a la pestaña de Mensajes > Enviar mensaje masivo. Escribe una nota coqueta invitando a ver el contenido, adjunta el archivo exclusivo, asigna el precio con el ícono ($) y envíalo."
        ],
      },
      {
        id: "m3-tracking-links",
        title: "4. Cómo Generar un Link de Seguimiento (Tracking Link)",
        description:
          "Identifica de qué red social vienen tus suscriptores de pago:",
        details: [
          "Paso 1: Ingresa a Ajustes / Configuración (Settings).",
          "Paso 2: Selecciona Enlaces de seguimiento (Tracking Links) o Profile Links.",
          "Paso 3: Haz clic en 'Crear nuevo enlace de seguimiento' y asígnale un nombre identificativo claro (ej. Reddit_CuteOnlyfans).",
          "Paso 4: Guarda y copia el enlace único generado."
        ],
      },
    ],
  },
  {
    id: "modulo-4",
    number: 4,
    title: "Módulo 4: Tipos de fotos para promocionarte en Reddit",
    subtitle: "(No es lo mismo que el contenido de OnlyFans)",
    iconName: "Camera",
    badge: "Producción",
    summary:
      "Aprende a diferenciar el contenido promocional del contenido de pago, y cómo superar los filtros estrictos de Reddit.",
    steps: [
      {
        id: "m4-promocion-vs-venta",
        title: "1. El contenido de promoción vs. El contenido de venta",
        description:
          "Uno de los errores más graves es pensar que para vender en Reddit hay que subir de una vez fotos explícitas o hipersexualizadas. Eso no funciona.",
        details: [
          "Fotos de Promoción (Lo que subes a Reddit): Son fotos sugerentes, coquetas, estéticas y naturales. La meta es despertar curiosidad. Como el 'trailer' de una película.",
          "Fotos de Venta (Lo que subes o vendes en OnlyFans): Aquí es donde está el contenido exclusivo o explícito por el que los fans pagan dinero real. No regales tu mejor contenido en Reddit."
        ],
      },
      {
        id: "m4-filtros-reddit",
        title: "2. Cómo funcionan los filtros de Reddit (Reglas y Moderación)",
        description:
          "Reddit tiene filtros estrictos administrados por moderadores reales y bots automáticos:",
        details: [
          "Filtros de contenido explícito (SFW vs. NSFW): Hay grupos donde está estrictamente prohibido subir fotos explícitas (Safe For Work / SFW). Si subes una foto pasándote de la raya, te bloquean (ban).",
          "Filtros de publicidad directa: A los usuarios les molesta la publicidad descarada. Evita títulos como 'Compra mi OnlyFans', te marcan como spam.",
          "La regla de la naturalidad: Las fotos que mejor funcionan en Reddit son las que parecen casuales (en tu cama, sofá, con ropa de casa, luz natural)."
        ],
      },
      {
        id: "m4-3-tipos-fotos",
        title: "3. Los 3 tipos de fotos que SÍ funcionan para promocionarte",
        description:
          "Para pasar los filtros de los moderadores y atraer clientes, concéntrate en estos tres estilos:",
        details: [
          "1. La foto de 'Vibra/Estilo de Vida' (SFW): Fotos sonriendo, tomando café, en pijama, mostrando tu rostro y silueta con ropa normal. Clave para entrar en grupos grandes.",
          "2. La foto 'Teaser' o Coqueta (NSFW Suave): Fotos en lencería, escotes, de espalda o ropa transparente. Juegas con la imaginación sin mostrar partes íntimas directo. Generan morbo y tráfico.",
          "3. La foto de 'Ángulo de Nicho': Fotos enfocadas en tus atributos específicos según tu personaje (sonrisa, cabello, pecas, piernas). Dales a los usuarios lo que buscan."
        ],
      },
    ],
  },
  {
    id: "modulo-5",
    number: 5,
    title: "Módulo 5: Dominando Reddit",
    subtitle: "Del Karma a la Generación de Tráfico Real",
    iconName: "Flame",
    badge: "Estrategia",
    summary:
      "Aprenderás el manejo exacto de Reddit, cómo superar la barrera del karma para empezar rápido y cómo generar tráfico masivo a tu OnlyFans respetando las reglas.",
    steps: [
      {
        id: "m5-meta-100-karmas",
        title: "1. La meta de los 100 Karmas: Tu pasaporte para publicar",
        description:
          "El karma es la puntuación de confianza. Con alcanzar 100 de karma es suficiente para empezar a promocionarte seriamente.",
        details: [
          "Dedica los primeros 2 o 3 días a comentar de forma natural en comunidades grandes y libres (mascotas, memes, frases).",
          "Da respuestas amables, lindas o graciosas para ganar upvotes.",
          "Al llegar a 100, la plataforma te considera una cuenta real."
        ],
      },
      {
        id: "m5-fase-2",
        title: "2. Esta es la Fase 2: Publicar con tus fotos coquetonas",
        description:
          "Una vez con 100 karmas, empieza a usar el lote de fotos coquetonas.",
        details: [
          "Consejo de publicación: No satures tu cuenta ni publiques desesperadamente en decenas de grupos al mismo tiempo.",
          "La regla de oro: Publicar solo 3 veces al día, 3 veces por semana.",
          "Esto mantiene tu perfil seguro y con un flujo continuo de gente."
        ],
      },
      {
        id: "m5-uso-app",
        title: "3. Uso de la App y cómo buscar comunidades (La Lupa)",
        description:
          "Manejar la app oficial de Reddit es sencillo:",
        details: [
          "1. Usa la Lupa de búsqueda: Escribe palabras clave de tu nicho en inglés (brunette, cute, petite, natural).",
          "2. Filtra por Comunidades (Communities) para ver la lista de subreddits.",
          "3. Encuentra comunidades SIN requisitos: Busca subreddits pequeños y medianos que no pidan verificación y únete para publicar inmediatamente."
        ],
      },
      {
        id: "m5-leer-reglas",
        title: "4. Vital: Cómo leer las reglas de cada comunidad",
        description:
          "Cada subreddit es independiente. Debes leer las reglas antes de publicar.",
        details: [
          "Entra al subreddit, ve a 'Ver información de la comunidad' (See community info) y revisa la lista de normas.",
          "¿Permiten NSFW o solo SFW? Asegúrate de subir el tipo correcto.",
          "¿Permiten promocionarse? Cuidado con poner enlaces prohibidos o títulos publicitarios.",
          "Tipos de títulos permitidos (algunos prohíben emojis o exigen preguntas)."
        ],
      },
      {
        id: "m5-primera-publicacion",
        title: "5. Paso a Paso: Cómo hacer tu primera publicación",
        description:
          "Una vez dentro y leídas las reglas, sigue estos pasos:",
        details: [
          "1. Presiona '+' para crear un Post.",
          "2. Selecciona el subreddit.",
          "3. Selecciona 'Imagen' y sube tu foto.",
          "4. Escribe un título coqueto y natural (sin 'suscríbete', usa frases del día a día).",
          "5. Publica la foto.",
          "6. El toque final: Ve a los comentarios de tu foto y deja un mensaje sutil para que vayan a tu perfil (Ej: 'Respuestas más rápidas en mi perfil 🌸')."
        ],
      }
    ],
  },
  {
    id: "modulo-6",
    number: 6,
    title: "Módulo 6: Conversación, Seducción y Manejo de Clientes",
    subtitle: "Ventas por Chat y Tipos de Fans",
    iconName: "MessageCircleHeart",
    badge: "Ventas Chat",
    summary:
      "Domina el chat privado (chatting), que es donde realmente se cierra el dinero. Aprende a manejar los distintos tipos de clientes y las reglas de oro de la plataforma.",
    steps: [
      {
        id: "m6-10-tipos",
        title: "1. 10 Ejemplos de Conversaciones según el Tipo de Cliente",
        description:
          "No todos los fans son iguales. Aprende a llevar la conversación según su personalidad:",
        details: [
          "Tipo 1: El Atrevido. Va directo. Responde: 'Me encanta que vayas directo... mira este adelanto' y envías un PPV ($15-$20).",
          "Tipo 2: El Seco/Callado. Responde con cariño: '¿Prefieres fotos dulces o algo más atrevido?'",
          "Tipo 3: El Fantasma. No habla pero compra. Toma la iniciativa y mándale un video bloqueado accesible ($8-$10).",
          "Tipo 4: El Conversador. Conviertes su charla en venta: 'Para consentirte después de tu día pesado... te tomé esto 👇'.",
          "Tipo 5: El 'Tacaño' / Negociador. Mantén valor y crea urgencia: 'No doy gratis, pero por ser tú te lo dejo en $12 por 10 minutos'.",
          "Tipo 6: El Romántico. Aprecia los detalles. 'Hice este fotolibro especial para alguien como tú 👇'.",
          "Tipo 7: El Exigente. Quiere personalizado. 'El precio del personalizado es $50, deja la propina y lo grabo hoy'.",
          "Tipo 8: El Curioso. 'Aquí en el chat muestro mi lado más íntimo. Te mandé una probadita bloqueada...'.",
          "Tipo 9: El 'Fan de la Chica de al Lado'. 'Me estaba tomando un café en pijama y me acordé de ti 🌸'.",
          "Tipo 10: El que pide Prohibido. Redirige suave: 'Eso no lo hago, pero dejé esto que te va a encantar 🔥'."
        ],
      },
      {
        id: "m6-politicas",
        title: "2. Políticas de OnlyFans: Lo que NUNCA debes hacer",
        description:
          "Si violas estas reglas, pueden borrar tu perfil sin derecho a reclamo:",
        details: [
          "1. PROHIBIDO fluidos corporales no permitidos (orina o excremento). Rechaza la petición o redirígela.",
          "2. PROHIBIDO hablar de encuentros presenciales. No aceptes citas ni uses palabras como 'hotel' o 'encuentro'.",
          "3. PROHIBIDO mover la conversación o pagos fuera. No pases tu WhatsApp, Telegram, ni cobres por PayPal/Zelle.",
          "4. PROHIBIDO involucrar a terceros sin verificación. Nadie más puede aparecer en tus fotos si no está verificado.",
          "5. PROHIBIDO contenido violento, peligroso o no consentido (asfixia, sangre, agresión).",
          "6. PROHIBIDO compartir datos personales de los clientes en otras redes sociales sin permiso.",
          "7. PROHIBIDO mencionar o usar plataformas de competencia (Fansly, Snapchat, Telegram, Patreon)."
        ],
      }
    ],
  },
  {
    id: "modulo-7",
    number: 7,
    title: "Módulo 7: Procesamiento de Cobros",
    subtitle: "De Pago Mundo a Bybit en USDC (Red Solana)",
    iconName: "DollarSign",
    badge: "Finanzas",
    summary:
      "Aprende el funcionamiento de los pagos y la vía más eficiente para procesarlos en Latinoamérica conectando Pago Mundo con Bybit.",
    steps: [
      {
        id: "m7-ruta-cobro",
        title: "1. ¿Cómo funciona esta ruta de cobro?",
        description:
          "El flujo de tus ganancias paso a paso:",
        details: [
          "1. OnlyFans libera tus ganancias disponibles.",
          "2. Pago Mundo procesa el pago desde OnlyFans y lo convierte en activos digitales.",
          "3. Bybit recibe tus fondos en USDC utilizando la red Solana.",
          "4. En Bybit vendes esos USDC en P2P para recibir dinero en tu banco local."
        ],
      },
      {
        id: "m7-configurar-bybit",
        title: "2. Paso a Paso: Configurar Bybit y obtener tu dirección USDC (Solana)",
        description:
          "Extrae tu dirección de depósito de Bybit:",
        details: [
          "1. Crea y verifica tu cuenta (KYC) en Bybit.",
          "2. Entra a Depósito > Depositar Cripto.",
          "3. Busca la moneda USDC.",
          "4. SELECCIONA LA RED CORRECTA: Debes seleccionar estrictamente SOLANA (SOL). Si te equivocas, perderás los fondos.",
          "5. Copia tu dirección de depósito."
        ],
      },
      {
        id: "m7-vincular-pago-mundo",
        title: "3. Vincular Pago Mundo para retirar tus fondos",
        description:
          "Enlaza tu dirección de Bybit:",
        details: [
          "1. En Pago Mundo, configura el retiro como Crypto/Wallet payout.",
          "2. Pega tu dirección USDC (red Solana).",
          "3. En OnlyFans, añade Pago Mundo como tu método de pago predeterminado.",
          "4. Solicita retiros manuales o automáticos."
        ],
      },
      {
        id: "m7-porque-solana",
        title: "4. ¿Por qué se utiliza siempre la Red Solana (SOL)?",
        description:
          "Las ventajas de usar esta red específica:",
        details: [
          "Comisiones Mínimas: Cuesta apenas unos centavos de dólar por transacción.",
          "Velocidad Instantánea: Los fondos llegan a Bybit en minutos.",
          "Estabilidad: El USDC es una moneda estable vinculada al dólar."
        ],
      }
    ],
  },
  {
    id: "modulo-8",
    number: 8,
    title: "Módulo 8: Cómo Verificarte en Subreddits Sin Complicaciones",
    subtitle: "Procesos en RedGIFs y Comunidades",
    iconName: "ShieldCheck",
    badge: "Reddit",
    summary:
      "Aprende cómo verificar tu perfil en las plataformas y subreddits que lo requieren para tener más alcance y legitimidad.",
    steps: [
      {
        id: "m8-redgifs",
        title: "1. Verificación en RedGIFs",
        description:
          "Para subir videos y GIFs verificados:",
        details: [
          "1. Registra una cuenta de creador en RedGIFs.",
          "2. Añade la información a tu perfil y vincula tus plataformas externas.",
          "3. Completa el formulario de verificación de identidad enviando tu documento y una selfie."
        ],
      },
      {
        id: "m8-subreddit-verification",
        title: "2. Verificación en un Subreddit (Sin karma)",
        description:
          "Cómo lograr ser aprobada en comunidades cerradas:",
        details: [
          "Escribe en una hoja (a mano): Tu nombre de usuario exacto de Reddit (u/TuUsuario), fecha actual, nombre del subreddit (r/Nombre) y la frase o código que pida el subreddit.",
          "Tómate fotos sosteniendo el papel donde cara/cuerpo se vean claramente junto a la hoja y el texto sea 100% legible.",
          "Sube las imágenes a plataformas como RedGIFs (SFW/NSFW según reglas) o Imgur.",
          "Envía un 'Message the Mods' con los enlaces y un saludo lindo."
        ],
      },
      {
        id: "m8-phrases",
        title: "Opciones de frases para el papel y mensaje",
        description:
          "Ejemplos para copiar y pegar:",
        codeOrPrompt: {
          label: "Ejemplos de textos para moderadores:",
          spanish: "Cartel: u/Usuario | r/Sub | Fecha | Solo pasaba a decir hola 💕\nMensaje: ¡Hola chicos! Les dejo mis fotos de verificación. ¡Gracias por su trabajo! 💕",
          english: "Sign: u/User | r/Sub | Date | Just stopping by to say hi 💕\nModmail: Hi everyone! Here are my verification photos. Thanks so much for your time! 💕",
        },
      }
    ]
  },
  {
    id: "modulo-9",
    number: 9,
    title: "Módulo 9: Qué es el Ban en Reddit y por qué puede pasar",
    subtitle: "Evita la Suspensión y Recupera tu Tráfico",
    iconName: "AlertTriangle",
    badge: "Seguridad",
    summary:
      "Entiende los motivos detrás de las suspensiones en Reddit y las buenas prácticas para evitarlos o sortearlos de manera segura.",
    steps: [
      {
        id: "m9-ban-motivos",
        title: "1. ¿Por qué puede pasar un Ban?",
        description:
          "Razones comunes para que bloqueen tu cuenta:",
        details: [
          "Ban Evasion: Crear cuentas para saltarte un bloqueo previo. Reddit detecta la IP y dispositivo y te suspende automáticamente.",
          "Comportamiento Spam: Publicar el mismo enlace repetidamente o usar enlaces acortados.",
          "Violación de reglas: No usar etiquetas NSFW, o faltar el respeto.",
          "Vote Manipulation: Dar 'Upvote' a tus propios posts desde diferentes cuentas en tu red."
        ]
      },
      {
        id: "m9-recuperar-telefono",
        title: "2. Volver a Usar Reddit en tu Teléfono",
        description:
          "Pasos para limpiar el dispositivo si fuiste baneada:",
        details: [
          "1. Borra los datos y caché de la aplicación de Reddit. Luego desinstálala.",
          "2. Resetea el ID de Publicidad en los Ajustes de Google (Privacidad > Restablecer ID de publicidad).",
          "3. Cambia tu Dirección IP reiniciando el router o usando datos móviles.",
          "4. Ideal: usar un 'teléfono viejito' sin cuentas de Google previas ligadas a la cuenta suspendida.",
          "5. Crea una cuenta nueva con un correo y usuario totalmente nuevos. NO uses el mismo número telefónico."
        ]
      },
      {
        id: "m9-buenas-practicas",
        title: "3. Buenas Prácticas para Evitar un Nuevo Bloqueo",
        description:
          "Consejos para mantener la cuenta a salvo:",
        details: [
          "Paciencia con la cuenta nueva: No publiques en los mismos subreddits de inmediato ni uses las mismas fotos exactas el primer día.",
          "Comportamiento natural: Interactúa con calma, comenta en otros lugares."
        ]
      }
    ]
  },
  {
    id: "modulo-10",
    number: 10,
    title: "Módulo 10: Lista de precios ¿cómo saber cuánto cobrar?",
    subtitle: "Guía Referencial (PPV) para tus Contenidos",
    iconName: "TrendingUp",
    badge: "Ventas",
    summary:
      "Una lista de precios estándar y recomendada para servicios, desbloqueos, y solicitudes de tus fans en la plataforma.",
    steps: [
      {
        id: "m10-menu-precios",
        title: "Menú de Precios: Guía Referencial (PPV)",
        description:
          "Valores de referencia para tus distintos formatos:",
        details: [
          "1. 🔓 Contenido en Muro (PPV): $5.00 – $15.00. Ideal para fotos especiales o videos cortitos (teasers) bloqueados en el feed.",
          "2. 💌 Mensajes Masivos PPV: $8.00 – $25.00. Perfecto para enviar sets exclusivos directos a su bandeja.",
          "3. 🎥 Videos Personalizados (Customs): $10.00 – $20.00 por minuto (Mínimo recomendado de 3 minutos).",
          "4. 📸 Sets de Fotos Especiales: $25.00 – $50.00 (paquete de 5 a 10 fotos temáticas).",
          "5. 💬 Sesiones de Chat Privado: $2.00 – $4.00 por minuto o paquetes (ej. $30 por 15 minutos).",
          "6. 🎙️ Notas de Voz Personalizadas: $10.00 – $25.00 por audio.",
          "7. ⭐ Calificaciones (Ratings): $10.00 – $25.00 (para enviar un texto o nota de voz dando tu opinión)."
        ]
      }
    ]
  },
  {
    id: "modulo-11",
    number: 11,
    title: "Módulo 11: Guía de Seguridad",
    subtitle: "Evita Estafas y Protege tu Dinero",
    iconName: "ShieldAlert",
    badge: "Seguridad",
    summary:
      "Las estafas más comunes a creadoras y cómo proteger tus ingresos, tu cuenta y tu paz mental frente a malos usuarios.",
    steps: [
      {
        id: "m11-estafas-comunes",
        title: "Estafas y Cómo Evitarlas",
        description:
          "Identifica estos patrones de usuarios malintencionados:",
        details: [
          "1. Pagos Fuera (Off-Site): Prometen sumas grandes si cobras por PayPal/Zelle. El riesgo es el contracargo. REGLA: Cobra 100% en la plataforma.",
          "2. Correos de 'Soporte Falso' (Phishing): Piden contraseñas o IDs. REGLA: Soporte nunca pide contraseñas por correo ni DM.",
          "3. 'Te Pago Después': Piden una muestra gratis o 'avance' y luego te bloquean. REGLA: 100% de pago por adelantado siempre.",
          "4. Capturas de Pagos Falsas: Envían imágenes editadas de que 'ya pagaron'. REGLA: Confirma el pago viendo tu saldo real en la plataforma.",
          "5. Chantaje de 'Pruebas de Identidad': Piden fotos con documento en canales no oficiales. REGLA: Verifícate solo por vías oficiales."
        ]
      }
    ]
  },
  {
    id: "modulo-12",
    number: 12,
    title: "Módulo 12: Diccionario Básico para Creadoras",
    subtitle: "Términos Comunes del Mundo OFM",
    iconName: "BookOpen",
    badge: "Recursos",
    summary:
      "Conoce la jerga técnica y las palabras que más usarás al manejar tu plataforma y hablar con tus suscriptores.",
    steps: [
      {
        id: "m12-diccionario",
        title: "Diccionario de Términos",
        description:
          "Vocabulario esencial que debes dominar:",
        details: [
          "🌸 PPV (Pay-Per-View): Contenido bloqueado que el usuario solo ve si paga.",
          "🔓 Unlock: La acción del usuario al pagar para abrir contenido.",
          "💬 Mass Message: Mensaje enviado a todos tus suscriptores a la vez (ideal para PPV).",
          "🎥 Customs: Videos o fotos grabados a pedido específico del usuario.",
          "⏱️ Rush Delivery: Tarifa extra por entregar un pedido en tiempo récord (24-48 hrs).",
          "🏷️ Tag/Mention: Decir o escribir el nombre del cliente en su contenido para exclusividad.",
          "💳 Chargeback: Contracargo. Cuando el usuario tramita una disputa con su banco para robar contenido.",
          "🛡️ Modmail: Buzón para comunicarte con los moderadores de un subreddit.",
          "📍 Teaser: Clip corto o foto gratuita para despertar curiosidad sobre tu PPV.",
          "⭐️ Tip: Propina. Pago voluntario que deja el usuario."
        ]
      }
    ]
  }
];

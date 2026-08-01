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
export const TELEGRAM_CONTACT = "Goddess OFM";
export const TELEGRAM_LINK = "https://t.me/goddessofm";

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
    title: "Módulo 1: Datos de Identidad y Marca",
    subtitle: "Definición del Concepto y ADN de Marca",
    iconName: "Crown",
    badge: "Fundamentos",
    summary:
      "Establece la identidad visual, el concepto único y los canales oficiales de comunicación de tu marca personal.",
    steps: [
      {
        id: "m1-brand-data",
        title: "Ficha de Identidad de Marca",
        description:
          "Parámetros fundamentales establecidos para la marca Goddess OFM:",
        tableData: {
          headers: ["Parámetro", "Detalle de Marca"],
          rows: [
            ["Nombre de la Marca", "Goddess OFM"],
            ["Paleta de Colores", "Lila / Negro / Oro / Fucsia"],
            ["Slogan / Concepto Web", "Goddess OFM — Crea dinero de forma discreta."],
            ["Contacto Oficial", "Telegram: Goddess OFM (@goddessofm)"],
          ],
        },
        details: [
          "Lila y Fucsia: Aportan seducción, glamour, feminidad y dinamismo.",
          "Negro: Elegancia, misterio, discreción y lujo en modo oscuro.",
          "Oro: Exclusividad, riqueza y valor monetario elevado.",
        ],
      },
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
          "Sigue estos 3 pilares clave para definir tu personaje:",
        details: [
          "Elección del Nombre: Elige un alias o nombre artístico llamativo que encaje con tu concepto (ej. Goddess, Angel, Sweet...). Evita usar tu nombre o apellidos reales.",
          "Historias e Identidad: Define pequeños gustos, hobbys y actitudes que caractericen a tu personaje (ej. una chica dulce, universitaria, amante de la lectura, los animales o la moda).",
          "Identificación del Cuerpo y Nicho: Analiza detenidamente tus características físicas (ej. petite, curvas, alta, rubia, morena) y define tu nicho específico (ej. petite girl, chica de al lado, latina, fit girl). Centrarte en un nicho específico facilitará encontrar a tu público ideal mucho más rápido.",
        ],
      },
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
          "1. Registro Inicial: Regístrate en la plataforma a través del enlace oficial (https://onlyfans.com?ref=538039483). Utiliza un correo dedicado exclusivamente a tu marca (ej. nombre.alterego@gmail.com).",
          "2. Sección de Verificación: Dirígete a Ajustes > Añadir Cuenta Bancaria / Verificación en el menú de la plataforma.",
          "3. Datos Personales: Rellena los datos reales de tu identidad. Esta información es estrictamente confidencial y procesada únicamente por la plataforma para verificación legal.",
          "4. Fotografías Requeridas: Toma una foto frontal y nítida de tu documento de identidad oficial (Cédula o Pasaporte vigente), asegurándote de que las 4 esquinas del documento sean visibles. Además, tómate una selfie sosteniendo el mismo documento al lado de tu rostro.",
          "5. Condiciones Obligatorias: Las fotos deben tener iluminación natural óptima, sin filtros, sin gorras ni lentes, con todo el texto perfectamente legible. La aprobación suele tardar entre 24 y 48 horas.",
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
          "Haz clic en 'Publicar'.",
        ],
      },
      {
        id: "m3-ppv-pricing",
        title: "3. Cómo Ponerle Precio a tu Contenido (PPV / Publicaciones con Cerrojo)",
        description:
          "Maximiza tus ingresos bloqueando contenido exclusivo en el feed o enviándolo por mensaje privado:",
        details: [
          "Publicaciones con Cerrojo en el Muro: Si tu cuenta es de acceso gratuito, puedes bloquear publicaciones individuales haciendo clic en el ícono del signo de dólar ($) o candado antes de publicar, asignándole un precio (ej. $5, $10, $15 USD). El suscriptor deberá pagar dicho monto para desbloquear el contenido.",
          "Mensajes Privados Masivos (PPV): Entra a la pestaña de Mensajes > Enviar mensaje masivo. Escribe una nota coqueta invitando a ver el contenido, adjunta el archivo exclusivo, asigna el precio con el ícono ($) y envíalo. A los usuarios les llegará una vista previa borrosa que solo abrirán realizando el pago.",
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
          "Paso 4: Guarda y copia el enlace único generado (ej. onlyfans.com/tuusuario/c123...).",
        ],
      },
    ],
  },
  {
    id: "modulo-4",
    number: 4,
    title: "Módulo 4: Creación de Contenido Paso a Paso",
    subtitle: "Estilo Girl Next Door y Producción Eficiente",
    iconName: "Camera",
    badge: "Producción",
    summary:
      "Aprende a producir contenido visual de alta conversión con la estética 'Chica de al lado', optimizando tu tiempo con sesiones por lotes.",
    steps: [
      {
        id: "m4-style-concept",
        title: "1. Estilo y Concepto de Imagen: 'Chica de al lado' (Girl Next Door)",
        description:
          "La estética 'Girl Next Door' es la más buscada en plataformas por su autenticidad y cercanía:",
        details: [
          "Enfoque: Contenido dulce, discreto, coqueto y natural. No requiere producciones estrambóticas ni iluminación profesional de estudio.",
          "Encuadre y Poses: Resalta tu tipo de cuerpo con gestos naturales, sonrisas coquetas, fotos en el espejo o descansando cómodamente en casa.",
        ],
      },
      {
        id: "m4-shooting-batch",
        title: "2. Organización y Sesión de Fotos (Shooting por Lotes)",
        description:
          "Crea el contenido de toda la semana en solo 1 día de trabajo:",
        details: [
          "Día de Producción: Reserva 1 día a la semana dedicado exclusivamente a tu sesión fotográfica.",
          "Outfits: Prepara de 3 a 5 conjuntos sencillos pero atractivos (lencería sutil, ropa cómoda de casa, tops casuales).",
          "Variedad de Tomas: Realiza entre 20 y 30 tomas por outfit cambiando de ángulo: de frente, de espaldas, planos de detalle, sentada o recostada.",
        ],
      },
      {
        id: "m4-gemini-prompts",
        title: "3. Generación de Copys y Leyendas (Apoyo con Gemini)",
        description:
          "Utiliza Inteligencia Artificial para redactar textos coquetos en segundos. Copia esta plantilla de prompt:",
        codeOrPrompt: {
          label: "Prompt Recomendado para Gemini:",
          promptText:
            'Gemini, genera un título coqueto, dulce y discreto estilo chica de al lado para esta foto. Dámelo en español y en inglés.',
          spanish: "Un domingo tranquilo en casa... ¿te gustaría hacerme compañía?",
          english: "A quiet Sunday at home... would you like to keep me company?",
        },
      },
    ],
  },
  {
    id: "modulo-5",
    number: 5,
    title: "Módulo 5: Estrategia Reddit Sin Ban",
    subtitle: "Tráfico Orgánico, 100 Karmas y Promoción Diaria",
    iconName: "Flame",
    badge: "Estrategia",
    summary:
      "La guía paso a paso para dominar Reddit como tu fuente principal de tráfico gratuito sin riesgo de bloqueos o baneos.",
    steps: [
      {
        id: "m5-anonymous-aging",
        title: "1. Creación Anónima y Maduración",
        description:
          "Protege tu perfil y cumple las reglas de la plataforma:",
        details: [
          "Registro Anónimo: Abre tu cuenta en Reddit registrándote con tu correo de trabajo (sin vincular tu Apple ID o Google personal).",
          "Privacidad: Ve a Ajustes de cuenta > Privacidad y desactiva la visibilidad en resultados de búsqueda externos.",
          "Regla de Oro (15 Días): Deja madurar la cuenta durante al menos 15 días de creada antes de publicar tu primera foto promocional.",
        ],
      },
      {
        id: "m5-karma-roadmap",
        title: "2. Conseguir los Primeros 100 Karmas (Limpieza Estratégica)",
        description:
          "Sigue esta rutina exacta para alcanzar el karma requerido de forma segura:",
        details: [
          "Paso 1: Busca en la lupa de Reddit entre 5 y 10 comunidades (subreddits) cotidianas sobre tus gustos reales (ej. r/libros, r/mascotas, r/comida).",
          "Paso 2: Realiza publicaciones neutras o comentarios sinceros para acumular votos a favor (upvotes).",
          "Paso 3: Alcanza la meta exacta de 100 Karmas (no necesitas miles ni 800, con 100 es suficiente).",
          "Paso 4 (Paso de Limpieza): Una vez alcanzada la meta, borra todas las publicaciones y comentarios neutros con los que ganaste karma. Tu perfil quedará limpio con la puntuación intacta.",
        ],
      },
      {
        id: "m5-daily-routine",
        title: "3. Publicación Diaria de Promoción",
        description:
          "Rutina diaria para convertir visitas de Reddit en suscriptores de OnlyFans:",
        details: [
          "1. Selección de Subreddits: Identifica subreddits de tu nicho (ej. r/CuteOnlyfans) que no requieran verificación previa ni mínimos elevados de karma.",
          "2. Post Principal: Sube tu foto con el título en inglés generado previamente por Gemini.",
          "3. Inserción de Enlaces: Accede inmediatamente a los comentarios de tu propio post y pega 2 veces tu Link de Seguimiento de OnlyFans.",
          "4. Frecuencia: Ejecuta esta rutina en 3 comunidades distintas al día de forma optimizada.",
        ],
      },
    ],
  },
  {
    id: "modulo-6",
    number: 6,
    title: "Módulo 6: Conversación y Seducción",
    subtitle: "Ventas por Chat y Trato con Sugars / Suscriptores",
    iconName: "MessageCircleHeart",
    badge: "Ventas Chat",
    summary:
      "Domina la psicología del cliente internacional para cerrar ventas de contenido exclusivo y generar tips de alto valor.",
    steps: [
      {
        id: "m6-mindset",
        title: "1. Mentalidad y Cultura del Cliente Internacional",
        description:
          "Comprende la mentalidad del comprador para adaptar tu tono de conversación:",
        details: [
          "Comprende que los suscriptores o potenciales sugars residen en países con culturas de comunicación más frías, directas y secas.",
          "Buscan normalizar el contacto, establecer una conexión rápida y ser directos sin rodeos emocionales.",
          "Valoran la atención agil, la dulzura coqueta y la claridad en las propuestas.",
        ],
      },
      {
        id: "m6-chat-dynamics",
        title: "2. Dinámica de Mensajería y Guiones de Apertura",
        description:
          "Utiliza frases cortas, directas e impactantes en inglés:",
        details: [
          "Estilo de Chat: Mantén un trato coqueto, cercano, directo y fluido.",
          "Manejo del Idioma: Toda la interacción por mensajes privados en Reddit y OnlyFans debe ser en inglés. Apóyate en traductores inmediatos para contestar con agilidad y mantener el interés.",
        ],
        codeOrPrompt: {
          label: "Ejemplo de Apertura Directa de Alto Impacto:",
          spanish: "Hola, ¿cómo estás? ¿Qué haces? Estoy hot... ¿quieres ver?",
          english: "Hi, how are you? What are you up to? I'm feeling hot... wanna see?",
        },
      },
    ],
  },
  {
    id: "modulo-7",
    number: 7,
    title: "Módulo 7: Reglas Financieras y Retiros",
    subtitle: "Hold de Pagos, Comisiones y Cobro en LATAM",
    iconName: "DollarSign",
    badge: "Finanzas",
    summary:
      "Aprende el funcionamiento del dinero en OnlyFans, los tiempos de retención de saldo y la ruta óptima para recibir tus ingresos en tu banco local.",
    steps: [
      {
        id: "m7-hold-system",
        title: "1. Sistema de Retención de Saldo (Hold de Pagos)",
        description:
          "Explicación de cómo y cuándo se libera tu dinero:",
        details: [
          "Cuentas Nuevas (21 Días): El dinero de cada suscripción, tip o mensaje retenido tarda 21 días en liberarse de 'Saldo Pendiente' a 'Saldo Disponible' para evitar fraudes o contrargos.",
          "Fidelización (Semanales): A medida que mantienes actividad constante y la plataforma coge confianza con tu perfil, el período de retención se reduce progressively hasta liberarse de forma semanal (cada 7 días).",
        ],
      },
      {
        id: "m7-commissions-table",
        title: "2. Comisiones, Mínimos y Métodos de Cobro",
        description:
          "Desglose financiero oficial de la plataforma:",
        tableData: {
          headers: ["Concepto", "Detalle Financiero"],
          rows: [
            ["Comisión de OnlyFans", "20% para la plataforma / 80% neto para la creadora"],
            ["Mínimo de Retiro", "Desde $20 USD ($100 USD en algunas e-wallets)"],
            [
              "Ruta Recomendada (Latinoamérica)",
              "OnlyFans ➔ Paxum / eWallet ➔ Binance (P2P USDT) ➔ Banco Local",
            ],
            [
              "Restricción Importante",
              "PayPal está estrictamente prohibido en plataformas para adultos",
            ],
          ],
        },
        details: [
          "Recomendación LATAM: Paxum + Binance P2P ofrece las mejores tasas de cambio a moneda local sin comisiones bancarias abusivas.",
          "Recuerda mantener activa la verificación bancaria en OnlyFans.",
        ],
        linkCallout: {
          text: "Configura tu cuenta de creadora en OnlyFans:",
          url: REFERRAL_LINK,
          buttonText: "Comenzar en OnlyFans ➔",
        },
      },
    ],
  },
];

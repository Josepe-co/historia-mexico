// Datos de los personajes por parcial
const personajesData = {
    1: [
        {
            nombre: "Miguel Hidalgo y Costilla",
            rol: "Padre de la Independencia",
            icono: "👨‍🏫",
            descripcion: "En la madrugada del 16 de septiembre de 1810, el padre Hidalgo tocó las campanas de Dolores con una determinación que cambiaría México para siempre.",
            audioFile: "audios/hidalgo.mp3",
            videoFile: "miguel-hidalgo.mp4"
        },
        {
            nombre: "Josefa Ortiz de Domínguez",
            rol: "La Corregidora",
            icono: "👩‍⚖️",
            descripcion: "Encerrada por su esposo, golpeaba el suelo con el tacón para alertar a los conspiradores. Su valentía salvó el movimiento insurgente.",
            audioFile: "audios/josefa.mp3",
            videoFile: "josefa-ortiz.mp4"
        },
        {
            nombre: "Juan, Soldado Insurgente",
            rol: "Campesino Revolucionario",
            icono: "⚔️",
            descripcion: "Con apenas 19 años, dejó todo para unirse a la lucha. Representó a miles de campesinos que soñaban con un México libre.",
            audioFile: "audios/juan.mp3",
            videoFile: "juan-soldado.mp4"
        }
    ],
    2: [
        {
            nombre: "Porfirio Díaz",
            rol: "Presidente de México (1876-1911)",
            icono: "👑",
            descripcion: "Con más de tres décadas en el poder, transformó México con progreso material pero a costa de grandes injusticias sociales.",
            audioFile: "audios/diaz.mp3",
            videoFile: "porfirio-diaz.mp4"
        },
        {
            nombre: "Carmen, Obrera Textil",
            rol: "Trabajadora de Río Blanco",
            icono: "🧵",
            descripcion: "Sus manos destrozadas contaban la historia de explotación en las fábricas. Vivió la brutal represión de la huelga de 1907.",
            audioFile: "audios/carmen.mp3",
            videoFile: "carmen-obrera.mp4"
        },
        {
            nombre: "Ricardo Flores Magón",
            rol: "Periodista y Revolucionario",
            icono: "📰",
            descripcion: "Desde el exilio, su pluma era más peligrosa que cualquier arma. Sus ideas anarquistas encendieron conciencias en todo México.",
            audioFile: "audios/magon.mp3",
            videoFile: "ricardo-magon.mp4"
        }
    ],
    3: [
        {
            nombre: "Emiliano Zapata",
            rol: "Líder Revolucionario",
            icono: "🌾",
            descripcion: "'Tierra y Libertad' no era solo un lema, era su vida entera. Luchó incansablemente por devolver la tierra a los campesinos.",
            audioFile: "audios/zapata.mp3",
            videoFile: "emiliano-zapata.mp4"
        },
        {
            nombre: "Adelita, La Soldadera",
            rol: "Mujer Revolucionaria",
            icono: "💪",
            descripcion: "Cocinaba, curaba, transportaba armas y cuando era necesario, empuñaba el rifle. Las soldaderas fueron la columna vertebral de la Revolución.",
            audioFile: "audios/adelita.mp3",
            videoFile: "adelita-soldadera.mp4"
        },
        {
            nombre: "Pedro, Campesino Revolucionario",
            rol: "Miembro de la División del Norte",
            icono: "🐴",
            descripcion: "Padre de cuatro hijos, dejó su rancho para unirse a Villa. Soñaba con un México donde sus hijos tuvieran tierra propia.",
            audioFile: "audios/pedro.mp3",
            videoFile: "pedro-campesino.mp4"
        }
    ]
};

// Títulos de parciales
const parcialesTitulos = {
    1: {
        titulo: "Lucha Insurgente y Liberalismo",
        descripcion: "Descubre las historias de quienes iniciaron la lucha por la independencia"
    },
    2: {
        titulo: "El Porfiriato",
        descripcion: "Conoce la época de progreso y opresión bajo Porfirio Díaz"
    },
    3: {
        titulo: "Revolución Mexicana",
        descripcion: "Vive la revolución que transformó México para siempre"
    }
};

// Contenido histórico completo por parcial
const contenidoParciales = {
    1: {
        introduccion: {
            titulo: "El Inicio de una Nueva Era",
            texto: "A principios del siglo XIX, México era parte del vasto imperio español conocido como la Nueva España. Durante 300 años, los españoles controlaron estas tierras, explotando sus recursos y manteniendo un sistema de castas que dividía a la población. Pero las ideas de libertad e igualdad que surgían en Europa y el éxito de la independencia de Estados Unidos comenzaron a inspirar a los criollos mexicanos. La invasión napoleónica a España en 1808 fue el detonante que necesitaban para iniciar su propia lucha por la independencia.",
            imagen: "🗽"
        },
        antecedentes: {
            titulo: "Las Reformas Borbónicas y el Descontento Criollo",
            texto: "A finales del siglo XVIII, España implementó las Reformas Borbónicas para modernizar la administración colonial, pero estas medidas aumentaron el control español y afectaron los intereses de los criollos (españoles nacidos en América). Los criollos, aunque educados y económicamente poderosos, estaban excluidos de los altos cargos políticos reservados para los peninsulares (españoles nacidos en España). Esta discriminación, sumada a las ideas ilustradas de libertad, igualdad y fraternidad de la Revolución Francesa, creó un ambiente de descontento que eventualmente desembocaría en la lucha por la independencia.",
            puntosClave: [
                "Sistema de castas: Peninsulares > Criollos > Mestizos > Indígenas > Negros",
                "Los criollos pagaban más impuestos pero tenían menos derechos políticos",
                "La educación ilustrada creó una generación de criollos con ideas revolucionarias",
                "La economía de la Nueva España era la más próspera de América, pero beneficiaba principalmente a España"
            ]
        },
        personajesClave: {
            titulo: "Más Héroes de la Independencia",
            lista: [
                {
                    nombre: "José María Morelos y Pavón",
                    rol: "Generalísimo y estratega militar",
                    logros: "Organizó el primer Congreso Constituyente, abolió la esclavitud y las castas, propuso división de poderes",
                    frase: "Morir es nada cuando por la patria se muere"
                },
                {
                    nombre: "Vicente Guerrero",
                    rol: "Caudillo del Sur",
                    logros: "Resistió 10 años sin rendirse, consumó la independencia con Iturbide, fue el segundo presidente afromexicano",
                    frase: "La Patria es primero"
                },
                {
                    nombre: "Leona Vicario",
                    rol: "Financiadora y espía insurgente",
                    logros: "Gastó su fortuna en la causa, pasaba información secreta, fabricaba armas, fue la primera periodista mexicana",
                    frase: "No solo el amor es el móvil de las acciones de las mujeres"
                },
                {
                    nombre: "Ignacio Allende",
                    rol: "Militar y estratega",
                    logros: "Organizó el levantamiento, fue el verdadero militar del movimiento inicial, capturado y ejecutado junto a Hidalgo",
                    frase: "Prefiero morir de pie que vivir de rodillas"
                }
            ]
        },
        batallasImportantes: [
            {
                nombre: "Toma de la Alhóndiga de Granaditas",
                fecha: "28 de septiembre de 1810",
                lugar: "Guanajuato",
                resultado: "Victoria insurgente",
                importancia: "Primera gran victoria del ejército de Hidalgo, demostró que los insurgentes podían derrotar al ejército realista",
                detalle: "El Pípila, un minero, cargó una losa en la espalda para protegerse de las balas y quemó la puerta. Murieron más de 600 españoles y criollos refugiados."
            },
            {
                nombre: "Batalla del Monte de las Cruces",
                fecha: "30 de octubre de 1810",
                lugar: "Cerca de la Ciudad de México",
                resultado: "Victoria insurgente",
                importancia: "Hidalgo pudo haber tomado la capital, pero decidió retirarse. Este fue su gran error estratégico.",
                detalle: "Con 80,000 hombres mal armados, Hidalgo derrotó a 2,500 soldados profesionales realistas."
            },
            {
                nombre: "Sitio de Cuautla",
                fecha: "Febrero-mayo 1812",
                lugar: "Cuautla, Morelos",
                resultado: "Resistencia heroica",
                importancia: "Morelos resistió 72 días contra un ejército superior, demostrando su genio militar",
                detalle: "Los sitiados comieron hasta gatos y perros. Morelos rompió el sitio de noche en una maniobra brillante."
            },
            {
                nombre: "Abrazo de Acatempan",
                fecha: "10 de febrero de 1821",
                lugar: "Acatempan, Guerrero",
                resultado: "Alianza histórica",
                importancia: "Iturbide (realista) y Guerrero (insurgente) se unen para lograr la independencia",
                detalle: "Guerrero aceptó la propuesta: 'No me queriendo seguir, habrá patria para todos'. Juntos crearon el Plan de Iguala."
            }
        ],
        contexto: [
            {
                año: "1808",
                evento: "Crisis política en España",
                detalles: "Napoleón invade España y captura al rey Fernando VII, creando un vacío de poder que aprovechan los insurgentes mexicanos."
            },
            {
                año: "1810",
                evento: "Grito de Dolores",
                detalles: "El 16 de septiembre, Miguel Hidalgo convoca al pueblo a levantarse en armas contra el gobierno español."
            },
            {
                año: "1813",
                evento: "Sentimientos de la Nación",
                detalles: "José María Morelos presenta un documento que establece las bases para un México independiente y democrático."
            },
            {
                año: "1821",
                evento: "Consumación de la Independencia",
                detalles: "Agustín de Iturbide y Vicente Guerrero firman los Tratados de Córdoba, México finalmente es independiente."
            }
        ],
        datosCuriosos: [
            {
                titulo: "El verdadero color del estandarte",
                dato: "El estandarte que portó Hidalgo no era la bandera actual, sino una imagen de la Virgen de Guadalupe. Este símbolo religioso fue clave para atraer al pueblo católico.",
                icono: "🎌"
            },
            {
                titulo: "La conspiración de Querétaro",
                dato: "Las reuniones secretas se disfrazaban como tertulias literarias. Los conspiradores discutían de independencia mientras fingían hablar de poesía.",
                icono: "🎭"
            },
            {
                titulo: "Un ejército improvisado",
                dato: "El primer ejército insurgente llegó a tener más de 80,000 personas, pero muchos solo tenían palos, piedras y herramientas agrícolas como armas.",
                icono: "⚔️"
            },
            {
                titulo: "Las mujeres insurgentes",
                dato: "Además de Josefa Ortiz, hubo decenas de mujeres clave: Leona Vicario financió la insurgencia, mientras otras transportaban mensajes escondidos en su ropa.",
                icono: "👩‍⚖️"
            }
        ],
        documentos: [
            {
                titulo: "Bando de Hidalgo",
                descripcion: "Decreto de abolición de la esclavitud",
                año: "1810",
                importancia: "Primer documento en América que abolió la esclavitud, 50 años antes que Estados Unidos."
            },
            {
                titulo: "Sentimientos de la Nación",
                descripcion: "Bases constitucionales de Morelos",
                año: "1813",
                importancia: "Estableció que México debía ser independiente, católico y con gobierno popular."
            }
        ],
        impactoActual: "La lucha por la independencia estableció las bases de la identidad mexicana moderna. El 16 de septiembre sigue siendo la fecha más importante del país, y los ideales de libertad e igualdad que motivaron a los insurgentes siguen vigentes en la sociedad mexicana actual."
    },
    2: {
        introduccion: {
            titulo: "Orden, Progreso y Desigualdad",
            texto: "Después de décadas de caos político y guerras civiles, México necesitaba estabilidad. Porfirio Díaz prometió exactamente eso cuando llegó al poder en 1876. Durante más de 30 años, transformó a México de una nación rural y atrasada en un país con ferrocarriles, teléfonos, electricidad y teatro elegantes. Pero este progreso tuvo un costo terrible: la mayoría de los mexicanos vivían en condiciones de semi-esclavitud, sin derechos ni libertades. El Porfiriato fue una época de contrastes extremos entre el lujo de unos pocos y la miseria de millones.",
            imagen: "🚂"
        },
        contextoEconomico: {
            titulo: "El Modelo Económico Porfirista",
            texto: "Porfirio Díaz abrió México a la inversión extranjera sin restricciones. El lema era 'poca política, mucha administración'. Los científicos, un grupo de tecnócratas influenciados por el positivismo de Auguste Comte, diseñaron un modelo económico basado en la modernización acelerada a través del capital extranjero. Estados Unidos, Inglaterra, Francia y Alemania invirtieron masivamente en minería, petróleo, agricultura y ferrocarriles.",
            estadisticas: [
                "📊 PIB creció 270% entre 1877 y 1910",
                "🚂 Red ferroviaria: de 640 km a 24,000 km",
                "💰 Inversión extranjera: 3,400 millones de pesos",
                "📉 Salario real de obreros: cayó 50%",
                "🏭 Producción industrial: creció 600%",
                "😢 95% de campesinos sin tierra propia"
            ]
        },
        movimientosSociales: {
            titulo: "Protestas y Represión",
            eventos: [
                {
                    nombre: "Huelga de Cananea",
                    fecha: "1 de junio de 1906",
                    lugar: "Cananea, Sonora",
                    causa: "Mineros mexicanos ganaban la mitad que trabajadores estadounidenses por el mismo trabajo",
                    desarrollo: "3,000 mineros se declararon en huelga pidiendo jornada de 8 horas y salario igual. La compañía Cananea Copper Co. trajo rangers de Arizona.",
                    resultado: "23 muertos, 22 heridos, 50 encarcelados. Díaz autorizó que tropas extranjeras cruzaran la frontera.",
                    importancia: "Considerada precursora directa de la Revolución Mexicana"
                },
                {
                    nombre: "Huelga de Río Blanco",
                    fecha: "7 de enero de 1907",
                    lugar: "Río Blanco, Veracruz",
                    causa: "Obreros textiles trabajaban 14 horas diarias, 6 días a la semana, ganando centavos",
                    desarrollo: "Porfirio Díaz intervino como árbitro pero falló a favor de los empresarios. Los obreros se rebelaron.",
                    resultado: "El ejército disparó contra trabajadores desarmados: 400-800 muertos según diferentes fuentes",
                    importancia: "Expuso la brutalidad del régimen y la imposibilidad de reformas pacíficas"
                },
                {
                    nombre: "Movimiento Magonista",
                    fecha: "1900-1910",
                    lugar: "México y exilio en EE.UU.",
                    causa: "Los hermanos Flores Magón publicaban el periódico 'Regeneración' criticando al régimen",
                    desarrollo: "Desde el exilio, promovían ideas anarquistas y llamaban a la revolución armada. Fueron perseguidos tanto por Díaz como por el gobierno de EE.UU.",
                    resultado: "Su Programa del Partido Liberal de 1906 se convirtió en la base ideológica de la Revolución",
                    importancia: "Radicalizaron el discurso político y prepararon ideológicamente la Revolución"
                }
            ]
        },
        vidaCotidiana: {
            titulo: "Dos Méxicos en Uno",
            elite: {
                descripcion: "La Ciudad de México se transformó en un París americano",
                caracteristicas: [
                    "🎭 Teatro de ópera, restaurantes franceses, arquitectura neoclásica",
                    "🚗 Primeros automóviles y tranvías eléctricos",
                    "📞 Teléfonos, telégrafos, cinematógrafos",
                    "🏛️ Palacio de Bellas Artes, Paseo de la Reforma modernizado",
                    "👔 La moda era europea, el francés era el idioma de la cultura"
                ]
            },
            pueblo: {
                descripcion: "El 90% de la población vivía en pobreza extrema",
                caracteristicas: [
                    "🌾 Peones de hacienda en condiciones de servidumbre",
                    "⛏️ Mineros sin derechos laborales ni protección",
                    "🏭 Obreros textiles: jornadas de 14-16 horas diarias",
                    "💀 Esperanza de vida: 30 años",
                    "📚 80% de analfabetismo",
                    "🏚️ Viviendas sin servicios básicos"
                ]
            }
        },
        contexto: [
            {
                año: "1876",
                evento: "Porfirio Díaz llega al poder",
                detalles: "Tras liderar la rebelión de Tuxtepec con el lema 'no reelección', irónicamente se reelige por más de 30 años."
            },
            {
                año: "1884-1911",
                evento: "El gobierno de los científicos",
                detalles: "Un grupo de tecnócratas asesora a Díaz aplicando ideas positivistas: orden y progreso a cualquier costo."
            },
            {
                año: "1906",
                evento: "Huelga de Cananea",
                detalles: "Mineros mexicanos se rebelan contra condiciones laborales injustas. La represión es brutal."
            },
            {
                año: "1907",
                evento: "Huelga de Río Blanco",
                detalles: "Obreros textiles protestan, el ejército dispara contra ellos. Cientos mueren."
            }
        ],
        datosCuriosos: [
            {
                titulo: "México en la Exposición Universal",
                dato: "En la Exposición de París de 1900, México presentó un pabellón espectacular que impresionó al mundo. Pero en casa, millones pasaban hambre.",
                icono: "🏛️"
            },
            {
                titulo: "El ferrocarril del progreso",
                dato: "Se construyeron más de 19,000 km de vías férreas. México pasó de prácticamente cero ferrocarriles a tener la red más extensa de Latinoamérica.",
                icono: "🚂"
            },
            {
                titulo: "La tienda de raya",
                dato: "Los trabajadores no recibían dinero real, sino vales solo válidos en las tiendas de sus patrones, donde todo costaba el doble. Era imposible salir de la deuda.",
                icono: "💰"
            },
            {
                titulo: "Despojo de tierras comunales",
                dato: "El 95% de las comunidades indígenas perdieron sus tierras. Las haciendas crecieron tanto que algunas eran del tamaño de países europeos.",
                icono: "🏞️"
            }
        ],
        documentos: [
            {
                titulo: "Ley de Terrenos Baldíos",
                descripcion: "Legalización del despojo de tierras",
                año: "1894",
                importancia: "Permitió a compañías deslindadoras apropiarse de millones de hectáreas, dejando sin tierra a comunidades enteras."
            },
            {
                titulo: "Programa del Partido Liberal",
                descripcion: "Propuestas de los hermanos Flores Magón",
                año: "1906",
                importancia: "Documento radical que exigía jornadas de 8 horas, salario mínimo y reparto de tierras. Inspiró la Revolución."
            }
        ],
        impactoActual: "El Porfiriato demostró que el progreso económico sin justicia social es insostenible. Muchas de las desigualdades actuales en México tienen raíces en esta época. Sin embargo, la infraestructura creada (ferrocarriles, edificios) sigue siendo parte del país. La lección: el desarrollo debe beneficiar a todos, no solo a una élite."
    },
    3: {
        introduccion: {
            titulo: "La Revolución que Cambió Todo",
            texto: "En 1910, México estalló. Tres décadas de injusticias bajo Porfirio Díaz habían llegado a su límite. Lo que comenzó como una protesta electoral de la clase media se convirtió en la revolución social más importante de América Latina. Campesinos liderados por Zapata exigían tierra, obreros pedían derechos laborales, y todos querían democracia. Durante una década, México se desangró en una guerra civil que cobró más de un millón de vidas, pero que al final dio nacimiento a un nuevo país con una de las constituciones más avanzadas del mundo.",
            imagen: "⚔️"
        },
        fasesRevolucion: {
            titulo: "Las Cuatro Etapas de la Revolución",
            fases: [
                {
                    nombre: "Fase Maderista (1910-1913)",
                    objetivo: "Democracia y no reelección",
                    lider: "Francisco I. Madero",
                    desarrollo: "Madero, un hacendado idealista educado en Europa, publicó 'La Sucesión Presidencial en 1910' criticando la dictadura. Después de ser encarcelado y escapar a Estados Unidos, promulgó el Plan de San Luis llamando a la rebelión armada el 20 de noviembre de 1910. En apenas 6 meses, Díaz renunció y Madero fue electo presidente.",
                    resultado: "Triunfo, pero Madero no atacó los problemas estructurales (tierra, desigualdad). Esto causó divisiones."
                },
                {
                    nombre: "Fase Constitucionalista (1913-1914)",
                    objetivo: "Restaurar el orden constitucional",
                    lider: "Venustiano Carranza",
                    desarrollo: "Tras el asesinato de Madero en la Decena Trágica (golpe de Victoriano Huerta), Carranza promulgó el Plan de Guadalupe para derrocar al usurpador. Villa en el norte y Zapata en el sur se unieron a la lucha. Estados Unidos invadió Veracruz para presionar a Huerta.",
                    resultado: "Huerta huyó en 1914, pero los revolucionarios se dividieron sobre el futuro de México."
                },
                {
                    nombre: "Fase de la Convención (1914-1915)",
                    objetivo: "Definir el proyecto revolucionario",
                    lider: "Villa y Zapata vs. Carranza y Obregón",
                    desarrollo: "La Convención de Aguascalientes intentó unificar a los revolucionarios pero fracasó. Villa y Zapata (radicales, querían reforma agraria inmediata) se enfrentaron a Carranza y Obregón (moderados, querían orden primero). La guerra civil revolucionaria fue devastadora.",
                    resultado: "Obregón derrotó militarmente a Villa en las batallas de Celaya (1915). Zapata continuó la guerrilla en el sur."
                },
                {
                    nombre: "Fase Constitucionalista Triunfante (1915-1920)",
                    objetivo: "Institucionalizar la Revolución",
                    lider: "Venustiano Carranza",
                    desarrollo: "Carranza convocó al Congreso Constituyente en Querétaro (1916-1917). Los delegados radicales (como Francisco J. Múgica) impusieron artículos avanzados: el 3° (educación laica), el 27 (reforma agraria) y el 123 (derechos laborales). Carranza quería una constitución liberal, pero obtuvo una constitución social revolucionaria.",
                    resultado: "Se promulgó la Constitución de 1917, aún vigente. Asesinaron a Zapata (1919) y a Carranza (1920)."
                }
            ]
        },
        lideresPrincipales: {
            titulo: "Los Caudillos Revolucionarios",
            lideres: [
                {
                    nombre: "Francisco I. Madero",
                    alias: "El Apóstol de la Democracia",
                    origen: "Hacendado de Coahuila, espiritista, vegetariano",
                    ideologia: "Democracia liberal, sufragio efectivo, no reelección",
                    logro: "Derrocó a Díaz e inició la Revolución",
                    muerte: "Asesinado por Huerta en 1913",
                    legado: "Demostró que Díaz podía ser derrotado, inspiró a millones"
                },
                {
                    nombre: "Emiliano Zapata",
                    alias: "Caudillo del Sur / El Atila del Sur",
                    origen: "Campesino de Anenecuilco, Morelos",
                    ideologia: "Tierra y Libertad - reforma agraria radical",
                    logro: "Su Plan de Ayala inspiró el artículo 27 constitucional",
                    muerte: "Emboscado y asesinado en Chinameca (1919)",
                    legado: "Símbolo eterno de la lucha agraria en América Latina"
                },
                {
                    nombre: "Francisco Villa",
                    alias: "Pancho Villa / El Centauro del Norte",
                    origen: "Bandido convertido en general, de Durango",
                    ideologia: "Justicia para los pobres, educación, reparto de tierras",
                    logro: "Dirigió la División del Norte, el mejor ejército revolucionario",
                    muerte: "Emboscado y asesinado en Parral (1923)",
                    legado: "Héroe popular, demostró que los pobres podían cambiar la historia"
                },
                {
                    nombre: "Venustiano Carranza",
                    alias: "El Varón de Cuatro Ciénegas",
                    origen: "Hacendado y senador de Coahuila",
                    ideologia: "Constitucionalismo, nacionalismo moderado",
                    logro: "Promulgó la Constitución de 1917",
                    muerte: "Asesinado en Tlaxcalantongo (1920)",
                    legado: "Padre de la Constitución mexicana vigente"
                },
                {
                    nombre: "Álvaro Obregón",
                    alias: "El Manco de Celaya",
                    origen: "Agricultor y militar de Sonora",
                    ideologia: "Pragmatismo revolucionario",
                    logro: "Mejor estratega militar, derrotó a Villa, inició la institucionalización",
                    muerte: "Asesinado por un fanático religioso (1928)",
                    legado: "Consolidó el Estado revolucionario"
                }
            ]
        },
        batallasDecisivas: [
            {
                nombre: "Toma de Ciudad Juárez",
                fecha: "10 de mayo de 1911",
                resultado: "Victoria revolucionaria",
                importancia: "Primera gran victoria que obligó a Díaz a renunciar. Villa y Orozco tomaron la ciudad fronteriza cortando el acceso de armas al gobierno."
            },
            {
                nombre: "Batalla de Zacatecas",
                fecha: "23 de junio de 1914",
                resultado: "Victoria de Villa",
                importancia: "La batalla más grande de la Revolución: 23,000 revolucionarios vs 12,000 federales. Villa usó trenes blindados y artillería. Victoria decisiva contra Huerta."
            },
            {
                nombre: "Batalla de Celaya",
                fecha: "Abril 1915",
                resultado: "Victoria de Obregón sobre Villa",
                importancia: "Obregón usó tácticas de la Primera Guerra Mundial: trincheras, alambre de púas, ametralladoras. Villa perdió 6,000 hombres. Fin de la División del Norte."
            }
        ],
        constitucion1917: {
            titulo: "La Constitución Más Avanzada de su Época",
            articulos: [
                {
                    numero: "Artículo 3°",
                    tema: "Educación",
                    contenido: "Educación laica, gratuita y obligatoria. El Estado debe garantizar educación para todos, sin influencia religiosa.",
                    importancia: "Primera constitución en garantizar educación universal y laica"
                },
                {
                    numero: "Artículo 27",
                    tema: "Reforma Agraria",
                    contenido: "La tierra y aguas son propiedad de la nación. Se puede expropiar latifundios para repartir tierra a campesinos.",
                    importancia: "Base legal para el reparto agrario. Inspirado en el Plan de Ayala de Zapata"
                },
                {
                    numero: "Artículo 123",
                    tema: "Derechos Laborales",
                    contenido: "Jornada máxima de 8 horas, salario mínimo, derecho a huelga, indemnización por accidentes, protección a mujeres y niños.",
                    importancia: "Primera constitución en el mundo con derechos sociales de los trabajadores"
                },
                {
                    numero: "Artículo 130",
                    tema: "Relaciones Iglesia-Estado",
                    contenido: "Separación absoluta entre Iglesia y Estado. Limitación del poder político de la Iglesia.",
                    importancia: "Causó la Guerra Cristera (1926-1929) pero consolidó el Estado laico"
                }
            ]
        },
        contexto: [
            {
                año: "1910",
                evento: "Plan de San Luis",
                detalles: "Madero convoca al pueblo a levantarse en armas el 20 de noviembre. La Revolución comienza."
            },
            {
                año: "1911",
                evento: "Renuncia de Díaz",
                detalles: "Tras 35 años en el poder, Porfirio Díaz huye a Francia. Madero asume la presidencia."
            },
            {
                año: "1913",
                evento: "La Decena Trágica",
                detalles: "Golpe de estado contra Madero. Victoriano Huerta lo asesina y toma el poder, reavivando la lucha armada."
            },
            {
                año: "1917",
                evento: "Constitución de 1917",
                detalles: "Se promulga una constitución revolucionaria que reconoce derechos sociales, laborales y agrarios."
            }
        ],
        datosCuriosos: [
            {
                titulo: "Las soldaderas",
                dato: "Entre el 20% y 30% de las fuerzas revolucionarias eran mujeres. Cocinaban, curaban, peleaban y fueron esenciales para la victoria.",
                icono: "👩‍⚕️"
            },
            {
                titulo: "Villa y el cine",
                dato: "Pancho Villa firmó un contrato con Hollywood para filmar sus batallas. Es el primer líder mundial que usó el cine como propaganda.",
                icono: "🎬"
            },
            {
                titulo: "Zapata nunca quiso ser presidente",
                dato: "A diferencia de otros líderes, Zapata rechazó el poder político. Solo le importaba que se devolvieran las tierras a los campesinos.",
                icono: "🌾"
            },
            {
                titulo: "La Constitución más avanzada",
                dato: "La Constitución de 1917 fue la primera en el mundo en incluir derechos sociales y laborales, adelantándose incluso a la de Weimar.",
                icono: "📜"
            }
        ],
        documentos: [
            {
                titulo: "Plan de Ayala",
                descripcion: "Manifiesto agrario de Zapata",
                año: "1911",
                importancia: "Exigía la devolución inmediata de tierras a las comunidades. Base del artículo 27 constitucional."
            },
            {
                titulo: "Constitución de 1917",
                descripcion: "Carta Magna que rige México",
                año: "1917",
                importancia: "Estableció la jornada de 8 horas, el derecho a huelga, educación laica y gratuita, y la reforma agraria."
            }
        ],
        impactoActual: "La Revolución Mexicana estableció las bases del México moderno. La Constitución de 1917 sigue vigente y sus principios de justicia social continúan siendo ideales por alcanzar. Muchas de las luchas actuales (tierra, derechos laborales, democracia) son ecos directos de lo que se peleó hace más de un siglo."
    }
};

// Galería de imágenes históricas
const galeriaImagenes = {
    1: [ // Independencia
        {
            titulo: "Miguel Hidalgo",
            descripcion: "Retrato del Padre de la Independencia",
            imagen: "https://i.imgur.com/7K6jXnL.jpg",
            año: "1810",
            emoji: "👨‍🏫"
        },
        {
            titulo: "Campana de Dolores",
            descripcion: "La campana que tocó Hidalgo para convocar al pueblo",
            imagen: "https://i.imgur.com/9YqRnXM.jpg",
            año: "1810",
            emoji: "🔔"
        },
        {
            titulo: "Josefa Ortiz de Domínguez",
            descripcion: "La Corregidora, heroína de la Independencia",
            imagen: "https://i.imgur.com/kL8mPQR.jpg",
            año: "1810",
            emoji: "👩‍⚖️"
        },
        {
            titulo: "José María Morelos",
            descripcion: "Líder insurgente y estratega militar",
            imagen: "https://i.imgur.com/nX4jKmP.jpg",
            año: "1813",
            emoji: "⚔️"
        },
        {
            titulo: "Independencia de México",
            descripcion: "Entrada del Ejército Trigarante a la Ciudad de México",
            imagen: "https://i.imgur.com/zRk5tYN.jpg",
            año: "1821",
            emoji: "🎊"
        },
        {
            titulo: "Conspiradores de Querétaro",
            descripcion: "Reuniones secretas que planearon la independencia",
            imagen: "https://i.imgur.com/pTx9nQm.jpg",
            año: "1810",
            emoji: "🕯️"
        }
    ],
    2: [ // Porfiriato
        {
            titulo: "Porfirio Díaz",
            descripcion: "Presidente de México durante 31 años",
            imagen: "https://i.imgur.com/vB8jKmN.jpg",
            año: "1900",
            emoji: "👑"
        },
        {
            titulo: "Palacio de Bellas Artes",
            descripcion: "Construcción iniciada durante el Porfiriato",
            imagen: "https://i.imgur.com/LqX9nRm.jpg",
            año: "1904",
            emoji: "🏛️"
        },
        {
            titulo: "Ferrocarril Mexicano",
            descripcion: "El progreso de la época en transporte",
            imagen: "https://i.imgur.com/mK7pQnR.jpg",
            año: "1890",
            emoji: "🚂"
        },
        {
            titulo: "Ciudad de México Porfiriana",
            descripcion: "La capital modernizada con edificios europeos",
            imagen: "https://i.imgur.com/nY8jLmP.jpg",
            año: "1900",
            emoji: "🏙️"
        },
        {
            titulo: "Obreros Mexicanos",
            descripcion: "Trabajadores en condiciones difíciles",
            imagen: "https://i.imgur.com/pL9kMnQ.jpg",
            año: "1907",
            emoji: "⚙️"
        },
        {
            titulo: "Hacienda Porfiriana",
            descripcion: "Las grandes haciendas que dominaban el campo",
            imagen: "https://i.imgur.com/qM8nPrS.jpg",
            año: "1900",
            emoji: "🏰"
        }
    ],
    3: [ // Revolución
        {
            titulo: "Emiliano Zapata",
            descripcion: "Líder del movimiento agrario en Morelos",
            imagen: "https://i.imgur.com/tN9kQmR.jpg",
            año: "1914",
            emoji: "🌾"
        },
        {
            titulo: "Pancho Villa",
            descripcion: "Comandante de la División del Norte",
            imagen: "https://i.imgur.com/pQ8nLmT.jpg",
            año: "1914",
            emoji: "🐴"
        },
        {
            titulo: "Soldaderas",
            descripcion: "Mujeres revolucionarias en el frente",
            imagen: "https://i.imgur.com/qR9mNpU.jpg",
            año: "1913",
            emoji: "💪"
        },
        {
            titulo: "Francisco I. Madero",
            descripcion: "Iniciador de la Revolución Mexicana",
            imagen: "https://i.imgur.com/rS0nQpV.jpg",
            año: "1911",
            emoji: "📢"
        },
        {
            titulo: "Constitución de 1917",
            descripcion: "Documento que rige México hasta hoy",
            imagen: "https://i.imgur.com/tU1pRqW.jpg",
            año: "1917",
            emoji: "📜"
        },
        {
            titulo: "Revolución Mexicana",
            descripcion: "Tropas revolucionarias en combate",
            imagen: "https://i.imgur.com/vX2qStY.jpg",
            año: "1910-1920",
            emoji: "⚔️"
        }
    ]
};

// Comparaciones antes/después
const comparaciones = [
    {
        titulo: "Ciudad de México",
        antes: {
            titulo: "1810 - Capital Colonial",
            descripcion: "Calles empedradas, arquitectura española, iglesias dominantes",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Mexico_City_1628.jpg/400px-Mexico_City_1628.jpg"
        },
        despues: {
            titulo: "1910 - Metrópolis Porfiriana",
            descripcion: "Edificios modernos, tranvías eléctricos, avenidas amplias",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mexico_City_1900.jpg/400px-Mexico_City_1900.jpg"
        }
    },
    {
        titulo: "Educación",
        antes: {
            titulo: "Era Colonial",
            descripcion: "Solo para élites, controlada por la Iglesia",
            imagen: "🏛️"
        },
        despues: {
            titulo: "Después de 1917",
            descripcion: "Educación pública, laica y gratuita para todos",
            imagen: "📚"
        }
    },
    {
        titulo: "Derechos Laborales",
        antes: {
            titulo: "Porfiriato",
            descripcion: "14 horas de trabajo, sin derechos, tiendas de raya",
            imagen: "⚙️"
        },
        despues: {
            titulo: "Constitución 1917",
            descripcion: "Jornada de 8 horas, derecho a huelga, salario mínimo",
            imagen: "⚖️"
        }
    }
];

// Eventos del mapa
const eventosMapa = {
    dolores: {
        nombre: "Dolores Hidalgo",
        fecha: "16 de septiembre de 1810",
        evento: "Grito de Dolores",
        descripcion: "Aquí inició la lucha por la Independencia cuando el padre Hidalgo tocó las campanas de la parroquia y convocó al pueblo a levantarse contra el gobierno español.",
        icono: "🔔"
    },
    queretaro: {
        nombre: "Querétaro",
        fecha: "1810",
        evento: "Conspiración de Querétaro",
        descripcion: "En casa de los corregidores se planeó secretamente el movimiento de independencia. Josefa Ortiz alertó a los conspiradores cuando fueron descubiertos.",
        icono: "🏛️"
    },
    morelos: {
        nombre: "Morelos",
        fecha: "1911-1919",
        evento: "Movimiento Zapatista",
        descripcion: "Emiliano Zapata lideró desde aquí la lucha agraria con el lema 'Tierra y Libertad'. Su ejército controló la región durante años.",
        icono: "🌾"
    },
    chihuahua: {
        nombre: "Chihuahua",
        fecha: "1910-1920",
        evento: "División del Norte",
        descripcion: "Pancho Villa comandó desde aquí la famosa División del Norte, uno de los ejércitos revolucionarios más poderosos de México.",
        icono: "🐴"
    }
};

// Sistema de logros
const logrosDisponibles = [
    {
        id: 'primer_parcial',
        titulo: '🎓 Primer Paso',
        descripcion: 'Completaste tu primer parcial',
        desbloqueado: false
    },
    {
        id: 'explorador',
        titulo: '🗺️ Explorador Histórico',
        descripcion: 'Visitaste los 3 parciales',
        desbloqueado: false
    },
    {
        id: 'estudiante',
        titulo: '📚 Estudiante Dedicado',
        descripcion: 'Escuchaste 5 historias de personajes',
        desbloqueado: false
    },
    {
        id: 'maestro_quiz',
        titulo: '🎯 Maestro del Quiz',
        descripcion: 'Obtuviste 80% o más en el quiz',
        desbloqueado: false
    },
    {
        id: 'experto_trivia',
        titulo: '⚡ Experto en Trivia',
        descripcion: 'Respondiste 7 de 8 preguntas correctamente',
        desbloqueado: false
    },
    {
        id: 'geografo',
        titulo: '🗺️ Geógrafo',
        descripcion: 'Visitaste todos los puntos del mapa',
        desbloqueado: false
    },
    {
        id: 'historiador',
        titulo: '📖 Historiador Experto',
        descripcion: 'Escuchaste todas las 9 historias',
        desbloqueado: false
    },
    {
        id: 'coleccionista',
        titulo: '🏆 Coleccionista',
        descripcion: 'Desbloqueaste todos los logros',
        desbloqueado: false
    }
];

let logrosUsuario = JSON.parse(localStorage.getItem('logrosHistoria')) || [];
let statsUsuario = JSON.parse(localStorage.getItem('statsHistoria')) || {
    parcialesVisitados: [],
    personajesEscuchados: 0,
    quizzesCompletados: 0,
    visitoGaleria: false,
    visitoComparador: false,
    puntosMapa: []
};

// Preguntas del quiz
const quizPreguntas = [
    {
        pregunta: "¿En qué año dio Miguel Hidalgo el Grito de Dolores?",
        opciones: ["1808", "1810", "1821", "1910"],
        correcta: 1
    },
    {
        pregunta: "¿Quién fue conocida como 'La Corregidora'?",
        opciones: ["Leona Vicario", "Josefa Ortiz de Domínguez", "Carmen Serdán", "Adelita"],
        correcta: 1
    },
    {
        pregunta: "¿Cuántos años duró aproximadamente el Porfiriato?",
        opciones: ["15 años", "25 años", "35 años", "45 años"],
        correcta: 2
    },
    {
        pregunta: "¿Qué evento marcó el inicio de la Revolución Mexicana?",
        opciones: ["Plan de Ayala", "Plan de San Luis", "Constitución de 1917", "Huelga de Cananea"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál era el lema de Emiliano Zapata?",
        opciones: ["Sufragio efectivo, no reelección", "Tierra y Libertad", "Orden y Progreso", "Patria y Libertad"],
        correcta: 1
    },
    {
        pregunta: "¿En qué año se promulgó la Constitución que aún rige México?",
        opciones: ["1910", "1913", "1917", "1920"],
        correcta: 2
    },
    {
        pregunta: "¿Qué líder revolucionario comandaba la División del Norte?",
        opciones: ["Emiliano Zapata", "Francisco Villa", "Venustiano Carranza", "Álvaro Obregón"],
        correcta: 1
    },
    {
        pregunta: "¿Qué huelga obrera fue brutalmente reprimida en 1907?",
        opciones: ["Cananea", "Río Blanco", "Orizaba", "Todas las anteriores"],
        correcta: 3
    }
];

let currentScreen = 'home-screen';
let quizScore = 0;
let currentQuestionIndex = 0;

// Navegación entre pantallas
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
    window.scrollTo(0, 0);
}

function showMainMenu() {
    showScreen('main-menu');
}

function showParcial(numero) {
    const parcialContent = document.getElementById('parcial-content');
    const data = parcialesTitulos[numero];
    const personajes = personajesData[numero];
    const contenido = contenidoParciales[numero];
    
    // Registrar visita al parcial
    if (!statsUsuario.parcialesVisitados.includes(numero)) {
        statsUsuario.parcialesVisitados.push(numero);
        guardarStats();
        
        if (statsUsuario.parcialesVisitados.length === 1) {
            desbloquearLogro('primer_parcial');
        } else if (statsUsuario.parcialesVisitados.length === 3) {
            desbloquearLogro('explorador');
        }
    }
    
    let html = `
        <div class="parcial-header">
            <h2>${data.titulo}</h2>
            <p>${data.descripcion}</p>
        </div>

        <!-- Introducción -->
        <div class="intro-section">
            <div class="intro-icon">${contenido.introduccion.imagen}</div>
            <h3>${contenido.introduccion.titulo}</h3>
            <p>${contenido.introduccion.texto}</p>
        </div>
    `;

    // Mostrar contenido específico según el parcial
    // Parcial 1: Antecedentes, Personajes Clave, Batallas
    if (numero === 1 && contenido.antecedentes) {
        html += `
            <div class="section-divider">
                <h3>📚 ${contenido.antecedentes.titulo}</h3>
            </div>
            <div class="intro-section">
                <p>${contenido.antecedentes.texto}</p>
                <div class="puntos-clave">
                    <h4>Puntos Clave:</h4>
                    <ul>
                        ${contenido.antecedentes.puntosClave.map(punto => `<li>${punto}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    // Parcial 2: Contexto Económico, Movimientos Sociales, Vida Cotidiana
    if (numero === 2 && contenido.contextoEconomico) {
        html += `
            <div class="section-divider">
                <h3>💼 ${contenido.contextoEconomico.titulo}</h3>
            </div>
            <div class="intro-section">
                <p>${contenido.contextoEconomico.texto}</p>
                <div class="estadisticas-grid">
                    ${contenido.contextoEconomico.estadisticas.map(stat => `
                        <div class="stat-item">${stat}</div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Parcial 3: Fases de la Revolución
    if (numero === 3 && contenido.fasesRevolucion) {
        html += `
            <div class="section-divider">
                <h3>🔄 ${contenido.fasesRevolucion.titulo}</h3>
            </div>
            <div class="fases-grid">
                ${contenido.fasesRevolucion.fases.map((fase, idx) => `
                    <div class="fase-card">
                        <div class="fase-numero">Fase ${idx + 1}</div>
                        <h4>${fase.nombre}</h4>
                        <p class="fase-objetivo"><strong>Objetivo:</strong> ${fase.objetivo}</p>
                        <p class="fase-lider"><strong>Líder:</strong> ${fase.lider}</p>
                        <p class="fase-desarrollo">${fase.desarrollo}</p>
                        <p class="fase-resultado"><strong>Resultado:</strong> ${fase.resultado}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    html += `
        <!-- Contexto Histórico -->
        <div class="section-divider">
            <h3>📅 Línea de Tiempo</h3>
        </div>
        <div class="contexto-grid">
    `;
    
    contenido.contexto.forEach(item => {
        html += `
            <div class="contexto-card">
                <div class="contexto-year">${item.año}</div>
                <h4>${item.evento}</h4>
                <p>${item.detalles}</p>
            </div>
        `;
    });
    
    html += `
        </div>

        <!-- Datos Curiosos -->
        <div class="section-divider">
            <h3>💡 ¿Sabías que...?</h3>
        </div>
        <div class="curiosidades-grid">
    `;
    
    contenido.datosCuriosos.forEach(dato => {
        html += `
            <div class="curiosidad-card">
                <div class="curiosidad-icon">${dato.icono}</div>
                <h4>${dato.titulo}</h4>
                <p>${dato.dato}</p>
            </div>
        `;
    });
    
    html += `
        </div>

        <!-- Personajes Históricos -->
        <div class="section-divider">
            <h3>👥 Conoce a los Protagonistas</h3>
            <p style="text-align: center; color: white; margin-top: 0.5rem;">Explora las historias personales de quienes vivieron esta época</p>
        </div>
        <div class="personajes-grid">
    `;
    
    personajes.forEach(personaje => {
        html += `
            <div class="personaje-card">
                <div class="personaje-image">
                    <video class="video-personaje" controls onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <source src="videos/${personaje.videoFile}" type="video/mp4">
                    </video>
                    <div class="video-fallback" style="display: none; font-size: 8rem; width: 100%; height: 100%; align-items: center; justify-content: center; background: linear-gradient(135deg, var(--purple), var(--secondary));">
                        ${personaje.icono}
                    </div>
                </div>
                <div class="personaje-info">
                    <h3>${personaje.nombre}</h3>
                    <span class="role">${personaje.rol}</span>
                    <p>${personaje.descripcion}</p>
                    
                    <div class="audio-player" id="player-${personaje.audioFile}">
                        <audio id="audio-${personaje.audioFile}" src="${personaje.audioFile}" preload="metadata"></audio>
                        <div class="audio-controls">
                            <button class="play-btn" onclick="toggleAudio('${personaje.audioFile}')" id="btn-${personaje.audioFile}">
                                ▶️
                            </button>
                            <div class="audio-progress-container">
                                <div class="audio-info-top">
                                    <span class="audio-title">Escucha su historia</span>
                                    <span class="audio-time" id="time-${personaje.audioFile}">0:00 / 0:00</span>
                                </div>
                                <div class="audio-progress-bar" id="progress-${personaje.audioFile}" onclick="seekAudio(event, '${personaje.audioFile}')">
                                    <div class="audio-progress-fill" id="fill-${personaje.audioFile}"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    html += `
        </div>
    `;

    // Mostrar más personajes clave (Parcial 1)
    if (numero === 1 && contenido.personajesClave) {
        html += `
            <div class="section-divider">
                <h3>⭐ ${contenido.personajesClave.titulo}</h3>
            </div>
            <div class="heroes-grid">
                ${contenido.personajesClave.lista.map(heroe => `
                    <div class="heroe-card">
                        <h4>${heroe.nombre}</h4>
                        <p class="heroe-rol">${heroe.rol}</p>
                        <p class="heroe-logros">${heroe.logros}</p>
                        <p class="heroe-frase">"${heroe.frase}"</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Mostrar batallas importantes (Parcial 1)
    if (numero === 1 && contenido.batallasImportantes) {
        html += `
            <div class="section-divider">
                <h3>⚔️ Batallas Decisivas</h3>
            </div>
            <div class="batallas-grid">
                ${contenido.batallasImportantes.map(batalla => `
                    <div class="batalla-card">
                        <h4>${batalla.nombre}</h4>
                        <p class="batalla-fecha">📅 ${batalla.fecha}</p>
                        <p class="batalla-lugar">📍 ${batalla.lugar}</p>
                        <p class="batalla-resultado"><strong>${batalla.resultado}</strong></p>
                        <p class="batalla-importancia">${batalla.importancia}</p>
                        <p class="batalla-detalle"><em>${batalla.detalle}</em></p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Mostrar movimientos sociales (Parcial 2)
    if (numero === 2 && contenido.movimientosSociales) {
        html += `
            <div class="section-divider">
                <h3>✊ ${contenido.movimientosSociales.titulo}</h3>
            </div>
            <div class="movimientos-grid">
                ${contenido.movimientosSociales.eventos.map(evento => `
                    <div class="movimiento-card">
                        <h4>${evento.nombre}</h4>
                        <p class="movimiento-fecha">📅 ${evento.fecha}</p>
                        <p class="movimiento-lugar">📍 ${evento.lugar}</p>
                        <p><strong>Causa:</strong> ${evento.causa}</p>
                        <p><strong>Desarrollo:</strong> ${evento.desarrollo}</p>
                        <p class="movimiento-resultado"><strong>Resultado:</strong> ${evento.resultado}</p>
                        <p class="movimiento-importancia"><em>${evento.importancia}</em></p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Mostrar vida cotidiana (Parcial 2)
    if (numero === 2 && contenido.vidaCotidiana) {
        html += `
            <div class="section-divider">
                <h3>🏛️ ${contenido.vidaCotidiana.titulo}</h3>
            </div>
            <div class="vida-cotidiana-grid">
                <div class="vida-card vida-elite">
                    <h4>La Élite Porfirista</h4>
                    <p>${contenido.vidaCotidiana.elite.descripcion}</p>
                    <ul>
                        ${contenido.vidaCotidiana.elite.caracteristicas.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
                <div class="vida-card vida-pueblo">
                    <h4>El Pueblo Mexicano</h4>
                    <p>${contenido.vidaCotidiana.pueblo.descripcion}</p>
                    <ul>
                        ${contenido.vidaCotidiana.pueblo.caracteristicas.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    // Mostrar líderes principales (Parcial 3)
    if (numero === 3 && contenido.lideresPrincipales) {
        html += `
            <div class="section-divider">
                <h3>👑 ${contenido.lideresPrincipales.titulo}</h3>
            </div>
            <div class="lideres-grid">
                ${contenido.lideresPrincipales.lideres.map(lider => `
                    <div class="lider-card">
                        <h4>${lider.nombre}</h4>
                        <p class="lider-alias">${lider.alias}</p>
                        <p><strong>Origen:</strong> ${lider.origen}</p>
                        <p><strong>Ideología:</strong> ${lider.ideologia}</p>
                        <p><strong>Logro:</strong> ${lider.logro}</p>
                        <p><strong>Muerte:</strong> ${lider.muerte}</p>
                        <p class="lider-legado"><em>${lider.legado}</em></p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Mostrar batallas decisivas (Parcial 3)
    if (numero === 3 && contenido.batallasDecisivas) {
        html += `
            <div class="section-divider">
                <h3>⚔️ Batallas Decisivas de la Revolución</h3>
            </div>
            <div class="batallas-revolucion-grid">
                ${contenido.batallasDecisivas.map(batalla => `
                    <div class="batalla-rev-card">
                        <h4>${batalla.nombre}</h4>
                        <p class="batalla-fecha">📅 ${batalla.fecha}</p>
                        <p class="batalla-resultado"><strong>${batalla.resultado}</strong></p>
                        <p>${batalla.importancia}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Mostrar Constitución 1917 (Parcial 3)
    if (numero === 3 && contenido.constitucion1917) {
        html += `
            <div class="section-divider">
                <h3>📜 ${contenido.constitucion1917.titulo}</h3>
            </div>
            <div class="constitucion-grid">
                ${contenido.constitucion1917.articulos.map(art => `
                    <div class="articulo-card">
                        <div class="articulo-numero">${art.numero}</div>
                        <h4>${art.tema}</h4>
                        <p class="articulo-contenido">${art.contenido}</p>
                        <p class="articulo-importancia"><strong>Importancia:</strong> ${art.importancia}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    html += `
        <!-- Impacto Actual -->
        <div class="impacto-section">
            <h3>🔗 Conexión con el Presente</h3>
            <p>${contenido.impactoActual}</p>
        </div>
    `;
    
    parcialContent.innerHTML = html;
    showScreen('parcial-screen');
}

function showTimeline() {
    showScreen('timeline-screen');
}

function showQuiz() {
    quizScore = 0;
    currentQuestionIndex = 0;
    document.getElementById('score').textContent = '0';
    loadQuestion();
    showScreen('quiz-screen');
}

function loadQuestion() {
    const quizContent = document.getElementById('quiz-content');
    
    if (currentQuestionIndex >= quizPreguntas.length) {
        showQuizResult();
        return;
    }
    
    const pregunta = quizPreguntas[currentQuestionIndex];
    
    let html = `
        <div class="question-card">
            <div class="question-number">Pregunta ${currentQuestionIndex + 1} de ${quizPreguntas.length}</div>
            <h3 class="question-text">${pregunta.pregunta}</h3>
            <div class="options-grid">
    `;
    
    pregunta.opciones.forEach((opcion, index) => {
        html += `
            <button class="option-btn" onclick="checkAnswer(${index})">
                ${opcion}
            </button>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    quizContent.innerHTML = html;
}

function checkAnswer(selectedIndex) {
    const pregunta = quizPreguntas[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === pregunta.correcta) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && index !== pregunta.correcta) {
            btn.classList.add('incorrect');
        }
    });
    
    if (selectedIndex === pregunta.correcta) {
        quizScore += 10;
        document.getElementById('score').textContent = quizScore;
    }
    
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1500);
}

function showQuizResult() {
    const quizContent = document.getElementById('quiz-content');
    const maxScore = quizPreguntas.length * 10;
    const percentage = (quizScore / maxScore) * 100;
    
    // Registrar quiz completado
    statsUsuario.quizzesCompletados++;
    guardarStats();
    
    if (percentage >= 80) {
        desbloquearLogro('maestro_quiz');
    }
    
    let mensaje = '';
    let emoji = '';
    
    if (percentage >= 80) {
        mensaje = '¡Excelente! Eres un experto en historia de México';
        emoji = '🏆';
    } else if (percentage >= 60) {
        mensaje = '¡Muy bien! Tienes buenos conocimientos';
        emoji = '🌟';
    } else if (percentage >= 40) {
        mensaje = 'Bien, pero puedes mejorar';
        emoji = '📚';
    } else {
        mensaje = 'Sigue estudiando, ¡tú puedes!';
        emoji = '💪';
    }
    
    const html = `
        <div class="quiz-result">
            <div style="font-size: 5rem; margin-bottom: 1rem;">${emoji}</div>
            <h3>${mensaje}</h3>
            <div class="final-score">${quizScore} / ${maxScore}</div>
            <button class="btn-restart" onclick="showQuiz()">Intentar de nuevo</button>
        </div>
    `;
    
    quizContent.innerHTML = html;
}

// Control de audio global
let currentAudio = null;
let currentAudioId = null;

function toggleAudio(audioId) {
    const audio = document.getElementById(`audio-${audioId}`);
    const btn = document.getElementById(`btn-${audioId}`);
    
    // Si hay otro audio reproduciéndose, pausarlo
    if (currentAudio && currentAudioId !== audioId) {
        currentAudio.pause();
        document.getElementById(`btn-${currentAudioId}`).innerHTML = '▶️';
    }
    
    if (audio.paused) {
        audio.play().catch(error => {
            alert(`No se pudo reproducir el audio. Asegúrate de que el archivo existe en la carpeta 'audios/'`);
        });
        btn.innerHTML = '⏸️';
        currentAudio = audio;
        currentAudioId = audioId;
        
        // Registrar escucha
        if (!audio.dataset.counted) {
            statsUsuario.personajesEscuchados++;
            guardarStats();
            audio.dataset.counted = 'true';
            
            if (statsUsuario.personajesEscuchados >= 5) {
                desbloquearLogro('estudiante');
            }
            
            if (statsUsuario.personajesEscuchados >= 9) {
                desbloquearLogro('historiador');
            }
        }
    } else {
        audio.pause();
        btn.innerHTML = '▶️';
    }
}

function seekAudio(event, audioId) {
    const audio = document.getElementById(`audio-${audioId}`);
    const progressBar = document.getElementById(`progress-${audioId}`);
    const rect = progressBar.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
}

function updateAudioProgress(audioId) {
    const audio = document.getElementById(`audio-${audioId}`);
    const fill = document.getElementById(`fill-${audioId}`);
    const timeDisplay = document.getElementById(`time-${audioId}`);
    
    if (!audio) return;
    
    const percent = (audio.currentTime / audio.duration) * 100;
    fill.style.width = percent + '%';
    
    const currentMin = Math.floor(audio.currentTime / 60);
    const currentSec = Math.floor(audio.currentTime % 60);
    const durationMin = Math.floor(audio.duration / 60);
    const durationSec = Math.floor(audio.duration % 60);
    
    timeDisplay.textContent = `${currentMin}:${currentSec.toString().padStart(2, '0')} / ${durationMin}:${durationSec.toString().padStart(2, '0')}`;
}

// Actualizar progreso de todos los audios
setInterval(() => {
    document.querySelectorAll('audio').forEach(audio => {
        if (!audio.paused) {
            const audioId = audio.id.replace('audio-', '');
            updateAudioProgress(audioId);
        }
    });
}, 100);

// Cuando termine el audio
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelectorAll('audio').forEach(audio => {
            audio.addEventListener('ended', function() {
                const audioId = this.id.replace('audio-', '');
                const btn = document.getElementById(`btn-${audioId}`);
                btn.innerHTML = '▶️';
            });
            
            audio.addEventListener('loadedmetadata', function() {
                const audioId = this.id.replace('audio-', '');
                updateAudioProgress(audioId);
            });
        });
    }, 1000);
});

// Trivia Verdadero o Falso
const triviaPreguntas = [
    {
        pregunta: "Miguel Hidalgo abolió la esclavitud en 1810, antes que Estados Unidos",
        respuesta: true,
        explicacion: "Cierto. El Bando de Hidalgo abolió la esclavitud 50 años antes que Estados Unidos."
    },
    {
        pregunta: "El Porfiriato duró aproximadamente 10 años",
        respuesta: false,
        explicacion: "Falso. El Porfiriato duró más de 30 años (1876-1911)."
    },
    {
        pregunta: "Emiliano Zapata quería ser presidente de México",
        respuesta: false,
        explicacion: "Falso. Zapata nunca buscó el poder político, solo quería que se devolvieran las tierras a los campesinos."
    },
    {
        pregunta: "La Constitución de 1917 fue la primera en el mundo en incluir derechos sociales",
        respuesta: true,
        explicacion: "Cierto. Se adelantó incluso a la Constitución de Weimar en Alemania."
    },
    {
        pregunta: "Josefa Ortiz de Domínguez era la esposa del virrey",
        respuesta: false,
        explicacion: "Falso. Era la esposa del corregidor de Querétaro, no del virrey."
    },
    {
        pregunta: "Las soldaderas solo cocinaban para los soldados",
        respuesta: false,
        explicacion: "Falso. Las soldaderas también peleaban, curaban heridos y transportaban armas y municiones."
    },
    {
        pregunta: "Pancho Villa firmó un contrato con Hollywood para filmar sus batallas",
        respuesta: true,
        explicacion: "Cierto. Villa fue el primer líder mundial en usar el cine como propaganda."
    },
    {
        pregunta: "Durante el Porfiriato se construyeron más de 19,000 km de vías férreas",
        respuesta: true,
        explicacion: "Cierto. México pasó a tener la red ferroviaria más extensa de Latinoamérica."
    }
];

let currentTriviaIndex = 0;
let triviaScore = 0;

function showTrivia() {
    currentTriviaIndex = 0;
    triviaScore = 0;
    showScreen('trivia-screen');
    loadTrivia();
}

function loadTrivia() {
    const triviaContent = document.getElementById('trivia-content');
    
    if (currentTriviaIndex >= triviaPreguntas.length) {
        showTriviaResult();
        return;
    }
    
    const pregunta = triviaPreguntas[currentTriviaIndex];
    
    triviaContent.innerHTML = `
        <div class="trivia-card">
            <div class="trivia-number">Pregunta ${currentTriviaIndex + 1} de ${triviaPreguntas.length}</div>
            <h3 class="trivia-question">${pregunta.pregunta}</h3>
            <div class="trivia-buttons">
                <button class="trivia-btn verdadero" onclick="checkTrivia(true)">
                    ✓ VERDADERO
                </button>
                <button class="trivia-btn falso" onclick="checkTrivia(false)">
                    ✗ FALSO
                </button>
            </div>
            <div class="trivia-score">Puntuación: ${triviaScore}</div>
        </div>
    `;
}

function checkTrivia(respuesta) {
    const pregunta = triviaPreguntas[currentTriviaIndex];
    const buttons = document.querySelectorAll('.trivia-btn');
    const triviaContent = document.getElementById('trivia-content');
    
    buttons.forEach(btn => btn.disabled = true);
    
    const esCorrecta = respuesta === pregunta.respuesta;
    
    if (esCorrecta) {
        triviaScore += 10;
    }
    
    triviaContent.innerHTML += `
        <div class="trivia-explicacion ${esCorrecta ? 'correcta' : 'incorrecta'}">
            <div class="explicacion-icon">${esCorrecta ? '🎉' : '📚'}</div>
            <h4>${esCorrecta ? '¡Correcto!' : 'Incorrecto'}</h4>
            <p>${pregunta.explicacion}</p>
        </div>
    `;
    
    setTimeout(() => {
        currentTriviaIndex++;
        loadTrivia();
    }, 3000);
}

function showTriviaResult() {
    const triviaContent = document.getElementById('trivia-content');
    const maxScore = triviaPreguntas.length * 10;
    const percentage = (triviaScore / maxScore) * 100;
    const correctas = triviaScore / 10;
    
    // Desbloquear logro de trivia
    if (correctas >= 7) {
        desbloquearLogro('experto_trivia');
    }
    
    let emoji = '🏆';
    let mensaje = '¡Excelente conocimiento histórico!';
    
    if (percentage < 50) {
        emoji = '📚';
        mensaje = '¡Sigue aprendiendo!';
    } else if (percentage < 80) {
        emoji = '⭐';
        mensaje = '¡Muy bien!';
    }
    
    triviaContent.innerHTML = `
        <div class="trivia-result">
            <div style="font-size: 5rem; margin-bottom: 1rem;">${emoji}</div>
            <h3>${mensaje}</h3>
            <div class="final-score">${triviaScore} / ${maxScore}</div>
            <button class="btn-restart" onclick="showTrivia()">Jugar de nuevo</button>
        </div>
    `;
}

// Frases Célebres
const frasesCelebres = [
    {
        frase: "La patria es primero",
        autor: "Miguel Hidalgo",
        contexto: "Durante la lucha de independencia",
        epoca: "1810"
    },
    {
        frase: "Prefiero morir de pie que vivir de rodillas",
        autor: "Emiliano Zapata",
        contexto: "Defendiendo la causa campesina",
        epoca: "1910-1919"
    },
    {
        frase: "La tierra es de quien la trabaja",
        autor: "Emiliano Zapata",
        contexto: "Lema del Plan de Ayala",
        epoca: "1911"
    },
    {
        frase: "Yo no soy criminal, soy liberal",
        autor: "Ricardo Flores Magón",
        contexto: "Durante su encarcelamiento",
        epoca: "1900s"
    },
    {
        frase: "Sufragio efectivo, no reelección",
        autor: "Francisco I. Madero",
        contexto: "Lema de la Revolución Mexicana",
        epoca: "1910"
    },
    {
        frase: "Entre los individuos como entre las naciones, el respeto al derecho ajeno es la paz",
        autor: "Benito Juárez",
        contexto: "Reforma Liberal",
        epoca: "1867"
    },
    {
        frase: "Morir es nada cuando por la patria se muere",
        autor: "José María Morelos",
        contexto: "Sentimientos de la Nación",
        epoca: "1813"
    },
    {
        frase: "Quien no espera vencer, ya está vencido",
        autor: "Benito Juárez",
        contexto: "Durante la intervención francesa",
        epoca: "1863"
    }
];

function showFrases() {
    showScreen('frases-screen');
    const frasesGrid = document.getElementById('frases-grid');
    
    let html = '';
    frasesCelebres.forEach((item, index) => {
        html += `
            <div class="frase-card" style="animation-delay: ${index * 0.1}s">
                <div class="frase-icono">💬</div>
                <blockquote class="frase-texto">"${item.frase}"</blockquote>
                <div class="frase-autor">— ${item.autor}</div>
                <div class="frase-contexto">${item.contexto}</div>
                <div class="frase-epoca">${item.epoca}</div>
            </div>
        `;
    });
    
    frasesGrid.innerHTML = html;
}

// Mapa
function showMapa() {
    showScreen('mapa-screen');
}

function showEventoMapa(lugar) {
    const evento = eventosMapa[lugar];
    const mapaInfo = document.getElementById('mapa-info');
    
    mapaInfo.innerHTML = `
        <div class="evento-icon">${evento.icono}</div>
        <h3>${evento.nombre}</h3>
        <div class="evento-fecha">${evento.fecha}</div>
        <h4>${evento.evento}</h4>
        <p>${evento.descripcion}</p>
    `;
    
    if (!statsUsuario.puntosMapa.includes(lugar)) {
        statsUsuario.puntosMapa.push(lugar);
        guardarStats();
        
        if (statsUsuario.puntosMapa.length === Object.keys(eventosMapa).length) {
            desbloquearLogro('geografo');
        }
    }
}

// Logros
function showLogros() {
    showScreen('logros-screen');
    actualizarLogros();
}

function actualizarLogros() {
    document.getElementById('parciales-visitados').textContent = statsUsuario.parcialesVisitados.length;
    document.getElementById('personajes-conocidos').textContent = statsUsuario.personajesEscuchados;
    document.getElementById('quizzes-completados').textContent = statsUsuario.quizzesCompletados;
    
    const logrosGrid = document.getElementById('logros-grid');
    let html = '';
    
    logrosDisponibles.forEach(logro => {
        const desbloqueado = logrosUsuario.includes(logro.id);
        html += `
            <div class="logro-card ${desbloqueado ? 'desbloqueado' : 'bloqueado'}">
                <div class="logro-icon">${logro.titulo.split(' ')[0]}</div>
                <div class="logro-info">
                    <h4>${logro.titulo}</h4>
                    <p>${logro.descripcion}</p>
                </div>
                ${desbloqueado ? '<div class="logro-check">✓</div>' : '<div class="logro-lock">🔒</div>'}
            </div>
        `;
    });
    
    logrosGrid.innerHTML = html;
}

function desbloquearLogro(logroId) {
    if (!logrosUsuario.includes(logroId)) {
        logrosUsuario.push(logroId);
        localStorage.setItem('logrosHistoria', JSON.stringify(logrosUsuario));
        mostrarNotificacionLogro(logroId);
        
        // Verificar si desbloqueó todos
        if (logrosUsuario.length === logrosDisponibles.length - 1) {
            setTimeout(() => desbloquearLogro('coleccionista'), 500);
        }
    }
}

function mostrarNotificacionLogro(logroId) {
    const logro = logrosDisponibles.find(l => l.id === logroId);
    if (!logro) return;
    
    const notif = document.createElement('div');
    notif.className = 'logro-notificacion';
    notif.innerHTML = `
        <div class="notif-icon">${logro.titulo.split(' ')[0]}</div>
        <div class="notif-text">
            <strong>¡Logro Desbloqueado!</strong>
            <p>${logro.titulo}</p>
        </div>
    `;
    
    document.body.appendChild(notif);
    
    setTimeout(() => notif.classList.add('show'), 100);
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

function guardarStats() {
    localStorage.setItem('statsHistoria', JSON.stringify(statsUsuario));
}

// Sistema de Recomendaciones y Calificaciones
let calificacionActual = 0;

function showRecomendaciones() {
    showScreen('recomendaciones-screen');
    cargarRecomendaciones();
}

function calificar(estrellas) {
    calificacionActual = estrellas;
    const estrellasElements = document.querySelectorAll('.estrella');
    const textos = ['Muy Malo', 'Malo', 'Regular', 'Bueno', 'Excelente'];
    
    estrellasElements.forEach((estrella, index) => {
        if (index < estrellas) {
            estrella.textContent = '★';
            estrella.classList.add('activa');
        } else {
            estrella.textContent = '☆';
            estrella.classList.remove('activa');
        }
    });
    
    document.getElementById('calificacion-texto').textContent = `${estrellas} ${estrellas === 1 ? 'estrella' : 'estrellas'} - ${textos[estrellas - 1]}`;
}

function enviarRecomendacion() {
    const textarea = document.getElementById('recomendacion-input');
    const nombreInput = document.getElementById('nombre-input');
    const comentario = textarea.value.trim();
    const nombre = nombreInput.value.trim() || 'Anónimo';
    
    if (calificacionActual === 0) {
        alert('Por favor, selecciona una calificación con las estrellas');
        return;
    }
    
    if (comentario === '') {
        alert('Por favor, escribe una recomendación');
        return;
    }
    
    // Guardar en Firestore
    db.collection('recomendaciones').add({
        texto: comentario,
        estrellas: calificacionActual,
        nombre: nombre,
        fecha: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        // Limpiar formulario
        textarea.value = '';
        nombreInput.value = '';
        calificacionActual = 0;
        document.querySelectorAll('.estrella').forEach(e => {
            e.textContent = '☆';
            e.classList.remove('activa');
        });
        document.getElementById('calificacion-texto').textContent = 'Haz clic en las estrellas para calificar';
        
        // Mostrar mensaje de éxito
        alert('¡Gracias por tu recomendación! 💚');
    })
    .catch((error) => {
        console.error('Error al enviar recomendación:', error);
        alert('Hubo un error al enviar tu recomendación. Intenta de nuevo.');
    });
}

function cargarRecomendaciones() {
    const listaComentarios = document.getElementById('lista-comentarios');
    
    // Escuchar cambios en tiempo real desde Firestore
    db.collection('recomendaciones')
        .orderBy('fecha', 'desc')
        .limit(20)
        .onSnapshot((snapshot) => {
            if (snapshot.empty) {
                listaComentarios.innerHTML = '<p class="no-comentarios">Aún no hay recomendaciones. ¡Sé el primero en dejar la tuya!</p>';
                actualizarEstadisticas(0, 0, {1: 0, 2: 0, 3: 0, 4: 0, 5: 0});
                return;
            }
            
            let html = '';
            let totalEstrellas = 0;
            let contador = 0;
            let distribucion = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
            
            snapshot.forEach((doc) => {
                const comentario = doc.data();
                const fecha = comentario.fecha ? comentario.fecha.toDate().toLocaleDateString('es-MX') : 'Reciente';
                const estrellasHTML = '★'.repeat(comentario.estrellas) + '☆'.repeat(5 - comentario.estrellas);
                
                totalEstrellas += comentario.estrellas;
                contador++;
                distribucion[comentario.estrellas]++;
                
                html += `
                    <div class="comentario-card">
                        <div class="comentario-header">
                            <span class="comentario-nombre">${comentario.nombre}</span>
                            <span class="comentario-fecha">${fecha}</span>
                        </div>
                        <div class="comentario-estrellas">${estrellasHTML}</div>
                        <p class="comentario-texto">${comentario.texto}</p>
                    </div>
                `;
            });
            
            listaComentarios.innerHTML = html;
            actualizarEstadisticas(totalEstrellas, contador, distribucion);
        }, (error) => {
            console.error('Error al cargar recomendaciones:', error);
            listaComentarios.innerHTML = '<p class="no-comentarios">Error al cargar recomendaciones</p>';
        });
}

function actualizarEstadisticas(totalEstrellas, totalRecomendaciones, distribucion) {
    let promedio = 0;
    if (totalRecomendaciones > 0) {
        promedio = (totalEstrellas / totalRecomendaciones).toFixed(1);
    }
    
    document.getElementById('promedio-estrellas').textContent = promedio;
    document.getElementById('total-calificaciones').textContent = totalRecomendaciones;
    document.getElementById('total-recomendaciones').textContent = totalRecomendaciones;
    
    // Actualizar barras de distribución
    for (let i = 1; i <= 5; i++) {
        const cantidad = distribucion[i] || 0;
        const porcentaje = totalRecomendaciones > 0 ? (cantidad / totalRecomendaciones * 100) : 0;
        
        document.getElementById(`votos-${i}`).textContent = cantidad;
        document.getElementById(`barra-${i}`).style.width = `${porcentaje}%`;
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Historia de México Interactiva cargada correctamente');
    actualizarLogros();
});

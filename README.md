# Historia de México - Programa Interactivo

Un programa web interactivo y visualmente atractivo para aprender sobre la historia de México, diseñado especialmente para jóvenes.

## 🎯 Características

- **3 Parciales temáticos**: Lucha Insurgente, Porfiriato y Revolución Mexicana
- **9 Personajes históricos**: 3 por cada parcial, mezclando figuras famosas y civiles comunes
- **Audios narrativos**: Relatos personales en tercera persona para cada personaje
- **Videos/Animaciones**: Espacios preparados para agregar contenido multimedia
- **Línea de tiempo interactiva**: Visualiza los eventos más importantes
- **Quiz gamificado**: Sistema de puntos y preguntas interactivas
- **Diseño responsivo**: Funciona perfectamente en computadoras, tablets y celulares
- **Animaciones fluidas**: Transiciones y efectos visuales atractivos

## 📁 Estructura de Archivos

```
historia programa/
│
├── index.html              # Página principal
├── styles.css              # Estilos y diseño
├── script.js               # Funcionalidad JavaScript
├── relatos_historicos.txt  # Textos de los 9 relatos
├── README.md              # Este archivo
│
├── audios/                # Carpeta para archivos de audio (crear)
│   ├── hidalgo.mp3
│   ├── josefa.mp3
│   ├── juan.mp3
│   ├── diaz.mp3
│   ├── carmen.mp3
│   ├── magon.mp3
│   ├── zapata.mp3
│   ├── adelita.mp3
│   └── pedro.mp3
│
└── videos/                # Carpeta para videos (crear)
    ├── miguel-hidalgo.mp4
    ├── josefa-ortiz.mp4
    └── ...
```

## 🚀 Cómo Usar

1. **Abrir el programa**: 
   - Simplemente abre `index.html` en tu navegador (Chrome, Firefox, Edge, etc.)
   - No necesitas servidor web para probarlo

2. **Agregar Audios**:
   - Crea una carpeta llamada `audios` en el mismo nivel que index.html
   - Genera los audios usando texto-a-voz con los relatos de `relatos_historicos.txt`
   - Guarda los archivos con los nombres especificados arriba
   - Herramientas recomendadas: Google TTS, Amazon Polly, ElevenLabs, o TTSMaker (gratis)

3. **Agregar Videos/Animaciones**:
   - Crea una carpeta llamada `videos`
   - Agrega tus videos o animaciones de los personajes
   - Los videos se reproducirán automáticamente en las tarjetas de personajes

## 🎨 Personalización

### Colores
Puedes cambiar los colores principales editando las variables CSS en `styles.css`:

```css
:root {
    --primary: #FF6B6B;    /* Rojo/Rosa */
    --secondary: #4ECDC4;  /* Turquesa */
    --accent: #FFE66D;     /* Amarillo */
    --purple: #A28FDB;     /* Morado */
    --orange: #FF9F43;     /* Naranja */
    --green: #26DE81;      /* Verde */
}
```

### Contenido
- Para agregar más personajes: edita el objeto `personajesData` en `script.js`
- Para cambiar preguntas del quiz: edita el array `quizPreguntas` en `script.js`
- Para modificar la línea de tiempo: edita el HTML en `index.html` (sección timeline)

## 🎤 Generando los Audios

1. **Copia los relatos** de `relatos_historicos.txt`
2. **Usa una herramienta de texto-a-voz**:
   - TTSMaker (gratis): https://ttsmaker.com/
   - Google Cloud TTS (primeros 1M caracteres gratis)
   - Amazon Polly (capa gratuita disponible)
   - ElevenLabs (voces muy naturales, plan gratuito limitado)

3. **Configuración recomendada**:
   - Velocidad: 140-150 palabras por minuto
   - Voces diferentes para cada personaje (masculina/femenina según corresponda)
   - Formato: MP3 o WAV
   - Agrega pausas naturales entre párrafos

## 📱 Compatibilidad

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera
- ✅ Dispositivos móviles (iOS y Android)

## 🎓 Contenido Educativo

### Parcial 1: Lucha Insurgente y Liberalismo
- Miguel Hidalgo y Costilla
- Josefa Ortiz de Domínguez
- Juan, Soldado Insurgente

### Parcial 2: El Porfiriato
- Porfirio Díaz
- Carmen, Obrera Textil
- Ricardo Flores Magón

### Parcial 3: Revolución Mexicana
- Emiliano Zapata
- Adelita, La Soldadera
- Pedro, Campesino Revolucionario

## 💡 Tips para Mejorarlo

1. **Agregar música de fondo** sutil en cada época histórica
2. **Efectos de sonido** cuando se hace clic en botones
3. **Modo oscuro** para mayor comodidad visual
4. **Sistema de logros** al completar secciones
5. **Compartir en redes sociales** el puntaje del quiz
6. **Versión offline** usando Service Workers
7. **Traducción a lenguas indígenas** mexicanas

## 🐛 Solución de Problemas

**Los audios no se reproducen:**
- Verifica que la carpeta `audios` existe
- Confirma que los nombres de archivo coinciden exactamente
- Algunos navegadores bloquean autoplay, el usuario debe hacer clic

**El diseño se ve mal:**
- Actualiza tu navegador a la última versión
- Limpia el caché del navegador (Ctrl + F5)

**Los videos no cargan:**
- Verifica el formato (MP4 es el más compatible)
- Comprueba que los archivos no sean demasiado grandes

## 📄 Licencia

Este proyecto es de código abierto y puede ser usado libremente con fines educativos.

## 🤝 Contribuciones

¡Las mejoras son bienvenidas! Puedes:
- Agregar más personajes históricos
- Crear nuevas preguntas para el quiz
- Mejorar los relatos
- Diseñar mejores animaciones

---

**Desarrollado con ❤️ para aprender historia de México de forma divertida**

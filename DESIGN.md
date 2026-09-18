---
name: Vanessa Velasco
description: Perfil digital ejecutivo con direccion editorial, arquitectonica y contemporanea.
---

<!-- SEED: established with the user before implementation; re-run $impeccable document once there's code to capture the actual tokens and components. -->

# Design System: Vanessa Velasco

## Overview

**Creative North Star: "Ciudad como proyecto"**

La identidad visual debe relacionar la trayectoria de Vanessa Velasco con ciudad, estructura, territorio, escala, vivienda y transformacion urbana. Esa relacion no debe resolverse mediante ilustraciones literales de ciudad, skylines, edificios decorativos ni recursos urbanos obvios; debe emerger de composicion, grid, escala, fotografia, ritmo, lineas, coordenadas, tipografia, espacios y proporciones.

El recurso visual central del proyecto es una ciudad que se dibuja a medida que el usuario recorre la pagina. La superficie parte de una estetica extremadamente limpia, editorial, arquitectonica y calida; sobre ella aparece progresivamente un sistema grafico inspirado en planos urbanos, cartografia y dibujo arquitectonico. No es un mapa de fondo: es un lenguaje visual vivo que acompana la trayectoria.

La direccion de arte combina diseno editorial contemporaneo, portfolio internacional de arquitectura, perfil ejecutivo de publicacion de alto nivel y modernismo grafico suizo reinterpretado de forma contemporanea. El resultado debe sentirse especifico para Vanessa: ejecutivo, culto, preciso, sereno, contemporaneo y humano; institucional sin volverse burocratico, sofisticado sin parecer lujo comercial.

El principio rector es: menos interfaz, mas direccion de arte. Cada elemento debe justificar su presencia mediante contenido, jerarquia o composicion.

**Key Characteristics:**

- Editorial y arquitectonico antes que decorativo.
- Sereno, preciso y culto, con humanidad en el tono y la lectura.
- Composicion asimetrica, deliberada y basada en escala.
- Fotografia estructural, no ornamental.
- Interfaz minima, con enlaces y acciones discretas.
- Ritmo de scroll como secuencia editorial continua.
- Trazado urbano progresivo, sutil y controlado por scroll.

**The Non-Literal City Rule.** La ciudad no se representa con iconografia obvia; se expresa mediante estructura, escala, grid, coordenadas, fotografia y espacio.

**The Editorial Continuity Rule.** El sitio debe sentirse como una secuencia editorial continua, no como una suma de bloques autonomos ni secciones encerradas.

**The City Drawing Rule.** A medida que avanza el scroll deben aparecer lineas, trazados, intersecciones, pequenas geometrias, bloques urbanos y referencias puntuales, como si la trayectoria fuera construyendo una ciudad.

## Colors

La paleta debe ser contenida, calida y editorial, con un solo acento definido posteriormente a partir de las fotografias reales y la identidad personal de Vanessa.

### Primary

- **Accent to be resolved** ([to be resolved during implementation]): unico color de acento del sistema. Debe elegirse mas adelante considerando fotografia real, tono personal e identidad del proyecto. No usar azul institucional automatico, colores SaaS, neon ni paletas multicolor.

### Neutral

- **Warm Ivory Ground** ([to be resolved during implementation]): fondo marfil o blanco calido, nunca blanco clinico dominante.
- **Deep Charcoal Text** ([to be resolved during implementation]): texto principal en carbon profundo, evitando negro puro cuando sea posible.
- **Mineral Grey Muted** ([to be resolved during implementation]): metadatos, divisores, notas, bordes finos y contenido secundario.
- **Trace Mineral Line** ([to be resolved during implementation]): lineas SVG muy finas, de bajo contraste y opacidades variables para el trazado urbano. Debe ser lo bastante sutil para no competir con contenido ni fotografia.

**The One Accent Rule.** El sistema usa un unico color de acento y su rareza debe darle autoridad; no debe convertirse en una paleta multicolor.

**The No Decorative Gradient Rule.** No usar gradientes decorativos, orbes, fondos SaaS ni efectos cromaticos que sustituyan contenido o composicion.

## Typography

**Display Font:** serif editorial [to be resolved during implementation]
**Body Font:** grotesca contemporanea [to be resolved during implementation]
**Label/Metadata Font:** grotesca contemporanea [to be resolved during implementation]

**Character:** La tipografia es uno de los principales recursos graficos del proyecto. El sistema debe combinar una grotesca contemporanea, limpia y precisa para navegacion, cuerpo, metadatos, cifras, labels e informacion funcional, con una serif editorial, elegante y con contraste para conceptos, citas, determinados titulares y momentos narrativos.

### Hierarchy

- **Display** (large responsive scale via `clamp()`): titulares principales y momentos de maxima jerarquia. Puede alcanzar escalas muy grandes cuando el contenido lo justifique.
- **Headline** (strong scale contrast): titulos de seccion, aperturas narrativas y transiciones editoriales.
- **Title** (controlled editorial scale): nombres de proyectos, cargos, capitulos de trayectoria y bloques destacados.
- **Body** (comfortable reading measure): texto narrativo, biografico y contextual. Debe favorecer lectura prolongada y precision.
- **Label** (small, precise, functional): metadatos, coordenadas, fechas, categorias, navegacion discreta y rotulos editoriales.
- **Impact Number** (oversized numeric scale): cifras relevantes tratadas como contenido editorial, no como elementos encerrados en tarjetas.

**The Scale Before Weight Rule.** La jerarquia debe apoyarse en diferencias fuertes de escala, ritmo y posicion antes que en exceso de pesos tipograficos.

**The Selective Serif Rule.** La serif se usa selectivamente para elevar conceptos, citas o momentos narrativos; no debe convertirse en la tipografia de todo el sitio.

## Layout

En desktop, el sistema debe partir de un grid editorial de 12 columnas, ancho generoso y composiciones asimetricas. Las alineaciones deben ser deliberadas; los elementos pueden atravesar varias columnas y la fotografia puede romper parcialmente el grid cuando el contenido lo justifique.

No centrar sistematicamente el contenido. La composicion debe permitir grandes cambios de escala entre informacion primaria y secundaria, densidad variable entre secciones y secuencias de lectura con respiracion editorial.

El espacio negativo es parte fundamental de la identidad. Preferir grandes margenes, respiracion vertical y bloques cuidadosamente separados. Evitar llenar espacios simplemente porque existen.

Los proyectos seleccionados deben tratarse como casos editoriales, no como un grid estandar de portfolio. Debe haber variedad compositiva: un proyecto puede apoyarse en fotografia dominante, otro en una cifra, otro en texto y contexto. Evitar repetir exactamente el mismo componente visual muchas veces.

Las cifras importantes deben formar parte de la composicion. Un numero de gran escala y su label pueden actuar como pieza editorial, por ejemplo:

```text
120K
hogares
```

Mobile no debe ser desktop apilado. Debe conservar escala tipografica, caracter editorial, fotografia protagonista, espacio negativo y jerarquia. La composicion puede cambiar deliberadamente entre breakpoints.

El Hero inicial debe establecer el sistema visual base: Header, Hero y capa cartografica SVG. Debe combinar nombre de Vanessa Velasco a gran escala, concepto "Ciudad como proyecto", informacion profesional minima proveniente de `pageContent.js`, metadata pequena, fotografia preparada para retrato real y contexto Bogota, e indicador de scroll. La fotografia debe ocupar aproximadamente 45-55% de la composicion desktop y puede ser parcialmente superpuesta por el nombre si la legibilidad se mantiene.

Bogota es el territorio visual principal. Cuando existan assets reales, el Hero debe poder mostrar a Vanessa en primer plano con Bogota reconocible alrededor o detras, idealmente con presencia de los cerros si la fotografia disponible lo permite. Mientras no existan assets, usar placeholders neutros y claramente identificados desde `/public/images/`.

**The Grid As City Rule.** El grid funciona como territorio: organiza, orienta y crea relaciones de escala; no es una caja invisible para centrar contenido.

**The Variable Density Rule.** El scroll alterna momentos densos, silencios amplios, imagen, texto y cifras. Un solo ritmo de spacing en toda la pagina haria que el sistema pierda caracter editorial.

**The Trace Never Competes Rule.** El trazado urbano acompana el contenido y conecta secciones; nunca debe dominar la jerarquia, parecer fondo decorativo generico ni dificultar lectura.

### Motion Behavior

El movimiento principal del sistema es el trazado urbano progresivo. Debe construirse con SVG y animacion de `stroke-dasharray` / `stroke-dashoffset`, aceptando un progreso normalizado de `0` a `1`, por ejemplo `<CityTrace progress={scrollProgress} />`.

La arquitectura debe permitir vincular el progreso con scroll sin provocar renders React en cada pixel. Priorizar APIs nativas del navegador, CSS variables, `requestAnimationFrame` y eventos de scroll eficientes. No instalar GSAP ni librerias de animacion en esta etapa.

La sensacion buscada es: estamos construyendo o dibujando una ciudad mientras recorremos la trayectoria de Vanessa. Deben aparecer lineas, extenderse trazados, nacer intersecciones, completarse algunas manzanas, aparecer coordenadas o referencias puntuales y conectar visualmente una seccion con otra.

El trazado no debe parecer Google Maps, un mapa interactivo, GIS, blueprint azul, animacion futurista ni interfaz tecnica. Debe sentirse como dibujo arquitectonico editorial: lineas muy finas, bajo contraste, gris mineral, opacidades variables, pocos nodos pequenos, algunas referencias puntuales y mucha superficie vacia.

Con `prefers-reduced-motion`, el trazado debe mostrarse estatico o parcialmente completo y eliminar la dependencia animada del scroll.

## Elevation & Depth

El sistema debe ser predominantemente plano y estructural. La profundidad viene de escala, capas de contenido, fotografia, cortes, reglas finas, contraste tonal y posicion en el grid, no de sombras decorativas.

Evitar cajas con sombras, glassmorphism, tarjetas elevadas y profundidad estilo dashboard. Los bordes y lineas finas pueden usarse como recurso de estructura cuando ayuden a ordenar informacion.

**The No Floating Boxes Rule.** Las superficies no deben sentirse como cards flotantes; la profundidad pertenece a la composicion editorial, no a sombras de interfaz.

## Shapes

La forma general debe ser sobria, precisa y arquitectonica. Evitar exceso de `border-radius`, pills decorativas, badges innecesarios y avatares circulares como patron visual.

Las lineas finas, divisores, coordenadas, columnas y recortes fotograficos son mas propios del sistema que contenedores redondeados. Cuando haya radios, deben ser discretos y funcionales, no una identidad visual basada en suavidad generica.

La fotografia debe admitir formatos verticales, horizontales y full-bleed. Los recortes deben ser deliberados, grandes y estructurales.

La capa cartografica debe construirse como abstraccion grafica inspirada en calles, manzanas, ejes y geometria urbana, sin buscar exactitud geografica completa en esta etapa. El SVG debe ser ligero y optimizado, sin cientos de elementos DOM, sin canvas y sin WebGL.

**The Precise Edge Rule.** Bordes, cortes y alineaciones deben sentirse intencionales; una forma existe para ordenar o revelar contenido, no para decorar.

## Do's and Don'ts

### Do:

- **Do** usar `PRODUCT.md` como fuente de verdad del producto y no inventar informacion factual sobre Vanessa.
- **Do** expresar "Ciudad como proyecto" mediante composicion, grid, escala, coordenadas, fotografia y espacio.
- **Do** tratar fotografia como estructura narrativa: retratos editoriales, contexto urbano cuando exista, encuadres grandes y recortes deliberados.
- **Do** construir proyectos como casos editoriales con variedad compositiva.
- **Do** convertir cifras importantes en piezas de contenido editorial, no en tarjetas automaticas.
- **Do** usar movimiento minimo y funcional: reveals sutiles, pequenos desplazamientos, cambios de opacidad o relaciones suaves entre fotografia y scroll.
- **Do** usar `CityTrace` o un componente equivalente como capa SVG decorativa (`aria-hidden="true"`) con progreso normalizado entre `0` y `1`.
- **Do** preparar fotografia desde `/public/images/` y usar placeholders neutros mientras no existan retratos reales ni fotografia real de Bogota.
- **Do** respetar `prefers-reduced-motion`, navegacion por teclado, focus states visibles, contraste adecuado, HTML semantico y rendimiento web.
- **Do** preparar tokens para un futuro acento, pero resolverlo solo cuando existan fotografias reales e identidad visual suficiente.

### Don't:

- **Don't** representar ciudad mediante skylines, edificios decorativos, ilustraciones urbanas obvias o iconografia literal.
- **Don't** hacer que el trazado parezca Google Maps, GIS, un mapa interactivo, blueprint azul, interfaz tecnica o animacion futurista.
- **Don't** convertir el sitio en template de Webflow, landing SaaS, pagina gubernamental, CV online tradicional, LinkedIn en formato web, portfolio generico o dashboard.
- **Don't** usar cards repetidas como lenguaje principal, pills decorativas, badges innecesarios, sombras, glassmorphism, iconos decorativos ni botones grandes estilo startup.
- **Don't** usar gradientes decorativos, paletas multicolor, azul institucional automatico, colores SaaS ni neon.
- **Don't** encerrar fotografias en avatares circulares, miniaturas pequenas dentro de cards o marcos decorativos innecesarios.
- **Don't** usar scroll hijacking, animaciones espectaculares, movimiento constante ni efectos que comprometan rendimiento.
- **Don't** apilar mobile mecanicamente desde desktop; cada breakpoint debe conservar caracter editorial y jerarquia propia.

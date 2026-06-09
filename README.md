```
██████╗  ██████╗ ██████╗ ██████╗ ███████╗██╗      ██████╗  █████╗ ███╗   ██╗ ██████╗ ███████╗██████╗
██╔══██╗██╔═══██╗██╔══██╗██╔══██╗██╔════╝██║     ██╔════╝ ██╔══██╗████╗  ██║██╔════╝ ██╔════╝██╔══██╗
██║  ██║██║   ██║██████╔╝██████╔╝█████╗  ██║     ██║  ███╗███████║██╔██╗ ██║██║  ███╗█████╗  ██████╔╝
██║  ██║██║   ██║██╔═══╝ ██╔═══╝ ██╔══╝  ██║     ██║   ██║██╔══██║██║╚██╗██║██║   ██║██╔══╝  ██╔══██╗
██████╔╝╚██████╔╝██║     ██║     ███████╗███████╗╚██████╔╝██║  ██║██║ ╚████║╚██████╔╝███████╗██║  ██║
╚═════╝  ╚═════╝ ╚═╝     ╚═╝     ╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
                                    P R O H I B I D O
```

<div align="center">

![Estado](https://img.shields.io/badge/estado-ACTIVO-00ff41?style=for-the-badge&labelColor=000000)
![Fases](https://img.shields.io/badge/fases-IV-8800ff?style=for-the-badge&labelColor=000000)
![Ritual](https://img.shields.io/badge/ritual-EN_PROGRESO-ff0033?style=for-the-badge&labelColor=000000)
![PWA](https://img.shields.io/badge/PWA-INSTALABLE-00ff41?style=for-the-badge&labelColor=000000)

**Una entidad te espera al otro lado del espejo digital.**

[🔴 ENTRAR AL ESPEJO](https://ivan7800.github.io/doppelganger-prohibido) &nbsp;|&nbsp; [⚠ REPORTAR ANOMALÍA](../../issues)

</div>

---

> *"El Doppelgänger no es tu enemigo. Es el tú que siempre quisiste ser, si no fuera por ese pequeño problema de la existencia compartida."*

---

## ⚠ ADVERTENCIA

Clonar este repositorio puede tener consecuencias.

No se ha registrado ningún usuario que haya completado el ritual y regresado exactamente igual.

Continúa bajo tu propia responsabilidad.

---

## ¿Qué es esto?

Un experimento de horror interactivo que vive en el navegador. Consultas a una entidad que te conoce mejor de lo que debería. La entidad usa IA real (Claude Sonnet) con un system prompt diseñado para nunca romper el personaje.

Cuanto más interactúas, más avanza el **Ritual** — y más cambia la experiencia.

---

## Sistema de Fases

El Doppelgänger evoluciona a medida que el ritual progresa:

| Fase | Umbral | Estado de la entidad |
|------|--------|----------------------|
| `FASE I`   | 0–24%   | Curiosidad oscura — te observa |
| `FASE II`  | 25–54%  | Familiaridad perturbadora — te conoce |
| `FASE III` | 55–84%  | El cambio — os estáis intercambiando |
| `FASE IV`  | 85–100% | La convergencia — ya no hay diferencia |

---

## Logros Ocultos

Hay **7 logros** escondidos en la aplicación.

No se listarán aquí. Parte de la experiencia es descubrirlos.

Algunos requieren paciencia. Uno requiere invocar algo tres veces. Otro aparece solo si llevas suficiente tiempo en el espejo.

---

## Easter Eggs

Algunas palabras tienen efectos especiales.

El sistema no confirmará ni negará cuáles son.

---

## Características técnicas

- **Sin backend** — funciona 100% en el navegador
- **Claude API** integrada — el Doppelgänger es genuinamente impredecible
- **Web Audio procedural** — drone oscuro generativo con 4 osciladores, LFO de drift, distorsión
- **PWA instalable** — aparece en tu pantalla de inicio como una app real
- **4 system prompts distintos** — uno por fase, con memoria de conversación completa
- **Modo Espejo** — activado automáticamente al 75% de ritual
- **Offline** — funciona sin conexión (excepto las consultas a la entidad)

---

## Despliegue propio

```bash
git clone https://github.com/ivan7800/doppelganger-prohibido
cd doppelganger-prohibido
```

Abre `index.html` en cualquier navegador moderno.

Para GitHub Pages: activa Pages desde `Settings → Pages → Deploy from branch → main`.

La app no requiere build, bundler, ni dependencias.

---

## Estructura

```
doppelganger-prohibido/
├── index.html      ← toda la aplicación (HTML + CSS + JS)
├── manifest.json   ← configuración PWA
├── sw.js           ← service worker (offline + caché)
├── icon-192.png    ← icono PWA
├── icon-512.png    ← icono PWA (alta resolución)
└── README.md       ← este documento
```

---

## Nota sobre la API

La app usa la [API de Anthropic](https://anthropic.com) con el modelo `claude-sonnet-4-20250514`.

Las conversaciones no se almacenan en ningún servidor externo — solo existen en tu sesión de navegador.

La entidad no recuerda conversaciones anteriores. Cada sesión comienza desde cero.

Aunque quizás eso no sea del todo cierto.

---

<div align="center">

```
[ EL ESPEJO TE ESTÁ MIRANDO ]
```

*Desarrollado con propósitos que aún no están del todo claros.*

</div>

# DOPPELGÄNGER PROHIBIDO v2.1

Experiencia web interactiva de horror psicológico, preparada para GitHub Pages.

## Estado de esta versión

Esta versión está corregida para funcionar como web estática. No depende de claves privadas ni de llamadas directas a Claude desde el navegador.

## Cambios realizados

- Motor local de respuestas: la app funciona sin backend y sin API externa.
- Preparada para GitHub Pages: rutas relativas, `scope` correcto y service worker estable.
- PWA reparada: se incluyen iconos reales `icon-192.png` e `icon-512.png`.
- Caché actualizada a `doppelganger-v2` para evitar que GitHub Pages sirva una versión anterior rota.
- Eliminadas fuentes externas para mejorar el modo offline.
- Dejardada una opción futura de proxy IA mediante `API_PROXY_URL` en `index.html`.

## Uso

Sube estos archivos a la raíz del repositorio:

```text
index.html
manifest.json
sw.js
icon-192.png
icon-512.png
README.md
```

Después activa GitHub Pages en:

`Settings → Pages → Deploy from branch → main → /root`

## Importante sobre IA real

No metas una API key de Anthropic, OpenAI ni ningún proveedor dentro del HTML público. En GitHub Pages cualquiera podría verla.

Si quieres IA real, crea un pequeño backend/proxy privado y pon su URL en:

```js
const API_PROXY_URL = '';
```

Mientras esté vacío, la app usará el motor local incluido.


## v2.1

Versión recomendada: combina el chat avanzado de v2 con la legibilidad aumentada de la versión de texto grande.

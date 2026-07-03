# Fuentes

Tipografías actuales (auto-hosteadas, descargadas de [Fontshare](https://www.fontshare.com/) — licencia gratuita ITF):

| Archivo                    | Fuente | Peso / estilo | Uso                   |
| -------------------------- | ------ | ------------- | --------------------- |
| `Zodiak-Light.woff2`       | Zodiak | 300 normal    | Display serif         |
| `Zodiak-LightItalic.woff2` | Zodiak | 300 italic    | Itálicas editoriales  |
| `Zodiak-Regular.woff2`     | Zodiak | 400 normal    | Display serif         |
| `Zodiak-Italic.woff2`      | Zodiak | 400 italic    | Itálicas              |
| `Satoshi-Regular.woff2`    | Satoshi| 400 normal    | Texto / UI            |
| `Satoshi-Medium.woff2`     | Satoshi| 500 normal    | Labels / botones      |
| `Satoshi-Bold.woff2`       | Satoshi| 700 normal    | Énfasis               |

Para cambiar de fuente: reemplaza los archivos, ajusta los `@font-face` de
`src/styles/global.css` y las dos variables `--f-serif` / `--f-sans`.
Alternativas probadas del mismo estilo en Fontshare: **Gambetta**, **Erode**,
**Sentient** (serif) · **General Sans**, **Cabinet Grotesk** (sans).

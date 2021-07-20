import { h } from "https://x.lcas.dev/preact@10.5.12/mod.js"
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js"

function App() {
  return (
    <html>
      <head>
        <title>card manager</title>
      </head>
      <body>
        <h1>card manager</h1>
      </body>
    </html>
  )
}

addEventListener("fetch", (event) => {
  const response = new Response(
    renderToString(<App />), {
      headers: {
        "content-type": "text/html; charset=utf-8"
      },
    }
  )
  event.respondWith(response)
})
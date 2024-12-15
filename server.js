import express from 'express'
import { Window } from 'happy-dom'
import { MakeTenoxUI } from '@tenoxui/core'
import { property } from '@tenoxui/property'

const app = express()
const PORT = 3000

app.get('/', async (req, res) => {
  const templateHtml = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <h1 class="text-red">Hello World</h1>
    
    <div class="box-200px bg-red"></div>
  </body>
  </html>`

  const window = new Window()
  const document = window.document

  document.write(templateHtml)

  // initialize tenoxui
  document.querySelectorAll('*').forEach(element => {
    const tenoxui = new MakeTenoxUI({ element, property })
    element.classList.forEach(className => {
      tenoxui.applyStyles(className)
    })
  })

  res.send(document.documentElement.outerHTML)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

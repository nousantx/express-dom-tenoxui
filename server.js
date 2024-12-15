import express from 'express'
import { Window } from 'happy-dom'
import { MakeTenoxUI } from '@tenoxui/core'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  const window = new Window()
  const document = window.document

  const title = document.createElement('h1')
  title.textContent = 'Hello, Express with Happy DOM!'
  title.className = '[background]-blue'
  document.body.appendChild(title)

  // initialize tenoxuo
  const tenoxui = new MakeTenoxUI({
    element: title
  })

  title.classList.forEach(className => {
    tenoxui.applyStyles(className)
  })

  res.send(document.documentElement.outerHTML)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

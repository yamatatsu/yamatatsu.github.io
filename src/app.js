import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

render(
  <div>
    Hello react!!
  </div>,
  document.getElementById('dom-root')
)

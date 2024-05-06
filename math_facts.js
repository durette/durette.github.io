'use strict'
function buildAndDisplayWindow() {
   const minLeft           = Number(document.getElementById('minLeftInput').value)
   const maxLeft           = Number(document.getElementById('maxLeftInput').value)
   const minRight          = Number(document.getElementById('minRightInput').value)
   const maxRight          = Number(document.getElementById('maxRightInput').value)
   const problemsPerColumn = Number(document.getElementById('problemsPerColumnInput').value)
   const columns           = Number(document.getElementById('columnsInput').value)
   const fontSize          = Number(document.getElementById('fontSizeInput').value)
   const fontFamily        = document.getElementById('fontFamilyInput').value
   const operator          = document.getElementById('operatorInput').value
   const newWin = window.open('', '', 'width=200,height=100')
   const tab = newWin.document.createElement('table')
   for (let problem = 0; problem < problemsPerColumn; ++problem) {
      const row = tab.insertRow(-1)
      for (let column = 0; column < columns; ++column) {
         const left  = Math.trunc(Math.random() * (maxLeft  - minLeft  + 1) + minLeft)
         const right = Math.trunc(Math.random() * (maxRight - minRight + 1) + minRight)
         const problem = '' + left + ' ' + operator + ' ' + right + ' =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
         const cell = row.insertCell(-1)
         cell.innerHTML = problem
         cell.style.fontSize = fontSize
         cell.style.fontFamily = fontFamily
      }
   }
   newWin.document.write(tab.outerHTML)
   newWin.document.close()
   newWin.focus()
   newWin.print() 
}

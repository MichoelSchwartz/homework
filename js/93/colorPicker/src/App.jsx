import { useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState({
    bgColor: 'green',
    textColor: 'blue',
    font: 'cursive'
  })

  const fonts = ['Arial','cursive','Helvetica','Tahoma','Cambria','Geneva'];
  const options = fonts.map(f => <option key={f} value={f}>{f}</option>)

  return (
    <div className="background" style={{ backgroundColor: state.bgColor, color: state.textColor, fontFamily: state.font }}>
      <div>pick a background color</div>
      <input type="color" onChange={e => setState({ ...state, bgColor: e.target.value })} />
      <div>pick a text color</div>
      <input type="color" onChange={e => setState({ ...state, textColor: e.target.value })} />
      <div>choose a font</div>
      <select name="fonts" id="fonts" onChange={e => setState({ ...state, font: e.target.value })}>
      {options}
      </select>
    </div>
  )
}

export default App

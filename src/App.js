import './App.css';
import { useState } from 'react'

function App() {
  const [weight, setWeight] = useState()
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState('male')
  const [BAL, setBAL] = useState(0)

  function balCalc(e) {
    let litre = bottles * 0.33
    let gram = litre * 8 * 4.5
    let burn = weight / 10
    let remGrams = gram - (burn * time)

    let bal = 0

    if (gender === 'male') {
      bal = remGrams / (weight * 0.7)
    }
    else {
      bal = remGrams / (weight * 0.6)
    }

    if (bal < 0) {
      bal = 0
    }

    setBAL(bal)
  }

  return (
    <form onSubmit={balCalc}>
      <h3>Calculating blood alcohol level</h3>

      <div>
        <label>Weight</label>
        <input name='weight' type='number' value={weight} step="1" onChange={e => setWeight(e.target.value)}></input>
      </div>

      <div>
        <label>Bottles</label>
        <select name='bottles' type='number' value={bottles} onChange={e => setBottles(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div>
        <label>Time</label>
        <select name='time' type='number' value={time} onChange={e => setTime(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div>
        <label className='gender'>Gender</label>
        <input type='radio' name='gender' value='male' defaultChecked onChange={e => setGender(e.target.value)} /> <label className='opt'>Male</label>
        <input type='radio' name='gender' value='female' onChange={e => setGender(e.target.value)} /> <label className='opt'>Female</label>
      </div>

      <div>
        <output>{BAL.toFixed(2)}</output>
      </div>

      <button type='button' onClick={balCalc}>Calculate</button>
    </form>
  );
}

export default App;

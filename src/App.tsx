import { useState } from 'react'
import './App.css'


const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please.. 👉👈",
  "Don't do this to me 🥺",
  "I'm gonna cry...🥺",
  "You're breaking my heart ;(",
  "I'm crossing my fingers and hoping you'll change your mind!",
  "My internal struggle is epic right now!",
  "Puppy pleaseee... "

]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img alt="bears kissing" src="https://media1.tenor.com/m/YNw9-lYQqMEAAAAC/bear-cute-kiss.gif" />
          <div className="text">Yayy!!!! </div>
        </>
      ) : (
        <>
          <img src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif" alt="bear with hearts" />

          <div className='textDiv'>Will you be my Valentine?</div>
          <div className='buttonDiv'>
            <button className='yesButton button-1' style={{fontSize: yesButtonSize}} onClick={() => setYesPressed(true)}>Yes</button><br />
            <button onClick={handleNoClick} className='noButton button-62'>{getNoButtonText()}</button>
          </div>
        </>
      )}
    </div>
  )
}

export default App

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


  function App() {
    return <main>
  
      <header>  
        <img className="logo"
           src="https://ya-webdesign.com/transparent450_/animal-logo-png.png" 
        />
      Chatter
      </header>
  
      <TextInput onSend={t=> console.log(t)} />
  
      
    </main>
  }
  
  
  
  function TextInput(props){
    var [text, setText] = useState("")
  
    return <div className = "text-input">
      <input value = {text} 
        placeholder='enter'
        onChange={e=> setText(e.target.value)}
      />
      <button onClick={()=> {
        props.onSend(text)
        setText('')
        }}>
      SEND
      </button>
  
    </div>
  }


export default App;

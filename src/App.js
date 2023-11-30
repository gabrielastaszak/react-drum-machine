import React, { useState } from 'react';
import './App.css';

import ButtonWithSound from './Components/Button';
import ParentComponent from './Components/Navigation';



const App = () => {
  const [display, setDisplay] = useState("");

  const Heater1 = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
  const Heater2 = "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
  const Heater3 = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
  const Heater4 = "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
  const Clap = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
  const OpenHH = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
  const KicknHat = "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
  const Kick = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
  const ClosedHH = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";



  // Możesz zmienić ścieżkę dźwięku, na przykład na podstawie jakiegoś zdarzenia
  // setSoundPath('new_sound_path.mp3');

  return (
    <div id="drum-machine">

      <ParentComponent displayText={display}/>

      <div className="row">
          <ButtonWithSound 
            soundPath={Heater1}
            buttonText="q"
            setDisplay={() => setDisplay("Heater 1")}
          />

          <ButtonWithSound 
            soundPath={Heater2}
            buttonText="w"
            setDisplay={() => setDisplay("Heater 2")}
          />
          
          <ButtonWithSound 
            soundPath={Heater3}
            buttonText="e"
            setDisplay={() => setDisplay("Heater 3")}
          />
      </div>

      <div className="row">
          <ButtonWithSound 
            soundPath={Heater4}
            buttonText="a"
            setDisplay={() => setDisplay("Heater 4")}
          />

          <ButtonWithSound 
          soundPath={Clap}
          buttonText="s"
          setDisplay={() => setDisplay("Clap")}
          />  

          <ButtonWithSound 
          soundPath={OpenHH}
          buttonText="d"
          setDisplay={() => setDisplay("OpenHH")}
          />  
      </div>

      <div className="row">
          <ButtonWithSound 
          soundPath={KicknHat}
          buttonText="z"
          setDisplay={() => setDisplay("KicknHat")}
          />  

          <ButtonWithSound 
          soundPath={Kick}
          buttonText="x"
          setDisplay={() => setDisplay("Kick")}
          />  

          <ButtonWithSound 
          soundPath={ClosedHH}
          buttonText="c"
          setDisplay={() => setDisplay("ClosedHH")}
          />  
      </div>  
    </div>
  );
};

export default App;
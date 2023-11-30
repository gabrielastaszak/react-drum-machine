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

      {/* Organize ButtonWithSound components in the specified order */}
      <div className="row">
      <ButtonWithSound soundPath={Heater1} buttonText="Q" setDisplay={setDisplay} />
      <ButtonWithSound soundPath={Heater2} buttonText="W" setDisplay={setDisplay} />
      <ButtonWithSound soundPath={Heater3} buttonText="E" setDisplay={setDisplay} />
      </div>
      <div className="row">
      <ButtonWithSound soundPath={Heater4} buttonText="A" setDisplay={setDisplay} />
      <ButtonWithSound soundPath={Clap} buttonText="S" setDisplay={setDisplay} />
      <ButtonWithSound soundPath={OpenHH} buttonText="D" setDisplay={setDisplay} />
      </div>
      <div className="row">
      <ButtonWithSound soundPath={KicknHat} buttonText="Z" setDisplay={setDisplay} />
      <ButtonWithSound soundPath={Kick} buttonText="X" setDisplay={setDisplay} />
      <ButtonWithSound soundPath={ClosedHH} buttonText="C" setDisplay={setDisplay} />
      </div>
    </div>
  );
};

export default App;
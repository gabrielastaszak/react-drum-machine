import './Button.css';
import React, { useEffect } from 'react';


const ButtonWithSound = ({ soundPath, buttonText, setDisplay}) => {
  
  const playSound = () => {
    const sound = document.getElementById(buttonText);
    if (sound) {
        sound.currentTime = 0; // Przewiń do początku
        sound.play();
        setDisplay(`Odtwarzanie dźwięku dla ${buttonText.toUpperCase()}`);
      }
  };

  useEffect(() => {
   
    const handleKeyPress = (e) => {
      if (e.key.toUpperCase() === buttonText.toUpperCase()) {
        playSound();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [buttonText, playSound]);




  return (
    <div>
      <button className="drum-pad" onClick={playSound}>{buttonText}</button>
      <audio className="clip" id={buttonText} src={soundPath}></audio>
    </div>
  );
};

export default ButtonWithSound;
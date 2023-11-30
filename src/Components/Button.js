import React, { useEffect } from 'react';
import './Button.css';

const ButtonWithSound = ({ soundPath, buttonText, setDisplay }) => {
  
  const playSound = () => {
    const sound = document.getElementById(buttonText);
    if (sound) {
        sound.currentTime = 0;
        sound.play();
        setDisplay(`Playing: ${buttonText}`);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toUpperCase() === buttonText) {
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
      <button className="drum-pad" id={`${buttonText}-pad`} onClick={playSound}>
        {buttonText}
        <audio className="clip" id={buttonText} src={soundPath}></audio>
      </button>
    </div>
  );
};

export default ButtonWithSound;
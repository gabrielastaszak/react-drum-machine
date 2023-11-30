import React, { useState } from 'react';
import './Navigation.css';
import ButtonWithSound from './Button';
; // Załóżmy, że komponent ButtonWithSound jest zaimportowany

const ParentComponent = ({ displayText }) => {
    return (
      <div>
          <h1>{displayText}</h1>
      </div>
    );
  };

export default ParentComponent;
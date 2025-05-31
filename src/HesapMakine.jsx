import React, { useState } from 'react';
import './App.css';

const HesapMakine = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'AC') {
      setInput('');
    } else if (value === '=') {
      try {
        const replacedInput = input.replace(/×/g, '*').replace(/÷/g, '/');
        setInput(eval(replacedInput).toString());
      } catch {
        setInput('Hata');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    'AC', '±', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        {buttons.map((btn, i) => (
          <button
            key={i}
            className={isNaN(btn) && btn !== '.' ? 'operator' : ''}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HesapMakine;
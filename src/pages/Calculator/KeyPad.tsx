import React from 'react';

interface KeyPadProps {
  onClick: (name: string) => void;
}

const KeyPad: React.FC<KeyPadProps> = ({ onClick }) => {
  return (
    <div className="button">
      <button name="(" onClick={e => onClick(e.currentTarget.name)}>(</button>
      <button name="CE" onClick={e => onClick(e.currentTarget.name)}>CE</button>
      <button name=")" onClick={e => onClick(e.currentTarget.name)}>)</button>
      <button name="C" onClick={e => onClick(e.currentTarget.name)}>C</button><br/>

      <button name="1" onClick={e => onClick(e.currentTarget.name)}>1</button>
      <button name="2" onClick={e => onClick(e.currentTarget.name)}>2</button>
      <button name="3" onClick={e => onClick(e.currentTarget.name)}>3</button>
      <button name="+" onClick={e => onClick(e.currentTarget.name)}>+</button><br/>

      <button name="4" onClick={e => onClick(e.currentTarget.name)}>4</button>
      <button name="5" onClick={e => onClick(e.currentTarget.name)}>5</button>
      <button name="6" onClick={e => onClick(e.currentTarget.name)}>6</button>
      <button name="-" onClick={e => onClick(e.currentTarget.name)}>-</button><br/>

      <button name="7" onClick={e => onClick(e.currentTarget.name)}>7</button>
      <button name="8" onClick={e => onClick(e.currentTarget.name)}>8</button>
      <button name="9" onClick={e => onClick(e.currentTarget.name)}>9</button>
      <button name="*" onClick={e => onClick(e.currentTarget.name)}>x</button><br/>

      <button name="." onClick={e => onClick(e.currentTarget.name)}>.</button>
      <button name="0" onClick={e => onClick(e.currentTarget.name)}>0</button>
      <button name="=" onClick={e => onClick(e.currentTarget.name)}>=</button>
      <button name="/" onClick={e => onClick(e.currentTarget.name)}>÷</button><br/>
    </div>
  );
}

export default KeyPad;

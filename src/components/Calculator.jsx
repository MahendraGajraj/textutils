import React, { useState } from 'react'
import styles from "./Calculator.module.css"

const Calculator = () => {
  const [finalAnswer, setFinalAnswer] = useState('');

  function buttonClick(value) {
    let currentValue = finalAnswer;
    let answer = '';

    try {
      if (value === 'C') {
        let newCurrentValue = `${currentValue}`
        currentValue = newCurrentValue.slice(0, -1);
        setFinalAnswer(currentValue);
        return;
      } else if (value === 'CE') {
        setFinalAnswer('');
        return;
      } else if (value === '√') {
        answer = Math.sqrt(eval(currentValue));
      } else if (value === 'π') {
        answer = Math.PI;
      } else if (value === 'cosθ') {
        answer = Math.cos(Math.radians(eval(currentValue)));
      } else if (value === 'tanθ') {
        answer = Math.tan(Math.radians(eval(currentValue)));
      } else if (value === 'sinθ') {
        answer = Math.sin(Math.radians(eval(currentValue)));
      } else if (value === '2π') {
        answer = 2 * Math.PI;
      } else if (value === 'cosh') {
        answer = Math.cosh(eval(currentValue));
      } else if (value === 'tanh') {
        answer = Math.tanh(eval(currentValue));
      } else if (value === 'sinh') {
        answer = Math.sinh(eval(currentValue));
      } else if (value === '∛') {
        answer = Math.pow(eval(currentValue), 1 / 3);
      } else if (value === 'x\u02b8') {
        currentValue += '**';
        setFinalAnswer(currentValue);
        return;
      } else if (value === 'x\u00B3') {
        answer = Math.pow(eval(currentValue), 3);
      } else if (value === 'x\u00B2') {
        answer = Math.pow(eval(currentValue), 2);
      } else if (value === 'ln') {
        answer = Math.log2(eval(currentValue));
      } else if (value === 'deg') {
        answer = Math.degrees(eval(currentValue));
      } else if (value === 'rad') {
        answer = Math.radians(eval(currentValue));
      } else if (value === 'e') {
        answer = Math.E;
      } else if (value === 'log10') {
        answer = Math.log10(eval(currentValue));
      } else if (value === 'x!') {
        answer = factorial(eval(currentValue));
      } else if (value === '÷') {
        currentValue += '/';
        setFinalAnswer(currentValue);
        return;
      } else if (value === '=') {
        answer = eval(currentValue);
      } else {
        currentValue += value;
        setFinalAnswer(currentValue);
        return;
      }

      setFinalAnswer(answer);
    } catch (e) {
      console.error(e);
    }
  }

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  Math.radians = function (degrees) {
    return degrees * Math.PI / 180;
  };

  Math.degrees = function (radians) {
    return radians * 180 / Math.PI;
  };

  return (
    <div className={styles.container}>
      <h1>Gajraj Smart Calculator✍</h1>
      <input value={finalAnswer} type="text" id="calculator-screen" className={styles.calculatorScreen} disabled />
      <div className={styles.buttonGrid}>
        <button className={styles.big} onClick={() => { buttonClick('C') }}>C</button>
        <button className={styles.big} onClick={() => { buttonClick('CE') }}>CE</button>
        <button className={styles.big} onClick={() => { buttonClick('√') }}>√</button>
        <button className={styles.big} onClick={() => { buttonClick('+') }}>+</button>
        <button className={styles.big} onClick={() => { buttonClick('1') }}>1</button>
        <button className={styles.big} onClick={() => { buttonClick('2') }}>2</button>
        <button className={styles.big} onClick={() => { buttonClick('3') }}>3</button>
        <button className={styles.big} onClick={() => { buttonClick('-') }}>-</button>
        <button className={styles.big} onClick={() => { buttonClick('4') }}>4</button>
        <button className={styles.big} onClick={() => { buttonClick('5') }}>5</button>
        <button className={styles.big} onClick={() => { buttonClick('6') }}>6</button>
        <button className={styles.big} onClick={() => { buttonClick('*') }}>*</button>
        <button className={styles.big} onClick={() => { buttonClick('7') }}>7</button>
        <button className={styles.big} onClick={() => { buttonClick('8') }}>8</button>
        <button className={styles.big} onClick={() => { buttonClick('9') }}>9</button>
        <button className={styles.big} onClick={() => { buttonClick('/') }}>÷</button>
        <button className={styles.big} onClick={() => { buttonClick('0') }}>0</button>
        <button className={styles.big} onClick={() => { buttonClick('.') }}>.</button>
        <button className={styles.big} onClick={() => { buttonClick('%') }}>%</button>
        <button className={styles.big} onClick={() => { buttonClick('=') }}>=</button>
        <button className={styles.big} onClick={() => { buttonClick('π') }}>π</button>
        <button className={styles.big} onClick={() => { buttonClick('2π') }}>2π</button>
        <button className={styles.big} onClick={() => { buttonClick('cosθ') }}>cosθ</button>
        <button className={styles.big} onClick={() => { buttonClick('tanθ') }}>tanθ</button>
        <button className={styles.big} onClick={() => { buttonClick('sinθ') }}>sinθ</button>
        <button className={styles.big} onClick={() => { buttonClick('cosh') }}>cosh</button>
        <button className={styles.big} onClick={() => { buttonClick('tanh') }}>tanh</button>
        <button className={styles.big} onClick={() => { buttonClick('sinh') }}>sinh</button>
        <button className={styles.big} onClick={() => { buttonClick('∛') }}>∛</button>
        <button className={styles.big} onClick={() => { buttonClick('x\u02b8') }}>xy</button>
        <button className={styles.big} onClick={() => { buttonClick('x\u00B3') }}>x³</button>
        <button className={styles.big} onClick={() => { buttonClick('x\u00B2') }}>x²</button>
        <button className={styles.big} onClick={() => { buttonClick('ln') }}>ln</button>
        <button className={styles.big} onClick={() => { buttonClick('deg') }}>deg</button>
        <button className={styles.big} onClick={() => { buttonClick('rad') }}>rad</button>
        <button className={styles.big} onClick={() => { buttonClick('e') }}>e</button>
        <button className={styles.big} onClick={() => { buttonClick('log10') }}>log10</button>
        <button className={styles.big} onClick={() => { buttonClick('(') }}>(</button>
        <button className={styles.big} onClick={() => { buttonClick(')') }}>)</button>
        <button className={styles.big} onClick={() => { buttonClick('x!') }}>x!</button>
      </div>
      <h2 className={styles.copyRight}>@copyright-Mahendra Singh Gajraj</h2>
    </div>

  )
}
export default Calculator
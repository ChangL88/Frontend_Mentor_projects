import React, { useState } from 'react';

const Buttons = () => {
    const [res, setRes] = useState('0');

    const handleClick = (key) =>{
        console.log(res.toString().slice(-1))
        if (res === '0'){
            setRes(key);
        }
        else if(res.toString().slice(-1) === '+' || res.toString().slice(-1) === '-' || res.toString().slice(-1) === '*' || res.toString().slice(-1) === '/' ){
            if(key === '+' || key === '-' || key === '*' || key === '/'){
                setRes(res.toString().slice(0, -1) + key);
            }
            else{
                setRes(res + key);
            }
        }
        else{
            setRes(res + key);
        }
    }

    const reset = () =>{
        setRes('0');
    }

    const calc = () =>{
        console.log(res)
        let result = eval(res);
        console.log(result)
        setRes(result);
    }

    const del = () =>{
        setRes(res.toString().slice(0, -1))
        if (res.length === 1){
            setRes('0');
        }
    }

    const handleKeyDown = (e) => {
        switch(e.key){
            case '1':
                handleClick('1');
                break
            case '2':
                handleClick('2');
                break
            case '3':
                handleClick('3');
                break;
            case '4':
                handleClick('4');
                break;
            case '5':
                handleClick('5');
                break;
            case '6':
                handleClick('6');
                break;
            case '7':
                handleClick('7');
                break;
            case '8':
                handleClick('8');
                break;
            case '9':
                handleClick('9');
                break;
            case '0':
                handleClick('0');
                break;
            case 'Enter':
                e.preventDefault();
                calc();
                break;
            case 'Backspace':
            case 'Delete':
                del();
                break;
            case '+':
                handleClick('+');
                break;
            case '-':
                handleClick('-');
                break;
            case '*':
                handleClick('*');
                break;
            case '/':
                e.preventDefault();
                handleClick('/');
                break;
            case 'Escape':
                reset();
                break;
            default:
                break;
        }
    }

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    });
    

    return ( 
    <div>
        <div className="result">
            <h2>{res}</h2>
        </div>
        <div className="keypad ">
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button id="del" onClick={() => del()}>DEL</button>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('+')}>+</button>
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('-')}>-</button>
            <button onClick={() => handleClick('.')}>.</button>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={() => handleClick('/')}>/</button>
            <button onClick={() => handleClick('*')}>x</button>
            <button id='reset' onClick={() => reset()}>RESET</button>
            <button id="calc" onClick={() => calc()}>=</button>
        </div> 
    </div>
    );
}

export default Buttons;
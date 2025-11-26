import Grid from './components/Grid';
import { useState } from 'react';
import Keyboard from './components/Keyboard';
import Message from './components/Message';
import { getKeyboardStates } from './lib/utils';
export default function App() {
  const [guesses, setGuesses] = useState<string[]>(['Trees']);
  const [currentGuess, setCurrentGuess] = useState('');
  const [solution, setSolution] = useState('trees');
  const [message, setMessage] = useState('');
  const [hint, setHint] = useState('');

  function showMessage(text: string) {
    setMessage(text);
    setTimeout(() => {
      setMessage('');
    }, 2000);
  }
  function handleKeys(key: string) {
    if (guesses.length === 6) {
      showMessage('You are out of guesses!');
      return;
    }
    if (key === 'ENTER') {
      if (currentGuess.length === 5) {
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess('');
      }
    } else if (key === 'BACKSPACE') {
      showMessage('backspace pressed');
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (currentGuess.length < 5) {
      setCurrentGuess((prevGuess) => prevGuess + key.toLocaleLowerCase());
    }
  }
  console.log(currentGuess);
  const keyboardStates = getKeyboardStates(guesses, solution);
  console.log(keyboardStates);
  return (
    <div className='flex flex-col justify-center items-center dark'>
      {message ||
        (hint && (
          <Message
            message={message}
            hint={hint}
          />
        ))}
      <Grid
        guesses={guesses}
        currentGuess={currentGuess}
        solution={solution}
      />
      <Keyboard
        onKeyPress={handleKeys}
        keyboardStates={keyboardStates}
      />
    </div>
  );
}

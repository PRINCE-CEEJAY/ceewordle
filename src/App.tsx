import Loader from './components/Loader';
import Start from './components/Start';
import Grid from './components/Grid';
import { useState } from 'react';
import Keyboard from './components/Keyboard';
export default function App() {
  const [guesses, setGuesses] = useState<string[]>(['Trees']);
  const [currentGuess, setCurrentGuess] = useState('');
  function handleKeys(key: string) {
    if (guesses.length === 6) {
      console.log('More than 6 guesses');
      return;
    }
    if (key === 'ENTER') {
      console.log('pressed Enter');
      if (currentGuess.length === 5) {
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess('');
      }
    } else if (key === 'BACKSPACE') {
      console.log('pressed backspace');
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (currentGuess.length < 5) {
      console.log('pressed any other key');
      setCurrentGuess((prevGuess) => prevGuess + key.toLocaleLowerCase());
    }
  }
  console.log(currentGuess);
  return (
    <div className='flex flex-col justify-center items-center dark'>
      {/* <Loader />
      <Start /> */}
      <Grid guesses={guesses} currentGuess = {currentGuess}/>
      <Keyboard onKeyPress={handleKeys} />
    </div>
  );
}

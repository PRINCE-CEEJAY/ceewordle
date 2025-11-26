import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const states: string[] = Array(5).fill('')
export function getLetterState(guess:string, solution: string | null){
if(!guess || !solution) return Array(5).fill('absent');

const guessChars: string[] = [...guess]
const solutionChars: (string | null)[] = [...solution]

// Mark green
guessChars.forEach((char, i)=>{
  if(char === solutionChars[i]){
    states[i] = 'correct';
    solutionChars[i] = null
  }
})


// Mark yellow
guessChars.forEach((char, i) => {
  if(states[i]=== 'correct') return;
  const solutionIndex = solutionChars.indexOf(char)
  if(solutionIndex !== -1){
    states[i] = 'present'
    solutionChars[solutionIndex] = null
  }
});
return states;
}

export function getKeyboardStates(guesses: string[], solution: string | null){
  const keyStates: Record <string, string> = {}

  guesses.forEach((guess:string)=>{
    if(!guess) return;
    const states = getLetterState(guess, solution)
    const guessArray = [...guess]
    guessArray.forEach((letter: string, i: number)=>{
      const currentState: string = keyStates[letter] || 'unused';
      const newState = states[i];
      if(currentState === 'correct') return;
      if(currentState === 'present' && newState !== 'correct') return;

      keyStates[letter] = newState;
    })
  })
  return keyStates;
}
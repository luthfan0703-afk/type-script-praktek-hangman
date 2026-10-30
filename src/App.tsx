// import StudentGrade from "./components/StudentGrade";

import HangmanDraw from "./components/HangmanDraw";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "../WordList.json";
import { useCallback, useEffect, useState } from "react";

// function App() {
//   return (
//     <StudentGrade
//       name="luthfan"
//       initialScore={100}
//       className="XI B"
//       status="santri"
//     />
//   );
// }

// export default App;

function App() {
  const maxAttempts = 6;

  //menagmbil satu kata random dari WordList.json
  const [currentWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  // State penampung huruf-huruf yang dipilih pemain
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  //mengetahui brp kali huruf" yang dipilh pemain
  const incorrectLetter = selectedLetters.filter((letter) => {
    //jika hurufnya ada maka masukan ke array
    return !currentWord.includes(letter);
  });

  const isWinner = currentWord
    .split("")
    .every((letter) => selectedLetters.includes(letter));
  const isLoser = incorrectLetter.length >= maxAttempts;
  const isGameOver = isWinner || isLoser;

  const addLetter = useCallback(
    (letter: string) => {
      if (isGameOver || selectedLetters.includes(letter)) return;

      setSelectedLetters((prev) => [...prev, letter]);
    },
    [isGameOver, selectedLetters],
  );

  //fitur keyboard tekan

  useEffect(() => {
    const onKeyboardPress = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addLetter(key);
    };

    document.addEventListener("keypress", onKeyboardPress);
    return () => document.removeEventListener("keypress", onKeyboardPress);
  }, [addLetter]);

  return (
    <section className="flex flex-col items-center h-screen gap-10">
      {isWinner && <div className="text-2xl font-bold text-green-600">Kamu menang!</div>}
      {isLoser && (
        <div className="text-2xl font-bold text-red-600">
          Kamu kalah! Kata yang benar: {currentWord}
        </div>
      )}

      <HangmanDraw attempt={incorrectLetter.length} />

      <HangmanWord word={currentWord} selectedLetters={selectedLetters} />
      <Keyboard
        onKeyboardClick={addLetter}
        inactiveLetters={incorrectLetter}
        activeLetters={selectedLetters.filter((letter) => {
          return currentWord.includes(letter);
        })}
        disabled={isGameOver}
        />
    </section>
  );
}

export default App;

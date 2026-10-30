interface HangmanWordProps {
  word: string;
  selectedLetters: string[];
}

function HangmanWord({ word, selectedLetters }: HangmanWordProps) {
  return (
    <section className="flex gap-2">
      {word.split("").map((letter, index) => {
        return (
          <span
            key={index}
            className="border-b-4 border-b-black text-4xl font-semibold uppercase px-2 w-12 text-center"
          >
            <span
              className={
                selectedLetters.includes(letter) ? "visible" : "invisible"
              }
            >
              {letter}
            </span>
          </span>
        );
      })}
    </section>
  );
}

export default HangmanWord;

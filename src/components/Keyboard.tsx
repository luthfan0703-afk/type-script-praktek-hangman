import clsx from "clsx";

const KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface KeyboardProps {
  onKeyboardClick: (letter: string) => void;
  inactiveLetters: string[];
  activeLetters: string[];
  disabled: boolean;
}

function Keyboard({
  onKeyboardClick,
  inactiveLetters,
  activeLetters,
  disabled,
}: KeyboardProps) {
  return (
    <section className="grid grid-cols-8 gap-2 w-max">
      {KEYS.map((letter, index) => {
        //ubah huruf yang ada di KEYS jadi lowercase
        const lowerLetter = letter.toLowerCase();
        const isInactive = inactiveLetters.includes(lowerLetter);
        const isActive = activeLetters.includes(lowerLetter)
        return (
          <button
            key={index}
            type="button"
            disabled={disabled || isInactive || isActive}
            onClick={() => onKeyboardClick(lowerLetter)}
            className={clsx(
              "border border-black w-12 h-16 flex items-center justify-center rounded-2xl disabled:cursor-not-allowed",
              isInactive && "bg-gray-300",
              isActive && "bg-amber-200"
            )}
          >
            {letter}
          </button>
        );
      })}
    </section>
  );
}

export default Keyboard;

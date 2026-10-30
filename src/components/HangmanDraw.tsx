interface HangmanDrawProps {
  attempt: number;
}

function HangmanDraw({ attempt }: HangmanDrawProps) {
  return (
    <section className="relative ">
      {/* memanggil bagian tubuh sesuai brp kali pemain salah menebak  */}
      {/* memanggil index ke 0 sampai index jumlah pemain salah tebak */}
      {HangmanDrawFullBody.slice(0, attempt)}
      <div className="bg-black w-2 h-10 absolute right-0"></div>
      <div className="bg-black h-2 w-40 ml-32 "></div>
      <div className=" bg-black w-2 h-128 ml-32"></div>
      <div className="bg-black h-2 w-64 "></div>
    </section>
  );
}

const HangmanHead = () => {
  return (
    <div className="rounded-full border-6 border-black w-15 h-15 absolute -right-6.5 top-9">
      <div />
    </div>
  );
};
const HangmanBody = () => {
  return (
    <div className=" bg-black w-2 h-32 ml-32 absolute right-0 top-24">
      <div />
    </div>
  );
};
const HangmanRightArm = () => {
  return (
    <div className=" bg-black w-26 h-2 ml-32 absolute -right-25 top-25 -rotate-20">
      <div />
    </div>
  );
};
const HangmanLeftArm = () => {
  return (
    <div className=" bg-black w-26 h-2 ml-32 absolute left-15 top-25 rotate-20">
      <div />
    </div>
  );
};
const HangmanLeftFoot = () => {
  return (
    <div className=" bg-black w-26 h-2 ml-32 absolute left-23 top-65 -rotate-80">
      <div />
    </div>
  );
};
const HangmanRightFoot = () => {
  return (
    <div className=" bg-black w-26 h-2 ml-32 absolute -right-15 top-65 rotate-80">
      <div />
    </div>
  );
};

const HangmanDrawFullBody = [
  <HangmanHead />,
  <HangmanBody />,
  <HangmanRightArm />,
  <HangmanLeftArm />,
  <HangmanLeftFoot />,
  <HangmanRightFoot />,
];

export default HangmanDraw;

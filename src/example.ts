// interface StudentType {
//   name: string;
//   age: number;
//   isOSIS: boolean;
//   favFoods: string[];
// }

// const student: StudentType = {
//   name: "John Doe",
//   age: 20,
//   isOSIS: true,
//   favFoods: ["pizza", "sushi"],
// };

type Status = "aktif" | "nonaktif ";
type grade = "SMP" | "SMA" | "SMK";

type Indentity = {
  id: number;
  name: string;
};

interface detailIndentity extends Indentity {
  status: Status;
  grade: grade;
}

// type FullIdentity = Indentity & detailIndentity; //ini jika di type 

const student: detailIndentity = {
  id: 1,
  name: "luthfan",
  status: "aktif",
  grade: "SMA",
};

console.log(student);

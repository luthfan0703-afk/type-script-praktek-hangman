// Data mentah dari API (dimisalkan bertipe unknown/any)
const rawApiResponse: unknown = {
  userId: "USR-888",
  username: "alex_dev",
  xpPoints: 1250,
  isActive: true,
};

// TODO: Buat interface bernama 'UserAccount'
// yang mencakup seluruh properti di atas (userId, username, xpPoints, isActive)
interface UserAccount {
  userId: string;
  username: string;
  xpPoints: number;
  isActive: boolean;
  // ... tulis properti di sini
}

function processUserData(data: unknown) {
  // TODO: Gunakan Type Assertion (as UserAccount) pada variabel 'data'
  // agar kita bisa mengakses property 'username' dan 'xpPoints' di bawah ini tanpa error merah dari TypeScript.

  const user = data as UserAccount; /* Tulis Type Assertion di sini */

  console.log(`User: ${user.username}`);
  console.log(`XP: ${user.xpPoints}`);
}

processUserData(rawApiResponse);

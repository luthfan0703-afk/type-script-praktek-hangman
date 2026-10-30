// TODO: 1. Buatlah sebuah string enum bernama 'PriorityLevel'
// dengan isi: LOW ('Low'), MEDIUM ('Medium'), HIGH ('Urgent')
const PriorityLevel = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "Urgent",
} as const;

type PriorityLevel = (typeof PriorityLevel)[keyof typeof PriorityLevel];

interface Ticket {
  ticketId: string;
  title: string;
  // TODO: 2. Gunakan enum 'PriorityLevel' pada properti priority ini
  priority: PriorityLevel;
}

// TODO: 3. Lengkapi fungsi ini untuk menerima parameter bertipe 'Ticket'
// dan mengembalikan string keterangan berdasarkan prioritasnya
function getTicketMessage(ticket: Ticket): string {
  switch (ticket.priority) {
    case PriorityLevel.HIGH:
      return "Segera tangani! Darurat!";
    case PriorityLevel.MEDIUM:
      return "Tangani sesuai priority sedang.";
    case PriorityLevel.LOW:
      return "Tangani sesuai prioritas rendah.";
  }
  // Gunakan switch-case atau if-else untuk mengecek nilai enum
  // Contoh: Jika HIGH, return "Segera tangani! Darurat!"
  // Jika LOW atau MEDIUM, sesuaikan pesannya.
}

// Contoh pemanggilan (Opsional untuk dites)
const myTicket: Ticket = {
  ticketId: "TICK-001",
  title: "Server Down",
  priority: PriorityLevel.HIGH,
};

console.log(getTicketMessage(myTicket));

const WorkProgress = {
  PENDING: "PENDING",
  ON_PROGRESS: "ON PROGRESS",
  COMPLETED: "COMPLETED",
} as const;

export const Authentication = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  EXPIRED: "EXPIRED",
};

const workProgress = [
  {
    id: 1,
    name: "Mustafid",
    workStatus: WorkProgress.COMPLETED,
  },
  {
    id: 2,
    name: "Azki",
    workStatus: WorkProgress.ON_PROGRESS,
  },
  {
    id: 3,
    name: "Avrijal",
    workStatus: WorkProgress.PENDING,
  },
];

console.log(workProgress);

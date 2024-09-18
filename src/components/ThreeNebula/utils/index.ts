let logTimes = 0;

export function logOnce(message: any) {
  if (logTimes > 0) {
    return;
  }

  console.log(message);
  logTimes++;
}

/** @format */

export const convertTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  if (seconds < 10) {
    return `${minutes}:0${seconds}`;
  }

  return `${minutes}:${seconds}`;
};

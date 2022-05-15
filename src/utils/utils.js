import colors from "tailwindcss/colors";

export const getTailwindColors = () => {
  const finalColors = [];
  for (const color in colors) {
    try {
      if (colors[color]) finalColors.push({ color, ...colors[color] });
    } catch (e) {}
  }

  return finalColors.filter((color) => color[50]);
};

export const matchColorByCourse = (course) =>
  getTailwindColors().filter((color) => color.color === course.color)[0];

export const calculatePoints = (
  minPoint,
  maxPoint,
  fullTime,
  answerTime,
  timeToRead
) => {
  if (fullTime - answerTime < timeToRead) return maxPoint;
  if (fullTime === 0) return minPoint;

  const percent = answerTime / (fullTime - timeToRead);
  const diferencePoints = maxPoint - minPoint;

  return Math.round(minPoint + diferencePoints * percent);

  // fullTime - 5 = 100%
  // 0 = 0%
};

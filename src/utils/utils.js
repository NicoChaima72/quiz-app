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

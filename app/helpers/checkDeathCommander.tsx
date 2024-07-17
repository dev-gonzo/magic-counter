export const checkDeathCommander = (damanges: number[]) => {
  return damanges?.filter((item) => item >= 21).length ? true : false;
};

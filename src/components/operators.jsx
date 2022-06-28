export const operators = [
  {label: "+", value: "plus"},
  {label: "-", value: "minus"},
  {label: "×", value: "multiply"},
  {label: "÷", value: "mod"}
];

export const plus = (f, s) => {
  const f_num = parseFloat(f);
  const s_num = parseFloat(s);
  return f_num + s_num;
};

export const minus = (f, s) => {
  const f_num = parseFloat(f);
  const s_num = parseFloat(s);
  return f_num - s_num;
};

export const multiply = (f, s) => {
  const f_num = parseFloat(f);
  const s_num = parseFloat(s);
  return f_num * s_num;
};

export const mod = (f, s) => {
  const f_num = parseFloat(f);
  const s_num = parseFloat(s);
  return f_num / s_num;
};

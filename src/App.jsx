import { useState } from "react";
import { operators, plus, minus, multiply, mod } from "./components/operators";

export const App = () => {
  const [values, setValue] = useState({
    value1: "", 
    value2: "",
    value3: 0,
    operator: "plus"
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValue({...values, [name]: value});
  };

  const calc_result = () => {
    let result;
    if (values.operator === "plus"){
      result = plus(values.value1, values.value2);
    } else if (values.operator === "minus"){
      result = minus(values.value1, values.value2);
    } else if (values.operator === "multiply"){
      result = multiply(values.value1, values.value2)
    } else {
      result = mod(values.value1, values.value2);
    }
    setValue({...values, "value3": result})
  };

  return(
    <>
      <h1>簡易電卓</h1>
      <div style={{display: "flex"}}>
        <input type="text" value={values.value1} name="value1" onChange={handleChange} />
        <select name="operator" onChange={handleChange}>
          {operators.map((operator) => (
            <option value={operator.value}>{operator.label}</option>
          ))}
        </select>
        <input type="text" value={values.value2} name="value2" onChange={handleChange} />
        <button onClick={calc_result}>=</button>
        <div style={{margin: "0px 5px"}}>{values.value3}</div>
      </div>
    </>
  );
};
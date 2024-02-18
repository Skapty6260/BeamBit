import { useState } from "react";

const useInput = (init) => {
  const [val, setVal] = useState(init);

  const reset = setVal(init);

  const bind = {
    value: val,
    onchange: (e) => setVal(e.value),
  };

  return { val, reset, bind };
};

export default useInput;

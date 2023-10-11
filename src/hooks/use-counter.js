import { useEffect, useState } from "react";

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCount) => prevCount + 1);
      } else {
        setCounter((prevCount) => prevCount - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};
//the return keyword is used to return whichever variable or constants you want to be accessed by components that will make use of your customHook

/*
-A mechanism of reusing logic just as regular functions are
custom hooks can use other react hooks and other custom -hooks they can leverage useState, useEffect etc.
*/
export default useCounter;

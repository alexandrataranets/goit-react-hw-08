import { useEffect, useState } from "react";
import css from "./Loader.module.css";

const Loader = () => {
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 20));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={css.container}>
      <div className={css.spinner}></div>
      <p className={css.text}>
        Left time: {timeLeft} {timeLeft > 1 ? "seconds" : "second"}
      </p>
    </div>
  );
};

export default Loader;
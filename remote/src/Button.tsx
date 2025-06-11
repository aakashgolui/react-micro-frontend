import classes from "./Button.module.css";
import useCount from "./store";
export const Button = () => {
  const [state, setState] = useCount();
  return (
    <div className={classes.button} onClick={() => setState((s) => s + 1)}>
      Click me: {state}
    </div>
  );
};

export default Button;

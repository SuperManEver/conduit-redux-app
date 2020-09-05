import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementByOne = useCallback(
    () => dispatch(incrementByAmount(Number(incrementAmount) || 0)),
    [incrementAmount, dispatch]
  );

  const decrementByOne = useCallback(
    () => dispatch(incrementAsync(Number(incrementAmount) || 0)),
    [incrementAmount, dispatch]
  );

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button} onClick={incrementByOne}>
          Add Amount
        </button>
        <button className={styles.asyncButton} onClick={decrementByOne}>
          Add Async
        </button>
      </div>
    </div>
  );
}

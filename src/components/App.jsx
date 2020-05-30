import { css } from "emotion";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

import { setMethod, setAmount, setRatio } from "../store/actions";

import AmountInput from "./AmountInput.jsx";
import ButtonSlider from "./ButtonSlider.jsx";
import Method from "./Method.jsx";

const App = () => {
  const dispatch = useDispatch();

  const amount = useSelector((state) => state.amount);
  const currentMethod = useSelector((state) => state.methods[state.method]);
  const currentMethodId = useSelector((state) => state.method);
  const grindedCoffee = useSelector((state) =>
    Math.round(state.amount * state.ratio)
  );
  const methods = useSelector((state) => state.methods);
  const ratio = useSelector((state) => state.ratio * 1000);
  const ratios = useSelector((state) =>
    Object.values(state.ratios).map((r) => ({ ...r, g: r.ratio * 1000 }))
  );

  return (
    <form
      className={css`
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        margin: 20px auto 0 auto;
        max-width: 600px;
        padding: 0 10px;
      `}
    >
      <h1>Coffee Calculator!</h1>
      <section>
        <h2>1. Choose method of preparation</h2>
        <ButtonSlider>
          {Object.entries(methods).map(([id, method]) => (
            <Method
              checked={currentMethodId === id}
              key={id}
              name="method"
              onChange={(value) => dispatch(setMethod(value))}
              value={id}
            >
              {method.title}
            </Method>
          ))}
        </ButtonSlider>
      </section>

      <section>
        <h2>2. Choose water amount</h2>
        <AmountInput
          amounts={currentMethod.amounts}
          amountValueKey="ml"
          label="Water amount in ml"
          name="amount"
          onChange={(amount) => dispatch(setAmount(amount))}
          unit="ml"
          value={amount}
        />
      </section>

      <section>
        <h2>3. Choose coffee brewing ratio</h2>
        <AmountInput
          amounts={ratios}
          amountValueKey="g"
          label="Grams of coffee per liter"
          name="ratio"
          onChange={(ratio) => dispatch(setRatio(ratio))}
          unit="g/l"
          value={ratio}
        />
      </section>

      <section
        className={css`
          @media (max-width: 600px) {
            background: #fff;
            bottom: 0;
            position: sticky;
            border-top: 1px #ccc solid;
            margin: 40px -10px 0 -10px;
            padding: 15px 10px 10px;

            h2 {
              margin: 0 0 10px 0;
            }
          }
        `}
      >
        <h2>4. Result</h2>
        <dl
          className={css`
            display: flex;
            flex-wrap: wrap;
            margin: 0 -5px;

            dt,
            dd {
              box-sizing: border-box;
              flex: 1 0 50%;
              margin: 5px 0;
              padding: 0 5px;
            }

            dd {
              font-weight: bold;
            }
          `}
        >
          <dt>Amount of coffee:</dt>
          <dd>{grindedCoffee}g</dd>

          <dt>Grinding degree:</dt>
          <dd>{currentMethod.grind}</dd>
        </dl>
      </section>
    </form>
  );
};

export default App;

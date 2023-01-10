import "./styles.css";
import React, { useState } from "react";

const Steps = (props) => {
  const { current, onChange, children } = props;
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { current, onChange });
    }
    return child;
  });

  return childrenWithProps;
};

const Step = (props) => {
  const { t, d, current, onChange } = props;
  return (
    <div
      onClick={() => onChange(t)}
      style={{
        backgroundColor: current === t ? "green" : "blue",
        height: 50,
        width: 50
      }}
    >
      {t}
      <p>{d}</p>
    </div>
  );
};

export default function App() {
  const [current, setCurrent] = useState("t1");
  const onChange = (state) => {
    setCurrent(state);
  };
  return (
    <div className="App">
      <Steps current={current} onChange={onChange}>
        <Step t="t1" d="d1" />
        <Step t="t2" d="d1" />
        <Step t="t3" d="d1" />
      </Steps>
    </div>
  );
}

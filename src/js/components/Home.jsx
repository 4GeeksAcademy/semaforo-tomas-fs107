import React, { useState, useEffect } from "react";
import Light from "./Light";

const Home = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const sequence = ["red", "yellow", "green"];
    let index = sequence.indexOf(color);

    const interval = setInterval(() => {
      index = (index + 1) % sequence.length;
      setColor(sequence[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, [color]);

  return (
    <div className="traffic-wrapper">
      <div className="traffic-pole"></div>
      <div className="traffic-light">
        <Light color="red" isActive={color === "red"} onClick={() => setColor("red")} />
        <Light color="yellow" isActive={color === "yellow"} onClick={() => setColor("yellow")} />
        <Light color="green" isActive={color === "green"} onClick={() => setColor("green")} />
      </div>
    </div>
  );
};

export default Home;

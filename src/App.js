import { useEffect, useState } from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const [anime, setAnime] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAnime(progress);
    }, 100);
  }, [progress]);
  return (
    <div
      style={{
        border: "1px solid",
        borderRadius: "10px",
        marginTop: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: "green",
          color: anime > 5 ? "white" : "black",
          // width: `${anime}%`,
          transform: `translateX(${anime - 100}%)`,
          textAlign: "right",
          transition: "0.5s ease-in",
        }}
      >
        {anime}%
      </div>
    </div>
  );
};
export default function App() {
  const progs = [0, 5, 20, 50, 70, 100];
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {progs.map((prog, index) => (
        <ProgressBar key={index} progress={prog} />
      ))}
    </div>
  );
}

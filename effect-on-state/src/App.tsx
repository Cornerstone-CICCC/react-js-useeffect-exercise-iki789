import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState<string>("");

  const [likes, setLikes] = useState<number>(0);
  const [color, setColor] = useState<string>("red");

  useEffect(() => {
    console.log(message);
  }, [message]);

  useEffect(() => {
    if (likes > 0) {
      alert(`Likes updated to ${likes}!`);
    }
  }, [likes]);

  useEffect(() => {
    console.log(`Color changed to ${color}`);
  }, [color]);

  const onMessageClick = () => {
    setMessage("Hello from React!");
  };

  const onLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const onColorClick = () => {
    setColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
  };

  return (
    <>
      <div>
        <h2>Message Logger</h2>
        <button onClick={onMessageClick}>Send Message</button>

        <h2>Like Counter</h2>
        <h2>{likes}</h2>
        <button onClick={onLikeClick}>Like</button>

        <h2>Color Box</h2>
        <button onClick={onColorClick}>Change Color</button>
        <div style={{ width: 100, height: 100, backgroundColor: color }}>
          Color Box
        </div>
      </div>
    </>
  );
}

export default App;

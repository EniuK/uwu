import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noClicked, setNoClicked] = useState(false);
  const yesAudio = useRef(new Audio("./yes.mp3"));

  const yesClick = () => {
    setYesClicked(true);
    setNoClicked(false);
    yesAudio.current.play();
  };
  const noClick = () => {
    setNoClicked(true);
    setYesClicked(false);
    new Audio("./no.mp3").play();
  };
  return (
    <div
      className="App"
      style={{
        background: `url("./xD.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="question">
        <h1>czy chcesz na kawę jutro o 17 ze mnom?</h1>
      </div>
      <div className="button_holder">
        <div className="button-yes">
          <button onClick={yesClick}>Tak :3</button>
          {/* <img src="./tak.png" alt="xD" className="my-image" /> */}
        </div>
        <div className="button-no">
          <button onClick={noClick}>Nie {">:("}</button>
          {/* <img src="./nie.png" alt="xD" className="my-image-no" /> */}
        </div>
      </div>
      <div className="img-holder">
        {yesClicked ? (
          <div>
            <img src="./yes.gif" alt="chuj" />
          </div>
        ) : noClicked ? (
          <div>
            <img src="./no.gif" alt="chuj" className="no-gif" />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;

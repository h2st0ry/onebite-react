import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "전구 끄기" : "전구 켜기"}
      </button>
    </div>
  );
};

export default Bulb;

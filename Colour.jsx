import React, { useState } from "react";
import "../App.css";

function Colour() {
  const [bgColor, setBgColor] = useState("black");

  const colors = [
    "yellow",
    "green",
    "red",
    "purple",
    "pink",
    "orange",
  ];

  const handleColorChange = (colors) => {
    setBgColor(colors);
  };

  const handleCustomColor = (event) => {
    setBgColor(event.target.value);
  };

  return (
    <div
      className="colour-container"
      style={{ backgroundColor: bgColor }}
    >
      <div className="colour-card">

        <h1>Background Colour</h1>

        <p className="subtitle">
          Choose your favourite colour
        </p>

        {/* Predefined Colour Box */}
        <div className="color-box">
          {colors.map((color) => (
            <button
              key={color}
              className="color-button"
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            >
              {color}
            </button>
          ))}
        </div>

        <div className="custom-color-section">
          <h3>Choose Another Colour</h3>

          <input
            type="color"
            value={
              bgColor.startsWith("#")
                ? bgColor
                : "#ffffff"
            }
            onChange={handleCustomColor}
            className="color-sheet"
          />
        </div>

        <div className="selected-color">
          <h2>
            Selected Colour:
          </h2>

          <span
            className="selected-box"
            style={{ backgroundColor: bgColor }}
          ></span>

          <p>{bgColor}</p>
        </div>
      </div>
    </div>
  )};

export default Colour;
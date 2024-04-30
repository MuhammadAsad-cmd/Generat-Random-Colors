"use client";
import React, { useEffect, useState } from "react";

const ColorDisplay = () => {
  const [colors, setColors] = useState([]);
  const [colorsHistory, setColorsHistory] = useState([]);

  const generateRandomColors = () => {
    const newColors = [];
    for (let i = 0; i < 4; i++) {
      const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      newColors.push(color);
    }
    setColorsHistory((prevHistory) => [...prevHistory, colors]);
    setColors(newColors);
  };

  useEffect(() => {
    generateRandomColors();
  }, []);

  const handleNextClick = () => {
    generateRandomColors();
  };

  const handlePrevClick = () => {
    const PrevColors = colorsHistory.pop() || [];
    setColors(PrevColors);
    setColorsHistory([...colorsHistory]);
  };

  return (
    <>
      <div className="Random">
        <h1 className="heading">Display Random Colors</h1>

        <div className="color-grid">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
            >
              {color}
            </div>
          ))}
        </div>
        <button
          className="btn"
          onClick={handlePrevClick}
          disabled={colorsHistory.length <= 1}
        >
          Prev
        </button>
        <button className="btn" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </>
  );
};

export default ColorDisplay;

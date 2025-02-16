import "./App.css";
import React, { useState } from "react";
import {QRCodeCanvas} from "qrcode.react";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="app-container">
      <h1>Генератор QR кодів</h1>
      <input
        type="text"
        placeholder="Введіть текст або URL"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input-field"
      />

      {input && (
        <div className="qr-code-container">
          <QRCodeCanvas
            value={input}
            size={256}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            includeMargin={true}
          />
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span
          className={`fa-solid fa-chevron-up ${isOpen ? "active" : ""}`}
        ></span>
      </div>
      <div className={`collapse-content ${isOpen ? "active" : ""}`}>
        {content}
      </div>
    </div>
  );
}


export default Collapse;

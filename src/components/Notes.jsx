import React from "react";

let n = Math.floor(Math.random() * 5 + 1);

// style={{ background: `var(--note${n})` }}

export default function Notes(props) {
  return (
    <div className="notes">
      <div className="notes__title">{props.title}</div>
      <div className="notes__content">{props.content}</div>
      <div className="notes__buttons">
        <div className="notes__buttons__edit">E</div>
        <div className="notes__buttons__delete">D</div>
      </div>
    </div>
  );
}

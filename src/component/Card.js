import React from "react";

function Card(props) {
  const { title, storeClickedItem } = props;
  return (
    <div className="boardItem" onClick={() => storeClickedItem(title)}>
      {title}
    </div>
  );
}

export default Card;

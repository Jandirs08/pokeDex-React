import React from "react";

export const MessageNotFound = ({ query }) => {
  return (
    <div className="msg-not-found">
      <p>
        No se ha encontrado la busqueda: <span>{query}</span>{" "}
      </p>
    </div>
  );
};

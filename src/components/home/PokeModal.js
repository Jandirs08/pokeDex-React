import React from "react";

export const PokeModal = ({ modal, closeModal }) => {
  return (
    <>
      <div className={modal ? `modal is-active` : `modal `}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-content content-mod">
          <div className="flex-mod">
            <div className="title-mod">
              <p>
                HOLA <span>mensita :)</span>
              </p>
            </div>
            <div className="body-mod">
              <div className="imagen-mod">
                <img
                  src="https://i.pinimg.com/originals/3a/b9/e7/3ab9e7b994c05a3f9a138c6373144fd7.jpg"
                  alt=""
                />
              </div>
              <p>
                Developed by: <span>Jandir</span>
              </p>
            </div>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={closeModal}
        ></button>
      </div>
    </>
  );
};

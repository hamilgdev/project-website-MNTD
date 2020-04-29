import React, { useState } from 'react';
import IconClose from "../../../images/svg/icons/icon-close.svg";

import "./Modal.scss";

const ModalExample = (props) => {

  return (
    
    <aside className="modal popup-modal">

      <div className="popup-modal__content">

        <div className="popup-modal__video ratio-video">
          <iframe 
            title="videoMNTD"
            src="https://www.youtube.com/embed/Imeq3GeRttw?controls=0" frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          >
          </iframe>
        </div>

        <div className="popup-modal__data">
          <span className="popup-modal__icon-close">
            <IconClose />
          </span>
          <div className="popup-modal__information">
            <h2 className="popup-modal__title">
              [MNTD] Node.js En Vivo - Bases de Datos - SQlite
            </h2>
            <p className="popup-modal__description">
              En esta transmisión aprenderemos sobre bases de datos con Node.js, empezando con SQLite. ¡Estaremos construyendo un manejador de passwords para la terminal!
            </p>
          </div>
        </div>
      
      </div>
      
    </aside>

  );
}

export default ModalExample;
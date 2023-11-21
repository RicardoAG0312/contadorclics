import React from "react";
import "../hojas-estilo/boton.css";

function Contador({numClics}) {
    return (
        <div className="contador">
            {numClics}
        </div>
    );
}

export default Contador;
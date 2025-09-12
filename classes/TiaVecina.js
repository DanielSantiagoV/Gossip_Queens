import Chismosa from "./Chismosa.js";

class TiaVecina extends Chismosa {
    recolectarInfo() {
        console.log("👵 Aprovecha la reunión del barrio para escuchar discretamente");
        this._modificarNivelChisme(Math.random() * 2 + 2); // sube más rápido
    }

    contarChisme() {
        console.log("☕ Difunde el chisme mientras ofrece café");
        this._modificarNivelChisme(Math.random() * 2 + 1);
        this._modificarReputacion(Math.random() > 0.5 ? -1 : 1); // puede bajar reputación
    }
}

export default TiaVecina;

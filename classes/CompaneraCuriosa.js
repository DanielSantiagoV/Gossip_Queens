import Chismosa from "./Chismosa.js";

class CompaneraCuriosa extends Chismosa {
    recolectarInfo() {
        console.log("💼 Hace preguntas aparentemente profesionales a los compañeros de trabajo");
        this._modificarNivelChisme(Math.random()); // sube lento
        this._modificarReputacion(1); // gana reputación
    }

    contarChisme() {
        console.log("📢 Comenta el chisme como ejemplo de vida en el trabajo");
        this._modificarNivelChisme(Math.random()); // sube lento
        this._modificarReputacion(1);
    }
}

export default CompaneraCuriosa;

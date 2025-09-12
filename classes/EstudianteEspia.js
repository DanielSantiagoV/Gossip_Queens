import Chismosa from "./Chismosa.js";

class EstudianteEspia extends Chismosa {
    recolectarInfo() {
        console.log("🎒 Lee chats ajenos desde el último puesto del salón");
        this._modificarNivelChisme(Math.random() * 2 + 1.5); // sube rápido
    }

    contarChisme() {
        console.log("📱 Filtra el chisme por estados en WhatsApp");
        this._modificarNivelChisme(Math.random() * 2 + 1);
        this._modificarReputacion(Math.random() > 0.7 ? -2 : 0); // puede perder reputación si la descubren
    }
}

export default EstudianteEspia;

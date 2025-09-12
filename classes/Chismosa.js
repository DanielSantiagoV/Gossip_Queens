// Clase abstracta Chismosa
class Chismosa {
    #reputacion;
    #nivelChisme;
    constructor(nombre, reputacion = 5, nivelChisme = 0) {
        if (new.target === Chismosa) {
            throw new Error("La clase Chismosa es abstracta y no puede ser instanciada directamente.");
        }
        this.nombre = nombre;
        this.#reputacion = reputacion;
        this.#nivelChisme = nivelChisme;
    }

    // Métodos abstractos
    recolectarInfo() {
        throw new Error("El método recolectarInfo() debe ser implementado por la subclase.");
    }

    contarChisme() {
        throw new Error("El método contarChisme() debe ser implementado por la subclase.");
    }

    // Getters
    getReputacion() {
        return this.#reputacion;
    }

    getNivelChisme() {
        return this.#nivelChisme;
    }

    // Métodos protegidos para modificar valores
    _modificarReputacion(valor) {
        this.#reputacion = Math.max(0, Math.min(10, this.#reputacion + valor));
    }

    _modificarNivelChisme(valor) {
        this.#nivelChisme = Math.max(0, Math.min(10, this.#nivelChisme + valor));
    }
}

export default Chismosa;

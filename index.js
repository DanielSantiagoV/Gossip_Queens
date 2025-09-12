import chalk from "chalk";
import TiaVecina from "./classes/TiaVecina.js";
import CompaneraCuriosa from "./classes/CompaneraCuriosa.js";
import EstudianteEspia from "./classes/EstudianteEspia.js";

// Crear chismosas
const chismosas = [
    new TiaVecina("Doña Rosa"),
    new CompaneraCuriosa("Laura la curiosa"),
    new EstudianteEspia("Andrés el espía"),
];

// Simular 2 rondas de chismes
for (let ronda = 1; ronda <= 2; ronda++) {
    console.log(chalk.yellow(`\n--- 🔥 Ronda ${ronda} ---`));
    chismosas.forEach(ch => {
        console.log(chalk.cyan(`\n${ch.nombre}:`));
        ch.recolectarInfo();
        ch.contarChisme();
    });
}

// Mostrar estadísticas finales
console.log(chalk.magenta("\n📊 Resultados Finales:"));
let masViral = null;

chismosas.forEach(ch => {
    const reputacion = ch.getReputacion();
    const nivel = ch.getNivelChisme();

    let repText = reputacion >= 7 ? chalk.hex("#FFA500")(`Reputación: ${reputacion}`) 
                : reputacion <= 3 ? chalk.black.bgRed(`Reputación: ${reputacion} (Cancelada)`) 
                : chalk.white(`Reputación: ${reputacion}`);

    let nivelText = nivel >= 8 ? chalk.magentaBright(`Nivel de Chisme: ${nivel} 🔥 Viral`) 
                : chalk.white(`Nivel de Chisme: ${nivel}`);

    console.log(chalk.green(`\n👑 ${ch.nombre}`));
    console.log(repText);
    console.log(nivelText);

    if (!masViral || nivel > masViral.getNivelChisme()) {
        masViral = ch;
    }
});

console.log(chalk.bold.bgMagentaBright(`\n🥇 La reina del chisme es: ${masViral.nombre} con un nivel de ${masViral.getNivelChisme()} 🔥\n`));

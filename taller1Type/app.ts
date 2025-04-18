import { series } from "./dataSerie.js";

const seriesTable = document.getElementById("dataSerie")!;

series.forEach((s) => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${s.pos}</td>
    <td>${s.titulo}</td>
    <td>${s.plataforma}</td>
    <td>${s.temporadas}</td>
    <td>${s.resumen}</td>
  `;

  seriesTable.appendChild(row);
});

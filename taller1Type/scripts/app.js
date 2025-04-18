import { series } from "./dataSerie.js";
var seriesTable = document.getElementById("dataSerie");
series.forEach(function (s) {
    var row = document.createElement("tr");
    row.innerHTML = "\n    <td>".concat(s.pos, "</td>\n    <td>").concat(s.titulo, "</td>\n    <td>").concat(s.plataforma, "</td>\n    <td>").concat(s.temporadas, "</td>\n    <td>").concat(s.resumen, "</td>\n  ");
    seriesTable.appendChild(row);
});
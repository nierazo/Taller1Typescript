export class Serie{
    pos: number;
    titulo: string;
    plataforma: string;
    temporadas: number;
    resumen: string;

    constructor(pos: number, titulo: string, plataforma: string, temporadas: number, resumen: string) {
        this.pos = pos;
        this.titulo = titulo;
        this.plataforma = plataforma;
        this.temporadas = temporadas;
        this.resumen = resumen;
      }
}
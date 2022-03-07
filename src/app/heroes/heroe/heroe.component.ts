import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'Sung Jin-Woo';
    edad  : number =  21 

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }
    obtenerNombre() : string {
        return `${ this.nombre } - ${ this.edad }` ;
    }
    cambiarNombre(): void {
        this.nombre = 'Victoria Sexy';
    }
    cambiarEdad(): void {
        this.edad = 19;
    }
}
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  boleta: {
    nombre_cliente: string,
    nombre_producto: string,
    precio: number,
    cantidad: number
  }[] = [];

  nueva_boleta = {
    nombre_cliente: '',
    nombre_producto: '',
    precio: null as number | null,
    cantidad: null as number | null,
  };

  // Agregar nueva boleta
  agregar() {
    const precio = this.nueva_boleta.precio || 0;
    const cantidad = this.nueva_boleta.cantidad || 0;

    // Validar que todos los campos estén llenos
    if (this.nueva_boleta.nombre_cliente && this.nueva_boleta.nombre_producto &&
      this.nueva_boleta.precio && this.nueva_boleta.cantidad) {

      this.boleta.push({
        nombre_cliente: this.nueva_boleta.nombre_cliente,
        nombre_producto: this.nueva_boleta.nombre_producto,
        precio: precio!,
        cantidad: cantidad!
      });

      // Reiniciar el formulario
      this.nueva_boleta = {
        nombre_cliente: '',
        nombre_producto: '',
        precio: null,
        cantidad: null
      };
    }
  }

  // Eliminar boleta
  eliminar(index: number) {
    this.boleta.splice(index, 1);
  }

  // Calcular total general
  calcularTotal() {
    return this.boleta.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }

  // Calcular IGV (18%)
  calcularIGV() {
    return this.calcularTotal() * 0.18;
  }

}
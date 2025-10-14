import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  estudiantes: {
    nombre: string,
    apellido: string,
    dni: number,
    codigo: string,
    carrera: string
  }[] = [];

  nuevo_estudiante = {
    nombre: '',
    apellido: '',
    dni: null as number | null,
    codigo: '',
    carrera: ''
  }

  agregar() {
    const numDni = this.nuevo_estudiante.dni;

    if (
      this.nuevo_estudiante.nombre && this.nuevo_estudiante.apellido && 
      this.nuevo_estudiante.dni && this.nuevo_estudiante.codigo &&
      this.nuevo_estudiante.carrera) {
      this.estudiantes.push({
        nombre: this.nuevo_estudiante.nombre,
        apellido: this.nuevo_estudiante.apellido,
        dni: numDni!,
        codigo: this.nuevo_estudiante.codigo,
        carrera: this.nuevo_estudiante.carrera
      });

      // Reiniciar el formulario
      this.nuevo_estudiante = {
        nombre: '',
        apellido: '',
        dni: null,
        codigo: '',
        carrera: ''
      };
    }
  }

  // Eliminar estudiante
  eliminar(index: number) {
    this.estudiantes.splice(index, 1);
  }
}

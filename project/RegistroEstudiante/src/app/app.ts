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
  estudiante: {
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

  // Actualizar estudiante
  editarIndex: number | null = null;

  // Agregar estudiante
  guardar() {
    const numDni = this.nuevo_estudiante.dni || 0;

    if (!this.nuevo_estudiante.nombre.trim() || !this.nuevo_estudiante.apellido.trim() || !this.nuevo_estudiante.dni || !this.nuevo_estudiante.codigo.trim() || !this.nuevo_estudiante.carrera.trim())
      return;
    if (this.editarIndex === null) {
      
      this.estudiante.push({ ...this.nuevo_estudiante, dni: numDni! });
    } else
      this.estudiante[this.editarIndex] = { ...this.nuevo_estudiante, dni: numDni! };
    this.editarIndex = null;

    // Reiniciar el formulario
    this.nuevo_estudiante = {
      nombre: '',
      apellido: '',
      dni: null,
      codigo: '',
      carrera: ''
    };
  }

  // Eliminar estudiante
  eliminar(index: number) {
    this.estudiante.splice(index, 1);
  }

  // Actualizar estudiante
  actualizar(index: number) {
    this.nuevo_estudiante = { ...this.estudiante[index] };
    this.editarIndex = index;
  }
}

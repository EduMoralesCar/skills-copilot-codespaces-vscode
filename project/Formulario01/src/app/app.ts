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
  empleados: {
    nombre: string,
    apellido: string,
    servicio: string,
    salario: number
  }[] = [];

  nuevo_empleado = {
    nombre: '',
    apellido: '',
    servicio: '',
    salario: null as number | null
  }

  // Inicializo el array con algunos empleados
  constructor() {
    this.empleados = [
      { nombre: 'Juan', apellido: 'Pérez', servicio: 'Ventas', salario: 3000 },
      { nombre: 'María', apellido: 'Gómez', servicio: 'Marketing', salario: 3500 },
      { nombre: 'Luis', apellido: 'Rodríguez', servicio: 'Desarrollo', salario: 4000 }
    ];
  }

  // Función para agregar un nuevo empleado al array
  agregarEmpleado() {
    // Convertir salario a número
    const salarioNum = Number(this.nuevo_empleado.salario);
    if (
      this.nuevo_empleado.nombre &&
      this.nuevo_empleado.apellido &&
      this.nuevo_empleado.servicio &&
      salarioNum !== null && salarioNum > 0
    ) {
      this.empleados.push({
        ...this.nuevo_empleado,
        salario: salarioNum
      });
      // Limpio el formulario
      this.nuevo_empleado = { nombre: '', apellido: '', servicio: '', salario: 0 };
    }
  }

}

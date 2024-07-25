import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefono'
})
export class TelefonoPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) {
      return '';
    }

    // Eliminar todos los caracteres no numéricos
    const cleaned = value.replace(/\D/g, '');

    // Dividir el número en partes
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);

    if (match) {
      return `+${match[1]} ${match[2]} ${match[3]}`;
    }

    return value;
  }
}

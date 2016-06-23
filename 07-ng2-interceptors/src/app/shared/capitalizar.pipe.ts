import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'capitalizar' })
export class CapitalizarPipe implements PipeTransform {
    
    transform(entrada: string, args: string[]): string {
        if (!entrada) return entrada;
        return entrada.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    }
}
import { IsString, IsDateString, IsNotEmpty, IsBoolean } from 'class-validator';

export interface Patient {
    _id?: string;
    nombre: string;
    dni: string;
    fechaNacimiento: string;
    fechaFachecimiento: string;
    cidudadNacimiento: string;
    fallecido: string;
    direccion: string;
    email: string;
    casado?: boolean;
}

// Validation model which comes to the API.
export class PatientCreateAPI implements Pick<Patient, 'nombre' | 'dni' | 'fechaNacimiento' | 'fechaFachecimiento' | 'cidudadNacimiento' | 'fallecido' | 'email' | 'casado'> {
    @IsString()
    @IsNotEmpty({
        message: 'El nombre es requerido',
    })
    nombre!: string;
    
    @IsString()
    @IsNotEmpty({
        message: 'El dni es requerido',
    })
    dni!: string;
    
    @IsDateString()
    fechaNacimiento!: string;
    
    @IsDateString()
    fechaFachecimiento!: string;
    
    @IsString()
    @IsNotEmpty({
        message: 'La cidudadNacimiento es requerido',
    })
    cidudadNacimiento!: string;
    
    @IsString()
    @IsNotEmpty({
        message: 'El campo fallecido es requerido',
    })
    fallecido!: string;
    
    @IsString()
    @IsNotEmpty({
        message: 'El campo direccion es requerido',
    })
    direccion!: string;

    @IsString()
    @IsNotEmpty({
        message: 'El campo email es requerido',
    })
    email!: string;

    @IsBoolean()
    @IsNotEmpty({
        message: 'El campo casado es requerido',
    })
    casado!: boolean;
}
import { model } from 'mongoose';
import {  } from './../repositories/schedule.repository';
import { Patient, PatientCreateAPI } from './patient.model';
import { ValidateNested, IsDate, IsNumber, IsDateString } from 'class-validator';

export interface Schedule {
    paciente: Patient,
    fechaRegistro: Date,
    fechaInicio?: number,
    fechaFinal?: number
}

// Model for creating item in database.
export type ScheduleCreate = Pick<Schedule, 'paciente' | 'fechaRegistro' | 'fechaInicio' | 'fechaFinal'>;

// Validation model which comes to the API.
export class ScheduleCreateAPI implements Pick<Schedule, 'paciente' | 'fechaRegistro' | 'fechaInicio' | 'fechaFinal'> {
  @ValidateNested()
  paciente!: PatientCreateAPI;

  @IsDateString({}, { each: true })
  fechaRegistro!: Date;

  @IsNumber()
  fechaInicio!: number;

  @IsNumber()
  fechaFinal!: number;

}



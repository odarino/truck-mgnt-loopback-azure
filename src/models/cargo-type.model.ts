import {Entity, model, property} from '@loopback/repository';

@model()
export class CargoType extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;


  constructor(data?: Partial<CargoType>) {
    super(data);
  }
}

export interface CargoTypeRelations {
  // describe navigational properties here
}

export type CargoTypeWithRelations = CargoType & CargoTypeRelations;

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Company } from '../company/company.entity';

export enum ApplicationState {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  expiryDate: Date;

  @Column({
    type: 'enum',
    enum: ApplicationState,
    default: ApplicationState.PENDING,
  })
  state: ApplicationState;

  @ManyToOne(() => Company, (company) => company.applications)
  company: Company;
}
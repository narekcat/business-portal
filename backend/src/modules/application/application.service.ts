import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application, ApplicationState } from './application.entity';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
  ) {}

  createApplication(application: Partial<Application>): Promise<Application> {
    return this.applicationRepository.save(application);
  }

  getAllApplications(): Promise<Application[]> {
    return this.applicationRepository.find({ relations: ['company'] });
  }

  updateApplicationState(id: number, state: ApplicationState): Promise<void> {
    return this.applicationRepository.update(id, { state }).then(() => {});
  }

  deleteApplication(id: number): Promise<void> {
    return this.applicationRepository.softDelete(id).then(() => {});
  }
}

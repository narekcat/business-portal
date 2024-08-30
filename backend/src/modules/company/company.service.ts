import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  createCompany(company: Partial<Company>): Promise<Company> {
    return this.companyRepository.save(company);
  }

  getAllCompanies(): Promise<Company[]> {
    return this.companyRepository.find({ relations: ['applications'] });
  }

  getCompanyById(id: number): Promise<Company> {
    return this.companyRepository.findOne({ where: { id }, relations: ['applications'] });
  }

  updateCompany(id: number, updateData: Partial<Company>): Promise<void> {
    return this.companyRepository.update(id, updateData).then(() => {});
  }

  deleteCompany(id: number): Promise<void> {
    return this.companyRepository.softDelete(id).then(() => {});
  }
}

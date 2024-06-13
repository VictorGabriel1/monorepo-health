import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial, UpdateResult } from 'typeorm';
import { RecentConsultationsEntity } from '../entities/recent-consultations.entity';

@Injectable()
export class RecentConsultationsRepository {
  constructor(
    @InjectRepository(RecentConsultationsEntity)
    private readonly recentConsultationsRepository: Repository<RecentConsultationsEntity>,
  ) {}

  async create(
    recentConsultation: DeepPartial<RecentConsultationsEntity>,
  ): Promise<RecentConsultationsEntity> {
    return await this.recentConsultationsRepository.save(recentConsultation);
  }

  async findById(id: string): Promise<RecentConsultationsEntity> {
    const recentConsultation = await this.recentConsultationsRepository.findOne(
      { where: { id } },
    );
    if (!recentConsultation) {
      throw new NotFoundException(
        `Recent consultation with ID "${id}" not found.`,
      );
    }
    return recentConsultation;
  }

  async update(
    id: string,
    recentConsultationData: DeepPartial<RecentConsultationsEntity>,
  ): Promise<UpdateResult> {
    await this.findById(id); // Check if the recent consultation exists
    return await this.recentConsultationsRepository.update(
      id,
      recentConsultationData,
    );
  }

  async delete(id: string): Promise<void> {
    await this.findById(id); // Check if the recent consultation exists
    await this.recentConsultationsRepository.delete(id);
  }
}

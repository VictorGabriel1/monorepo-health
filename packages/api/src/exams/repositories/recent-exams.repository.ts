import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial, UpdateResult } from 'typeorm';
import { RecentExamsEntity } from '../entities/recent-exams.entity';

@Injectable()
export class RecentExamsRepository {
  constructor(
    @InjectRepository(RecentExamsEntity)
    private readonly recentExamsRepository: Repository<RecentExamsEntity>,
  ) {}

  async create(
    recentExam: DeepPartial<RecentExamsEntity>,
  ): Promise<RecentExamsEntity> {
    return await this.recentExamsRepository.save(recentExam);
  }

  async findById(id: string): Promise<RecentExamsEntity> {
    const recentExam = await this.recentExamsRepository.findOne({
      where: { id },
    });
    if (!recentExam) {
      throw new NotFoundException(`Recent exam with ID "${id}" not found.`);
    }
    return recentExam;
  }

  async update(
    id: string,
    recentExamData: DeepPartial<RecentExamsEntity>,
  ): Promise<UpdateResult> {
    await this.findById(id); // Check if the recent exam exists
    return await this.recentExamsRepository.update(id, recentExamData);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id); // Check if the recent exam exists
    await this.recentExamsRepository.delete(id);
  }
}

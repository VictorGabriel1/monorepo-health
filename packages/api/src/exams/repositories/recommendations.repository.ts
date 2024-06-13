import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial, UpdateResult } from 'typeorm';
import { RecommendationsEntity } from '../entities/recommendations.entity';

@Injectable()
export class RecommendationsRepository {
  constructor(
    @InjectRepository(RecommendationsEntity)
    private readonly recommendationsRepository: Repository<RecommendationsEntity>,
  ) {}

  async create(
    recommendation: DeepPartial<RecommendationsEntity>,
  ): Promise<RecommendationsEntity> {
    return await this.recommendationsRepository.save(recommendation);
  }

  async findById(id: string): Promise<RecommendationsEntity> {
    const recommendation = await this.recommendationsRepository.findOne({
      where: { id },
    });
    if (!recommendation) {
      throw new NotFoundException(`Recommendation with ID "${id}" not found.`);
    }
    return recommendation;
  }

  async update(
    id: string,
    recommendationData: DeepPartial<RecommendationsEntity>,
  ): Promise<UpdateResult> {
    await this.findById(id); // Check if the recommendation exists
    return await this.recommendationsRepository.update(id, recommendationData);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id); // Check if the recommendation exists
    await this.recommendationsRepository.delete(id);
  }
}

import type { CRUDDelegate } from 'src/interface/crud-delegate.interface';
import { PrismaService } from '../prisma.service';

export abstract class BaseService<T, CreateDto, UpdateDto> {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly modelKey: keyof PrismaService,
  ) {}

  private get delegate(): CRUDDelegate<T> {
    return this.prisma[this.modelKey] as unknown as CRUDDelegate<T>;
  }

  async create(createDto: CreateDto): Promise<T> {
    return this.delegate.create({ data: createDto });
  }

  async findAll(): Promise<T[]> {
    return this.delegate.findMany();
  }

  async findOne(id: string): Promise<T | null> {
    return this.delegate.findUnique({ where: { id } });
  }

  async update(id: string, updateDto: UpdateDto): Promise<T> {
    return this.delegate.update({ where: { id }, data: updateDto });
  }

  async remove(id: string): Promise<T> {
    return this.delegate.delete({ where: { id } });
  }
}

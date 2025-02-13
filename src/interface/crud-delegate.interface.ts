export interface CRUDDelegate<T> {
  create(args: { data: any }): Promise<T>;
  findMany(args?: any): Promise<T[]>;
  findUnique(args: { where: { id: string } }): Promise<T | null>;
  update(args: { where: { id: string }; data: any }): Promise<T>;
  delete(args: { where: { id: string } }): Promise<T>;
}

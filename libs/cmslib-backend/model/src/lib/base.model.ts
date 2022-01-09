import { Model } from 'objection';

export class BaseModel extends Model {
  id!: number;
  $beforeInsert(): void {
    //random number for id
    if (!this.id) {
      this.id = Math.floor(
        new Date().getTime() / 1000 + Math.random() * (1000000 - 1) + 1
      );
    }
  }
}

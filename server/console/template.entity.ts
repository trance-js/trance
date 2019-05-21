import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('templates')
export class Template {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  data: string;
  @Column()
  url: string;
  @Column()
  type: number;
  @Column({ name: 'is_publish'})
  isPublish: boolean;
  @Column({ name: 'is_timing'})
  isTiming: boolean;
  @Column({ name: 'timing_time' })
  timingTime: Date;
  @Column({ name: 'timing_data' })
  timingData: string;
  @Column({ name: 'created_at' })
  createdAt: Date;
  @Column({ name: 'updated_at' })
  updatedAt: Date;
}

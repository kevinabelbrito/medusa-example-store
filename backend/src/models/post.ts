import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { generateEntityId } from "@medusajs/utils";
import { BaseEntity } from "@medusajs/medusa";

@Entity()
export class Post extends BaseEntity {
  @Column({type: 'varchar'})
  title: string;

  @Column({type: 'varchar'})
  content: string;

  // @CreateDateColumn({ name: 'created_at', nullable: false }) createdAt: Date;
  // @UpdateDateColumn({ name: 'updated_at', nullable: false }) updatedAt: Date;

  @BeforeInsert()
  private beforeInsert(): void {
    this.id = generateEntityId(this.id, "post")
  }
}
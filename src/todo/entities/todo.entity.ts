import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  name:string;

  @Column({unique:true})
  email:string;

  @Column()
  password:string;

  @Column()
  public title: string;

  @Column()
  public content: string;

  @Column()
  public f_done: boolean;
}

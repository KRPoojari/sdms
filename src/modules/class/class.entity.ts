import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Class extends Model<Class> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    Name: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    Division: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    ClassTeacher: string;
}
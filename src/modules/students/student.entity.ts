import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Student extends Model<Student> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    FirstName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    LastName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    Class: string;

    @Column({
        type: DataType.ENUM,
        values: ['eng', 'math', 'sci'],
        allowNull: false,
    })
    subjects: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.INTEGER,
        unique: true,
        allowNull: false,
    })
    phone: number;
}
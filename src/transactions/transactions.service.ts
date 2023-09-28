import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction)
    private transactionModel: typeof Transaction,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    return await this.transactionModel.create({
      payment_date: createTransactionDto.payment_date,
      name: createTransactionDto.name,
      description: createTransactionDto.description,
      category: createTransactionDto.category,
      amount: createTransactionDto.amount,
      type: createTransactionDto.type,
    });
  }

  findAll() {
    return this.transactionModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, _updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}

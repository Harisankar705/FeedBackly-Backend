import { Model } from "mongoose";
import { IBaseRepository } from "../interfaces/interfaces";

export abstract class BaseRepository <T> implements IBaseRepository<T>{
    constructor(protected model:Model<T>){}
    async create(data:T):Promise<T>{
        return this.model.create(data)
    }
    async findAll():Promise<T[]>{
        return this.model.find()
    }
}
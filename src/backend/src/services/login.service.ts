import { Injectable } from "@nestjs/common"
import { InjectRepository } from '@nestjs/typeorm';
import { string } from "joi";
import { Repository } from 'typeorm';
import { Login } from "../module/entity/login.entity"


@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(Login) private LoginRepository: Repository<Login>,
    ) {}
    
    async findOne(username: string): Promise<Login | undefined>{
        return this.LoginRepository.findOneBy({username: username});
      }
}

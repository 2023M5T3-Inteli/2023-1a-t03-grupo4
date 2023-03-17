import { PROPERTY_DEPS_METADATA } from "@nestjs/common/constants"
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Profile } from "./entity/profile.entity"
import { Project } from './entity/project.entity'
import { Skills } from './entity/skills.entity'


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "grupo4-dev.cd53msdn47fe.us-east-1.rds.amazonaws.com",
    port: 5432,
    username: "postgres",
    password: "grupo4123",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Profile, Project, Skills],
    migrations: [],
    subscribers: [],
})

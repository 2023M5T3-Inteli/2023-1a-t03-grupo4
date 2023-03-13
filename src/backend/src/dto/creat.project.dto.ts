// Description: data for project table creation requests

export class CreateProject{
    idProject: number;
    title: string;
    description: string;
    submission_date: Date;
    period: Date;
    specification: string;
    area: string;
    role: string;
    auth: boolean;
    creator: number;
}
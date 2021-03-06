import { ApiResponse } from "../models";
import { Request, Response } from "express";
import { CreateUserService } from "../services/create-user";
import { ResponseStandardize } from "../utils/responseStandardize";

class CreateUser {

    private createUserService = CreateUserService;
    public async handle(req: Request, res: Response) {

        try {

            const response = await new this.createUserService().run(req.body);

            new ResponseStandardize().success(res, 201, response);


        } catch (error: any) {

            new ResponseStandardize().error(res, error);

        }
    }
}

export { CreateUser };
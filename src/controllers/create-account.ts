import { ApiResponse } from "../models";
import { Request, Response } from "express";
import { CreateAccountService } from "../services/create-account";
import { ResponseStandardize } from "../utils/responseStandardize";

class CreateAccount {

    private createAccountService = CreateAccountService;
    public async handle(req: Request, res: Response) {

        try {

            const response = await new this.createAccountService().run(req.body);

            new ResponseStandardize().success(res, 201, response);


        } catch (error: any) {

            new ResponseStandardize().error(res, error);

        }
    }
}

export { CreateAccount };
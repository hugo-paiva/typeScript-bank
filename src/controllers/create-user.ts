import { ApiResponse } from "../models";
import { Request, Response } from "express";
import { CreateUserService } from "../services/create-user";

class CreateUser {

    private service = CreateUserService;
    public handle(req: Request, res: Response) {

        try {

            const response = new this.service().run(req.body);
            res.status(201).json(response);


        } catch (error: any) {
            const [ statusCode, messages] = error.message.split(': ');
            
            if (Number(statusCode)) {
                res.status(parseInt(statusCode)).json({
                    data: {},
                    messages: messages.split(' /')
                } as ApiResponse);
            }
            else {
                res.status(500).json({
                    data: {},
                    messages: [
                        'An unexpected error has ocurred while trying to create user'
                    ]
                })
            }
        }
    }
}

export { CreateUser };
import { Response } from 'express';
import { ApiResponse } from '../models'

class ResponseStandardize {
    public success(res: Response, statusCode: number, response: ApiResponse) {
        res.status(statusCode).json(response);
    }

    public error(res: Response, error: Error) {

        const [statusCode, messages] = error.message.split(': ');

        if (Number(statusCode)) {
            res.status(parseInt(statusCode)).json({
                data: {},
                messages: messages.split(' /').filter((message: string) => message != '')
            } as ApiResponse);
        }
        else {
            res.status(500).json({
                data: {},
                messages: [
                    'An unexpected error has ocurred.'
                ]
            })
        }
    }
}

export { ResponseStandardize };
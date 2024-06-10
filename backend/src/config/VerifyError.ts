
import {CustomError} from "./index";

export class CErrorResponse {
    static handleError = (error:unknown)=>{
        if(error instanceof CustomError){
            console.error('error controlado');
            console.error(error.message);
            //return res.status(error.statusCode).send({error:error.message});
        }
        console.log({
            error
        });

        // @ts-ignore
         //CustomError(500,error.message);
        //return  res.status(500).json({error:"Internal Server Error"});
    }
}
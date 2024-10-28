import { Controller, Get, Post, Res } from '@nestjs/common'; 
import { response } from 'express';

@Controller('todos')
export class TodosController {
    @Get('')

    index(@Res() response) {
        response.json({message: 'Hello from todo!'});
    }
    
}
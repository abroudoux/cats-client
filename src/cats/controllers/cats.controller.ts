import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';
import { CatsService } from '../services/cats.service';
import { Cat } from '../interfaces/cat.interface';


@Controller('cats')
export class CatsController {

    constructor(private readonly catsService : CatsService) {};

    // GET /cats?color= -> []
    @Get()
    getcats() : Promise<Cat[]> {
        return this.catsService.getCats();
    };

    // GET /cats/:id -> { ... }
    @Get(':id')
    getCat(@Param('id') id : string) : Promise<Cat> {
        return this.catsService.getCat(id);
    };

    // POST /cats
    @Post()
    createCat(@Body() createCatDto : CreateCatDto) : Promise<Cat> {
        return this.catsService.createCat(createCatDto);
    };

    // DELETE /cats/:id
    @Delete(':id')
    deleteCat(@Param('id') id : string) : Promise<Cat> {
        return this.catsService.deleteCat(id);
    };

    // PUT /cats/:id
    @Put(':id')
    updateCat(@Body() updateCatDto : CreateCatDto, @Param('id') id : string) : Promise<Cat> {
        return this.catsService.updateCat(id, updateCatDto);
    };

};

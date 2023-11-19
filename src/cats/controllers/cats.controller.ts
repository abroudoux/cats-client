import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';

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

    // // GET /cats/:id -> { ... }
    // @Get(':id')
    // getOneCat(@Param('id', ParseIntPipe) id : number) {
    //     try {
    //         return this.catsService.getCat(id);
    //     } catch (err) {
    //         throw new NotFoundException();
    //     };
    // };

    // // POST /cats
    // @Post()
    // createCat(@Body(new ValidationPipe()) createCatDto : CreateCatDto) {
    //     return this.catsService.createCat(createCatDto);
    // };

    // // PUT /cats/:id -> { ... }
    // @Put(':id')
    // updateCat(@Param('id') id : number, @Body() updateCatDto : UpdateCatDto) {
    //     return this.catsService.updateCat(id, updateCatDto);
    // };

    // // DELETE /cats/:id
    // @Delete(':id')
    // deleteCat(@Param('id', ParseIntPipe) id : number) {
    //     return this.catsService.removeCat(id);
    // };

};

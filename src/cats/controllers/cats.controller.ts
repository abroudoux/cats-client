import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';

import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';
import { CatsService } from '../services/cats.service';
import { GardenGuard } from '../guards/garden.guard';


@Controller('cats')
export class CatsController {

    constructor(private readonly catsService : CatsService) {};

    // GET /cats?color= -> []
    @Get()
    getcats(@Query('color') color : 'black' | 'brown') {
        const service = new CatsService();
        return this.catsService.getCats(color);
    };

    // GET /cats/:id -> { ... }
    @Get(':id')
    getOneCat(@Param('id', ParseIntPipe) id : number) {
        try {
            return this.catsService.getCat(id);
        } catch (err) {
            throw new NotFoundException();
        };
    };

    // POST /cats
    @Post()
    @UseGuards(GardenGuard)
    createCat(@Body(new ValidationPipe()) createCatDto : CreateCatDto) {
        return this.catsService.createCat(createCatDto);
    };

    // PUT /cats/:id -> { ... }
    @Put(':id')
    updateCat(@Param('id') id : string, @Body() updateCatDto : UpdateCatDto) {
        return this.catsService.updateCat(+id, updateCatDto);
    };

    // DELETE /cats/:id
    @Delete(':id')
    deleteCat(@Param('id', ParseIntPipe) id : number) {
        return this.catsService.removeCat(id);
    };

};

import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';


@Controller('cats')
export class CatsController {

    // GET /cats?color=black -> []
    @Get()
    getcats(@Query('color') color : string) {
        return [{ color }];
    }

    // GET /cats/:id -> { ... }
    @Get(':id')
    getOneCat(@Param('id') id : string) {
        return {
            id,
        };
    }

    // POST /cats
    @Post()
    createCat(@Body() createCatDto : CreateCatDto) {
        return {
            name : createCatDto.name,
        };
    }

    // PUT /cats/:id -> { ... }
    @Put(':id')
    updateCat(@Param('id') id : string, @Body() updateCatDto : UpdateCatDto) {
        return {
            id,
            name : updateCatDto.name,
        };
    }

    // DELETE /cats/:id
    @Delete(':id')
    deleteCat(@Param('id') id : string) {
        return {
            id,
        };
    }

}

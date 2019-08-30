import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { QuotesService } from '../services/quotes/quotes.service';
import { MessageDto } from './message.dto';

@Controller('messages')
export class MessagesController {
    constructor(private quotesService: QuotesService) {}
    @Get()
    getMessages() {
        return this.quotesService.getQuotes();
    }
    @Get(':id')
    getMessage(@Param('id') id ) {
        return this.quotesService.getQuote(id);
    }
    @Post()
    postMessage(@Body() message: MessageDto) {
        return this.quotesService.getQuote(message);
    }
}

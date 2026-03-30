import { Body, Controller, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('api/v1')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post('create-client')
  async createClient(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.createClient(createClientDto);
  }
}
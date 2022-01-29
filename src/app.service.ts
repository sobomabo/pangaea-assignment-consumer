import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from './modules/kafka/consumer.service';

@Injectable()
export class AppService {
  constructor(private readonly consumerService: ConsumerService) {}

  async subscribe(topic: string, groupId) {
    await this.consumerService.consume(
      { topic },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            value: JSON.parse(message.value.toString()),
            topic: topic.toString(),
            partition: partition.toString(),
          });
        }
      },
      groupId
    );
  }

}
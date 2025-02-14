import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adters/axios.adapter';

@Module({
    providers: [AxiosAdapter],
    exports: [AxiosAdapter]
})
export class CommonModule {}

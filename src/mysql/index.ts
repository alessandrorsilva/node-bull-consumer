import 'reflect-metadata';
import { DataSource, Migration } from 'typeorm';
import { Candidate } from 'src/emtity/candidate.entity';
import { Vote } from '../emtity/vote.entity';
import configs from '../configs';

const AppDataSource = new DataSource({
    ...(configs.mysql as any),
    synchronize: true,
    entities: [Candidate, Vote],
    migrations: [],
    subscribes: [], 
});

AppDataSource.initialize()
    .then(() => {
        console.log('Mysql Conectado com sucesso :');        
    })

    .catch((error) => {
        console.error('Falha ao conectar ao MYSQL :');
        console.error(error);
    });

    export default AppDataSource;

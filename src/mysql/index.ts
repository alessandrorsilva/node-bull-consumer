import 'reflect-metadata';
import { DataSource, Migration } from 'typeorm';
import { Candidate } from 'src/entity/candidate.entity';
import { Vote } from '../entity/vote.entity';
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

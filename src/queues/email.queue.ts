import { addTransactionSupport } from 'ioredis/built/transaction';
import { Queues } from '../enums';
import BaseQueue from './base.queue';
import configs from '../configs';
import Transport from '../email';

export default class EmailQueue extends BaseQueue {
    private static instance: EmailQueue;
    public static getInstance(): EmailQueue {
        if (!EmailQueue.instance) {
            EmailQueue.instance = new EmailQueue();
        }
        return EmailQueue.instance;

    }
    private constructor() {
        super(Queues.email)
        this.queue.process(this.process);

    }

    private async process({ data }) {
        console.log(data);
        await Transport.sendMail({            
            to: configs.mail.default.to,
            from: configs.mail.default.from,
            subject: "Você ganhou R$ 100.000.00 no pix!",
            text: JSON.stringify(data),
        })
        console.log(`Email enviado com sucesso!`);
    }
}
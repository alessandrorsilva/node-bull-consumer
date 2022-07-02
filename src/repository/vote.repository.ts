import { Vote  } from "src/emtity/vote.entity";
import Mysql from '../mysql';

export const userRepository = Mysql.getRepository(Vote);

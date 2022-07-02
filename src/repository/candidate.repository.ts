import { Candidate  } from "src/emtity/candidate.entity";
import Mysql from '../mysql';

export const userRepository = Mysql.getRepository(Candidate);

import { DbConnection } from '../dbConnection';
import * as mongodb from 'mongodb';


export class ApointmentsRepository {

    private instance = DbConnection.getInstance();
    private connection = this.instance.connectMongo();




}
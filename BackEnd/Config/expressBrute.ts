
const expressBrute = require('express-brute')



export class ExpressBrute{

    private store  = new expressBrute.MemoryStore();
    public bruteForce = new expressBrute(this.store);
}


import { rejects } from 'assert'
import * as bcrypt from 'bcrypt'
import { Cursor } from 'mongodb'
import { resolve } from 'path'

export class Services {

    public checkEmpty(data: any): boolean {
        const total = data.toString().replace(/\s/g, "").length
        if (total > 0) {
            return true
        } else {
            return false
        }
    }

    public checkEmptyUndfinedNull(data: any): boolean {
        if (data.trim().length != 0 && data != undefined && data != null) {
            return true;
        } else {
            return false;
        }
    }
    public async compareCrypt(data: string, encrypted) {
        const comparison = new Promise(async (resolve, reject) => {
            await bcrypt.compare(data, encrypted, (err, same) => {
                if (err) {
                    reject("Une erreur de comparaison est survenue: " + err)
                } else if (!same) {
                    reject('Not the same')
                } else {
                    resolve(true);
                }
            })
        }).catch(() => {
            return new Error('Not the same')
        })
        return comparison;
    }

    public async crypt(data) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(data, salt);
            return hash;
        }catch(err){
            return new Error('Une erreur de cryptage est survenue' + err)
        }

    }

    public async searchCryptedMail(querry: Cursor, data) {
        const foundUsers = await querry.toArray();
        for (const user of foundUsers) {
            const crypt = await this.compareCrypt(data, user.email);
            if (crypt == true) {
                return user
            }

        }
    }
}
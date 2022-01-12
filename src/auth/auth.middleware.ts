import * as jwt from 'jsonwebtoken';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { User } from '../users/entities/user.entity'; 
import * as config from 'config';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    public async use(req, res, next) {
        if (req.headers.authorization && (req.headers.authorization as string).split(' ')[0] === 'Bearer') {
            const token = (req.headers.authorization as string).split(' ')[1];
            const decoded: any = jwt.verify(token, config.get("secret_key") ); 
            const user = await User.findOne<User>({
                where: {
                    username: decoded.username,
                    password: decoded.password
                }
            }); 
            if (!user) throw Error('Unable to found the user with the provided information.');  
            req.body.username = decoded.username; 
            req.body.password = decoded.password;
            next();
        } else {
            throw Error('Access unauthorized.');
        }
    }
}
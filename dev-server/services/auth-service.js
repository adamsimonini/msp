// JWT is the JSON Web Token package saved in package.json. The token secret is defined in the .env file
import jwt from 'jsonwebtoken';

export function generateJWT(user) {
    const tokenData = { 
        username: user.username, 
        id: user._id
    };
    return jwt.sign({ user: tokenData }, process.env.TOKEN_SECRET);
    // return generateJWT.sign({ user:tokenData},  process.env.TOKEN_SECRET );
}
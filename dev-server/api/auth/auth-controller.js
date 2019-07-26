// import { StringUtil } from '../../utilities/string-util';
import User from '../../model/user-model';
import { generateJWT } from  '../../services/auth-service';

// services\auth-service.js

export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid) {
        return res.status(400).json({ message: validation.message + ' fgt!' });
    }
    User.findOne({ username: req.body.username.toLowerCase() }, (error, user) => {
        if (error) {
            return res.status(500).json();
        }   
        if (!user) {
            return res.status(401).json();
        }
        // check if password from db and password from user match
        const passwordsMatch = User.passwordMatches(req.body.password, user.password);

        if (!passwordsMatch) {
            return res.status(401).json();
        }
        const token = generateJWT(user);
        return res.status(200).json({ token: token });
    });
}

function isEmpty(value) {
    return !value || !value.trim();
}

function validateIndex(body) {
    let errors = '';

    if (isEmpty(body.username)) {
        errors += 'Username is required ';
    }

    if (isEmpty(body.password)) {
        errors += 'Password is required. ';
    }
    console.log('validateIndex function...');
    return {
        isValid: isEmpty(errors),
        message: 'there was an error'
    }
}

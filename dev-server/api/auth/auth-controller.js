// import { StringUtil } from '../utilities/string-util';
const StringUtil = require('../../utilities/string-util');
import User from '../../model/user-model';

export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid) {
        return res.status(400).json({ message: validation.message });
    }
    User.findOne({ username: req.body.username.toLowerCase() }, (error, user) => {
        if (error) {
            return res.status(500).json();
        }   
        if (!user) {
            return res.status(401).json();
        }
        // check if password from db and password from user match
        const passwordMatch = User.passwordMatches(req.body.password, user.password);

        if (!passwordMatch) {
            return res.status(401).json();
        }
        return res.status(200).json();
    });
}

function validateIndex(body) {
    let errors = '';

    if (StringUtil.isEmpty(body.username)) {
        erorrs += 'Username is required ';
    }

    if (StringUtil.isEmpty(body.password)) {
        errors += 'Password is required. ';
    }

    return {
        isValid: StringUtil.isEmpty(errors),
        message: errors
    }
}

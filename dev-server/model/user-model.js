import mongoose from 'mongoose';
import { StringUtil } from '../utilities/string-util';
import bcrypt from 'bcrypt-nodejs';

const userSchema = new mongoose.Schema({
    username: String,
    first: String,
    last: String,
    password: String,
});

function capitalize(word) {
    return word.charAt(0).toUpperCase();
}

userSchema.set('timestamps', true);
userSchema.virtual('fullName').get(function() {
    const first = capitalize(this.first.toLowerCase());
    const last =  capitalize(this.last.toLowerCase());
    return `${first} ${last}`;
});

userSchema.pre('save', function(next) {
    this.username = this.username.toLowerCase();
    this.first = this.first.toLowerCase();
    this.last = this.last.toLowerCase();
    const unsafePassword = this.password;
    this.password = bcrypt.hashSync(unsafePassword);
    next();
});

export default mongoose.model('user', userSchema);
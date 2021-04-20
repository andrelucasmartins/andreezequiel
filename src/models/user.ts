import { Document, Schema, model } from 'mongoose';
import {} from '../interfaces/user';

export interface UserModelInterface extends UserInterface, Document {
  fullName(): string;
}

export var UserSchema: Schema = new Schema({})
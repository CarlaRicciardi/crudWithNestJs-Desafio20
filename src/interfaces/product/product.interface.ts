import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: true },
});

export interface Product extends mongoose.Document {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

import mongoose, { Schema, Document } from 'mongoose';

interface IApartment extends Document {
  name: string;
  unitNumber: string;
  project: string;
  details?: string;
  price:number;
  imageUrl?:string;
}

const apartmentSchema: Schema = new Schema({
  name: { type: String, required: true },
  unitNumber: { type: String, required: true },
  project: { type: String, required: true },
  details: { type: String },
  price: { type: Number, required: true }, // New field
  imageUrl: { type: String  }
});

export const Apartment = mongoose.model<IApartment>('Apartment', apartmentSchema);

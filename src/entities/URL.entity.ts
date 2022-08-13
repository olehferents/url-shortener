import mongoose, { Schema, Document } from "mongoose";

export interface URL extends Document {
  urlId: string;
  originalURL: string;
  shortURL: string;
}

const URLSchema: Schema = new mongoose.Schema<URL>({
  urlId: { type: String, required: true },
  originalURL: { type: String, required: true, unique: true, },
  shortURL: { type: String, required: true },
});

export default mongoose.model<URL>('URL', URLSchema);

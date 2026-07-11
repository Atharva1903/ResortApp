import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Legal', 'Financial', 'Proposal', 'Map', 'Other'],
    required: true 
  },
  fileUrl: { type: String, required: true },
  publicId: { type: String, required: true }, // For Cloudinary
  isPublic: { type: Boolean, default: true } // If false, only visible in admin
}, { timestamps: true });

const Document = mongoose.model('Document', documentSchema);
export default Document;

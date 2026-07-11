import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  publicId: { type: String, required: true }, // For Cloudinary
  category: { 
    type: String, 
    enum: ['Resort', 'Nature', 'Infrastructure', 'Future Concepts', 'Events'],
    required: true 
  },
}, { timestamps: true });

const Gallery = mongoose.model('Gallery', gallerySchema);
export default Gallery;

import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  phase: { type: String, enum: ['Existing', 'Renovation', 'Phase 1', 'Phase 2', 'Future'], required: true },
  status: { type: String, enum: ['Excellent', 'Good', 'Average', 'Needs Repair', 'Planned', 'In Progress'], required: true },
  budget: { type: Number },
  timeline: { type: String },
  imageUrls: [{ type: String }],
  details: { type: String } // Rich text or long description
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;

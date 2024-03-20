import mongoose from "mongoose"

export interface ReportType {
    number: number;
    type: string;
    summary: string;
    createdBy: mongoose.Types.ObjectId;
    progressUpdates: mongoose.Types.ObjectId[];
    createdAt: Date;
    closedAt?: Date;
    isClosed: boolean;
    reasonForClosing?: string;
    bugFixDetails?: string;
}

const reportSchema = new mongoose.Schema({
    number: { type: Number, required: true },
    type: { type: String, required: true },
    summary: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    progressUpdates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now },
    closedAt: { type: Date },
    isClosed: { type: Boolean, default: false },
    reasonForClosing: { type: String },
    bugFixDetails: { type: String },
});

const Report = mongoose.model<ReportType>('Report', reportSchema);

export default Report;
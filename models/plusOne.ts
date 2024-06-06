import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

// LEAD SCHEMA is used to store the leads that are generated from the landing page.
// You would use this if your product isn't ready yet and you want to collect emails
// The <ButtonLead /> component & the /api/lead route are used to collect the emails
const plusOneSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  sequence_value: {
    type: Number,
    required: true,
    default: 0,
  },
});

// add plugin that converts mongoose to json
plusOneSchema.plugin(toJSON);

export default mongoose.models.plusOne || mongoose.model("plusOne", plusOneSchema);

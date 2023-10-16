const { model, Schema, Types } = require("../connection");

module.exports = model(
  "designs",
  new Schema({
    user: { type: Types.ObjectId, ref: "users" },
    design: Object,
    createdAt: Date
  })
);

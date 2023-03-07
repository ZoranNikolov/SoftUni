const Photo = require("../models/Photo");

exports.getAll = () => Photo.find({}).lean();

exports.create = (ownerId, photoData) => Photo.create({ ...photoData, owner: ownerId });
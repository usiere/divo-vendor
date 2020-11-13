"use strict";

var aws = require("aws-sdk");
var multer = require("multer");
var multerS3 = require("multer-s3");

var s3 = new aws.S3();

aws.config.update({
  secretAccessKey: process.env.S3_SECRET,
  accessKeyId: process.env.S3_ACCESS_KEY,
  region: "us-east-2"
});

var fileFilter = function fileFilter(req, file, cb) {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};

var upload = multer({
  fileFilter: fileFilter,
  storage: multerS3({
    acl: "public-read",
    s3: s3,
    bucket: 'divoitemsupd',
    metadata: function metadata(req, file, cb) {
      cb(null, { fieldName: "TESTING_METADATA" });
    },
    key: function key(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
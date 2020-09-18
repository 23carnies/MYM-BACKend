const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, default: 0, max: 5},
    comment: { type: String, required: false }
  },
  {
    timestamps: true,
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, lowercase: true, unique: true},
  password: String,
  avatar: String,
  phone: String,
  isSeller: { type: Boolean, required: true, default: false },
  rating: { type: Number, default: 0, required: true },
  numReviews: { type: Number, default: 0, required: true },
  storePicture: String,
  storeName: String,
  storeLocation: String,
  bio: String,
  reviews: [reviewSchema],
}, {
  timestamps: true
});

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

userSchema.pre("save", function (next) {
  // this will be set to the current document
  const user = this;
  if (!user.isModified("password")) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model('User', userSchema);
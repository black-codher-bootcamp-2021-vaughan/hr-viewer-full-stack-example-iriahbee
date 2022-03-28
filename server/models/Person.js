const mongoose = require('mongoose');

const CoordinatesSchema = new mongoose.Schema({
  latitude: {
    type: mongoose.Decimal128,
    required: true
  },
  longitude: {
    type: mongoose.Decimal128,
    required: true
  }
});

const TimezoneSchema = new mongoose.Schema({
  offset: { type: String,required: true },
  description: { type: String }
});

const LocationSchema = new mongoose.Schema({
  street:  {type: String, required: true},
  city:  {type: String, required: true},
  state:  {type: String},
  post_zip_code:  {type: String},
  coordinates:  CoordinatesSchema,
  timezone:  TimezoneSchema
});

const NameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  first: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true
  }
});

const PictureSchema = new mongoose.Schema({
  large: { type: String, required: true },
  medium: { type: String, required: true },
  thumbnail: { type: String, required: true }
});

const DateSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  age: { type: Number },
  thumbnail: { type: String, required: true }
});

const PeopleSchema = new mongoose.Schema({
  gender: {
    type: String,
    required: true
  },
  name: NameSchema,
  location: LocationSchema,
  email: {
    type: String
  },
  picture: PictureSchema,
  nat: {
    type: String,
    required: true
  },
  dob: DateSchema,
  registered: DateSchema
});

module.exports = Person = mongoose.model('people', PeopleSchema, 'people');
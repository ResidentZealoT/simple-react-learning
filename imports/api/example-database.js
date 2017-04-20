// imports the databse package
import { Mongo } from 'meteor/mongo';

// exports a database to be used by the project
export const Examples = new Mongo.Collection("examples");

// defines the schema for items in a database
// specify the type expected by each variable
const ExampleSchema = new SimpleSchema({
  exampleString: {type: String},
  exampleFloat: {type: Number, defaultValue: 0},
  exampleStringOptional: {type: String, optional: true},
});

// attach the schema to database
Examples.attachSchema(ExampleSchema);

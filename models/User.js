const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our User model
class User extends Model {}

// define table columns and configuration
User.init(
  {
    // TABLE COLUMN DEFINITIONS GO HERE
    // define id column
    id: {
      // use the special Sequelize DataTypes object, provide what type of data it is
      type: DataTypes.INTEGER;
      //"not null"
      allowNull: false,
      // define this as the primary key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true
    },
    // define username column
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // define email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // disallow duplicate emails
      unique: true,
      // if allowNull is false, run data through validators before creating the table data
      validate: {
        isEmail: true
      }
    },
    // define password column
    password: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        // password needs to be at least 4 characters long
        len: [4]
      }
    }  
  },
  {
    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: "user",
  }
);

module.exports = User;

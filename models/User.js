const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

// create our User model
class User extends Model {
  // set up method to run on instance data per user to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// define table columns and configuration
User.init(
  {
    // TABLE COLUMN DEFINITIONS GO HERE
    // define id column
    id: {
      // use the special Sequelize DataTypes object, provide what type of data it is
      type: DataTypes.INTEGER,
      //"not null"
      allowNull: false,
      // define this as the primary key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true
    },
    // define username column
    username: {
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
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      // pass in plaintext password in userData.password and saltRound of 10
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
      },

      // set up beforeUpdate lifecycle 'hook' functionality
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },  
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

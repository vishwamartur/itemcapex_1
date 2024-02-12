// Import sequelize and the database connection
const Sequelize = require("sequelize");
const db = require("../config/db");

// Define the User model
const User = db.define(
  "user",
  {
    // Define the attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    role: {
      type: Sequelize.ENUM("admin", "client"),
      defaultValue: "client",
    },
  },
  {
    // Define the options
    timestamps: true,
    underscored: true,
  }
);

// Define the Item model
const Item = db.define(
  "item",
  {
    // Define the attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM("available", "reserved", "unavailable"),
      defaultValue: "available",
    },
  },
  {
    // Define the options
    timestamps: true,
    underscored: true,
  }
);

// Define the Reservation model
const Reservation = db.define(
  "reservation",
  {
    // Define the attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    start_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    end_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    // Define the options
    timestamps: true,
    underscored: true,
  }
);

// Define the associations
User.hasMany(Reservation, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Reservation.belongsTo(User, {
  foreignKey: "user_id",
});

Item.hasMany(Reservation, {
  foreignKey: "item_id",
  onDelete: "CASCADE",
});

Reservation.belongsTo(Item, {
  foreignKey: "item_id",
});

// Export the models
module.exports = {
  User,
  Item,
  Reservation,
};

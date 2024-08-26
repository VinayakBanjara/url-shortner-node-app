import DataTypes from "sequelize";

const urlSchema = (sequelize) => {
    return sequelize.define('urls', {
        shortId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        
        redirectURL: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        visitHistory: {
            type: DataTypes.JSON,  // Using JSON to store array-like data
            allowNull: false,
            defaultValue: [],  // Initialize as an empty array
        }
    });
}

export default urlSchema;
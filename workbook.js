module.exports =( sequelize, DataTypes) => {
    const Workout log = sequelize.define('Workout log', {
    title: {
        type: DataTypes.STRING,
         allowNull: false
    },
    
    date: {
        type: DataTypes.STRING,
        allowNull:false
    
    },
    entry:{
        type: DataTypes.STRING,
        allowNull: false
    },
    owner: {
        type: DataTypes.INTEGER
    }
    })
    return Workout Log;
}
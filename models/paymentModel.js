
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('payment', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING
    },

    payment_channel: {
      type: DataTypes.STRING,
    },

    payment_id: {
      type: DataTypes.STRING,
    },

    amount: {
      type: DataTypes.INTEGER,
    },

    number: {
      type: DataTypes.STRING,
    }

  })

  return Payment
}
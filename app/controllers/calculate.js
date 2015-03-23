var calculate = function () {};

// getFuelEconomy - a function for calculating miles per gallon
calculate.prototype.getFuelEconomy = function (distanceTraveled, fuelConsumed) {
	return (distanceTraveled / fuelConsumed).toFixed(3);
};

module.exports = new calculate();
/** @jsx React.DOM */

var React = require("react");
var calculate = require("../controllers/calculate");

var DistanceSinceFill = React.createClass({
	handleChange: function(event) {
		var distance = event.target.value;
		this.props.handleChange(distance);
	},
	render: function() {
		return <div>
				<input placeholder="distance since last fill" type="text" onChange={this.handleChange} />
			</div>;
	}
});

var FuelAdded = React.createClass({
	handleChange: function(event) {
		var fuel = event.target.value;
		this.props.handleChange(fuel);
	},
	render: function() {
		return <div>
				<input placeholder="total fuel added" type="text" onChange={this.handleChange} />
			</div>;
	}
});

var CurrentMPG = React.createClass({
	render: function() {
		return <div className="current-mpg">Your MPG: {this.props.currentMPG}</div>;
	}
});

var App = React.createClass({
	updateDistance: function(distanceInput){
		console.log("Distance:" + distanceInput);
		this.setState({
			distance: distanceInput,
			currentMPG: this.getCurrentMPG()
		});
	},
	
	updateFuel: function(fuelInput){
		console.log("Fuel Added:" + fuelInput);
		this.setState({
			fuel: fuelInput,
			currentMPG: this.getCurrentMPG()
		});
	},

	getCurrentMPG: function() {
		console.log(this.state);
		return calculate.getFuelEconomy(this.state.distance, this.state.fuel);
	},

	getInitialState: function() {
		return {
			distance: 0,
			fuel: 0,
			currentMPG: 0
		}
	},

	render: function() {
		return (
			<div>
				<DistanceSinceFill handleChange={this.updateDistance} />
				<FuelAdded handleChange={this.updateFuel} />
				<CurrentMPG currentMPG={this.state.currentMPG} />
			</div>
		);
	}
});

module.exports = App;
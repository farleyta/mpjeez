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
		this.setState({
			distance: distanceInput
		});
	},
	
	updateFuel: function(fuelInput){
		this.setState({
			fuel: fuelInput
		});
	},

	getCurrentMPG: function(distance, fuel) {
		if(distance && fuel) {
			return calculate.getFuelEconomy(distance, fuel);	
		}
		return 0;
	},

	getInitialState: function() {
		return {
			distance: 0,
			fuel: 0
		}
	},

	getDefaultProps: function() {
		return {
			currentMPG: 0
		}
	},

	shouldComponentUpdate: function(newProps, newState) {
		return newState.distance && newState.fuel;
	},

	render: function() {
		return (
			<div>
				<DistanceSinceFill handleChange={this.updateDistance} />
				<FuelAdded handleChange={this.updateFuel} />
				<CurrentMPG currentMPG={this.getCurrentMPG(this.state.distance, this.state.fuel)} />
			</div>
		);
	}
});

module.exports = App;
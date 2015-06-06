/** @jsx React.DOM */

var React = require("react");
var calculate = require("../../common/calculate");
var InputDistanceSinceFill = require("./InputDistanceSinceFill.jsx");
var InputFuelAdded = require("./InputFuelAdded.jsx");
var DivCurrentMPG = require("./DivCurrentMPG.jsx");

var App = React.createClass({
	updateDistanceValue: function(distanceInput){
		this.setState({
			distance: distanceInput
		});
	},
	
	updateFuelValue: function(fuel){
		this.setState({
			fuel: fuel
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

		var currentMPG = this.getCurrentMPG(this.state.distance, this.state.fuel);

		return (
			<form method="post">
				<InputDistanceSinceFill updateDistanceValue={this.updateDistanceValue} />
				<InputFuelAdded updateFuelValue={this.updateFuelValue} />
				<DivCurrentMPG currentMPG={currentMPG} />
				{currentMPG ? <button type="submit">Submit</button> : ''}

				<input type="hidden" name="cost" value="4235" />
				<input type="hidden" name="user" value="550f9e8ce4b0e5b0b43a0e72" />
				<input type="hidden" name="vehicle" value="550f9f68e4b0e5b0b43a0e76" />
			</form>
		);
	}
});

module.exports = App;
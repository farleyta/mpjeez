/** @jsx React.DOM */

var React = require("react");
var calculate = require("../controllers/calculate");
var InputDistanceSinceFill = require("../components/InputDistanceSinceFill.jsx");
var InputFuelAdded = require("../components/InputFuelAdded.jsx");
var DivCurrentMPG = require("../components/DivCurrentMPG.jsx");

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
		return (
			<div>
				<InputDistanceSinceFill updateDistanceValue={this.updateDistanceValue} />
				<InputFuelAdded updateFuelValue={this.updateFuelValue} />
				<DivCurrentMPG currentMPG={this.getCurrentMPG(this.state.distance, this.state.fuel)} />
			</div>
		);
	}
});

module.exports = App;
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

	submitFuelEconomy: function(event) {
		event.preventDefault();

		console.log({
			distanceOnTank: this.state.distance,
			amountFuelAdded: this.state.fuel,
			cost: null,
			user: {
				email: "farleyta@gmail.com",
				firstname: "Tim",
				lastname: "Farley",
				vehicle: {
					make: "Subaru",
					model: "Outback XT",
					year: "2005"
				}
			}
		});
	},

	render: function() {

		var currentMPG = this.getCurrentMPG(this.state.distance, this.state.fuel);

		return (
			<form onSubmit={this.submitFuelEconomy}>
				<InputDistanceSinceFill updateDistanceValue={this.updateDistanceValue} />
				<InputFuelAdded updateFuelValue={this.updateFuelValue} />
				<DivCurrentMPG currentMPG={currentMPG} />
				{currentMPG ? <button type="submit">Submit</button> : ''}
			</form>
		);
	}
});

module.exports = App;
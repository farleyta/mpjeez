/** @jsx React.DOM */

var React = require("react");
var calculate = require("../controllers/calculate");

var MilesSinceFill = React.createClass({
	handleChange: function(event) {
		console.log("Miles:" + event.target.value);
		this.setState({value: event.target.value});
	},
	render: function() {
		return <div>
				<input placeholder="miles since last fill" type="text" onChange={this.handleChange} />
			</div>;
	}
});

var GallonsAdded = React.createClass({
	handleChange: function(event) {
		console.log("Gallons:" + event.target.value);
		this.setState({value: event.target.value});
	},
	render: function() {
		return <div>
				<input placeholder="total gallons added" type="text" onChange={this.handleChange} />
			</div>;
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div>
				<MilesSinceFill />
				<GallonsAdded />
			</div>
		);
	}
});

module.exports = App;
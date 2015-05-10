/** @jsx React.DOM */

var React = require("react");
var calculate = require("../controllers/calculate");

var MilesSinceFill = React.createClass({
	handleChange: function(event) {
		var miles = event.target.value;
		this.setState({value: miles});
		this.props.handleChange("Miles:" + miles);
	},
	render: function() {
		return <div>
				<input placeholder="miles since last fill" type="text" onChange={this.handleChange} />
			</div>;
	}
});

var GallonsAdded = React.createClass({
	handleChange: function(event) {
		var gallons = event.target.value;
		this.setState({value: gallons});
		this.props.handleChange("Gallons:" + gallons);
	},
	render: function() {
		return <div>
				<input placeholder="total gallons added" type="text" onChange={this.handleChange} />
			</div>;
	}
});

var App = React.createClass({
	getCurrentMPGs: function(input){
		console.log(input);
	},

	render: function() {
		return (
			<div>
				<div>
					<MilesSinceFill handleChange={this.getCurrentMPGs} />
					<GallonsAdded handleChange={this.getCurrentMPGs} />
				</div>
				<div className="current-mpg"></div>
			</div>
		);
	}
});

module.exports = App;
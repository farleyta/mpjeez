// Component Name: InputDistanceSinceFill

var React = require("react");

module.exports = React.createClass({
	handleChange: function(event) {
		// Fire updateDistanceValue function on parent component, 
		// passing the current distance value
		this.props.updateDistanceValue(event.target.value);
	},
	render: function() {
		return <input placeholder="distance since last fill" type="text" onChange={this.handleChange} />;
	}
});
// Component Name: InputDistanceSinceFill

var React = require("react");

module.exports = React.createClass({
	handleChange: function(event) {
		this.props.updateDistanceValue(event.target.value);
	},
	render: function() {
		return <input placeholder="distance since last fill" type="text" onChange={this.handleChange} />;
	}
});
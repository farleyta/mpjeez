// Component Name: InputFuelAdded

var React = require("react");

module.exports = React.createClass({
	handleChange: function(event) {
		// Fire handleChange function on parent component, 
		// passing the current fuel value
		this.props.updateFuelValue(event.target.value);
	},
	render: function() {
		return <input placeholder="total fuel added" type="text" onChange={this.handleChange} />;
	}
});
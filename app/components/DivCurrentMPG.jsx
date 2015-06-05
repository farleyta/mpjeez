// Component Name: DivCurrentMPG

var React = require("react");

module.exports = React.createClass({
	render: function() {
		if(this.props.currentMPG > 0) {
			return <div className="current-mpg">Your MPG: {this.props.currentMPG}</div>;
		}
		return <div className="current-mpg">No MPG</div>;
	}
});
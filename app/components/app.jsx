var React = require("react");

var App = React.createClass({
	render() {
		return (
			<h1 className="title">{this.props.text}</h1>
		);
	}
});

module.exports = App;
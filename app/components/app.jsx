var React = require("react");

var App = React.createClass({
	getInitialState: function() {
		return {
			count: this.props.initialCount
		};
	},

	_increment: function() {
		this.setState({ count: this.state.count + 1 });
	},

	render: function() {
		return <div className="test-div" onClick={this._increment}>
			{this.state.count}
		</div>;
	}
});

module.exports = App;
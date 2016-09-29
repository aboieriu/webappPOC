var React = require('react');

var JokeContentItem = React.createClass({
	render: function(){
		return (
			<li>
				<i>Id: {this.props.id} </i> <br />
				<b>{this.props.content} </b>
 			</li>
		);
	}
});

module.exports = JokeContentItem;
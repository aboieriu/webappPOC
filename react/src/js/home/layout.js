var React = require('react');
var Storage = require('../common/appStorageHandler');
var Joke = require('./jokeItem');

var BaseJokeApiPath = 'http://api.icndb.com/jokes/random/'

var HomePage = React.createClass({
	getInitialState: function(){
		// initialise data with empty object
		var appData = Storage.getFromStorage();

		return {
			name: appData.name
			, noOfJokes: appData.noOfJokes
			, jokes: []
		}

	}
	, componentDidMount: function() {
		if (this.state.noOfJokes) {
			var self = this;
			$.ajax({
				url: BaseJokeApiPath + this.state.noOfJokes
				, headers: {
					Authorization:this.state.noOfJokes
				}
				, success: function(data){
					console.log(data);
					self.setState({jokes:data.value})
				}
				, error: function(data) {
					console.log("there was an error while fetching jokes :(");
				}
			})
		}
		
	}
	, render: function(){
		return (
			<div>
				<h1>Wellcome {this.state.name}</h1>

				<i> You requested {this.state.noOfJokes} jokes </i>

				<ul>
						{this.state.jokes.map(function(item){
							return <Joke key={item.id} id={item.id} content={item.joke} />
						})}
				</ul>
 			</div>
		);
	}
});

module.exports = HomePage;
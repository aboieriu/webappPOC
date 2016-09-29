var React = require('react');
var Storage = require('../common/appStorageHandler');

var LoginPage = React.createClass({
	getInitialState: function(){
		// initialise data with empty object
		var sessionStorageData = Storage.getFromStorage();
		return {
			name: '-'
			, numberOfJokes: '-'
			, nameFromStorage:sessionStorageData.name
			, noOfJokesFromStorage: sessionStorageData.noOfJokes
		}
	}
	, nameChangeHandler : function(event) {
		this.setState({name:event.target.value});
	}
	, noOfJokesChangleHandler: function(event) {
		this.setState({numberOfJokes:event.target.value});
	}
	, formSubmitClickHandler: function(){
		var dataToStore = {
			name:this.state.name
			, noOfJokes: this.state.numberOfJokes
		}

		// Save data to session storage
		Storage.saveInStorage(dataToStore)
		console.log('data save in session storage');
	}
	, render: function() {
		return (
			<div>
				<p>
					User name is {this.state.name} and request for {this.state.numberOfJokes} jokes <br />
					<i>User name is {this.state.nameFromStorage} (from session storage) and request for {this.state.noOfJokesFromStorage} (from session storage) jokes</i>
				</p>
				<input type="text" name="name" placeholder="Name" onChange={this.nameChangeHandler} /> <br />
				<input type="text" name="numberOfJokes" placeholder="Number of jokes" onChange={this.noOfJokesChangleHandler} /><br />
				<button name="submitForm" onClick={this.formSubmitClickHandler}>Submit</button>
			</div>
		);
	}
});

module.exports = LoginPage;
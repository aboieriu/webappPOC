var React = require('react');
var AjaxSupport = require('../common/AjaxSupport');

var RegisterPage = React.createClass({
	getInitialState: function(){
		return {
			firstName:null,
			lastName: null,
			email:null,
			password:null,
			repeatPassword:null
		}
	}
	, isValidInputValue: function(inputValue) {
		if (!inputValue || inputValue.trim().length === 0) {
			return false;
		}
		return true;
	}

	, firstNameChangeHandler: function(event) {
		var firstNameValue = event.target.value;
		if (!this.isValidInputValue(firstNameValue)) {
			firstNameValue = null;
		}
		this.setState({firstName:firstNameValue});
	}

	, lastNameChangeHandler: function(event) {
		var lastNameValue = event.target.value;
		if (!this.isValidInputValue(lastNameValue)) {
			lastNameValue = null;
		}
		this.setState({lastName:lastNameValue});
	}

	, emailChangeHandler: function(event) {
		var emailValue = event.target.value;
		if (!this.isValidInputValue(emailValue)) {
			emailValue = null;
		}
		this.setState({email:emailValue});
	}

	, passwordChangeHandler: function(event) {
		var passwordValue = event.target.value;
		if (!this.isValidInputValue(passwordValue)) {
			passwordValue = null;
		}
		this.setState({password:passwordValue});
	}

	, password2ChangeHandler: function(event) {
		var password2Value = event.target.value;
		if (!this.isValidInputValue(password2Value)) {
			password2Value = null;
		}
		this.setState({repeatPassword:password2Value});
	}

	, formSubmitHandler: function(event) {
		event.preventDefault();	
		console.log(this.state);

		if (!this.isValidStateForSubmit()) {
			AjaxSupport.post({
				url:'/register-user'
				, data: this.state
				, success: function() {
					console.log('request success');
				}
				, error: function() {
					console.log('my request failed');
				}
			});
			console.log("Form is ready for sumbit");
		} else {
			console.log('there are some issues with the form');
		}
	}

	, isValidStateForSubmit: function() {
		return this.state.firstName && this.state.lastName && this.state.email
		 && this.state.password && this.state.repeatPassword && (this.state.password === this.state.repeatPassword);
	}
	, render: function() {
		return (
			<form>
				<input type="text" name="firstName" placeholder="First name" onChange={this.firstNameChangeHandler} /> <br />
				<input type="text" name="lastName" placeholder="Last name" onChange={this.lastNameChangeHandler} /><br />
				<input type="email" name="email" placeholder="email" onChange={this.emailChangeHandler} /><br />
				<input type="password" name="password" placeholder="Password" onChange={this.passwordChangeHandler}  /><br />
				<input type="password" name="rPassword" placeholder="Repeat password" onChange={this.password2ChangeHandler} /> <br />

				<button type="submit" onClick={this.formSubmitHandler}>Submit</button>
			</form>
		)
	}
});

module.exports = RegisterPage;<br />
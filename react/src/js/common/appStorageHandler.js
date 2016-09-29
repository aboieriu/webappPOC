var appStorageKey = 'appKey';

var storage = {
	saveInStorage: function(dataToSave) {
		sessionStorage.setItem(appStorageKey, JSON.stringify(dataToSave));
	}
	, getFromStorage: function() {
		// initialise data with empty object
		var sessionStorageData = {};
		// Get data from session storage /!\ data comes as string
		var sessionStorageDataString = sessionStorage.getItem(appStorageKey);

		// If data exists
		if (sessionStorageDataString) {
			// parse string to javascript object
			sessionStorageData = JSON.parse(sessionStorageDataString);
		}

		return sessionStorageData;
	}
}

module.exports = storage;
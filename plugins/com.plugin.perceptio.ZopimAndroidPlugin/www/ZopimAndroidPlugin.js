var ZopimAndroid = function() {
};

//echo
ZopimAndroid.prototype.echo = function(successCallback, errorCallback, options) {
    if (errorCallback == null) { errorCallback = function() {}}

    if (typeof errorCallback != "function")  {
        console.log("PushNotification.register failure: failure parameter not a function");
        return
    }

    if (typeof successCallback != "function") {
        console.log("PushNotification.register failure: success callback parameter must be a function");
        return
    }

    cordova.exec(successCallback, errorCallback, "ZopimAndroid", "echo", [options]);
};

// Call this to register for push notifications. Content of [options] depends on whether we are working with APNS (iOS) or GCM (Android)
ZopimAndroid.prototype.init = function(successCallback, errorCallback, options) {
    if (errorCallback == null) { errorCallback = function() {}}

    if (typeof errorCallback != "function")  {
        console.log("PushNotification.register failure: failure parameter not a function");
        return
    }

    if (typeof successCallback != "function") {
        console.log("PushNotification.register failure: success callback parameter must be a function");
        return
    }

    cordova.exec(successCallback, errorCallback, "ZopimAndroid", "init", [options]);
};

ZopimAndroid.prototype.sendMessage = function (successCallback, errorCallback, options) {
	if (errorCallback == null) { errorCallback = function () { } }

	if (typeof errorCallback != "function") {
		console.log("PushNotification.register failure: failure parameter not a function");
		return
	}

	cordova.exec(successCallback, errorCallback, "ZopimAndroid", "sendMessage", [options]);
}
//-------------------------------------------------------------------

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.ZopimAndroid) {
    window.plugins.ZopimAndroid = new ZopimAndroid();
}

if (typeof module != 'undefined' && module.exports) {
  module.exports = ZopimAndroid;
}
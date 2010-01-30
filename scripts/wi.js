var Wi = (function(){

	var that = {};
	
	function call(params, callback){
	  chrome.extension.sendRequest(params,callback);
	}
	
	that.hasToken = function(){
		return !!localStorage['TK'];
	}
	
	that.authenticate = function(){
	  call({'action':'authenticate'},function(response){
	    localStorage['TK'] = response.token;
	  });
	}
	return that;
})();

/*
	alert('the message is: ' + response.message);
});*/
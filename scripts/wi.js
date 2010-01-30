var Wi = (function(){
	var that = {};
	
	// #Private
	function call(params, callback){
	  alert(params.action);
	  chrome.extension.sendRequest(params,callback);
	}
	
	that.findEmailsElements = function(){
	  return $("a[href^='mailto:']");
	}
		
	that.createBCards = function(emails, callback){
	  call({'action':'getCards','params':{'emails':emails}},function(response){
	    callback(response.ok,response.cards);
	  })
	}
	
	return that;
})();
var Bk = (function(){
  var that = {};
  
  that.getProfiles = function(params){
    var result = {}
    if(localStorage['token']){
      result.ok = true;
      result.profiles = findProfiles(params.emails);
    }else{
      result.ok = false;
      result.authUrl = AUTH_URL;
    }
  }
  
  that.handle = function(request, response){
    var action = this[request.action];
    if(!action){
      response({'error': request.action + ' not found'});
    }else{
      var result = action(request.params);
      if(response) response(result);
    }
  }
  return that;
})();

chrome.extension.onRequest.addListener(function(request, sender, response){
  Bk.handle(request,response);
});
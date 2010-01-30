var Bk = (function(){
  var that = {};
  
  that.authenticate = function(params){
    return {'token':'here you go sir'};
  }
  
  that.handle = function(request, response){
    alert('reach');
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
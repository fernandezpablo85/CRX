var Xt = (function(){
  var that = {};
  
  function remoteCall(params, callback){
    chrome.extension.sendRequest(params,function(response){
      if(response.error){ 
        throw response.error;
      }else{
        callback(response); 
      }
    });
  }
  
  that.call = function(action, params, callback){
    alert('na')
    switch(args.length){
      case 1:
        remoteCall({'action':action});
        break;
      case 2:
        if(args[1] instanceof Function){
          remoteCall({'action':action},callback);
        }else{
          remoteCall(params.concat({'action':action}));
        }
        break;
      case 3:
       remoteCall(params.concat{'action':action},callback);
    }
  }
  
  return that;
})();
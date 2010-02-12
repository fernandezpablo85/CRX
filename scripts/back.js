chrome.extension.onRequest.addListener(function(request, sender, response){
  if(request.action == 'isAuth'){
    if(localStorage['tk']){
      response({ok:true})
    }else{
      response({ok:false});
    }
  }else if(request.action == 'doAuth'){
    var success = function(token,code){
      var url = "https://api.linkedin.com/uas/oauth/authorize?" + token;
  		chrome.tabs.create({'url':url});
  	}
    $.ajax({url:'http://linkedin-crx.appspot.com/auth', dataType:"text",'success':success});
	}
});
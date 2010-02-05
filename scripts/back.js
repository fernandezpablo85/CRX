var AUTH_URL = 'http://linkedin-crx.appspot.com/authenticate';

chrome.extension.onRequest.addListener(function(request, sender, response){
  if(request.action == 'isAuth'){
    if(localStorage['tk']){
      response({ok:true})
    }else{
      response({ok:false});
    }
  }else if(request.action == 'newTab'){
    chrome.tabs.create({'url':request.tab});
  }
});
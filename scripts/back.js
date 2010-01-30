var AUTH_URL = 'http://linkedin-crx.appspot.com/authenticate';

function findProfiles(emails){
  
}

chrome.extension.onRequest.addListener(function(request, sender, response){
  if(request.action == 'findProfiles'){
    if(localStorage['tk']){
      response({'code':'200','profiles':findProfiles(request.emails)})
    }else{
      response({'code':'401','auth':AUTH_URL});
    }
  }
});
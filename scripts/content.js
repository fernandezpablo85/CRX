function fillProfiles(){}

var $emails = $('a[href^=mailto:]');

function createAuthForms(auth_url){
  $wrapper = $('<span/>').addClass('licrx_wrap').hover(function(){
    alert('over');
  },function(){
    alert('out');
  });
  
  $emails.each(function(){
    $(this).wrap($wrapper);
  });
}
var emails = [];
$emails.each(function(){
  emails.push(this.href);
});

if(emails.length > 0){
  chrome.extension.sendRequest({'action':'findProfiles','emails': emails}, function(response){
    if(response.code == '200'){
      fillProfiles(response.profiles);
    }else{
      createAuthForms(response.auth);
    }
  });
}
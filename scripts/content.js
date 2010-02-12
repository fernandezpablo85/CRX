var $emails = $('a[href^=mailto:]');

var  contents = "You must <a id='li_login'>Authenticate</a> in order to use this extension";

var $authTooltip = $('<div/>').attr('id','li_ext_unauth').addClass('li_ext_tooltip').html(contents);

$('body').append($authTooltip);

var emails = [];
$emails.each(function(){
  emails.push(this.href);
});

if(emails.length > 0){
  chrome.extension.sendRequest({'action':'isAuth'}, function(response){
    if(response.ok){
      createAuthForms();
    }else{
      createAuthForms();
    }
  });
}

function createAuthForms(){
  $emails.each(function(){
    $wrapper = $('<span/>').addClass('li_ext_wrap');
    $icon = $('<img/>').attr('src',chrome.extension.getURL('img/icon.jpg')).addClass('li_ext_icon');
    $icon.tooltip({tip:'#li_ext_unauth',effect:'fade'})
        
    $(this).wrap($wrapper);
    $(this).parent().append($icon);
  });
  
  $('.li_ext_wrap').live('mouseenter',function(){
    $(this).children('.li_ext_icon').stop(true,true).fadeIn('slow');
  });
  $('.li_ext_wrap').live('mouseleave',function(){
    $(this).children('.li_ext_icon').fadeOut(600);
  });
  
  $('#li_login').click(function(){
	  chrome.extension.sendRequest({'action':'doAuth'});
  });
}

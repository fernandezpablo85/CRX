var $emails = $('a[href^=mailto:]');

var emails = [];
$emails.each(function(){
  emails.push(this.href);
});

if(emails.length > 0){
  chrome.extension.sendRequest({'action':'isAuth'}, function(response){
    if(response.ok){
      createAuthForms(getOk());
    }else{
      createAuthForms(getAuth());
    }
  });
}

function createAuthForms(popupContent){
  $emails.each(function(){
    $popup = $('<div/>').addClass('li_ext_popup').html(popupContent);
    $wrapper = $('<span/>').addClass('li_ext_wrap');
    $icon = $('<img/>').attr('src',chrome.extension.getURL('img/icon.jpg')).addClass('li_ext_icon');
        
    $(this).wrap($wrapper);
    $(this).parent().append($popup);
    $(this).parent().append($icon);
  });
  
  $('.li_ext_wrap').live('mouseenter',function(){
    $(this).children('.li_ext_icon').stop(true,true).fadeIn('slow');
  });
  $('.li_ext_wrap').live('mouseleave',function(){
    $(this).children('.li_ext_icon').fadeOut(600);
  });
  
  
  $('.li_ext_icon').live('mouseenter',function(){
    $(this).prev('.li_ext_popup').stop(true,true).fadeIn('slow');
  });
  
  $('.li_ext_icon').live('mouseleave',function(event){
    $(this).prev('.li_ext_popup').fadeOut(600);    
  });
  
  $('.li_ext_icon').live('click',function(event){
    newTab('http://linkedin-crx.appspot.com/authorize');
  });
}

function newTab(url){
  chrome.extension.sendRequest({'action':'newTab','tab':url});
}

function getOk(){
  return "<p>Cool You're authenticated</p>"
}

function getAuth(){
  return "<p>Click to authenticate</p>"
}
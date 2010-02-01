var $emails = $('a[href^=mailto:]');

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

function createAuthForms(auth_url){
  $wrapper = $('<span/>').addClass('li_ext_wrap');
  $wrapper.hover(function(event){
    if(event.currentTarget == this){
      $(this).children('a.li_ext_icon').fadeIn('slow');
    }
  },function(event){
    if(event.currentTarget == this){
      $(this).children('a.li_ext_icon').fadeOut(600);
    }
  })
  $emails.each(function(){
    $(this).wrap($wrapper);
  });
  $anchor = $('<a/>').attr('href','http://www.linkedin.com').
                      addClass('li_ext_icon').
                      css({'text-decoration':'none','display':'none'});
  
  $icon = $('<img/>').attr('src',chrome.extension.getURL('img/icon.png')).
                      css({'vertical-align':'middle','padding-left':'5px'});
  $anchor.append($icon);
  $('.li_ext_wrap').append($anchor);
}

function fillProfiles(){
  
}

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
  $popup = $('<div/>').addClass('li_ext_popup').html(popupContent);
  $wrapper = $('<span/>').addClass('li_ext_wrap');
  
  $wrapper.hover(function(event){
    $(this).children('a.li_ext_icon').stop(true,true).fadeIn('slow');
  },function(event){
    $(this).children('a.li_ext_icon').fadeOut(600);
  })
  
  $emails.each(function(){
    $(this).wrap($wrapper);
    $(this).parent().append($popup);
  });
  
  $anchor = $('<a/>').addClass('li_ext_icon').attr('href','#');
  $anchor.hover(function(event){
    $(this).prev('.li_ext_popup').stop(true,true).fadeIn('slow');
  },function(event){
    $(this).prev('.li_ext_popup').fadeOut(600);    
  });
  
  $icon = $('<img/>').attr('src',chrome.extension.getURL('img/icon.png'));
  $anchor.append($icon);
  $('.li_ext_wrap').append($anchor);
}

function getOk(){
  return "<p>Cool You're authenticated</p>"
}

function getAuth(){
  return "<p>Too bad you must <a href='http://linkedin-crx.appspot.com/authenticate'>authenticate</a>"
}
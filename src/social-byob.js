var SHARE_DEBUG_TAG = "socialShare";

function shareInit(settings){
  if(settings.hasOwnProperty("twitter")){
    initTwitter(settings);
  }

  if(settings.hasOwnProperty("facebook")){
    initFacebook(settings);
  }

  if(settings.hasOwnProperty("googlePlus")){
    initGPlus(settings);
  }

  if(settings.hasOwnProperty("evernote")){
    initEvernote(settings);
  }

  if(settings.hasOwnProperty("linkedIn")){
    initLinkedIn(settings);
  }

  if(settings.hasOwnProperty("reddit")){
    initReddit(settings);
  }
}

function initEvernote(settings){
  var eShares = document.getElementsByClassName(settings.evernote.class);

  if(!settings.evernote.hasOwnProperty("url") || !settings.evernote.hasOwnProperty("title")){
    console.log(SHARE_DEBUG_TAG+": evernote must have a url property and a title property");
    return;
  }

  for(var i=0; i < eShares.length; i++){
    eShares[i].addEventListener("click", function(e){
      e.preventDefault();
      window.open(
        "http://www.evernote.com/clip.action?url="+encodeURIComponent(settings.evernote.url)+"&title="+encodeURIComponent(settings.evernote.title),
        "shareOnEvernote",
        "height=500,width=500"
      );
    });
  }
}

function initLinkedIn(settings){
  var inShares = document.getElementsByClassName(settings.linkedIn.class);

  if(!settings.linkedIn.hasOwnProperty("url") || !settings.linkedIn.hasOwnProperty("title") || !settings.linkedIn.hasOwnProperty("domain")){
    console.log(SHARE_DEBUG_TAG+": linkedIn must have url, title, and domain properties");
    return;
  }

  for(var i=0; i < inShares.length; i++){
    inShares[i].addEventListener("click", function(e){
      e.preventDefault();
      window.open(
        "http://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(settings.linkedIn.url)+"&title="+encodeURIComponent(settings.linkedIn.title)+"&source="+encodeURIComponent(settings.linkedIn.domain),
        "shareOnLinkedIn",
        "height=500,width=500"
      );
    });
  }
}

function initReddit(settings){
  var rShares = document.getElementsByClassName(settings.reddit.class);

  if(!settings.reddit.hasOwnProperty("url") || !settings.reddit.hasOwnProperty("title")){
    console.log(SHARE_DEBUG_TAG+": reddit must have url and title properties");
    return;
  }

  for(var i=0; i < rShares.length; i++){
    rShares[i].addEventListener("click", function(e){
      e.preventDefault();
      window.open(
        "http://www.reddit.com/submit?url="+encodeURIComponent(settings.reddit.url)+"&title="+encodeURIComponent(settings.reddit.title),
        "shareOnReddit",
        "height=750,width=1000"
      );
    });
  }
}

/*
* @param text                   The tweet text
* @param url (optional)         The url to tweet
* @param hashtags (optional)    A comma-separated list of hashtags WITHOUT the # symbol
* @param via (optional)         A username to associate and suggest following after posting the tweet.
* @param related (optional)     An array of related usernames of the form:
*             [{username: 'bob', description: 'Owner of example.com'}....]
*/
function initTwitter(settings){
  var twitShares = document.getElementsByClassName(settings.twitter.class);

  if(!settings.twitter.hasOwnProperty("text")){
    console.log(SHARE_DEBUG_TAG+": twitter must have a text property");
    return;
  }

  for(var i=0; i < twitShares.length; i++){
    twitShares[i].addEventListener("click", function(e){
      e.preventDefault();
      var addr = "https://twitter.com/intent/tweet?text="+encodeURIComponent(settings.twitter.text);

      if(settings.twitter.hasOwnProperty("url")){
        addr += "&url="+encodeURIComponent(settings.twitter.url);
      }

      if(settings.twitter.hasOwnProperty("hashtags")){
        addr += "&hashtags="+settings.twitter.hashtags;
      }

      if(settings.twitter.hasOwnProperty("via")){
        addr += "&via="+settings.twitter.via;
      }

      if(settings.twitter.hasOwnProperty("related")){
        var relArray = [];

        for(var i=0; i < settings.twitter.related.length; i++){
          var u = settings.twitter.related[i];
          relArray.push(u.username+"%3A"+encodeURIComponent(u.description));
        }

        addr += "&related="+relArray.join(",");
      }

      var w = window.open(
        addr,
        "shareOnTwitter",
        "height=500,width=500"
      );
    });
  }
}

function initFacebook(settings){
  var fbShares = document.getElementsByClassName(settings.facebook.class);

  if(!settings.facebook.hasOwnProperty("url")){
    console.log(SHARE_DEBUG_TAG+": facebook must have a url property");
    return;
  }

  for(var i=0; i < fbShares.length; i++){
    fbShares[i].addEventListener("click", function(e){
      e.preventDefault();
      window.open(
        "http://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(settings.facebook.url),
        "shareOnFacebook",
        "height=500,width=500"
      );
    });
  }
}

// Google Plus
function initGPlus(settings){
  var gShares = document.getElementsByClassName(settings.googlePlus.class);

  if(! settings.googlePlus.hasOwnProperty("url")){
    console.log(SHARE_DEBUG_TAG+": googlePlus must have a url property");
    return;
  }

  for(var i=0; i < gShares.length; i++){
    gShares[i].addEventListener("click", function(e){
      e.preventDefault();
      window.open(
        "https://plus.google.com/share?url="+encodeURIComponent(settings.googlePlus.url),
        "shareOnGoogle",
        "height=500,width=500"
      );
    });
  }
}

(function(settings){
  shareInit(settings);
})(shareSettings);

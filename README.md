# Social BYOB (Bring Your Own Buttons)
A simple JS library to add social sharing events to your own buttons.

# Why?

There are plenty of social sharing widgets out there, but most are slow, some require registration, and many of them look ugly. This library makes it easy to use your own buttons and turn them into social sharing buttons. And because they use each social network's own sharing URL, there no registration, no API integrations, no info required. Just the buttons.

# Get started

Add a button...

```html
<button class='share-twitter'>Tweet this</button>
<button class='share-facebook'>Share on Facebook</button>
<button class='share-google'>Google +</button>
<button class='share-linkedin'>Share on LinkedIn</button>
```

Specify your settings.

```html
<script>
var shareSettings = {
  twitter: {
    class: 'share-twitter',
    text: 'This is what gets pre-filled into the tweet',
    url: window.location.href,
    via: '@YourTwitterUsername'
  },
  facebook: {
    class: 'share-facebook',
    url: window.location.href
  },
  googlePlus: {
    class: 'share-google-plus',
    url: window.location.href
  },
  linkedIn: {
    class: 'share-linkedin',
    url: window.location.href,
    title: 'Title your post',
    domain: window.location.hostname
  }
};
</script>
```

Pull in the script. Must come after your settings have been specified.

```html
<script type='text/javascript' src='social-byob.js'></script>
```

That's all. Try clicking the buttons now to see if the share window pops up.

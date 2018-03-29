# Social BYOB (Bring Your Own Buttons)
A simple JS library to add social sharing events to your own buttons. It currently supports Twitter, Facebook, Google +, LinkedIn, Reddit, Evernote, and Tumblr.

**Please note** that this is in early development and may have some breaking changes in the near future.

# Benefits

## No API or registration
Uses the native sharing URL of each social network. No middle man requiring registration or API setup.

## Simple
Just a few lines of code turns any button into a sharing button.

## Mobile friendly
The share page opens in a new browser window, so it opens based on the user's browser settings.

## Flexible
Pick which networks you want to use depending on your audience.

## Hackable

Sharing parameters can be set dynamically. For example, you could add UTM parameters to the share URL if you wanted, or even add different UTM parameters for each sharing network.

You could also set the URL to a bit.ly link or other link shortener, or use your own analytics system.

## Lightweight

The minified version is just 3.6kb.

# Why?

There are plenty of social sharing widgets out there, but most are slow, some require registration, and many of them look ugly. This library makes it easy to use your own buttons and turn them into social sharing buttons. And because they use each social network's own sharing URL, there no registration, no API integrations, no info required. Just the buttons.

# See it in action

This is used in production on my site at [Lernabit.com](https://lernabit.com). Check out any of the sharing buttons on that site for a real-world demonstration.

# Get started

Add a button...

```html
<button class='share-twitter'>Tweet this</button>
<button class='share-facebook'>Share on Facebook</button>
```

Specify your settings.

```html
<script>
// This must be called "shareSettings"
var shareSettings = {
  twitter: {
    class: 'share-twitter',
    text: 'This is what gets pre-filled into the tweet',
    url: window.location.href,
    via: 'YourTwitterUsername'    // Do not add the @ sign
  },
  facebook: {
    class: 'share-facebook',
    url: window.location.href
  }
};
</script>
```

Pull in the script. This must come after your settings have been specified.

```html
<script type='text/javascript' src='social-byob.min.js'></script>
```

That's all! Checkout the examples for a complete setup including the other social networks.

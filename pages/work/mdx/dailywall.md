## How the idea came

First world problems - I get bored of my wallpapers every other week, and finding a new wallpaper that I like may take quite a bit of time. At some point I thought "Hey, what if I made a thing that would change my wallpaper every day?". I told about this idea to a few friends and they were pretty excited about it as well. So I decided to build the app.

## The technology

The app is built using [Electron](https://electronjs.org) and [Next.js](https://nextjs.org). I started noticing that most of my projects use Next at this point. If you haven't worked with it before, you should definitely check it out, it's super easy to get started with.

### The tale of two processes

An Electron app has 2 processes - **renderer**, where all the pretty stuff is rendered and **main**, which has lower level access to system stuff. Like changing a wallpaper. I could only do it from the main process, but all the user-facing stuff was in renderer.

Luckily, Electron has an <abbr title="Inter-Process Communication">IPC</abbr> module which can help resolve this and using React in the renderer makes it fairly easy to respond to events in UI.
I ended up having a total of about 10 different IPC messages for everything including timers, authentication, preferences, etc.

### The Cloud™

I originally wanted to use Unsplash API for getting pictures, but I was told by the people of Unsplash that using the API for an app such as mine is not allowed as it goes against their API terms. This is what actually caused me to put the app on a shelf for quite a while.

But then when I was talking about it with [Andrey Azimov](http://andreyazimov.com) he suggested to host the collection of pictures myself. So I spent a few days creating a "curated" collection of pictures from all sorts of places including Unsplash, Pexels and Pixabay.

There was a total of about ~2000 images. Then I put them all on Google Cloud Storage and wrote a simple API to get a random photo. The API also supports an `except` parameter, that makes sure no image is ever repeated for a given user.

### Pro & Payments

Once I was done with the v0.1 of the app, a friend of mine suggested that I added a skip/rewind functionality. I thought it was a good idea, but it would simply turn the app into a wallpaper scroller which negates the idea of "a new wallpaper every day". And then he suggested that it should be a "Pro" feature. And as such the **DailyWall Pro** was born.

Basic DailyWall allows one skip per day. DailyWall Pro allows infinite skips and rewinds.

But in order for the Pro version to exist, I needed to accept payments somehow. I can't use Stripe for payments since I'm not a first world citizen 😑

So I needed another option. Andrey Azimov recently [wrote a post](https://medium.com/@AndreyAzimov/how-to-accept-payments-online-if-you-cant-use-stripe-a16e6df98b1d?source=user_profile---------3------------------) about this where he suggested some options, but I decided to go with good old PayPal. They have a pretty straightforward SDK for Node.js which I could integrate nicely over an evening. I also added [SendGrid](https://sendgrid.com) for sending payment receipts with activation codes.

## Product Hunt launch and multiple desktops

Once everything was done, it was time to launch on [Product Hunt](https://producthunt.com). It was a smooth launch overall. The app didn't make it to Top 5, but it did get quite a few downloads and some Pro upgrades.

However people almost immediately started requesting support for multiple screens (the initial app could only set the wallpaper on the space/screen from which it was launched).

So by a popular demand I implemented the multiple display support as well as multiple spaces support, which is now available as part of DailyWall Pro

## Conclusion

I think this about covers it. [Give it a shot](https://dailywall.space) yourself if you're interested. If you're really interested, you can support my work by getting a Pro version for $3.99 so I could get another coffee :)

I don't drink coffee though... Anyway! Thanks for your time and have an amazing day!
import TweetEmbed from 'react-tweet-embed';

## What and why

For a while now I've been a pretty big fan of ZEIT. I absolutely love [Next.js](https://nextjs.org) (this website is built with it) and for a few months now I've been using their deployment platform [Now](https://now.sh). 

Now has hands down the best developer experience ever. In fact here's what I tweeted out shortly after I started using it:

<TweetEmbed id="974546903764316162" />

If you haven't checked it out before, I highly recommend it. One command to deploy anything. Sometimes 1.5 commands, but that's it! And you get SSL, HTTP/2 and lots of sweet stuff out of the box that you'd otherwise need to configure yourself. Go check it out.

## The idea of this app

So as I've mentioned before, I've been using Now for some time now and it's been mostly great. The CLI experience is awesome, the web dashboard is great and the desktop app is pretty good for what it does. However...

I'm very often not in front of my computer. Especially since quitting my day job recently. And I tend to do a lot of stuff on my phone. I'm talking about like **a lot**. The amounts of GitHub sources alone I read on my phone over last year is way beyond reasonable at this point 😅

And while ZEIT's web dashboard works on mobile it didn't really click with me as much as the desktop version. So I thought "Hey, their API is open and documented, why not build an app for it?". And that's what I ended up doing :)

## What it does

Here's a full list of features:

- Event history
- Deployments view
- Active aliases
- Domains with Now CDN status
- Usage statistics to date
- Teams support
- Spotlight search
- Touch ID / Face ID
- Today widgets (Instances, Usage)
- Apple Watch app

That's quite a bit of features 🙈

So how was it all done?

## The design

When approaching the design, I wanted to keep the ZEIT feel as much as possible. It works really well and I didn't really think it needed changing. Thankfully, ZEIT has a [section on their website](https://zeit.co/components) with their primary design elements, logos, etc., which was a great reference.

So after adding some minor "mobile" touches here's what it ended up looking like:

![Screenshot 1](/static/work/case-studies/now-mobile/1.jpg)

![Screenshot 2](/static/work/case-studies/now-mobile/2.jpg)

![Screenshot 3](/static/work/case-studies/now-mobile/3.jpg)

![Screenshot 4](/static/work/case-studies/now-mobile/4.jpg)

## The tech

So now that the design was done it was time to start building it. And here's what it's built with.

### React Native

The app is built almost entirely with React Native, because React. Native.

And now you're thinking

> Oi wait, what do you mean "almost"?

We'll get to that in a moment.

So, I used React Native to build the core of the app - authentication, views and everything. At this point React Native has solutions for most of the things you might need to do in a mobile app such as Touch ID integration, etc.

### React Context API

Let me tell you this. I love Redux. It's awesome. It's also really tedoius. I knew how I wanted to handle data in this app and I really didn't want to overcomplicate things with Redux.

Luckily, a new Context API had just landed in React some time before I started working on the app so I thought "Hey, this is perfect!". So I used that. Which may not have been the absolute best of ideas as `<Provider />` component is now over 400 lines but it works really well for what I need it to do, so I'm okay with it.

### Swifty parts

<p>
	<div style={{ width: '100%',height: 0, paddingBottom: '56%', position: 'relative' }}><iframe src="https://giphy.com/embed/3o7aDgsiRMtIlrSZpu" width="100%" height="100%" style={{ position: 'absolute' }} frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
</p>

The app itself is built with React Native. Spotlight, Touch ID and a bunch of other things are implemented using modules. But there's 2 things (or 3 things. Let's make it 2.5 things) in the app that couldn't be built with React Native - Today extensions and Apple Watch app.

### Today extensions

The app provides 2 Today widgets - **"Instances"** that shows you your 5 latest deployments and **"Usage"** which shows you your active instance count and bandwidth usage.

While you [technically can](https://github.com/matejkriz/react-native-today-widget) build Today extensions with React Native, it didn't seem like the best idea to me because iOS imposes a ridiculous memory limit of **16MB** on Today extensions and React Native would eat up most of that limit so I decided to build them natively.

If anything, it was a good excuse to start learning Swift - something I've been planning to do for a long time now.

So I implemeted the widgets (iOS storyboards feel super weird after React) and set up data sharing from the main app via a [Shared App Group](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/SharingData.html) that is updated either every time the app pulls the new data when opened or every 15 minutes using [background refresh](https://developer.apple.com/documentation/uikit/core_app/managing_your_app_s_life_cycle/preparing_your_app_to_run_in_the_background/updating_your_app_with_background_app_refresh) task.

Fortunately there are modules for handling both [shared groups](https://github.com/KjellConnelly/react-native-shared-group-preferences) and [background refresh](https://github.com/transistorsoft/react-native-background-fetch) for React Native. Gotta love the JS community :)

### Watch App

I also wanted the app to have an Apple Watch app because why not at this point? 😅

Now, unlike with Today widgets there's actually no way at all to use React Native for the Watch apps, so with this one I had no choice but to get Swifty.

I also wanted the Watch app to be completely self-sufficient so just displaying data passed from the phone is not something I wanted to do. So I had to figure out how to get and handle data from the Watch directly.

#### Alamofire & SwiftyJSON

Coming from JS world, working with network and JSON in Swift is... not inspiring. Fortunately yhere are libraries that simplify it quite a bit making it a breeze. There's [Alamofire](https://github.com/alamofire/alamofire) for networking and [SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON) for working with JSON that nicely handles Alamofire's responses.

So I set up the interface in storyboards and used those libs to fetch and handle data that would then be stored on the Watch and displayed to the user or used in a watch face complication.

## Open Source

Since ZEIT's own client apps are fully open source, it's only fair for this app to be as well. As such, all the code for it is [available on GitHub](https://github.com/rdev/now-mobile). Contributions are welcome :)

## Conclusion

I feel like that's most of it for this project. If you're using Now, [try it out](https://itunes.apple.com/us/app/now-mobile/id1418434895?ls=1&mt=8) yourself and let me know what you think about it.
  
If you're interested, you can check out other stuff I made by clicking that back button at top of the page :)

Thanks for your time and have an amazing day!
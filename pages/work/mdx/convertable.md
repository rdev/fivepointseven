## The story of the app

The idea of the app came to me during [Daily UI](http://www.dailyui.co/) challenge.
The theme was ”Calculator” and I came up with the idea of a calculator that converts currencies for you.

![calculator-screenshot](/static/work/case-studies/convertable/design.jpg)

After a while, I actually built the app selfishly for myself, but then I decided to put
it up in the App Store for everyone else.

## How it works

The app has 3 screens: calculator, history, and settings.  
The app is designed to be very minimal, so settings view consists of ”realtime calculation” switch and a list of
currencies to choose from. The app supports 155 currencies including Bitcoin.  
  
Calculator view is the primary view of the app. It has the number pad and two sliders to sellect a currency pair.
Top slider is ”convert from” and bottom slider is ”convert to”.  
The way the app works is it calculates the thing, but it displays the result already converted to your target currency.  
  
History view displays all your previous calculations and information about the app.

## The tech

It was a simple weekly project, so there’s really not much to discuss, but let’s discuss nonetheless.

### React Native

I’m not the native developer, so the obvious choice of technology was React Native. I know my way around React Native and the development process is pretty fast.

### Currency API

Currency rates are pulled from [currencyconverterapi.com](http://currencyconverterapi.com/). The app pulls the rate once you select
a pair using sliders, and caches it for 24 hours to avoid API usage abuse.

## Conclusion

That covers the Convertable project. [Give it a shot](https://itunes.apple.com/us/app/convertable-calculator/id1394642357?ls=1&mt=8)
yourself and leave a review if you like it (or if you don’t). If you’re interested to know more of my projects,
hit that back button at the top and check out my other projects.  
  
Thanks for your time and have an amazing day!
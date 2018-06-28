## The idea behind the website

Since I registered ”fivepointseven.com” in 2015, I’ve re-done my website about 5
times. That’s more than once a year. And I was never quite happy with the result.
Given that I never really had time to think it through and build it, I always
resorted to using themes. And we all know how that works in the end.

So I decided, ”Okay, this time will be different!”. And it certainly was <span role="img" aria-label="smile">😃</span>

## Show me the tech

At the time of building and wrighting this, one of my primary areas of experience is
React. So it’s only fair to use React to build my own website, right? Well, yeah,
but just building yet another React website is not good enough.

This website is meant to be a technology showcase, so I tried to pack as much into
it as possible. Among other things, it leverages CSS Grid Layout, Service Workers,
Server Side Rendering, has sweet animations and fluid user experience, it’s fully
ARIA-compilant and it even works with JavaScript completely disabled (with a few
minor exceptions). I mean, holy shit, right?

And I haven’t even told you about all the non-obvious stuff yet. But let’s go
through everything piece by piece.

### Next.js

First things first, this website is a Next.js app.

Next.js is an amazing framework built by cool people at Zeit and it is the best
way to do server side rendering with React, period. It also makes it incredibly
easy to lie to the user (more on this later) to give them that sweet perceived
performance.

### Service Workers

Yes, this website is also offline first. Which is really an accident <span role="img" aria-label="smile">😃</span>

See, I still don’t believe that the whole ”offline first web” thing is gonna
fly. I mean, ”web” and ”offline” are literally contradictory words. But
nevertheless, people are doing offline webapps with service workers these days.
What service workers are also really good at, is lying to the user. This whole
damn website is built on lies!

See, service workers are sneaky. They install in your browser quietly, they
intercept your requests and non-consentually put things in your cache. Which
makes them perfect experience enhancers.

When you load any given page on this website, you load about 100-200kb of
content. If your browser supports service workers, that little guy also gets
installed. And upon installation it pulls every single thing in existence on
this website (about 1.2mb total) into your cache, and from that point on, the
whole website is loaded entirely from disk, which is near instant. And by
complete accident, it also makes the website offline first <span role="img" aria-label="idk">🤷🏻‍♂️</span>.

### Grid Layout

CSS Grid is wonderful and magical and there’s absolutely no reason not to use
it.

> – Oi Max, but what about old browsers?

They have auto-update functionality since 2014. Old browsers is a thing that
haunts systems that rely on lots of legacy shit. Most web applications built
today - don’t and shouldn’t.

### Tracking

I’m watching u <span role="img" aria-label="eyes">👀</span>

Every website does, to be honest. Everyone has those activity heatmaps, referer
trackers, etc, etc. And this website is no exception. It uses [Keen.io](https://keen.io)
to aggregate lots and lots of custom events that I can then sort and query how I
need. And unlike most of those abovementioned websites, I’m honest about it -
your every move is being tracked. Clicked a link? Tracked. Read this thing till
the end? Tracked. Scanned a QR code on my business card? Tracked!

### Telegram

Contact form is not using email. Email is offensive. I don’t like email. I do
use it and check it regularly, but for the purpose of receiving messages from
people I don’t think it’s the best solution.

As such, contact form is using a [Telegram](https://telegram.org) bot to send me an alert
when someone fills out the form. I’m on Telegram almost
24/7, so that works perfectly for me.

### Them animations

There’s a total of 40 CSS animations on the website (excluding basic
transitions) to provide maximum magic when interacting with the site.

At first I was planning to use GSAP and do animations in JavaScript because of
GSAP’s amazing timeline, but it started quickly becoming a maintenance pain and,
well, required JavaScript to work, so I decided to switch to CSS animations.
That way, most of the magic works even when JS is completely disabled.

### MDX

As of recently, all the case study pages including this one are written in Markdown using
[MDX](https://github.com/mdx-js/mdx).
MDX enables amazing workflow with Markdown and React and I really recommend checking it out.

### SCSS

There’s not a single `!important` in any of the styles.

Mind. Blown.

### Flow

Code is fully typed using [Flow](https://flow.org) types.

### Testing

Tests are written in [Jest](https://facebook.github.io/jest/) as it’s my preferred testing framework.
Airbnb’s [Enzyme](http://airbnb.io/enzyme/) is used to test React components.

### Deployment

The site was originally deployed with Docker on Google Cloud Platform, but some
time ago I moved it to Zeit’s [Now](https://zeit.co/now) platform. 
Now is a beautiful way to deploy Node.js applications and it removes all the headache 
from the deployment process.

After the CI is done with the build, it puts all the secrets in place, deploys
the website to Now and aliases the new deployment to the domain. Smoooooth.

### HTTP/2

Website is served via HTTP/2 which is supposed to give you some of that extra
speed due to the sweet multiplexing that H2 does.

## What was that about lying to the user?

![suspicious](/static/work/case-studies/my-website/suspicious.jpg)

Yeah, so most of the magic that you see around here is perceived. Let’s break down
all the lies, starting from the first thing on the website.

### The spinny compass

When you go to [fivepointseven.com](https://fivepointseven.com), you’ll see a spinny compass animation.
Now, due to the nature of CSS, that compass would spin when you go to that page
no matter what, and we don’t want that to happen when transitioning from ”About” and
”Contact” pages. We want compass to just slide into it’s place.
So we need to sprinkle some JavaScript on it to take care of this.

Next.js makes achieving this incredibly easy. What really happens when you go to
root from those two pages, is you don’t go to ”`/`”.
You go to ”`/?nospin=true`”. That query string is hidden from
the user, but available to Next.js router, which makes the magic happen.

### Loading speed

We’ve already talked about service workers and how the site uses caching. It
pulls all of website’s data to disk cache. On a home connection, loading ~1mb of
assets will take 2-3 seconds. The welcome animation plays for one second and it
would take an average person ~2 seconds to look around, read the hello and
notice links. So by the time you decide to go to a new page, it will most likely
be ready on disk and you will get it immediately.

Links are also preloaded using Next’s own capabilities. All of these thigs
combined with animations ensure fluid user experience.

## Conclusion

Wow, you’ve made it this far! Or you just scrolled down to see how long this thing
is. Regardless of which one it was, thank you for your interest. If you still have
more interest, hit that back button at the top and check out my other works.

Thanks for your time and have an amazing day!

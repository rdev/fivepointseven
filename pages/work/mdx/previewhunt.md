
## The inception

When I was launching [DailyWall](/work/dailywall) (check that project out if you haven't yet) on Product Hunt, [https://twitter.com/andreyazimov](Andrey Azimov) was helping me since I'm horrible at marketing. And when we were done preparing everything and re-cropping and re-compressing images for the 7th time we thought "Wouldn't it be cool if there was like a script that did all of this?"

Then we figured that we're probably not the only ones who had this problem and it should probably be a web app rather than a script. So I immediately opened my code editor and started sketching it out. And in 2.5 days we released it 🙈

[Check it out!](https://previewhunt.com)

## What it does

Preview Hunt has the following features:

- Side-by-side live preview of a product while editing
- Guided editor with tips for every step
- Thumbnail validation and assistance
- Image cropping
- Preview page that looks just like when it's live on Product Hunt
- It can also be used to validate Twitter and Facebook link cards
- Time in Product Hunt timezone
- Downloadable Launch Kit. All your content organized in a convenient file (in TXT, HTML and Markdown formats), your cropped images and a thumbnail, along with some useful pre-launch materials from us

While thinking about how it should work, Andrey suggested that it would be great to have an ability to generate a static preview page that can be used for things like Twitter card validator or just shared with a team of makers.

That meant that the app could not be just static anymore, which brings us to the next section:

## How it does it

Preview Hunt uses quite a few thechnologies. Let's discuss.

### Next.js

I mean, of course. At this point it would be surprising if I made a web app that **wasn't** using Next.js. If you've never worked with it before, definitely check it out, it's super easy to get started with and is a primary reason why the whole thing was done in just 2 days.

### Ant Design

For the editor part I didn't want to think too much about the UI design, since it wasn't the main focus of the app. So I decided to go with [Ant Design](https://ant.design) for this.

Normally I'm reeeeeeally not a fan of 3rd party opinionated design systems, but it did fit this project and helped to accelerate development quite a bit, so I went with it. IMO, if a tool does the job, you should use the tool even if it is opinionated.

### Express

Preview pages are not rendered with Next.js or have any bit of React in them. They are completely static pages, created using Cmd+S on one of Product Hunt's real posts and throwing all the PH stuff away.

They are just rendered statically using Express (set up via my [ExpressX](/work/expressx) project).

### Firebase

We used Firestore to save the data when generating preview pages and Firebase Storage (which is basically Google Cloud Storage) for uploading Launch Kits.

Firebase is super easy to get started with and I had some promotional credit from their hackathon a few months ago, so we decided to go with it. If you haven't used Firebase in the past, it's designed to be pretty simple but you do need to think about the security rules carefully.


## Preview Pages

One of the biggest features is the ability to generate preview pages. The way it works is when the user presses "Create Preview Page" we send all the information along with cropped images and a thumbnail to the server where it's saved, and we give the user a link which looks exactly like Product Hunt links to a page that also looks exactly like Producy Hunt page with a few minor changes like the logo to distinguish Preview Hunt pages from real posts.

You can use this to validate Twitter cards, share with your team, etc. You can also delete the page at any time. Pages are also automatically deleted 24 hours after publishing and all of their assets are purged.

[Here's an example](https://previewhunt.com/posts/tesla-roadster) of what a preview page looks like.

## Launch Kit

Another big feature is Launch Kits. When you press "Create Launch Kit", Preview Hunt sends all the info, cropped images and a thumbnail to the server where it's used to create a content file, zipped up and uploaded to Firebase Storage with a one-time link. After the Launch Kit is downloaded, it's immediately deleted from the Storage.

Content generation uses [EJS](http://ejs.co) for TXT and Markdown file and then uses [Marked](https://github.com/markedjs/marked) to generate HTML.

## Our Product Hunt launch

After everything was working and all the bugs were fixed it was time to launch on Product Hunt.

We of course used Preview Hunt to prepare the submission of Preview Hunt. Metaaaaaa 😃

The launch was way more succesful than we expected. It became **#1 Product of the Day** with over 1,200 upvotes (including Ryan Hoover himself 😀) which is over 2x more than that day's #2 and later **#2 Product of the Week**. The month isn't over yet at the time of this writing :) 

## Conclusion

That's pretty much it for this project. [Give it a try](https://previewhunt.com) if you're launching a product soon, hopefully it will make your life a bit easier :)

[Andrey Azimov](https://twitter.com/andreyazimov) was a huge part of this project. Follow him and support his work, he deserves it 👍🏻

If you want to know more about other projects I did, click that back button in the top left and read more, there's a bunch of these to go thgough 🙂

Thanks for your time and have a great day!

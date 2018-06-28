## What’s Up

A while ago a few friends of mine told me about an upcoming 48 hour ”Smart City Hackathon”
that was going to take place in my area. After giving it a quick thought, we decided to participate.  
The idea we had was an app that would ask you to take a picture of your license plate, link to your
credit card and whenever you pass by a toll booth or enter parking, the camera installed there would
read your license plate and automatically deduct the fee.

## How we did it

The whole system consisted of 3 key components: recognition engine, cloud backend and mobile app.

### Recognition Engine

This is the part that connects to the camera and is installed on-site wherever the system is being used.  
It was built using [Electron](https://electronjs.org).

![recognition-view](/static/work/case-studies/myplate/mp-1.jpg)

It watches the camera feed for motion, and if something in the frame exceeds the motion threshold,
it snaps a picture and sends it to the cloud for recognition.

### The Cloud™

The part of MyPlate responsible for doing all the smart stuff it did was The Cloud™.  
The Cloud™ is deployed on Google Cloud Platform and is essentially just a few
[Cloud Functions](https://cloud.google.com/functions/) that talk to the
[Google Datastore](https://cloud.google.com/datastore/)
that we used as a DB and [Cloud Vision API](https://cloud.google.com/vision/) to do the actual
image recognition. Here’s the full list of things The Cloud™ did:

*   Read the plate (duh)
*   Create account
*   Create toll charge
*   Open parking charge
*   Close parking charge
*   List all user charges
*   Flag plate as criminal

### The Mobile App

And the final bit was the user-facing part - the mobile application.
Designed by the allmighty [Darbara Singh](https://dribbble.com/darbara) and built with
React Native, here’s what the app did:

*   Freakin’ cool logo (because that’s important at hackathons)
*   Create account
*   ”Snap a picture” for the plate input
*   Forbid signup if no vehicle detected on picture
*   Onboarding
*   History of charges
*   Running timer for current open parking charge

![app-onboarding](/static/work/case-studies/myplate/mp-2.jpg)  
  
![app-signup](/static/work/case-studies/myplate/mp-3.jpg)  
  
![app-view](/static/work/case-studies/myplate/mp-4.jpg)

## Conclusion

After doing all of this and somehow successfully squeezing the demo in 4 minutes we managed
to walk away with the ”1st Runner Up” prize, which given the fact that it was my first hackathon,
like ever, was pretty damn awesome.  
  
But anyway, if you’re interested to know about more of my projects, hit that back button at
the top and check out my other projects.  
  
Thanks for your time and have an amazing day!
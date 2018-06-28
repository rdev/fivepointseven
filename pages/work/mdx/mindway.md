## MindWhat?

After the smashing success with MyPlate (be sure to check out that project if you haven’t yet)
we decided we should do more <span role="img" aria-label="smile">😃</span>  
Some time later we saw that there was a healthcare hackathon happenning in our area and we decided to take on it.  
  
The idea of an app we had was a mental health tracker that would watch your socials, apply some
Machine Learning™ to learn about you and then warn you if it thinks there’s something wrong with your
life and you’re having some mental issues like depression.

## So how did you do it?

The app consisted of 2.5 parts: the mobile app, The Cloud™ and the analysis visualizer we built solely for the demo purposes.

## The Mobile App

Once again, designed by the allmighty [Darbara Singh](https://dribbble.com/darbara), the mobile app was used
to create an account and authorize the app to spy on you start monitoring your socials.  
It also included some preliminary questions and it would show alerts should something go wrong, but ideally,
the perfect use case for such an app is to set it up and never have to open it ever again.

![app-interface](/static/work/case-studies/mindway/mw-1.jpg)

## The Cloud™

This time The Cloud™ was a simple Express.js app that handled webhooks from social
networks whenever user posts something new. It took the data from the webhook, ran it through Google Cloud
[Natural Language API](https://cloud.google.com/natural-language/) or [Cloud Vision API](https://cloud.google.com/vision/)
if the content was a photo and saved the processing result into user’s mood history.

## The Visuals

To illustrate how the app works to the judges, we built a little dashboard that updated every time a webhook event occured.  
For a text update, the following things were displayed:

*   Sentiment score (-1 to 1)
*   Sentiment magnitude (0 to 1)
*   Highlights breakdown and value
*   Sentence level sentiment

![text-breakdown-ui](/static/work/case-studies/mindway/mw-2.jpg)

For a photo post, we showed the following:

*   Face presence
*   Joy/sorrow/anger likelyhood
*   Recognition confidence score (0-100)
*   Recognition labels

![media-breakdown-ui](/static/work/case-studies/mindway/mw-3.jpg)

Omg that photo -_-

## Conclusion

Once again, after building all of it, having 3 hours of sleep and managing to squeeze it all in a 4-minute demo,
we walked away with the ”1st Runner Up” prize 🙌🏻  
  
If you’re interested to know about more of my projects, hit that back button at the top and check out my other projects.  
  
Thanks for your time and have an amazing day!
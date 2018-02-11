// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';

const [, , , , , , project] = portfolioItems;

export default () => (
	<CaseStudy project={project}>
		<section>
			<h2>MindWhat?</h2>
			<p>
				After the smashing success with MyPlate (be sure to check out that project if you
				haven’t yet) we decided we should do more{' '}
				<span role="img" aria-label="smile">
					😃
				</span>
				<br />
				Some time later we saw that there was a healthcare hackathon happenning in our area
				and we decided to take on it.
				<br />
				<br />
				The idea of an app we had was a mental health tracker that would watch your socials,
				apply some Machine Learning™ to learn about you and then warn you if it thinks
				there’s something wrong with your life and you’re having some mental issues like
				depression.
			</p>
		</section>
		<section>
			<h2>So how did you do it?</h2>
			<p>
				The app consisted of 2.5 parts: the mobile app, The Cloud™ and the analysis
				visualizer we built solely for the demo purposes.
			</p>
			<section>
				<h2>The Mobile App</h2>
				<p>
					Once again, designed by the allmighty{' '}
					<a
						href="https://dribbble.com/darbara"
						target="_blank"
						rel="noopener noreferrer"
					>
						Darbara Singh
					</a>, the mobile app was used to create an account and authorize the app to{' '}
					<span style={{ textDecoration: 'line-through' }}>spy on you</span> start
					monitoring your socials.
					<br />
					It also included some preliminary questions and it would show alerts should
					something go wrong, but ideally, the perfect use case for such an app is to set
					it up and never have to open it ever again.
				</p>
				<img src="/static/work/case-studies/mindway/mw-1.jpg" alt="app-interface" />
			</section>
			<section>
				<h2>The Cloud™</h2>
				<p>
					This time The Cloud™ was a simple Express.js app that handled webhooks from
					social networks whenever user posts something new.
					<br />
					It took the data from the webhook, ran it through Google Cloud{' '}
					<a
						href="https://cloud.google.com/natural-language/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Natural Language API
					</a>{' '}
					or{' '}
					<a
						href="https://cloud.google.com/vision/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Cloud Vision API
					</a>{' '}
					if the content was a photo and saved the processing result into user’s mood
					history.
				</p>
			</section>
			<section>
				<h2>The Visuals</h2>
				<p>
					To illustrate how the app works to the judges, we built a little dashboard that
					updated every time a webhook event occured.
					<br />
					For a text update, the following things were displayed:
				</p>
				<ul>
					<li>Sentiment score (-1 to 1)</li>
					<li>Sentiment magnitude (0 to 1)</li>
					<li>Highlights breakdown and value</li>
					<li>Sentence level sentiment</li>
				</ul>
				<img src="/static/work/case-studies/mindway/mw-2.jpg" alt="text-breakdown-ui" />
				<p>For a photo post, we showed the following:</p>
				<ul>
					<li>Face presence</li>
					<li>Joy/sorrow/anger likelyhood</li>
					<li>Recognition confidence score (0-100)</li>
					<li>Recognition labels</li>
				</ul>
				<img src="/static/work/case-studies/mindway/mw-3.jpg" alt="media-breakdown-ui" />
				<p>Omg that photo -_-</p>
			</section>
		</section>
		<section>
			<h2>Conclusion</h2>
			<p>
				Once again, after building all of it, having 3 hours of sleep and managing to
				squeeze it all in a 4-minute demo, we walked away with the ”1st Runner Up” prize{' '}
				<span role="img" aria-label="smile">
					🙌🏻
				</span>
				<br />
				<br />
				If you’re interested to know about more of my projects, hit that back button at the
				top and check out my other projects.
				<br />
				<br />
				Thanks for your time and have an amazing day!
			</p>
		</section>
	</CaseStudy>
);

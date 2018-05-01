// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';

const project = portfolioItems.find(item => item.slug === 'myplate');

export default () => (
	<CaseStudy project={project}>
		<section>
			<h2>What’s Up</h2>
			<p>
				A while ago a few friends of mine told me about an upcoming 48 hour ”Smart City
				Hackathon” that was going to take place in my area. After giving it a quick thought,
				we decided to participate.
				<br />
				The idea we had was an app that would ask you to take a picture of your license
				plate, link to your credit card and whenever you pass by a toll booth or enter
				parking, the camera installed there would read your license plate and automatically
				deduct the fee.
			</p>
		</section>
		<section>
			<h2>How we did it</h2>
			<p>
				The whole system consisted of 3 key components: recognition engine, cloud backend
				and mobile app.
			</p>
			<section>
				<h3>Recognition Engine</h3>
				<p>
					This is the part that connects to the camera and is installed on-site wherever
					the system is being used.
					<br />
					It was built using{' '}
					<a href="https://electronjs.org" target="_blank" rel="noopener noreferrer">
						Electron
					</a>.
				</p>
				<img src="/static/work/case-studies/myplate/mp-1.jpg" alt="recognition-view" />
				<p>
					It watches the camera feed for motion, and if something in the frame exceeds the
					motion threshold, it snaps a picture and sends it to the cloud for recognition.
				</p>
			</section>
			<section>
				<h3>The Cloud™</h3>
				<p>
					The part of MyPlate responsible for doing all the smart stuff it did was The
					Cloud™.
					<br />
					The Cloud™ is deployed on Google Cloud Platform and is essentially just a few{' '}
					<a
						href="https://cloud.google.com/functions/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Cloud Functions
					</a>{' '}
					that talk to the{' '}
					<a
						href="https://cloud.google.com/datastore/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Google Datastore
					</a>{' '}
					that we used as a DB and{' '}
					<a
						href="https://cloud.google.com/vision/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Cloud Vision API
					</a>{' '}
					to do the actual image recognition.
					<br />
					Here’s the full list of things The Cloud™ did:
				</p>
				<ul>
					<li>Read the plate (duh)</li>
					<li>Create account</li>
					<li>Create toll charge</li>
					<li>Open parking charge</li>
					<li>Close parking charge</li>
					<li>List all user charges</li>
					<li>Flag plate as criminal</li>
				</ul>
			</section>
			<section>
				<h3>The Mobile App</h3>
				<p>
					And the final bit was the user-facing part - the mobile application.
					<br />
					Designed by the allmighty{' '}
					<a
						href="https://dribbble.com/darbara"
						target="_blank"
						rel="noopener noreferrer"
					>
						Darbara Singh
					</a>{' '}
					and built with React Native, here’s what the app did:
				</p>
				<ul>
					<li>Freakin’ cool logo (because that’s important at hackathons)</li>
					<li>Create account</li>
					<li>”Snap a picture” for the plate input</li>
					<li>Forbid signup if no vehicle detected on picture</li>
					<li>Onboarding</li>
					<li>History of charges</li>
					<li>Running timer for current open parking charge</li>
				</ul>
				<img src="/static/work/case-studies/myplate/mp-2.jpg" alt="app-onboarding" />
				<br />
				<br />
				<img src="/static/work/case-studies/myplate/mp-3.jpg" alt="app-signup" />
				<br />
				<br />
				<img src="/static/work/case-studies/myplate/mp-4.jpg" alt="app-view" />
			</section>
		</section>
		<section>
			<h2>Conclusion</h2>
			<p>
				After doing all of this and somehow successfully squeezing the demo in 4 minutes we
				managed to walk away with the ”1st Runner Up” prize, which given the fact that it
				was my first hackathon, like ever, was pretty damn awesome.
				<br />
				<br />
				But anyway, if you’re interested to know about more of my projects, hit that back
				button at the top and check out my other projects.
				<br />
				<br />
				Thanks for your time and have an amazing day!
			</p>
		</section>
	</CaseStudy>
);

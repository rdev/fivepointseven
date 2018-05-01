// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';

const project = portfolioItems.find(item => item.slug === 'convertable');

export default () => (
	<CaseStudy project={project}>
		<section>
			<h2>The story of the app</h2>
			<p>
				The idea of the app came to me during{' '}
				<a href="http://www.dailyui.co/" target="_blank" rel="noopener noreferrer">
					Daily UI
				</a>{' '}
				challenge. The theme was ”Calculator” and I came up with the idea of a calculator
				that converts currencies for you.
			</p>
			<img
				src="/static/work/case-studies/convertable/design.jpg"
				alt="calculator-screenshot"
			/>
			<p>
				After a while, I decided to actually build the app selfishly for myself, but then I
				decided to put it up in the App Store for everyone else.
			</p>
		</section>
		<section>
			<h2>How it works</h2>
			<p>
				The app has 3 screens: calculator, history, and settings.
				<br />
				The app is designed to be very minimal, so settings view consists of ”realtime
				calculation” switch and a list of currencies to choose from. The app supports 155
				currencies including Bitcoin.
				<br />
				<br />
				Calculator view is the primary view of the app. It has the number pad and two
				sliders to sellect a currency pair. Top slider is ”convert from” and bottom slider
				is ”convert to”.
				<br />
				The way the app works is it calculates the thing, but it displays the result already
				converted to your target currency.
				<br />
				<br />
				History view displays all your previous calculations and information about the app.
			</p>
		</section>
		<section>
			<h2>The tech</h2>
			<p>
				It was a simple weekly project, so there’s really not much to discuss, but let’s
				discuss nonetheless.
			</p>
			<section>
				<h3>React Native</h3>
				<p>
					I’m not the native developer, so the obvious choice of technology was React
					Native. I know my way around React Native and the development process is pretty
					fast.
				</p>
				<h3>Currency API</h3>
				<p>
					Currency rates are pulled from{' '}
					<a
						href="http://currencyconverterapi.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						currencyconverterapi.com
					</a>{' '}
					that updates every 30 minutes. The app pulls the rate on every calculation, so
					it always displays the most recent rate.
				</p>
			</section>
		</section>
		<section>
			<h2>Conclusion</h2>
			<p>
				That covers the Convertable project.{' '}
				<a
					href="https://itunes.apple.com/gb/app/convertable/id1292706982?mt=8"
					target="_blank"
					rel="noopener noreferrer"
				>
					Give it a shot
				</a>{' '}
				yourself and leave a review if you like it (or if you don’t).
				<br />
				If you’re interested to know more of my projects, hit that back button at the top
				and check out my other projects.
				<br />
				<br />
				Thanks for your time and have an amazing day!
			</p>
		</section>
	</CaseStudy>
);

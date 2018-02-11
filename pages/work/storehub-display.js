// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';

const [, , project] = portfolioItems;

export default () => (
	<CaseStudy project={project}>
		<section>
			<h2>How it came to be</h2>
			<p>
				As StoreHub was growing, customers kept having one consistent feature request -
				customer facing display.
				<br />
				The challenge was, it needed to be affordable in terms of tech. Buying an iPad for a
				point of sales is okay, but for a mere display, no one would do that, so the app
				needed to support cheap & crappy Android tablets.
			</p>
		</section>
		<section>
			<h2>So how did you do it?</h2>
			<p>
				The issue was that there were no Android developers on the team. I was remotely
				familiar with how to build for Android due to some time spent with Unity game
				engine, but that was it. So we started looking into the ”hybrid” options. And we
				found it.
			</p>
			<section>
				<h3>React Native</h3>
				<p>
					After evaluating a few options we realized that I was a React developer, so we
					should probably try React Native. So we did, and it worked out really well. The
					code base for both platforms turned out 99.97% identical (Android doesn’t handle
					z-index very well) and development process was pretty smooth.
					<br />
					In fact, I was able to stand up a full working v1 in mere five days.
				</p>
			</section>
			<section>
				<h3>Zeroconf</h3>
				<p>
					Major point of the app’s UX was that it wasn’t supposed to have any UX. Users
					would install it, press a button and presto.
					<br />
					We decided it’s gonna communicate with the POS over local network, so to provide
					that magic, we needed some kind of service discovery. Luckily, there was a
					module for that, but it had some stumbles with Android versions. I even{' '}
					<a
						href="https://github.com/balthazar/react-native-zeroconf/pull/44"
						target="_blank"
						rel="noopener noreferrer"
					>
						contributed
					</a>{' '}
					to the module to fix some of those stumbles (and I’m not supposed to know
					Java!), but in the end of the day, we decided we’ll only support discovery on
					Android &gt;7.
					<br />
					For low-end devices an option to connect manually was implemented.
				</p>
			</section>
			<section>
				<h3>WTF Caching</h3>
				<p>
					Due to how some customers use StoreHub POS, a critical requirement was the
					ability to cache promotional images users upload for their stores. This
					presented some serious challenges due to the way this whole thing was handled.
					Basically, standard go-to solutions for image caching in React Native didn’t
					work for us.
					<br />
					So after some thinking I implemented one of those solutions that is really
					stupid, but you’re always proud of it when you come up with it.
					<br />
					<br />
					So, the way I did it is, load the image, convert it to Base64 and store in React
					Native’s Async Storage as a string. That’s it. No SQLite, no binary data
					handling, nothing. Just beautiful strings.
					<br />
					Well, maybe not beautiful, but it works and it solved all our issues.
				</p>
			</section>
			<section>
				<h2>Conclusion</h2>
				<p>
					That’s pretty much it. It wasn’t really a big project, so there’s not much more
					to talk about here.
					<br />
					I do however have a bunch of other stuff I talk about excessively, so if you’re
					interested, hit that back button at the top and check out my other projects.
					<br />
					<br />
					Thanks for your time and have an amazing day!
				</p>
			</section>
		</section>
	</CaseStudy>
);

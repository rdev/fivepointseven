import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';

const [, project] = portfolioItems;

export default () => (
	<CaseStudy project={project}>
		<section>
			<h2>The story of it all</h2>
			<p>
				StoreHub’s first website was made with WordPress and used a meh theme, which worked
				fine 3 years ago, but when company started to get bigger, everything needed to be
				more professional.
				<br />
				StoreHub was just finishing rebranding, and they decided it’s time to face-lift the
				company website.
			</p>
		</section>
		<section>
			<h2>Design Wars</h2>
			<p>
				After the idea for the website was outlined, it was UX time.
				<br />
				UX research and design was handled by the amazing{' '}
				<a href="http://michellemkuah.com" target="_blank" rel="noopener noreferrer">
					Michelle Kuah
				</a>. If you need a UX designer, she’s great and I highly recommend her.
				<br />
				<br />
				But anyway, after UX research was done, it was UI time, and that’s when things
				started to get interesting.
				<br />
				Project manager at the time really wanted brand designers that were handling
				StoreHub’s rebranding to do the website. And the thing about brand designers (at
				least the ones we were working with), is that they’re not UI designers. Which
				naturally resulted in UI they produced being quite suboptimal, to say the least.
				<br />
				<br />
				StoreHub was still hiring for a full time UI designer at the time, and internal
				conflict regarding the whole design thing was heating up, so I decided to step in
				and provide some ideas to resolve it. This resulted in an overnight design of what’s
				now StoreHub’s homepage.
				<br />
				<br />
				Shortly after that a UI designer was hired and continued with the rest of the
				website based on the design I provided.
			</p>
		</section>
		<section>
			<h2>So what’s inside?</h2>
			<section>
				<h3>Them Animations</h3>
				<p>
					The most noticeable thing on the website is all the scorll-driven animations.
					Like the iPad sliding into a stand between first and second sections. This is
					meant to show how easy it is to turn an iPad into a point of sales system.
					<br />
					There’s lots of other animations as well, some for visual factor, like the
					report card, some for a good reason, like table headers on pricing page.
				</p>
			</section>
			<section>
				<h3>UIKit</h3>
				<p>
					The CSS framework used for the website was{' '}
					<a href="https://getuikit.com/" target="_blank" rel="noopener noreferrer">
						UIKit
					</a>{' '}
					<span style={{ opacity: 0.3 }}>because it’s better than Bootstrap.</span> UIKit
					allows to built things really fast and includes a lot of standard ”landing page”
					components out of the box. It’s also really good when it comes to responsiveness
					which was crucial here as over 60% of StoreHub’s website users were mobile.
				</p>
			</section>
			<section>
				<h3>React</h3>
				<p>
					Of course there’s gonna be React{' '}
					<span role="img" aria-label="smile">
						😃
					</span>
					<br />
					React was used to create a new sign-up flow. Previously it was an ugly one page
					form. Now it’s a pretty 2-step flow that collects analytics along the way and is
					just more pleasant to use.
				</p>
			</section>
			<section>
				<h3>Deployment</h3>
				<p>
					Doesn’t exist. The company chose to host the website on HubSpot (a CRM platform
					that accidentally has web hosting functionality) which lead to all sorts of
					shenanigans with deployment, but it all works out in the end of the day.
				</p>
			</section>
		</section>
		<section>
			<h2>Conclusion</h2>
			<p>
				That’s roughly the summary of this project. If you’re interested to know more about
				my work, hit that back button at the top and check out my other projects.
				<br />
				<br />
				Thanks for your time and have an amazing day!
			</p>
		</section>
	</CaseStudy>
);

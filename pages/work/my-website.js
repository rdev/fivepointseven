import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';

const [project] = portfolioItems;

export default () => (
	<CaseStudy project={project}>
		<section>
			<h2>The idea behind the website</h2>
			<p>
				Since I registered ”fivepointseven.com” in 2015, I’ve re-done my website about 5
				times. That’s more than once a year. And I was never quite happy with the result.
				Given that I never really had time to think it through and build it, I always
				resorted to using themes. And we all know how that works in the end.
			</p>
			<p>
				So I decided, ”Okay, this time will be different!”. And it certainly was
				<span role="img" aria-label="smile">
					😃
				</span>
			</p>
		</section>
		<section>
			<h2>Show me the tech</h2>
			<p>
				At the time of building and wrighting this, one of my primary areas of experience is
				React. So it’s only fair to use React to build my own website, right? Well, yeah,
				but just building yet another React website is not good enough.
			</p>
			<p>
				This website is meant to be a technology showcase, so I tried to pack as much into
				it as possible. Among other things, it leverages CSS Grid Layout, Service Workers,
				Server Side Rendering, has sweet animations and fluid user experience, it’s fully
				ARIA-compilant and it even works with JavaScript completely disabled. I mean, holy
				shit, right?
			</p>
			<p>
				And I haven’t even told you about all the non-obvious stuff yet. But let’s go
				through everything piece by piece.
			</p>
			<section>
				<h3>Next.js</h3>
				<p>
					First things first, this website is a Next.js app.
					<br />
					Next.js is an amazing framework built by cool people at Zeit and it is the best
					way to do server side rendering with React, period. It also makes it incredibly
					easy to lie to the user (more on this later) to give them that sweet perceived
					performance.
				</p>
			</section>
			<section>
				<h3>Service Workers</h3>
				<p>
					Yes, this website is also offline first. Which is really an accident{' '}
					<span role="img" aria-label="smile">
						😃
					</span>
					<br />
					See, I still don’t believe that the whole ”offline first web” thing is gonna
					fly. I mean, ”web” and ”offline” are literally contradictory words. But
					nevertheless, people are doing offline webapps with service workers these days.
					What service workers are also really good at, is lying to the user. This whole
					damn website is built on lies!
					<br />
					<br />
					See, service workers are sneaky. They install in your browser quietly, they
					intercept your requests and non-consentually put things in your cache. Which
					makes them perfect experience enhancers.
					<br />
					<br />
					When you load any given page on this website, you load about 100-200kb of
					content. If your browser supports service workers, that little guy also gets
					installed. And upon installation it pulls every single thing in existence on
					this website (about 1mb total) into your cache, and from that point on, the
					whole website is loaded entirely from disk, which is near instant. And by
					complete accident, it also makes the website offline first ¯\_(ツ)_/¯.
				</p>
			</section>
			<section>
				<h3>Grid Layout</h3>
				<p>
					CSS Grid is wonderful and magical and there’s absolutely no reason not to use
					it.
					<blockquote>- Oi Max, but what about old browsers?</blockquote>
					They have auto-update functionality since 2014. Old browsers is a thing that
					haunts systems that rely on lots of legacy shit. Most web applications built
					today - don’t and shouldn’t.
				</p>
			</section>
			<section>
				<h3>Tracking</h3>
				<p>
					I’m watching u{' '}
					<span role="img" aria-label="smile">
						👀
					</span>
					<br />
					Every website does, to be honest. Everyone has those activity heatmaps, referer
					trackers, etc, etc. And this website is no exception. It uses{' '}
					<a href="https://keen.io" target="_blank" rel="noopener noreferrer">
						Keen.io
					</a>{' '}
					to aggregate lots and lots of custom events that I can then sort and query how I
					need. And unlike most of those abovementioned websites, I’m honest about it -
					your every move is being tracked. Clicked a link? Tracked. Read this thing till
					the end? Tracked. Scanned a QR code on my business card? Tracked!
				</p>
			</section>
			<section>
				<h3>Telegram</h3>
				<p>
					Contact form is not using email. Email is offensive. I don’t like email. I do
					use it and check it regularly, but for the purpose of receiving messages from
					people I don’t think it’s the best solution.
					<br />
					As such, contact form is using a{' '}
					<a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
						Telegram
					</a>{' '}
					bot to send me an alert when someone fills out the form. I’m on Telegram almost
					24/7, so that works perfectly for me.
				</p>
			</section>
			<section>
				<h3>SCSS</h3>
				<p>
					There’s not a single <span className="pre">!important</span> in any of the
					styles.
					<br />
					Mind. Blown.
				</p>
			</section>
			<section>
				<h3>Them animations</h3>
				<p>
					There’s a total of 40 CSS animations on the website (excluding basic
					transitions) to provide maximum magic when interacting with the site.
					<br />
					<br />
					At first I was planning to use GSAP and do animations in JavaScript because of
					GSAP’s amazing timeline, but it started quickly becoming a maintenance pain and,
					well, required JavaScript to work, so I decided to switch to CSS animations.
					That way, most of the magic works even when JS is completely disabled.
				</p>
			</section>
			<section>
				<h3>Docker</h3>
				<p>
					The site is using Docker for deployment. After the CI build is done, it uses my
					little package ”
					<a
						href="https://github.com/rdev/dockerpuller"
						target="_blank"
						rel="noopener noreferrer"
					>
						dockerpuller
					</a>
					” to execute the deployment.
				</p>
			</section>
		</section>
		<section>
			<h2>What was that about lying to the user?</h2>
			<img src="/static/work/case-studies/my-website/suspicious.jpg" alt="suspicious" />
			<p>
				Yeah, so most of the magic that you see around here is perceived. Let’s break down
				all the lies, starting from the first thing on the website.
			</p>
			<section>
				<h3>The spinny compass</h3>
				<p>
					When you go to{' '}
					<a href="https://fivepointseven.com" target="_blank" rel="noopener noreferrer">
						fivepointseven.com
					</a>, you’ll see a spinny compass animation. Now, due to the nature of CSS, that
					compass would spin when you go to that page no matter what, and we don’t want
					that to happen when transitioning from ”About” and ”Contact” pages. We want
					compass to just slide into it’s place. So we need to sprinkle some JavaScript on
					it to take care of this.
					<br />
					<br />
					Next.js makes achieving this incredibly easy. What really happens when you go to
					root from those two pages, is you don’t go to ”<span className="pre">/</span>”.
					You go to ”
					<span className="pre">/?nospin=true</span>”. That query string is hidden from
					the user, but available to Next.js router, which makes the magic happen.
				</p>
			</section>
			<section>
				<h3>Loading speed</h3>
				<p>
					We’ve already talked about service workers and how the site uses caching. It
					pulls all of website’s data to disk cache. On a home connection, loading ~1mb of
					assets will take 2-3 seconds. The welcome animation plays for one second and it
					would take an average person ~2 seconds to look around, read the hello and
					notice links. So by the time you decide to go to a new page, it will most likely
					be ready on disk and you will get it immediately.
					<br />
					<br />
					Links are also preloaded using Next’s own capabilities. All of these thigs
					combined with animations ensure fluid user experience.
				</p>
			</section>
			<section>
				<h3>My age</h3>
				<p>
					This is a bit of a stretch but I really wanted this section to include 3 items.
					See, I thought I’ll be too lazy to regularly update things on the ”About” page,
					so I put a date calculation there. And the number it shows for my age is only
					technicaly true after October{' '}
					<span role="img" aria-label="smile">
						😃
					</span>
					<br />
					But apparently in some parts of the world that kind of calculation is okay, so
					it’s fine I guess.
				</p>
			</section>
		</section>
		<section>
			<h2>Conclusion</h2>
			<p>
				Wow, you’ve made it this far! Or you just scrolled down to see how long this thing
				is. Regardless of which one it was, thank you for your interest. If you still have
				more interest, hit that back button at the top and check out my other works.
				<br />
				<br />
				Thanks for your time and have an amazing day!
			</p>
		</section>
	</CaseStudy>
);

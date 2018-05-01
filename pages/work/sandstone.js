// @flow
import * as React from 'react';
import Highlight from 'react-highlight';
import { stripIndent } from 'common-tags';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';

const project = portfolioItems.find(item => item.slug === 'sandstone');

export default () => (
	<CaseStudy project={project}>
		<section>
			<h2>What the hell is this thing</h2>
			<p>
				While building a relatively big project back at StoreHub, we faced a little frontend
				challenge.
				<br />
				The project needed to be an app that was primarily statically rendered, but it also
				needed to have a bunch of small dynamic elements to do certain things. Since I’m
				morally opposed to using jQuery for something like this, we first decided to write a
				bunch of tiny React components to do these things.
				<br />
				<br />
				But unfortunately it quickly became apparent that with our particular use case that
				approach was not exactly scalable and would quickly turn into a hack-fest and
				maintenance pain. So we needed a new hero. And that hero was...
			</p>
		</section>
		<section>
			<h2>Web Components</h2>
			<p>
				<a
					href="https://www.webcomponents.org/introduction"
					target="_blank"
					rel="noopener noreferrer"
				>
					Web Components
				</a>{' '}
				are wonderful and magical and they’re finally real, and there’s no reason not to use
				them. They’re contained and reusable and that’s just what we needed.
				<br />
				<br />
				The problem was that all Web Components implementations available were kinda meh.
				Like, there’s Google’s{' '}
				<a
					href="https://www.polymer-project.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Polymer Project
				</a>, but it’s a bit of a pain to integrate into an existing project. And there’s a
				bunch of other things but they all just felt weird. So I decided to make my own
				thing.
				<br />
				Which probably turned out just as weird, but at least I know how it works{' '}
				<span role="img" aria-label="smile">
					😃
				</span>
			</p>
		</section>
		<section>
			<h2>The library</h2>
			<p>
				So, I set out on a path to build a new solution for writing Web Components. What
				were the challenges and requirements?
			</p>
			<section>
				<h3>Familiarity</h3>
				<p>
					I didn’t want to build a whole new massive thing that everyone on the team would
					have to learn. After all this library is just the utility, because you know,
					”use the platform™”.
					<br />
					<br />
					And there’s a framework out there that also does components that you probably
					know of - React. Granted, it’s not Web Components, but nonetheless, React’s
					approach to components is the best one I’ve seen. So that’s the approach I took
					with this library.
				</p>
			</section>
			<section>
				<h3>Small file size</h3>
				<p>
					No one wants a utility library to grow to the size of Angular, so the whole
					thing needed to be under or around 10kb GZipped.
				</p>
			</section>
			<section>
				<h3>Fast and smart</h3>
				<p>
					It also definitely needed to be fast. Probably have some sort of Virtual DOM. It
					also needed to have capability beyond rendering strings of HTML and have some
					sort of state management solution.
				</p>
			</section>
		</section>
		<section>
			<h2>Under the hood</h2>
			<p>
				After looking at all the specs I thought ”man, React does most of this stuff really
				well!”. But I didn’t want to have a dependency on React. In fact, I wanted users to
				be able to simply drop a script tag on the page and start developing Web Components.
				<br />
				But I still wanted to be able to use JSX and all the niceness of React. And then it
				hit me.
				<br />
				<a
					href="https://github.com/developit/preact"
					target="_blank"
					rel="noopener noreferrer"
				>
					Preact!
				</a>{' '}
				It does everything React does with some extra conveniences and it’s 3kb GZipped, so
				it can be easily bundled and it’s time proven. So I decided to put Preact under the
				hood. Preact acts as a core and gives you that sweet React experience, while the
				rest of the library allows you to write awesome Web Components.
			</p>
		</section>
		<section>
			<h2>Show me the code</h2>
			<p>
				Okay, let me demonstrate. So, here’s how you would normally write and render a React
				component:
			</p>
			<Highlight className="jsx">
				{stripIndent`
				import { Component } from 'react';
				import ReactDOM from 'react-dom';

				class CoolHeader extends Component {
					render() {
						return <h1>{this.props.content}</h1>
					}
				}

				const container = document.getElementById('app');

				ReactDOM.render(<CoolHeader content="Pew pew world!" />, container);
				`}
			</Highlight>
			<p>And then in your HTML you have to have that container element somewhere:</p>
			<Highlight className="html">
				{stripIndent`
				<div id="app"></div>
				`}
			</Highlight>
			<h3>Okay, so what’s the deal?</h3>
			<p>
				Now, here’s how you write and render the same thing as a Web Component using
				Sandstone:
			</p>
			<Highlight className="jsx">
				{stripIndent`
				import { WebComponent, register } from 'sandstone';

				class CoolHeader extends WebComponent {
					render({ content }) {
						return <h1>{content}</h1>
					}
				}

				register(CoolHeader, 'cool-header');
				`}
			</Highlight>
			<p>And then in your HTML:</p>
			<Highlight className="html">
				{stripIndent`
				<cool-header content="Pew pew world!"></cool-header>
				`}
			</Highlight>
			<p>
				Pretty cool, right?
				<br />
				If you’ve worked with React before you may notice a convenience enhancement right
				away - props and state of the component are passed as arguments to{' '}
				<span className="pre">render()</span> for convenient destructuring.
			</p>
		</section>
		<section>
			<h2>Features</h2>
			<p>Sandstone actually has quite a few features.</p>
			<ul>
				<li>JSX. Because JSX is awesome</li>
				<li>Rendering from string</li>
				<li>Rendering from template tags</li>
				<li>Flags. Basiclly they’re namespaced props</li>
				<li>Virtual DOM</li>
				<li>Shadow DOM</li>
				<li>React-like lifecycle methods</li>
				<li>Link state for inputs</li>
				<li>Events</li>
				<li>Babel preset</li>
				<li>Chrome DevTools extension</li>
			</ul>
			<p>Let’s briefly go through the exciting bits.</p>
			<section>
				<h3>String/template render</h3>
				<p>
					We’ve already seen JSX, but I also mentioned that you don’t really need a build
					system to get started with Sandstone. Consider a stateless component:
				</p>
				<Highlight className="jsx">
					{stripIndent`
					export default ({ content }) => (
						<div>
							<h1>Extended Header</h1>
							<h2>{content}</h2>
						</div>
					);
					`}
				</Highlight>
				<p>In Sandstone, you can write it as a string like this:</p>
				<Highlight className="jsx">
					{stripIndent`
					export default ({ content }) => \`
						<div>
							<h1>Extended Header</h1>
							<h2>\${content}</h2>
						</div>
					\`;
					`}
				</Highlight>
				<p>
					No JSX used, no bundling/build system necessary, and you still get all the cool
					things like Virtual DOM. Same also applies to{' '}
					<a
						href="https://sandstone.js.org/3_TEMPLATE_RENDER.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						template tags
					</a>.
				</p>
			</section>
			<section>
				<h3>Shadow DOM</h3>
				<p>
					One of the coolest features of Web Components is the Shadow DOM. Shadow DOM
					provides incapsulation for DOM and styles inside the custom element from the
					main document. Essentially it’s a DOM inside your DOM.
				</p>
				<img src="/static/work/case-studies/sandstone/dawg.jpg" alt="yo-dawg-meme" />
				<p>Sandstone fully supports open and closed Shadow DOM.</p>
			</section>
			<section>
				<h3>Linked state</h3>
				<p>
					Forget writing <span className="pre">onChange</span> handlers for inputs. Every
					Sandstone component has a <span className="pre">linkState</span> method, that
					works like this:
				</p>
				<Highlight className="jsx">
					{stripIndent`
					import { WebComponent } from 'sandstone';
				 
					class CoolHeader extends WebComponent {
						render({ content }) {
							return (
								<div>
									<span>{this.state.preview}</span>
									<input type="text" onChange={this.linkState('preview')} />
								</div>
							)
						}
					}
					`}
				</Highlight>
			</section>
			<section>
				<h3>Events</h3>
				<p>
					One of the coolest features of Web Components is the Shadow DOM. Shadow DOM
					provides incapsulation for DOM and styles inside the custom element from the
					main document. Essentially it’s a DOM inside your DOM.
				</p>
				<img src="/static/work/case-studies/sandstone/dawg.jpg" alt="yo-dawg-meme" />
				<p>Sandstone fully supports open and closed Shadow DOM.</p>
			</section>
			<section>
				<h3>Events</h3>
				<p>
					Obviously, some times you need your components to talk to each other. Now, in a
					single page app, you’d normally have something like Redux handling the data flow
					and you’d have your entire app wrapped in some sort of provier component.
					<br />
					This approach works with React SPAs, but Web Components are self contained, and
					there may be any number of instances of any number of components on the page,
					and one component doesn’t know about the others because of the incapsulation. So
					a different approach was needed for data sharing.
					<br />
					<br />
					Sandstone has a built in event system based on{' '}
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent"
						target="_blank"
						rel="noopener noreferrer"
					>
						CustomEvents
					</a>{' '}
					specification (remember, ”use the platform™”) and it’s extremely simple to use.
					Let’s say you want a button component to change the color of a header in another
					component. Here’s how you would write that with Sandstone:
				</p>
				<Highlight className="jsx">
					{stripIndent`
					import { WebComponent, Event } from 'sandstone';

					class SuperButton extends WebComponent {
						@Event('COLOR:CHANGE')
						changeHeaderColor(newColor) {
							return { color: newColor }
						}

						render() {
							return (
								<button onClick={() => this.changeHeaderColor('#f00')} />
							)
						}
					}
					`}
				</Highlight>
				<p>Then in your other component:</p>
				<Highlight className="jsx">
					{stripIndent`
					import { WebComponent } from 'sandstone';
				 
					class SuperHeader extends WebComponent {
						state = {
							color: 'white',
						}

						componentDidMount() {
							// componentDidMount is a good place to do inits
							
							this.on('COLOR:CHANGE', this.changeColor); // No need to bind
						}

						changeColor(color) {
							this.setState({ color });
						}

						render() {
							return (
								<h1 style={{ color: this.state.color }}>My Super Header!</h1>
							)
						}
					}
					`}
				</Highlight>
				<p>
					Handlers passed to <span className="pre">this.on()</span> are autobound. Magic!
					<br />
					And that’s how you handle data sharing between Web Components in Sandstone.
				</p>
			</section>
		</section>
		<section>
			<h3>Conclusion</h3>
			<p>
				I feel like it’s already too long, so I’m gonna stop here. If you’re interested to
				know more about Sandstone, you can check out the{' '}
				<a href="https://sandstone.js.org" target="_blank" rel="noopener noreferrer">
					official docs
				</a>{' '}
				or the{' '}
				<a
					href="https://medium.com/storehub/web-components-building-blocks-of-modern-web-with-sandstone-js-9354b8e9c0ef"
					target="_blank"
					rel="noopener noreferrer"
				>
					Medium post
				</a>{' '}
				about it.
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

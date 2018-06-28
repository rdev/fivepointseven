## What the hell is this thing

While building a relatively big project back at StoreHub, we faced a little frontend challenge.  
The project needed to be an app that was primarily statically rendered, but it also needed to have a bunch
of small dynamic elements to do certain things. Since I’m morally opposed to using jQuery for something like this,
we first decided to write a bunch of tiny React components to do these things.  
  
But unfortunately it quickly became apparent that with our particular use case that approach was not exactly scalable
and would quickly turn into a hack-fest and maintenance pain. So we needed a new hero. And that hero was...

## Web Components

[Web Components](https://www.webcomponents.org/introduction) are wonderful and magical and they’re finally real,
and there’s no reason not to use them. They’re contained and reusable and that’s just what we needed.  
  
The problem was that all Web Components implementations available were kinda meh. Like, there’s Google’s
[Polymer Project](https://www.polymer-project.org/) , but it’s a bit of a pain to integrate into an existing project.
And there’s a bunch of other things but they all just felt weird. So I decided to make my own thing.  
Which probably turned out just as weird, but at least I know how it works <span role="img" aria-label="smile">😃</span>

## The library

So, I set out on a path to build a new solution for writing Web Components. What were the challenges and requirements?

### Familiarity

I didn’t want to build a whole new massive thing that everyone on the team would have to learn. After all this library
is just the utility, because you know, ”use the platform™”.  
  
And there’s a framework out there that also does components that you probably know of - React. Granted, it’s not Web Components,
but nonetheless, React’s approach to components is the best one I’ve seen. So that’s the approach I took with this library.

### Small file size

No one wants a utility library to grow to the size of Angular, so the whole thing needed to be under or around 10kb GZipped.

### Fast and smart

It also definitely needed to be fast. Probably have some sort of Virtual DOM. It also needed to have capability beyond
rendering strings of HTML and have some sort of state management solution.

## Under the hood

After looking at all the specs I thought ”man, React does most of this stuff really well!”. But I didn’t want to have
a dependency on React. In fact, I wanted users to be able to simply drop a script tag on the page and start
developing Web Components. But I still wanted to be able to use JSX and all the niceness of React. And then it hit me.  
[Preact!](https://github.com/developit/preact) It does everything React does with some extra conveniences and it’s
3kb GZipped, so it can be easily bundled and it’s time proven. So I decided to put Preact under the hood.
Preact acts as a core and gives you that sweet React experience, while the rest of the library allows you to write
awesome Web Components.

## Show me the code

Okay, let me demonstrate. So, here’s how you would normally write and render a React component:

```jsx
import { Component } from 'react';
import ReactDOM from 'react-dom';

class CoolHeader extends Component {
	render() {
		return <h1>{this.props.content}</h1>
	}
}

const container = document.getElementById('app');

ReactDOM.render(<CoolHeader content="Pew pew world!" />, container);
```

And then in your HTML you have to have that container element somewhere:

```html
<div id="app"></div>
```

### Okay, so what’s the deal?

Now, here’s how you write and render the same thing as a Web Component using Sandstone:

```jsx
import { WebComponent, register } from 'sandstone';

class CoolHeader extends WebComponent {
	render({ content }) {
		return <h1>{content}</h1>
	}
}

register(CoolHeader, 'cool-header');
```

And then in your HTML:

```html
<cool-header content="Pew pew world!"></cool-header>
```

Pretty cool, right?

If you’ve worked with React before you may notice a convenience enhancement right away - props and state
of the component are passed as arguments to `render()` for convenient destructuring.

## Features

Sandstone actually has quite a few features.

*   JSX. Because JSX is awesome
*   Rendering from string
*   Rendering from template tags
*   Flags. Basiclly they’re namespaced props
*   Virtual DOM
*   Shadow DOM
*   React-like lifecycle methods
*   Link state for inputs
*   Events
*   Babel preset
*   Chrome DevTools extension

Let’s briefly go through the exciting bits.

### String render

We’ve already seen JSX, but I also mentioned that you don’t really need a build system to get started with Sandstone.

Consider a stateless component:

```jsx
export default ({ content }) => (
	<div>
		<h1>Extended Header</h1>
		<h2>{content}</h2>
	</div>
);
```

In Sandstone, you can write it as a string like this:

```jsx
export default ({ content }) => `
	<div>
		<h1>Extended Header</h1>
		<h2>${content}</h2>
	</div>
`;
```

No JSX used, no bundling/build system necessary, and you still get all the cool things like Virtual DOM.

### Shadow DOM

One of the coolest features of Web Components is the Shadow DOM. Shadow DOM provides incapsulation for DOM and
styles inside the custom element from the main document. Essentially it’s a DOM inside your DOM.

![yo-dawg-meme](/static/work/case-studies/sandstone/dawg.jpg)

Sandstone fully supports open and closed Shadow DOM.

### Linked state

Forget writing `onChange` handlers for inputs. Every Sandstone component has a `linkState` method, that works like this:

```jsx
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
```

### Events

Some times you need your components to talk to each other. Now, in a single page app, you’d normally have something like
Redux handling the data flow and you’d have your entire app wrapped in some sort of provier component.  
This approach works with React SPAs, but Web Components are self contained, and there may be any number of instances
of any number of components on the page, and one component doesn’t know about the others because of the incapsulation.
So a different approach was needed for data sharing.  
  
Sandstone has a built in event system based on [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
specification (remember, ”use the platform™”) and it’s extremely simple to use. Let’s say you want a button component to
change the color of a header in another component. Here’s how you would write that with Sandstone:

```jsx
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
```

Then in your other component:

```jsx
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
```

Handlers passed to `this.on()` are autobound. Magic!  
And that’s how you handle data sharing between Web Components in Sandstone.

### Conclusion

I feel like it’s already too long, so I’m gonna stop here. If you’re interested to know more about Sandstone,
you can check out the [official docs](https://sandstone.js.org). Features not mentioned here include routing, SSR and more good stuff.
If you’re interested to know about more of my work, hit that back button at the top and check out my other projects.  
  
Thanks for your time and have an amazing day!
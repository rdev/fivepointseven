export default class NightModeToggle extends React.Component {
	state = {
		visible: false,
	};

	componentDidMount() {
		this.scrollspy();
	}

	scrollspy() {
		requestAnimationFrame(() => {
			if (window.scrollY > 90 && !this.state.visible) {
				this.setState({
					visible: true,
				});
			}

			if (window.scrollY < 90 && this.state.visible) {
				this.setState({
					visible: false,
				});
			}

			this.scrollspy();
		});
	}

	render() {
		return (
			<button
				className="night-mode-switch"
				onClick={this.props.onClick}
				style={{ opacity: this.state.visible ? 0.5 : 0 }}
			>
				<svg width="64px" height="70px" viewBox="0 0 64 70">
					<g fillRule="nonzero">
						<path
							d="M41.188,50.281 C25.227,39.202 21.332,17.343 32.484,1.479 C32.852,0.957 33.248,0.498 33.637,7.10542736e-15 C23.27,0.635 13.267,5.767 6.852,14.891 C-4.291,30.758 -0.392,52.606 15.56,63.692 C31.003,74.417 52.048,71.107 63.499,56.506 C55.839,56.972 47.976,54.998 41.188,50.281 Z"
							id="Shape"
						/>
					</g>
				</svg>
				<span>night mode</span>
			</button>
		);
	}
}

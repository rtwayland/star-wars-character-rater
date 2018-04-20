import React, { Component } from 'react';

class App extends Component {
	state = {
		upVotes: 0,
		downVotes: 0
	};
	render() {
		return (
			<div id="center">
				<p>Up Votes: -</p>
				<p>Down Votes: -</p>
				<div className="buttons">
					<button
						className="ui basic green button"
						onClick={null}
					>
						Up
					</button>
					<button
						className="ui basic yellow button"
						onClick={null}
					>
						Down
					</button>
				</div>
			</div>
		);
	}
}

export default App;

import React from 'react';
import RatingButtons from './RatingButtons';

const Character = props => (
	<div className="character-card card">
		<div className="content">
			<div className="header">{props.name}</div>
			<div className="meta">
				<div>
					UpVotes: <strong>{props.upVotes}</strong>
				</div>
				<div>
					DownVotes: <strong>-{props.downVotes}</strong>
				</div>
			</div>
			<div className="ui list">
				{props.films.map(episode => (
					<div className="item" key={episode}>
						{episode}
					</div>
				))}
			</div>
		</div>
		<div className="extra content">
			<RatingButtons
				characterId={props.id}
				incrementUpVotes={props.incrementUpVotes}
				incrementDownVotes={props.incrementDownVotes}
				deleteCharacter={props.deleteCharacter}
			/>
		</div>
	</div>
);

export default Character;

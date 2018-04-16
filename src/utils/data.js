import pick from 'lodash/pick';
import mapKeys from 'lodash/mapKeys';

export function prepData(people) {
	const pickedData = people.map(person => pick(person, ['name', 'films', 'url']));
	const finalData = pickedData.map(person => {
		let id = Number(person.url.replace('https://swapi.co/api/people/', '').replace('/', ''))
		let correctedFilms = person.films.map(film => {
			let filmNumber = film.replace('https://swapi.co/api/films/', '').replace('/', '');
			let title = '';
			switch (filmNumber) {
				case '1':
					title = 'Episode 4: A New Hope';
					break;
				case '2':
					title = 'Episode 5: The Empire Strikes Back';
					break;
				case '3':
					title = 'Episode 6: Return of the Jedi';
					break;
				case '4':
					title = 'Episode 1: The Phantom Menace';
					break;
				case '5':
					title = 'Episode 2: Attack of the Clones';
					break;
				case '6':
					title = 'Episode 3: Revenge of the Sith';
					break;
				case '7':
					title = 'Episode 7: The Force Awakens';
					break;
				default:
					title = 'Unknown';
					break;
			}
			return title;
		});
		correctedFilms.sort()
		return { ...person, id, films: correctedFilms, upVotes: 0, downVotes: 0 };
	});
	return mapKeys(finalData, 'id');
}

import GameSavingLoader from '../js/GameSavingLoader';

test('testing GameSavingLoader result', async () => {
  const obj = await GameSavingLoader.load();
  expect(JSON.stringify(obj)).toEqual(JSON.stringify({
	  id: 9,
	  created: 1546300800,
	  userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 }
  }));
});
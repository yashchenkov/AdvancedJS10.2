import GameSavingLoader from './GameSavingLoader';

(async () => {
	const obj = await GameSavingLoader.load();
	console.log(obj);
})();
import { GameSavingLoader } from './GameSavingLoader';

// TODO: write code here
(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  }
  catch(error) {
    console.log(`Ошибка: ${error.message}`);
  }
})();

console.log('app worked!');
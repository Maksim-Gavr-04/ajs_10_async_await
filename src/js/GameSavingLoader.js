import { read } from './reader';
import { json } from './parser';

export class GameSavingLoader {
  static async load() {
    const response = await read();
    const data = await json(response);
    return new Promise(resolve =>
      resolve(JSON.parse(data))
    );
  }
}
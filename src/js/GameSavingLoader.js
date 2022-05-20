import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {

  static async load() {
    const a = await read();
    const b = await json(a);
    const obj = await JSON.parse(b);
    return new GameSaving(obj.id, obj.created, obj.userInfo);
    ;
  }
}
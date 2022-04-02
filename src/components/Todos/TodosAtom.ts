import { atom } from 'recoil';

export const TodosAtom = atom({
  key: 'todos',
  default: [],
});

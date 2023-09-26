import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);

const charactersCollection = new CharactersCollection('holaMundo');
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(sorter2.collection);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(0);
linkedList.add(-1);

const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();

import { PeopleCollection } from '../imports/api/PeopleCollection.js';

if (PeopleCollection.find().count() === 0) {
  PeopleCollection.insert({ first: 'Philip', last: 'Johnson', age: 60, city: 'Kailua' });
  PeopleCollection.insert({ first: 'Joanne', last: 'Amberg', age: 58, city: 'Kailua' });
  PeopleCollection.insert({ first: 'Jenna', last: 'Corin', age: 31, city: 'Boulder Creek' });
  PeopleCollection.insert({ first: 'Katie', last: 'Kai', age: 25, city: 'Palo Alto' });
  PeopleCollection.insert({ first: 'Doris', last: 'Johnson', age: 93, city: 'Naples' });
}
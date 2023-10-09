import {randomInteger} from '../utils';

const CITIES = [
  'Amsterdam',
  'Chamonix',
  'Geneva',
  'London',
  'Paris',
  'New York',
  'Tokyo',
  'Sinagpore',
  'Dubai',
  'San Francisco',
  'Barcelona',
  'Amsterdam',
  'Seoul'
];

const getCities = (cities) => {
  const copyCities = [...cities];
  const amount = randomInteger(1, copyCities.length);
  return Array(amount).fill('').map(() => {
    const index = randomInteger(0, copyCities.length - 1);
    const item = copyCities[index];
    copyCities.splice(index, 1);
    return item;
  });
};

export default getCities(CITIES);

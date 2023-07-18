/// <reference types="@types/google.maps" />
import { faker } from '@faker-js/faker';
import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const location = {
  lat: faker.location.latitude(),
  lng: faker.location.longitude(),
};

const user = new User(faker.person.firstName(), location);

const map = new Map('map');
map.addUserMarker(user);

/// <reference types="@types/google.maps" />
import { faker } from '@faker-js/faker';
import { User } from './User';
import { Company } from './Company';

const location = {
  lat: faker.location.latitude(),
  lng: faker.location.longitude(),
};

const user = new User(faker.person.firstName(), location);

const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
  center: location,
  zoom: 1,
});

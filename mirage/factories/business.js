import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    uuid() {
        return faker.random.uuid();
    },

    name() {
        return faker.company.companyName();
    },

    address() {
        return faker.address.streetAddress();
    },

    address2() {
        return faker.address.secondaryAddress();
    },

    city() {
        return faker.address.city();
    },

    state() {
        return faker.address.stateAbbr();
    },

    zip() {
        return faker.address.zipCode();
    },

    country() {
        return faker.address.country();
    },

    phone() {
        return faker.random.number({ min: 1000000000, max: 9999999999 });
    },

    website() {
        return faker.internet.url();
    },

    createdAt() {
        return faker.date.past();
    }
});

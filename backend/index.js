const faker = require('faker');

module.exports = () => {
  const data = {
    users: [],
  };

  // Create 200 users
  for (let i = 1; i <= 200; i++) {
    data.users.push({
      id: i,
      name: faker.name.findName(),
      country: faker.address.country(),
      city: faker.address.city(),
    });
  }
  return data;
};

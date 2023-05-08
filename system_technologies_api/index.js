const express = require("express");
const app = express();
const faker = require("faker");

const port = 3003;

const patients = [];

for (let i = 0; i < 10; i++) {
  const patient = {
    _id: faker.datatype.uuid(),
    name: faker.name.findName(),
    identifier: faker.random.alphaNumeric(10),
    birthDate: faker.date.past(50).toISOString().substr(0, 10),
    deceasedBirth: faker.random.boolean()
      ? faker.date.past(10).toISOString().substr(0, 10)
      : null,
    birthCity: faker.address.city(),
    isDeceased: faker.random.boolean(),
    address: faker.address.streetAddress(),
    email: faker.internet.email(),
    married: faker.random.boolean(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
  patients.push(patient);
}

app.get("/patients", function (req, res) {
  const identifier = req.query.identifier;
  console.log('identifier', identifier);
  let dataResp = [];
    if (identifier == undefined || identifier == null || identifier == '') {
        dataResp = patients;
    } else {
        dataResp = patients.filter((patient) => patient.identifier === identifier);
    }
  res.json({ data: dataResp });
});

app.listen(port);
console.log(`🚀 System Technologies API start on port => ${port} ✅`);

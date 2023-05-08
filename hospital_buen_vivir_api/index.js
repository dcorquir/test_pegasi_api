var express = require("express");
var app = express();
const faker = require("faker");

var port = 3002;

const patients = [];

for (let i = 0; i < 10; i++) {
  const patient = {
    _id: faker.datatype.uuid(),
    nombre_completo: faker.name.findName(),
    cedula: faker.random.alphaNumeric(10),
    nacimiento: faker.date.past(50),
    fallecido: faker.date.recent(),
    ciudad_nacido: faker.address.city(),
    direccion_actual: faker.address.streetAddress(),
    correoActual: faker.internet.email(),
    a_t: faker.date.past(),
    UT: faker.date.recent(),
  };
  patients.push(patient);
}

app.get("/patients", function (req, res) {
  const identifier = req.query.identifier;
  console.log("identifier", identifier);
  let dataResp = [];
  if (identifier == undefined || identifier == null || identifier == "") {
    dataResp = patients;
  } else {
    dataResp = patients.filter((patient) => patient.cedula === identifier);
  }
  res.json({ data: dataResp });
});


app.listen(port);
console.log(`🚀 Hospital Buen Vivir API start on port => ${port} ✅`);

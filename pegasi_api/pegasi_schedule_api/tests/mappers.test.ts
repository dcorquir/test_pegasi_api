import { HbvMapper } from './../src/utils/mappers/external_resources/hbv.mapper';
import { StMapper } from './../src/utils/mappers/external_resources/st.mapper';

describe('Test HBV mappers data', () => {
    const mockHBVRequest = {
        "_id": "6f9c1bc8-cca5-4336-93d7-956941ee3305",
        "nombre_completo": "Mrs. Maryann Schiller",
        "cedula": "21ztym531m",
        "nacimiento": "1988-08-01T11:50:35.522Z",
        "fallecido": "2023-05-08T05:16:45.313Z",
        "ciudad_nacido": "Leifton",
        "direccion_actual": "98212 Roob Circles",
        "correoActual": "Meredith.Oberbrunner24@yahoo.com",
        "a_t": new Date("2022-11-14T23:30:09.713Z"),
        "UT": new Date("2023-05-08T02:51:31.870Z")
    };

    it('Test mapper is ok', () => {
        const rsp = HbvMapper.mapperPatientData(mockHBVRequest);
        const mockRsp = {"paciente": {"cidudadNacimiento": "Leifton", "direccion": "98212 Roob Circles", "dni": "21ztym531m", "email": "Meredith.Oberbrunner24@yahoo.com", "fallecido": true, "fechaFachecimiento": "2023-05-08T05:16:45.313Z", "fechaNacimiento": "1988-08-01T11:50:35.522Z", "nombre": "Mrs. Maryann Schiller"}};
        expect(rsp).toEqual(mockRsp);
    });

});

describe('Test ST mappers data', () => {

    const stRequestMock = {
        "_id": "5f1499af-1e85-4273-a239-999b4e286f44",
        "name": "Diana O'Connell",
        "identifier": "3cuuc3fsjn",
        "birthDate": "2012-10-31",
        "deceasedBirth": '',
        "birthCity": "Moreno Valley",
        "isDeceased": '',
        "address": "00661 Rippin Terrace",
        "email": "Marietta.Kuvalis@hotmail.com",
        "married": true,
        "createdAt": new Date("2022-11-12T05:37:20.097Z"),
        "updateAt": new Date("2023-05-07T20:01:41.579Z")
    }

    it('Test mapper is ok', () => {
        const rsp = StMapper.mapperPatientData(stRequestMock);
        console.log('rsp', rsp);
        const mockRsp = {"paciente": {"casado": true, "cidudadNacimiento": "Moreno Valley", "direccion": "00661 Rippin Terrace", "dni": "3cuuc3fsjn", "email": "Marietta.Kuvalis@hotmail.com", "fallecido": false, "fechaFachecimiento": "", "fechaNacimiento": "2012-10-31", "nombre": "Diana O'Connell"}};
        expect(rsp).toEqual(mockRsp);
    });

});
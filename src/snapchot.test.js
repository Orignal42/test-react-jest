import React from 'react'

const FlightService = {
  list(){
    return {
      "arrivalDatetime": "2018-06-15T21:00:00",
      "departure": "DUB",
      "departureDatetime": "2018-06-15T17:25:00",
      "destination": "WRO",
      "flightNumber": "FR153",
    }
  }
};

describe('FlightService', () => {
    it('Should return a list of flights', () => {
        expect(FlightService.list()).toEqual({
          "arrivalDatetime": "2018-06-15T21:00:00",
          "departure": "DUB",
          "departureDatetime": "2018-06-15T17:25:00",
          "destination": "WRO",
          "flightNumber": "FR153",
        })
    });
});
  
//  Test 1 qui doit échouer à chaque fois
// it('échouera à chaque fois', () => {
//   const user = {
//     createdAt: new Date(),
//     id: Math.floor(Math.random() * 20),
//     name: 'LeBron James',
//   };

//   expect(user).toMatchSnapshot();
// });

// Snapshot test qui doit réussir
exports[`échouera à chaque fois 1`] = `
Object {
  "createdAt": 2018-05-19T23:36:09.816Z,
  "id": 3,
  "name": "LeBron James",
}
`;
  const user_2 = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };
  
  it('vérifiera les comparateurs et passera', () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
      name: 'LeBron James',
    };
  
    expect(user).toMatchSnapshot({
      createdAt: expect.any(Date),
      id: expect.any(Number),
    });
  });
  
  // Snapshot
  exports[`vérifiera les comparateurs et passera 1`] = `
  Object {
    "createdAt": Any<Date>,
    "id": Any<Number>,
    "name": "LeBron James",
  }
  `;
  
  it('vérifiera les valeurs et passera', () => {
    const user = {
      createdAt: new Date(),
      name: 'Bond... James Bond',
    };
  
    expect(user).toMatchSnapshot({
      createdAt: expect.any(Date),
      name: 'Bond... James Bond',
    });
  });
  
  // Snapshot
  exports[`vérifiera les valeurs et passera 1`] = `
  Object {
    "createdAt": Any<Date>,
    "name": 'Bond... James Bond',
  }
  `;
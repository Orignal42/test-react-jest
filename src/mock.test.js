import React from 'react';
import './setupTests';
test("returns undefined by default", () => {
  	const mock = jest.fn();    
  	let result = mock("foo");
    //tester que result est bien undefined
    expect(result).toBeUndefined(); 
    //tester que la fonction mock a bien été appelée
 	let new_result = mock("foo2");
    //tester que la fonction mock a bien été appelée 2 fois
    expect(mock).toHaveBeenCalledTimes(2);
    //tester que la fonction mock a bien été appelée avec le paramètre foo2
    expect(mock).toHaveBeenCalledWith('foo2');
});

const doAdd = (a, b, callback) => {    
  let add = a + b + 3;    
  callback(add);
};
test("calls callback with arguments added", () => {    
  //mocker la fonction de callback puis appeler la fonction doAdd avec a=1 et b=2
  //vérifiez que la fonction a été appelée avec le bon paramètre
  const mockCallBack=jest.fn(x=>x);
  let a=1;
  let b=2;

  doAdd(a,b,mockCallBack);
  expect (mockCallBack).toHaveBeenCalledWith(6);


});
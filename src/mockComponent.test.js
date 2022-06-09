import React from 'react'
import './setUpTests';
import { mount } from 'enzyme';
import ShareCom from './MockComponents/ShareComponent';


const mockUserComponent = jest.fn();
jest.mock("./MockComponents/UserComponent", () => (props) => {
  mockUserComponent(props);
  return <mock-user-component />;
});

const mockInstallComponent = jest.fn();
jest.mock("./MockComponents/InstallComponent", () => (props) => {
    mockInstallComponent(props);
    return <mock-install-component />;
  });

describe('ShareCom', () => {
    it('should return correct component', () => {

        //mount ShareCom 
        mount(<ShareCom />)
        //test
        expect(mockUserComponent).toHaveBeenCalledWith({para2: "title2"});
        expect(mockInstallComponent).toHaveBeenCalledWith({para1: "title1"});
        
    })
});
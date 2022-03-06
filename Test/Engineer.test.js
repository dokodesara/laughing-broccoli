const Employee = require('../Lib/Engineer');
const Enginner = new Employee('desara', '23765', 'dokodesara@gmail.com', 'dokodesara');

it('should test if we can get the constructor values for the Enginner object', () => {
    expect(Enginner.name).toEqual('desara');
    expect(Enginner.id).toEqual('23765');
    expect(Enginner.email).toEqual('dokodesara@gmail.com');
    expect(Enginner.github).toEqual('dokodesara');
});

it('should test if we can get the name from the getName() method', () => {
    expect(Enginner.getName()).toEqual('desara');
});

it('should test if we can get the id from the getId() method', () => {
    expect(Enginner.getId()).toEqual('23765');
});

it('should test if we can get the email from the getEmail() method', () => {
    expect(Enginner.getEmail()).toEqual('dokodesara@gmail.com');
});

it('should test if we can get the github username from the getGithub() method', () => {
    expect(Enginner.getGithub()).toEqual('dokodesara');
});

it('should test if we can get the role from the getRole() method', () => {
    expect(Enginner.getRole()).toEqual('Engineer');
});
const Employee = require('../Lib/Manager');
const Manager = new Employee('desara', '23765', 'dokodesara@gmail.com', '555');

it('should test if we can get the constructor values for the Manager object', () => {
    expect(Manager.name).toEqual('desara');
    expect(Manager.id).toEqual('23765');
    expect(Manager.email).toEqual('dokodesara@gmail.com');
    expect(Manager.officeNum).toEqual('555');
});

('should test if we can get the name from the getName() method', () => {
    expect(Manager.getName()).toEqual('desara');
});

it('should test if we can get the id from the getId() method', () => {
    // expect(Manager.getId()).toEqual('23765');
});
it('should test if we can get the email from the getEmail() method', () => {
    expect(Manager.getEmail()).toEqual('dokodesara@gmail.com');
});

it('should test if we can get the office number from the getOfficeNumber() method', () => {
    expect(Manager.getofficeNum()).toEqual('555');
});

it('should test if we can get the role from the getRole() method', () => {
    expect(Manager.getRole()).toEqual('Manager');
});

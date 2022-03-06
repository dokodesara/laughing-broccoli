const Employee = require('../Lib/Employee');
const employee = new Employee('desara', '23765', 'dokodesara@gmail.com');

it('should test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toEqual('desara');
    expect(employee.id).toEqual('23765');
    expect(employee.email).toEqual('dokodesara@gmail.com');
});

it('should test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toEqual('desara');
});

it('should test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toEqual('23765');
});

it('should test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toEqual('dokodesara@gmail.com');
});

it('should test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toEqual('Employee');
});
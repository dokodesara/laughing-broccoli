const Employee = require('../lib/Employee');
const employee = new Employee('desara', '23765', 'dokodesara@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('desara');
    expect(employee.id).toBe('23765');
    expect(employee.email).toBe('dokodesara@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('desara');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('23765');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('dokodesara@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});
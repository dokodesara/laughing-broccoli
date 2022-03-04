const Manager = require('../lib/Manager');
const manager = new Manager('joelle', '5768098', 'jdeschat@gmail.com', '821');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('desara');
    expect(manager.id).toBe('23765');
    expect(manager.email).toBe('dokodesara@gmail.com');
    expect(manager.officeNumber).toBe('555');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('desara');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('23765');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('dokodesara@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('555');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});

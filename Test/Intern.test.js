const Intern = require('../lib/Intern');
const intern = new Intern('joelle', '5768098', 'jdeschat@gmail.com', 'Toronto');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('desara');
    expect(intern.id).toBe('23765');
    expect(intern.email).toBe('dokodesara@gmail.com');
    expect(intern.school).toBe('UNH');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('desara');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('23765');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('dokodesara@gmail.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('UNH');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});


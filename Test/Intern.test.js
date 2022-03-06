const Employee = require('../Lib/Intern');
const Intern = new Employee('desara', '23765', 'dokodesara@gmail.com', 'UNH');

it('should test if we can get the constructor values for the engineer object', () => {
    expect(Intern.name).toEqual('desara');
    expect(Intern.id).toEqual('23765');
    expect(Intern.email).toEqual('dokodesara@gmail.com');
    expect(Intern.school).toEqual('UNH');
});

it('should test if we can get the name from the getName() method', () => {
    expect(Intern.getName()).toEqual('desara');
});

it('should test if we can get the id from the getId() method', () => {
    expect(Intern.getId()).toEqual('23765');
});

it('should test if we can get the email from the getEmail() method', () => {
    expect(Intern.getEmail()).toEqual('dokodesara@gmail.com');
});

it('should test if we can get the school name from the getSchool() method', () => {
    expect(Intern.getSchool()).toEqual('UNH');
});

it('should test if we can get the role from the getRole() method', () => {
    expect(Intern.getRole()).toEqual('Intern');
});


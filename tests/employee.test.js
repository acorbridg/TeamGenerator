const Employee = require ("../employeejs/Employee")


test('Employee; id, name and email', () => {
    const employee = new Employee ("1","George","georgie@gmail.com");
    expect(employee.getId()).toBe("1")
    expect(employee.getName()).toBe("George")
    expect(employee.getEmail()).toBe("georgie@gmail.com")
})
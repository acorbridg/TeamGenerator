const Intern = require ("../employeejs/Intern.js")


test('Intern; School', () => {
    const intern = new Intern ("","","","Utah Valley University");
    expect(intern.getSchool()).toBe("Utah Valley University");
})
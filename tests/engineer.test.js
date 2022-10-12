const Engineer = require ("../employeejs/engineer.js")

test('Engineer; Github', () => {
    const engineer = new Engineer ("1","George","georgie@gmail.com","george123");
    expect(engineer.getGithub()).toBe("george123")
})
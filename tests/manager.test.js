const Manager  = require ("../employeejs/Manager.js")

test('Manager; Office number', () => {
    const manager = new Manager ("","","","The one with a window");
    expect(manager.getOffice()).toBe("The one with a window");
})
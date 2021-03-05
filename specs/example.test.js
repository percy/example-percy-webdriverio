const httpServer = require('http-server');
const percySnapshot = require('@percy/webdriverio');

async function createTodo() {
  let newTodo = await $('.new-todo');
  newTodo.setValue('New fancy todo');
  await browser.keys('Enter');
  // needed or the todo is never submitted
  await browser.execute(() => document.querySelector('.new-todo').blur());
}

describe('example page', function () {
  const PORT = 8000;
  const TEST_URL = `http://localhost:${PORT}`;

  let server = null;

  before(() => {
    // Start local server to host app under test.
    server = httpServer.createServer({ root: `${__dirname}/../` });
    server.listen(PORT);
  });

  after(() => {
    // Shut down the HTTP server.
    server.close();
  });

  it('Loads the app', async function () {
    await browser.url(TEST_URL);

    expect(await browser.getTitle()).toEqual('VanillaJS • TodoMVC');
    await percySnapshot(browser, 'loads the app');
  });

  it('Accepts a new todo', async function () {
    await createTodo();

    let todoCount = await browser.execute(() => document.querySelectorAll('.todo-list li').length);
    expect(todoCount).toEqual(1);

    await percySnapshot(browser, 'Snapshot with new todo');
  });

  it('Lets you check off a todo', async function () {
    await createTodo();

    let itemsLeft = await browser.execute(() => document.querySelector('.todo-count').textContent);
    expect(itemsLeft).toEqual('2 items left');

    let completeTodo = await $('input.toggle');
    await completeTodo.click();
    itemsLeft = await browser.execute(() => document.querySelector('.todo-count').textContent);
    expect(itemsLeft).toEqual('1 item left');

    await percySnapshot(browser, 'checked off todo');
  });
});

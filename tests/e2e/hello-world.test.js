import { Selector } from 'testcafe';

fixture(`E2E演示`).page(`http://localhost:8080/`);

test('找到文本', async t => {
  await t.expect(Selector('#app', { timeout: 500 }).innerText).eql('Hello Jest');
});
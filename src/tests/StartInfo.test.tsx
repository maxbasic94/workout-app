import StartInfo from '../startPage/startInfo/StartInfo';

test('StartInfo return component name `StartInfo`', () => {
  const testPage = StartInfo.name;
  expect(testPage).toBe('StartInfo');
});

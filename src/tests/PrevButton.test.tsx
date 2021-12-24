import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import PrevButton from '../exercisePage/buttons/PrevButton';
jest.mock('prevExr.png');

let container: Element;
beforeAll(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterAll(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it('test disabled Next button', () => {
  act(() => {
    render(<PrevButton index={0} />, container);
  });
  const button: HTMLButtonElement | null = container.querySelector('.ExersicePage_button_prev');
  expect(button?.disabled).toBe(true);

  act(() => {
    render(<PrevButton index={10} />, container);
  });
  expect(button?.disabled).toBe(false);
});

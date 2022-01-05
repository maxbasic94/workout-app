import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from '../pages/exercisePage/nextPrevButton/Button';
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

it('test disabled Prev button', () => {
  act(() => {
    render(<Button index={0} />, container);
  });
  const button: HTMLButtonElement | null = container.querySelector('.ExercisePage_button_prev');
  expect(button?.disabled).toBe(true);

  act(() => {
    render(<Button index={10} />, container);
  });
  expect(button?.disabled).toBe(false);
});

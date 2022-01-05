import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from '../pages/exercisePage/nextPrevButton/Button';
jest.mock('nextExr.png');

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
    render(<Button index={0} amountExercise={10} isNext />, container);
  });
  const button: HTMLButtonElement | null = container.querySelector('.ExercisePage_button_next');
  expect(button?.disabled).toBe(false);

  act(() => {
    render(<Button index={10} amountExercise={10} isNext />, container);
  });
  expect(button?.disabled).toBe(true);
});

import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import NextButton from '../exercisePage/buttons/NextButton';
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
    render(<NextButton index={0} amountExercise={10} />, container);
  });
  const button: HTMLButtonElement | null = container.querySelector('.ExercisePage_button_next');
  expect(button?.disabled).toBe(false);

  act(() => {
    render(<NextButton index={10} amountExercise={10} />, container);
  });
  expect(button?.disabled).toBe(true);
});

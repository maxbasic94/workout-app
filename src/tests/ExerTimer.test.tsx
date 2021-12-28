import { configure } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import ExerciseTimer from '../exercisePage/exerciseTimer/ExerciseTimer';
import Adapter from 'enzyme-adapter-react-17-updated';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

configure({ adapter: new Adapter() });

let container: Element;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container?.remove();
});

it('renders Timer', () => {
  act(() => {
    render(<ExerciseTimer id={65} time={20} caption="test" isPause={false} />, container);
  });
  const timer: HTMLDivElement | null = container.querySelector(
    '.ExercisePage-ExerciseTimer_container'
  );
  expect(timer?.innerHTML)
    .toBe(`<div class=\"ExercisePage-ExerciseTimer_caption\">test</div><div style=\"position: relative; width: 128px; height: 128px;\" aria-label=\"Countdown timer\"><svg width=\"128\" height=\"128\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m 64,6
          a 58,58 0 1,0 0,116
          a 58,58 0 1,0 0,-116\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"12\"></path><path d=\"m 64,6
          a 58,58 0 1,0 0,116
          a 58,58 0 1,0 0,-116\" fill=\"none\" stroke=\"rgba(255, 64, 129, 1)\" stroke-linecap=\"round\" stroke-width=\"12\" stroke-dasharray=\"364.424747816416\" stroke-dashoffset=\"0\"></path></svg><div aria-hidden=\"true\" style=\"display: flex; justify-content: center; align-items: center; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; color: rgb(255, 64, 129);\">20</div></div>`);
  act(() => {
    render(<CountdownCircleTimer size={128} duration={20} colors={'#FF4081'} />, container);
  });
  expect(container.innerHTML)
    .toBe(`<div style=\"position: relative; width: 128px; height: 128px;\" aria-label=\"Countdown timer\"><svg width=\"128\" height=\"128\" xmlns=\"http://www.w3.org/2000/svg\"><path d="m 64,6
          a 58,58 0 1,0 0,116
          a 58,58 0 1,0 0,-116" fill="none" stroke="#d9d9d9" stroke-width="12"></path><path d="m 64,6
          a 58,58 0 1,0 0,116
          a 58,58 0 1,0 0,-116" fill="none" stroke="rgba(255, 64, 129, 1)" stroke-linecap="round" stroke-width="12" stroke-dasharray="364.424747816416" stroke-dashoffset="0"></path></svg></div>`);
});

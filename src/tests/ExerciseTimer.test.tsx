import { configure } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import ExerciseTimer from '../pages/exercisePage/components/exerciseTimer/ExerciseTimer';
import Adapter from 'enzyme-adapter-react-17-updated';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

configure({ adapter: new Adapter() });

function testFunction() {
  console.log('test');
}

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
    render(
      <ExerciseTimer time={20} caption="test" isPause={false} moveToNext={testFunction} />,
      container
    );
  });
  const timer: HTMLDivElement | null = container.querySelector(
    '.ExercisePage-ExerciseTimer_container'
  );
  expect(timer?.innerHTML).toBe(
    `<div class="ExercisePage-ExerciseTimer_caption">test</div><div class="ExercisePage-BaseTimer"><svg class="ExercisePage-BaseTimer_svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g class="ExercisePage-BaseTimer_circle"><circle class="ExercisePage-BaseTimer_pathElapsed" cx="50" cy="50" r="45"></circle><path id="ExercisePage-BaseTimer_pathRemaining" stroke-dasharray="283 283" style="color: rgb(255, 64, 129);" class="ExercisePage-BaseTimer_pathRemaining green" d=" M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0 "></path></g></svg><span class="ExercisePage-BaseTimer_label" style="color: rgb(255, 64, 129);">20</span></div>`
  );
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

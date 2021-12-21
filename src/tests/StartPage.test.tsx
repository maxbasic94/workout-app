import { QuestionType } from '../types/types';
import { unmountComponentAtNode } from 'react-dom';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import StartPage from '../startPage/StartPage';
import Adapter from 'enzyme-adapter-react-17-updated';

configure({ adapter: new Adapter() });

const testArr = [
  {
    exercises: [
      {
        id: 63,
        title: 'Big Arm Circles (Backward)',
        duration: 20,
        video:
          'https://player.vimeo.com/external/342249535.sd.mp4?s=c0847c750671537e3cd747a98faf3c58c098cf04&profile_id=165',
        photo:
          'https://meal-workouts-prod.s3.amazonaws.com/workouts/exercises/360x360/fed06899b5f2c3b8cde17293e9346d11.jpg',
        description:
          '1. Stand straight with your feet shoulder-width apart and your hands by the sides. \r\n2. Start to rotate your arms backward, making big circles until the set is complete.',
      },
    ],
    title: 'Warm up',
  } as QuestionType,
];

let container: Element;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

test('should render correctly', () => {
  const wrapper: any = JSON.stringify(shallow(<StartPage exerArr={testArr} />));
  expect(toJson(wrapper)).toMatchSnapshot();
});

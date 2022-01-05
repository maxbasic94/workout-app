import { unmountComponentAtNode } from 'react-dom';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import ExercisePage from '../pages/exercisePage/ExercisePage';
import Adapter from 'enzyme-adapter-react-17-updated';

jest.mock('nextExr.png');
jest.mock('prevExr.png');
jest.mock('pause.png');
jest.mock('plat.png');

configure({ adapter: new Adapter() });

interface TestType {
  description: string;
  duration: number;
  id: number;
  photo: string;
  title: string;
  video: string;
}

const testArr: Array<TestType> = [
  {
    description:
      '1. Stand straight with your feet shoulder-width apart and your hands by the sides. \r\n2. Start to rotate your arms backward, making big circles until the set is complete.',
    duration: 20,
    id: 63,
    photo:
      'https://meal-workouts-prod.s3.amazonaws.com/workouts/exercises/360x360/fed06899b5f2c3b8cde17293e9346d11.jpg',
    title: 'Big Arm Circles (Backward)',
    video:
      'https://player.vimeo.com/external/342249535.sd.mp4?s=c0847c750671537e3cd747a98faf3c58c098cf04&profile_id=165',
  },
  {
    id: 924,
    title: 'Big Arm Circles (Forward)',
    duration: 20,
    video:
      'https://player.vimeo.com/external/465732009.sd.mp4?s=d47b0ff1d8fbab547b282ee021fd8acf6db47e99&profile_id=165',
    photo:
      'https://meal-workouts-prod.s3.amazonaws.com/workouts/exercises/360x360/36d18cf6a0fb09fb5b0c27c27a912d14.png',
    description:
      '1. Stand straight with your feet shoulder-width apart and your hands by the sides. \r\n2. Start to rotate your arms forward, making big circles until the set is complete.',
  },
  {
    id: 169,
    title: 'High Knees',
    duration: 20,
    video:
      'https://player.vimeo.com/external/342977140.sd.mp4?s=2b60f9e7ae6e44772a0563101338683068724e24&profile_id=165',
    photo:
      'https://meal-workouts-prod.s3.amazonaws.com/workouts/exercises/360x360/218ae45c85cef0557e60d7d08506eab4.jpg',
    description:
      '1. Stand straight with your feet shoulder-width apart. Face forward and open your chest.\r\n2. Bring your knee up to as high as you can and return to the standing position.\r\n3. Alternate legs and repeat the movement until the set is complete.',
  },
];

let container: Element;
// let instance;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

test('should render correctly', () => {
  const wrapper: any = JSON.stringify(shallow(<ExercisePage allExercises={testArr} />));
  expect(toJson(wrapper)).toMatchSnapshot();
});

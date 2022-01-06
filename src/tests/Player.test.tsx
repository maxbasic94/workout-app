import { configure } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import Player from '../pages/exercisePage/components/player/Player';
import Adapter from 'enzyme-adapter-react-17-updated';

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

it('renders Player with url: https://player.vimeo.com/external/465732009.sd.mp4?s=d47b0ff1d8fbab547b282ee021fd8acf6db47e99&profile_id=165', () => {
  act(() => {
    render(
      <Player url="https://player.vimeo.com/external/465732009.sd.mp4?s=d47b0ff1d8fbab547b282ee021fd8acf6db47e99&profile_id=165" />,
      container
    );
  });
  const video: HTMLVideoElement | null = container.querySelector('.ExercisePage-Player_video');
  expect(video?.src).toBe(
    'https://player.vimeo.com/external/465732009.sd.mp4?s=d47b0ff1d8fbab547b282ee021fd8acf6db47e99&profile_id=165'
  );

  act(() => {
    render(
      <Player url="https://player.vimeo.com/external/534770014.sd.mp4?s=ddbfaf2356bf4d8f6a71694cbff489fbe46635f2&profile_id=165" />,
      container
    );
  });
  const video2: HTMLVideoElement | null = container.querySelector('.ExercisePage-Player_video');
  expect(video2?.src).toBe(
    'https://player.vimeo.com/external/534770014.sd.mp4?s=ddbfaf2356bf4d8f6a71694cbff489fbe46635f2&profile_id=165'
  );
});

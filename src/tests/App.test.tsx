import React from 'react';
import { mount, configure } from 'enzyme';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import StartPage from '../pages/startPage/StartPage';
import ExercisePage from '../pages/exercisePage/ExercisePage';
import Adapter from 'enzyme-adapter-react-17-updated';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
jest.mock('initImg.jpg');

configure({ adapter: new Adapter() });

test('invalid path should redirect to NotFoundPage', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/random']}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(StartPage)).toHaveLength(0);
  expect(wrapper.find(ExercisePage)).toHaveLength(0);
  expect(wrapper.find(NotFoundPage)).toHaveLength(1);
});

test('path "/exercise" should redirect to ExercisePage', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/exercise']}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(StartPage)).toHaveLength(0);
  expect(wrapper.find(ExercisePage)).toHaveLength(1);
  expect(wrapper.find(NotFoundPage)).toHaveLength(0);
});

test('path "/exercise" should redirect to ExercisePage', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(StartPage)).toHaveLength(1);
  expect(wrapper.find(ExercisePage)).toHaveLength(0);
  expect(wrapper.find(NotFoundPage)).toHaveLength(0);
});

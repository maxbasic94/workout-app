import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Exam from './exam';

let container: Element;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container?.remove();
});

it('renders with or without a name', () => {
  act(() => {
    render(<Exam />, container);
  });
  expect(container?.textContent).toBe('Hey, stranger');

  act(() => {
    render(<Exam name="Jenny" />, container);
  });
  expect(container.textContent).toBe('Hello, Jenny!');
});

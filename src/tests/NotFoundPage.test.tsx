import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import NotFoundPage from '../notFoundPage/NotFoundPage';

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
    render(<NotFoundPage />, container);
  });
  expect(container?.textContent).toBe('Page is not found');
});

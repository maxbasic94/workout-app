import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import NotFoundPage from '../pages/notFoundPage/NotFoundPage';

let container: Element;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container?.remove();
});

it('renders with or without a name', () => {
  act(() => {
    render(<NotFoundPage />, container);
  });
  expect(container?.textContent).toBe('Page is not found');
});

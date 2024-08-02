import React from 'react';
import { render } from '@testing-library/react';
import HtmlCssComponent from '../index';

describe('HtmlCssComponent', () => {
  it('renders HTML content correctly', () => {
    const html = '<div class="test">Hello, world!</div>';
    const { container } = render(<HtmlCssComponent html={html} />);
    expect(container.querySelector('.test').textContent).toBe('Hello, world!');
  });

  it('applies CSS styles correctly', () => {
    const html = '<div class="test">Hello, world!</div>';
    const css = '.test { color: red; }';
    const { container } = render(<HtmlCssComponent html={html} css={css} />);
    const div = container.querySelector('.test');
    expect(div).toHaveStyle('color: red');
  });

  it('executes JavaScript correctly', () => {
    const html = '<div class="test">Hello, world!</div>';
    const js = 'document.querySelector(".test").textContent = "Changed text";';
    const { container } = render(<HtmlCssComponent html={html} js={js} />);
    expect(container.querySelector('.test').textContent).toBe('Changed text');
  });
});

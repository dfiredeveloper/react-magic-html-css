import React from 'react';
import HtmlCssComponent, { registerTemplate } from 'my-react-html-css-package';

// Register a template
registerTemplate(
  'portfolio',
  `<div class="portfolio">
    <h1>John Doe</h1>
    <p>Full Stack Developer</p>
    <div class="projects">
      <div class="project">Project 1</div>
      <div class="project">Project 2</div>
      <div class="project">Project 3</div>
    </div>
  </div>`,
  `.portfolio { text-align: center; }
   .projects { display: flex; justify-content: space-around; }
   .project { border: 1px solid #ccc; padding: 10px; }`,
  `console.log('Portfolio template loaded');`
);

const App = () => {
  return (
    <div>
      <h1>Portfolio Example</h1>
      <HtmlCssComponent templateName="portfolio" />
    </div>
  );
};

export default App;

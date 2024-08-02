const templates = {};

export const registerTemplate = (name, html, css, js) => {
  templates[name] = { html, css, js };
};

export const getTemplate = (name) => templates[name];

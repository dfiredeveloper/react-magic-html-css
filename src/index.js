import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getTemplate } from './templates';
import { createElement, appendToBody } from './utils';

const HtmlCssComponent = ({ templateName, html, css, js }) => {
  useEffect(() => {
    if (templateName) {
      const template = getTemplate(templateName);
      if (template) {
        html = template.html;
        css = template.css;
        js = template.js;
      }
    }

    if (css) {
      const style = document.createElement('style');
      style.type = 'text/css';
      style.appendChild(document.createTextNode(css));
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [templateName, css]);

  useEffect(() => {
    if (js) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.appendChild(document.createTextNode(js));
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [templateName, js]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

HtmlCssComponent.propTypes = {
  templateName: PropTypes.string,
  html: PropTypes.string,
  css: PropTypes.string,
  js: PropTypes.string,
};

HtmlCssComponent.defaultProps = {
  templateName: '',
  html: '',
  css: '',
  js: '',
};

export { registerTemplate, getTemplate } from './templates';
export { registerComponent, getComponent } from './components';
export { createElement, appendToBody } from './utils';
export default HtmlCssComponent;

const components = {};

export const registerComponent = (name, component) => {
  components[name] = component;
};

export const getComponent = (name) => components[name];

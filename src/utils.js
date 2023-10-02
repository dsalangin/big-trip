export const render = (element, template, position = 'beforeend') => {
  element.insertAdjacentHTML(position, template);
};

export const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};

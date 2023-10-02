import { render, RenderPosition } from './utils';
import getHeaderInfoTemplate from './template/header-info';
import getHeaderControls from './template/header-controls';
import getHeaderFilter from './template/header-filetr';
import getSorteEventTemplate from './template/sort-event';
import getEventListTemplate from './template/event-list';

const headerInterface = document.querySelector('.trip-main');
const placeForHeaderControls = headerInterface
  .querySelector('.trip-main__trip-controls')
  .querySelector('.visually-hidden');
const headerControls = headerInterface.querySelector('.trip-main__trip-controls');
const containerEvent = document.querySelector('.trip-events');

render(headerInterface, getHeaderInfoTemplate(), RenderPosition.AFTERBEGIN);
render(placeForHeaderControls, getHeaderControls(), RenderPosition.AFTEREND);
render(headerControls, getHeaderFilter(), RenderPosition.BEFOREEND);
render(containerEvent, getSorteEventTemplate(), RenderPosition.AFTERBEGIN);
render(containerEvent, getEventListTemplate(), RenderPosition.AFTERBEGIN);

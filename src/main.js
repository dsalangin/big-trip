import { render, RenderPosition } from './utils';
import getHeaderInfoTemplate from './template/header-info';
import getHeaderControls from './template/header-controls';
import getHeaderFilter from './template/header-filetr';
import getSorteEventTemplate from './template/sort-event';
import getEventListTemplate from './template/event-list';
import getEventEditTemplate from './template/event-edit';
import getEventEditWithDestanationTemplate from './template/event-edit-with-destanation';
import getEventEditwithoutDestanationTemplate from './template/event-edit-without-destanation';
import getLoadingLayoutTemplate from './template/loading-layout';
import getNoPointsTemplate from './template/no-points-layout';
import getStatsTemplate from './template/stats';

const headerInterface = document.querySelector('.trip-main');
const placeForHeaderControls = headerInterface
  .querySelector('.trip-main__trip-controls')
  .querySelector('.visually-hidden');
const headerControls = headerInterface.querySelector('.trip-main__trip-controls');
const containerEvent = document.querySelector('.trip-events');

render(headerInterface, getHeaderInfoTemplate(), RenderPosition.AFTERBEGIN);
render(placeForHeaderControls, getHeaderControls(), RenderPosition.AFTEREND);
render(headerControls, getHeaderFilter(), RenderPosition.BEFOREEND);
render(containerEvent, getEventListTemplate(), RenderPosition.AFTERBEGIN);
render(containerEvent, getSorteEventTemplate(), RenderPosition.AFTERBEGIN);

render(containerEvent, getEventEditTemplate(), RenderPosition.AFTERBEGIN);
render(containerEvent, getEventEditWithDestanationTemplate(), RenderPosition.AFTERBEGIN);
render(containerEvent, getEventEditwithoutDestanationTemplate(), RenderPosition.AFTERBEGIN);
render(containerEvent, getLoadingLayoutTemplate(), RenderPosition.AFTERBEGIN);
render(containerEvent, getNoPointsTemplate(), RenderPosition.AFTERBEGIN);
render(containerEvent, getStatsTemplate(), RenderPosition.AFTERBEGIN);

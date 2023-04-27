import { createElement } from '../render';

function createEventsList() {
  return `<ul class="trip-events__list">
  </ul>`;
}
export default class EventsList {
  getTemplate() {
    return createEventsList();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

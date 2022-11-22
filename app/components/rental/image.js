import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  @tracked isLarge = false;

  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}

// Ember will create an instance of the class whenever our component is invoked. We can use that instance to store our state

// this.isLarge = false is a state

// @tracked - tells Ember to monitor this variable for updates. Whenever this variable's value changes, Ember will automatically re-render any templates that depend on its value.

// @action decorator - This indicates to Ember that we intend to use this method from our template. Without this, the method will not function properly as a callback function (in this case, a click handler).

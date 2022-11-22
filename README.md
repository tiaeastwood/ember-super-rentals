# super-rentals

A practice project built using ember.js; a simple site lidting rental properties.

---

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

---

## Installation

* `git clone <repository-url>` this repository
* `cd super-rentals`
* `npm install`

---

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).



### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

**Generates a component and test file for it:**
```
ember generate component component-name
```

**Generates a namespaced component and test file for it:**
```
ember generate component rental/image
```
(namespaced components are organised by folders and invoked like <Rental::Image>)

**Associate JavaScript code to a component:**
```
ember generate component-class rental/image
```

---

### Running Tests

* `ember test`
* `ember test --server`

---

### Linting

* `npm run lint`
* `npm run lint:fix`

---

### Building

* `ember build` (development)
* `ember build --environment production` (production)

---

### Deploying

Specify what it takes to deploy your app.

---

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

---

## Notes

**Testing:**
- **Integration tests** are useful for testing an individual component in isolation eg checking that a component renders a certain thing / behaves in a certain way.
- **Acceptance tests** are useful for general testing of the application eg testing that a navbar correctly navigates to different pages.
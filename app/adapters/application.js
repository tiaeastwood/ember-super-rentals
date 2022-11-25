import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}

// The adapter builds the correct url that we need to request for our api
// by default it would be something like /rentals which isnt a full url and results in a 404
// the adaptor changes it to something like /api/rentals/grand-old-mansion and appends .json to the end

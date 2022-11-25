import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      let caseInsensitiveQuery = query.toLowerCase();
      rentals = rentals.filter((rental) => {
        return (
          rental.title.toLowerCase().includes(caseInsensitiveQuery) ||
          rental.city.toLowerCase().includes(caseInsensitiveQuery) ||
          rental.category.toLowerCase().includes(caseInsensitiveQuery) ||
          rental.description.toLowerCase().includes(caseInsensitiveQuery) ||
          rental.type.toLowerCase().includes(caseInsensitiveQuery)
        );
      });
    }

    return rentals;
  }
}

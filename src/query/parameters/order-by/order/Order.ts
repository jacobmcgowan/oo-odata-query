import { IOrder } from './IOrder';

/**
 * Defines a sort order for a specific piece of criteria.
 */
export class Order implements IOrder {
  public criteria: string;
  public ascending: boolean;

  /**
   * Creates an Order.
   * @param criteria The criteria to order by.
   * @param ascending The direction to sort.
   */
  public constructor(criteria: string, ascending: boolean = true) {
    this.criteria = criteria;
    this.ascending = ascending;
  }

  public toString() {
    // If the criteria is an empty string, we want to output that without desc.
    return this.ascending || !this.criteria ? this.criteria : `${this.criteria} desc`;
  }
}

import { IOrderBy } from './IOrderBy';
import { IOrder } from './order';

/**
 * Defines criteria to order by.
 */
export class OrderBy implements IOrderBy {
  public orders: IOrder[];

  /**
   * Creates an OrderBy.
   * @param orders The criteria to order by.
   */
  public constructor(orders: IOrder[]) {
    this.orders = orders;
  }

  public toString(): string {
    return this.orders && this.orders.length > 0 ? this.orders.map(order => order.toString()).join(',') : '';
  }
}

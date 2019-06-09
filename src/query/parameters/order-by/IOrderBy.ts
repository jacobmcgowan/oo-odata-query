import { IParameter } from '..';
import { IOrder } from './order';

/**
 * Defines criteria to order by.
 */
export interface IOrderBy extends IParameter {
  /**
   * All of the criteria to order by.
   */
  orders: IOrder[];
}

import { IParameter } from '../../IParameter';

/**
 * Defines a sort order for a specific piece of criteria.
 */
export interface IOrder extends IParameter {
  /**
   * The criteria to order by.
   */
  criteria: string;

  /**
   * Whether to sort in ascending order or not.
   */
  ascending: boolean;
}

import { IFilter } from '../IFilter';

/**
 * Filters results with a relational condition between two values.
 */
export interface IRelationalFilter extends IFilter {
  /**
   * The left operand.
   */
  left: string;

  /**
   * The right operand.
   */
  right: string;

  /**
   * Outputs the OData parameter string.
   * @param prefix The prefix to use in the parameter string.
   */
  toString(prefix?: string): string;
}

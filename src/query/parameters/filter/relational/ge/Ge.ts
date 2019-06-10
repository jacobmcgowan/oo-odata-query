import { RelationalFilter } from '../RelationalFilter';

/**
 * Specifies a filter condition where the left operand if greater than or equal
 * to the right.
 */
export class Ge extends RelationalFilter {
  /**
   * Creates an Ge.
   * @param left The left operand.
   * @param right The right operand.
   */
  public constructor(left: string, right: string) {
    super('ge', left, right);
  }
}

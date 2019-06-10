import { RelationalFilter } from '../RelationalFilter';

/**
 * Specifies a filter condition where the left operand if less than or equal to
 * the right.
 */
export class Le extends RelationalFilter {
  /**
   * Creates an Le.
   * @param left The left operand.
   * @param right The right operand.
   */
  public constructor(left: string, right: string) {
    super('le', left, right);
  }
}

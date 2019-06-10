import { RelationalFilter } from '../RelationalFilter';

/**
 * Specifies a filter condition where the left operand if greater than the right.
 */
export class Gt extends RelationalFilter {
  /**
   * Creates an Gt.
   * @param left The left operand.
   * @param right The right operand.
   */
  public constructor(left: string, right: string) {
    super('gt', left, right);
  }
}

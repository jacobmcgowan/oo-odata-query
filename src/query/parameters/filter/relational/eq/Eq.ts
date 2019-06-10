import { RelationalFilter } from '../RelationalFilter';

/**
 * Specifies a filter condition where two values are equivalent.
 */
export class Eq extends RelationalFilter {
  /**
   * Creates an Eq.
   * @param left The left operand.
   * @param right The right operand.
   */
  public constructor(left: string, right: string) {
    super('eq', left, right);
  }
}

import { RelationalFilter } from '../RelationalFilter';

/**
 * Specifies a filter condition where the left operand is an enumeration of the
 * right operand.
 */
export class Has extends RelationalFilter {
  /**
   * Creates a Has.
   * @param left The left operand.
   * @param right The right operand.
   */
  public constructor(left: string, right: string) {
    super('has', left, right);
  }
}

import { RelationalFilter } from '../RelationalFilter';

/**
 * Specifies a filter condition where the left operand is a value in the right
 * operand.
 */
export class In extends RelationalFilter {
  /**
   * Creates an In.
   * @param left The left operand.
   * @param right The right operand.
   */
  public constructor(left: string, right: string) {
    super('in', left, right);
  }
}

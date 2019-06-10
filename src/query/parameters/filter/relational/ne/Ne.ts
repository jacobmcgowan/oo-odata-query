import { RelationalFilter } from '../RelationalFilter';

/**
 * Specifies a filter condition where two values are not equivalent.
 */
export class Ne extends RelationalFilter {
  /**
   * Creates an Ne.
   * @param left The left operand.
   * @param right The right operand.
   */
  public constructor(left: string, right: string) {
    super('ne', left, right);
  }
}

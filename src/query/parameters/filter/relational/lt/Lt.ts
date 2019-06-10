import { RelationalFilter } from '../RelationalFilter';

/**
 * Specifies a filter condition where the left operand if less than the right.
 */
export class Lt extends RelationalFilter {
  /**
   * Creates an Lt.
   * @param left The left operand.
   * @param right The right operand.
   */
  public constructor(left: string, right: string) {
    super('lt', left, right);
  }
}

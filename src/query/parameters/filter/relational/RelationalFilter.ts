import { StringUtils } from '../../../../utils';
import { IRelationalFilter } from './IRelationalFilter';

/**
 * Filters results with a relational condition between two values.
 */
export abstract class RelationalFilter implements IRelationalFilter {
  /**
   * The left operand.
   */
  public left: string;

  /**
   * The right operand.
   */
  public right: string;

  /**
   * The operator to compare the values with.
   */
  private _operator: string;

  /**
   * Creates a RelationalFilter.
   * @param operator The operator to compare the values with.
   * @param left The left operand.
   * @param right The right operand.
   */
  public constructor(operator: string, left: string, right: string) {
    if (StringUtils.isEmptyOrWhitespace(operator)) {
      throw new Error('Invalid operator.');
    }
    
    if (StringUtils.isEmptyOrWhitespace(left)) {
      throw new Error('Invalid left operand.');
    }

    if (StringUtils.isEmptyOrWhitespace(right)) {
      throw new Error('Invalid right operand.');
    }
    
    this._operator = operator;
    this.left = left;
    this.right = right;
  }

  /**
   * Outputs the OData parameter string.
   * @param prefix The prefix to use in the parameter string.
   */
  public toString(prefix: string = ''): string {
    const prefixValue = prefix ? `${prefix}/` : '';
    return `${prefixValue}${this.left} ${this._operator} ${this.right}`;
  }
}

import { IQuery } from '../../../IQuery';
import { IExpansion } from './IExpansion';

/**
 * Defines a child to expand.
 */
export class Expansion implements IExpansion {
  /**
   * The child field to expand.
   */
  public field: string;

  /**
   * The query to apply to the child.
   */
  public query?: IQuery;

  /**
   * Creates an Expansion.
   * @param field The child field to expand.
   * @param query The query to apply to the child.
   */
  public constructor(field: string, query?: IQuery) {
    this.field = field;
    this.query = query;
  }

  /**
   * Outputs the OData parameter string.
   * @returns The resulting parameter string.
   */
  public toString(): string {
    let result = '';

    if (this.field) {
      const queryString = this.query ? this.query.toString(';') : null;
      result = queryString ? `${this.field}(${queryString})` : this.field;
    }

    return result;
  }
}

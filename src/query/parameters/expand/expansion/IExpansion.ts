import { IQuery } from '../../../IQuery';

/**
 * Defines a child to expand.
 */
export interface IExpansion {
  /**
   * The child field to expand.
   */
  field: string;

  /**
   * The query to apply to the child.
   */
  query?: IQuery;

  /**
   * Converts the Expansion to an OData parameter string.
   * @returns The resulting parameter string.
   */
  toString(): string;
}

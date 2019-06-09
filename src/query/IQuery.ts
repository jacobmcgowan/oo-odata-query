import { QueryOptions } from './query-options/QueryOptions';

/**
 * Defines an OData query.
 */
export interface IQuery {
  /**
   * The options to apply to the query.
   */
  options: QueryOptions;

  /**
   * Converts the Query as an OData query string.
   * @param deliminator The deliminator to use between parameter strings.
   * @returns The resulting query string.
   */
  toString(deliminator?: string): string;
}

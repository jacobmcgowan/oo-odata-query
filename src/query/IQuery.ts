import { IExpand, IOrderBy, ISelect } from './parameters';

/**
 * Defines an OData query.
 */
export interface IQuery {
  /**
   * Defines the children to expand.
   */
  expand?: IExpand;

  /**
   * Defines the fields to select.
   */
  select?: ISelect;

  /**
   * Defines criteria to order by.
   */
  orderBy?: IOrderBy;

  /**
   * Converts the Query as an OData query string.
   * @param deliminator The deliminator to use between parameter strings.
   * @returns The resulting query string.
   */
  toString(deliminator?: string): string;
}

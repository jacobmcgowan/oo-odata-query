import { IExpand, IFilter, IOrderBy, ISelect } from '../parameters';

/**
 * Defines the options of a query.
 */
export class QueryOptions {
  /**
   * Defines the children to expand.
   */
  public expand?: IExpand;

  /**
   * Specifies how to filter the query results.
   */
  public filter?: IFilter;

  /**
   * Defines the fields to select.
   */
  public select?: ISelect;

  /**
   * Defines criteria to order by.
   */
  public orderBy?: IOrderBy;
}

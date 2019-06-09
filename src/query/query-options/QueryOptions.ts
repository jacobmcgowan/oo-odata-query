import { IExpand, IOrderBy, ISelect } from '..';

/**
 * Defines the options of a query.
 */
export class QueryOptions {
  /**
   * Defines the children to expand.
   */
  public expand?: IExpand;

  /**
   * Defines the fields to select.
   */
  public select?: ISelect;

  /**
   * Defines criteria to order by.
   */
  public orderBy?: IOrderBy;
}

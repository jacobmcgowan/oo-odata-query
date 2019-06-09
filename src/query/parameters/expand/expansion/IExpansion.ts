import { IQuery } from '../../../IQuery';
import { IParameter } from '../../IParameter';

/**
 * Defines a child to expand.
 */
export interface IExpansion extends IParameter {
  /**
   * The child field to expand.
   */
  field: string;

  /**
   * The query to apply to the child.
   */
  query?: IQuery;
}

import { IParameter } from '../IParameter';

/**
 * Specifies how to filter the results of a query.
 */
export interface IFilter extends IParameter {
  /**
   * Outputs the OData parameter string.
   * @param prefix The prefix to use in the parameter string.
   */
  toString(prefix?: string): string;
}

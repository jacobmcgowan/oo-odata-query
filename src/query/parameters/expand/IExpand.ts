import { IParameter } from '../IParameter';
import { IExpansion } from './expansion';

/**
 * Defines children to expand.
 */
export interface IExpand extends IParameter {
  /**
   * The children expansion definitions.
   */
  expansions: IExpansion[];
}

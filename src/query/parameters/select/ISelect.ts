import { IParameter } from '../IParameter';

/**
 * Specifies the fields to select.
 */
export interface ISelect extends IParameter {
  /**
   * The fields to select.
   */
  fields: {};

  /**
   * Converts the Select to a parameter string.
   * @returns The resulting parameter string.
   */
  toString(): string;
}

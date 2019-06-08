import { IQuery } from './IQuery';
import {
  IExpand,
  IParameter,
  ISelect
} from './parameters';

/**
 * Defines an OData query.
 */
export class Query implements IQuery {
  public expand?: IExpand;
  public select?: ISelect;

  /**
   * Creates a Query.
   * @param select Defines the fields to select.
   */
  public constructor(select?: ISelect, expand?: IExpand) {
    this.select = select;
    this.expand = expand;
  }

  public toString(deliminator: string = '&'): string {
    const parameters = new Array<string>();

    this._addIfValid(parameters, '$select=', this.select);
    this._addIfValid(parameters, '$expand=', this.expand);

    return parameters.join(deliminator);
  }

  /**
   * Adds a parameter value to add.
   * @param parameter The value to add.
   * @param to The array to add to.
   */
  private _addIfValid(to: string[], prefix: string, parameter?: IParameter) {
    if (parameter) {
      const stringValue = parameter.toString();

      if (stringValue) {
        to.push(`${prefix}${stringValue}`);
      }
    }
  }
}

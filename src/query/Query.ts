import { IQuery } from './IQuery';
import { IParameter } from './parameters';
import { QueryOptions } from './query-options';

/**
 * Defines an OData query.
 */
export class Query implements IQuery {
  /**
   * The options to apply to the query.
   */
  public options: QueryOptions;

  /**
   * Creates a Query.
   * @param options The options to apply to the query.
   */
  public constructor(options: QueryOptions) {
    this.options = options;
  }

  /**
   * Converts the Query as an OData query string.
   * @param deliminator The deliminator to use between parameter strings.
   * @returns The resulting query string.
   */
  public toString(deliminator: string = '&'): string {
    const parameters = new Array<string>();

    this._addIfValid(parameters, '$select=', this.options.select);
    this._addIfValid(parameters, '$expand=', this.options.expand);
    this._addIfValid(parameters, '$orderby=', this.options.orderBy);

    return parameters.join(deliminator);
  }

  /**
   * Adds a parameter value to add.
   * @param parameter The value to add.
   * @param prefix The prefix of the parameter.
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

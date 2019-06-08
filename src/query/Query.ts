import { IParameter, ISelect } from './parameters';

/**
 * Defines an OData query.
 */
export class Query {
  /**
   * Defines the fields to select.
   */
  public select: ISelect | null | undefined;

  /**
   * Creates a Query.
   * @param select Defines the fields to select.
   */
  public constructor(select?: ISelect) {
    this.select = select;
  }

  /**
   * Converts the Query as an OData query string.
   * @returns The resulting query string.
   */
  public toString(): string {
    const parameters = new Array<string>();

    this._addIfValid(this.select, parameters);

    return parameters.join('&');
  }

  /**
   * Adds a parameter value to add.
   * @param parameter The value to add.
   * @param to The array to add to.
   */
  private _addIfValid(parameter: IParameter | null | undefined, to: string[]) {
    if (parameter) {
      const stringValue = parameter.toString();

      if (stringValue) {
        to.push(stringValue);
      }
    }
  }
}

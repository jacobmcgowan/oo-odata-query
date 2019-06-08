import { ISelect } from './ISelect';

/**
 * Specifies the fields to select.
 */
export class Select implements ISelect {
  /**
   * The fields to select.
   */
  public fields: string[];

  /**
   * Creates a Select.
   * @param fields The fields to select.
   */
  public constructor(fields: string[]) {
    this.fields = fields;
  }

  /**
   * Converts the Select to an OData parameter string.
   * @returns The resulting parameter string.
   */
  public toString(): string {
    return this.fields && this.fields.length > 0 ?
      `$select=${this.fields.join(',')}` :
      '';
  }
}

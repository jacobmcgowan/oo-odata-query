import { ISelect } from './ISelect';

/**
 * Specifies the fields to select.
 */
export class Select implements ISelect {
  public fields: string[];

  /**
   * Creates a Select.
   * @param fields The fields to select.
   */
  public constructor(fields: string[]) {
    this.fields = fields;
  }

  public toString(): string {
    return this.fields && this.fields.length > 0 ? this.fields.join(',') : '';
  }
}

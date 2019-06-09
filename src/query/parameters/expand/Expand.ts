import { IExpansion } from './expansion';
import { IExpand } from './IExpand';

/**
 * Defines children to expand.
 */
export class Expand implements IExpand {
  /**
   * The children expansion definitions.
   */
  public expansions: IExpansion[];

  /**
   * Creates an Expand.
   * @param expansions The children expansion definitions.
   */
  public constructor(expansions: IExpansion[]) {
    this.expansions = expansions;
  }

  /**
   * Outputs the OData parameter string.
   * @returns {string} The resulting parameter string.
   */
  public toString(): string {
    return this.expansions && this.expansions.length > 0
      ? this.expansions.map(expansion => expansion.toString()).join(',')
      : '';
  }
}

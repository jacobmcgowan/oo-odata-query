import { IExpansion } from './expansion';
import { IExpand } from './IExpand';

/**
 * Defines children to expand.
 */
export class Expand implements IExpand {
  public expansions: IExpansion[];

  /**
   * Creates an Expand.
   * @param expansions The children expansion definitions.
   */
  public constructor(expansions: IExpansion[]) {
    this.expansions = expansions;
  }

  public toString(): string {
    return this.expansions && this.expansions.length > 0
      ? this.expansions.map(expansion => expansion.toString()).join(',')
      : '';
  }
}

import { IExpansion } from './expansion';

/**
 * Defines children to expand.
 */
export interface IExpand {
    /**
     * The children expansion definitions.
     */
    expansions: IExpansion[];
    
    /**
     * Converts the Expand to an OData parameter string.
     * @returns The resulting parameter string.
     */
    toString(): string;
}

import { ISelect } from "./parameters";


/**
 * Defines an OData query.
 */
export interface IQuery {
    /**
     * Defines the fields to select.
     */
    select: ISelect;
    /**
     * Converts the Query as an OData query string.
     * @returns The resulting query string.
     */
    toString(): string;
}

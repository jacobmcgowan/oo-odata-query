/**
 * Provides additional functionality for strings.
 */
export class StringUtils {
  /**
   * Checks if a string is empty or whitespace.
   * @param str The string to check.
   */
  public static isEmptyOrWhitespace(str: string): boolean {
    return !str || str.match(/^ *$/) !== null;
  }
}

import isBlank from './isBlank';
import isNotBlank from './isNotBlank';
import isEmpty from './isEmpty';
import isNotEmpty from './isNotEmpty';
import hideEmail from './hideEmail';
import removeNonNumeric from './removeNonNumeric';
import isInteger from './isInteger';
import isDouble from './isDouble';

/**
 * @since v0.0.1
 * @author Clairton luz <clairton.c.l@gmail.com>
 */
export default class StringUtils {
  /**
   * @description
   * Checks if a string is `null`, `undefined`, `empty` or `whitespace`
   *
   * @since v0.0.1
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * new StringUtils().isBlank(null) // true
   * @example
   * new StringUtils().isBlank(undefined) // true
   * @example
   * new StringUtils().isBlank('') // true
   * @example
   * new StringUtils().isBlank('   ') // true
   * @example
   * new StringUtils().isBlank('a') // false
   * @example
   * new StringUtils().isBlank('   a   ') // false
   */
  isBlank = isBlank;

  /**
   * @description
   * Checks if a string is not `null`, `undefined`, `empty` or `whitespace`
   *
   * @since v0.0.1
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * new StringUtils().isNotBlank(null) // false
   * @example
   * new StringUtils().isNotBlank(undefined) // false
   * @example
   * new StringUtils().isNotBlank('') // false
   * @example
   * new StringUtils().isNotBlank('   ') // false
   * @example
   * new StringUtils().isNotBlank('a') // true
   * @example
   * new StringUtils().isNotBlank('   a   ') // true
   */
  isNotBlank = isNotBlank;

  /**
   * @description
   * Checks if a string is `null`, `undefined` or `empty`
   *
   * @since v0.0.1
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * isEmpty(null) // true
   * @example
   * isEmpty(undefined) // true
   * @example
   * isEmpty('') // true
   * @example
   * isEmpty('   ') // false
   * @example
   * isEmpty('a') // false
   * @example
   * isEmpty('   a   ') // false
   */
  isEmpty = isEmpty;

  /**
   * @description
   * Checks if a string is not `null`, `undefined` or `empty`
   *
   * @since v0.0.1
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * isNotEmpty(null) // false
   * @example
   * isNotEmpty(undefined) // false
   * @example
   * isNotEmpty('') // false
   * @example
   * isNotEmpty('   ') // true
   * @example
   * isNotEmpty('a') // true
   * @example
   * isNotEmpty('   a   ') // true
   */
  isNotEmpty = isNotEmpty;

  /**
   * Hide part of the email.
   *
   * You could hide the start and/or the end of email.
   *
   * @param email - The email to be hided
   * @param config - Setting how the email should be hided
   * @returns email hided
   *
   * @since v0.0.5
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * hideEmail(`fulano@gmail.com`) // `f...@gmail.com`
   * @example
   * hideEmail(`fulano@gmail.com`, {
   *  hideStart: true, // default true
   *  hideEnd: true, // default false
   * }) // `f...@gma...`
   * @example
   * hideEmail(`fulano.com`) // undefined
   * @example
   * hideEmail(``) // undefined
   * @example
   * hideEmail(``) // undefined
   * @example
   * hideEmail(null) // undefined
   */
  hideEmail = hideEmail;

  /**
   * Removes all non-numeric caracteres from string.
   *
   * @param value - String to be processed
   * @returns `string` without any non-numeric caracteres
   *
   * @since v0.0.5
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * new StringUtils().removeNonNumeric('a1b2c3') // '123'
   */
  removeNonNumeric = removeNonNumeric;

  /**
   * Returns true if the value contains only numeric values
   *
   * @param value - String to be processed
   * @returns `boolean`
   *
   * @since v0.0.5
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * new StringUtils().isInteger('123') // true
   *
   * @example
   * new StringUtils().isInteger('12.3') // false
   *
   * @example
   * new StringUtils().isInteger('12,3') // false
   *
   * @example
   * new StringUtils().isInteger('a1b2c3') // false
   *
   * @example
   * new StringUtils().isInteger(' 123 ') // false
   */
  isInteger = isInteger;

  /**
   * Returns true if the value into string is a double
   *
   * @param value - String to be processed
   * @returns `boolean`
   *
   * @since v0.0.5
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * new StringUtils().isDouble('123') // true
   *
   * @example
   * new StringUtils().isDouble('12.3') // true
   *
   * @example
   * new StringUtils().isDouble('12,3') // false
   *
   * @example
   * new StringUtils().isDouble('a1b2c3') // false
   *
   * @example
   * new StringUtils().isDouble(' 123 ') // false
   */
  isDouble = isDouble;
}

import { Mischief } from '../Mischief.js'
import { MischiefProxyExchange } from '../exchanges/MischiefProxyExchange.js'
import { MischiefGeneratedExchange } from '../exchanges/MischiefGeneratedExchange.js'

/**
 * A utility function for testing purposes that converts
 * a value into a primative version for easier comparison
 * against similar values.
 *
 * For example, comparing an original Mischief capture against
 * a rehydrated version populated by a WACZ import. In this case, certain
 * transient internal properties may not match exactly but the substantive
 * properties match.
 *
 * @param {any} source - A value to be converted into a primative version
 * @returns {any} A primative version of the supplied source
 */
export function valueOf (source) {
  switch (source.constructor) {
    case Array: {
      return source.map(valueOf)
    }
    case Object: {
      return Object.fromEntries(Object.entries(source).map(([k, v]) => [k, valueOf(v)]))
    }
    case Mischief: {
      return filterProps(source, [
        'url',
        'options',
        'provenanceInfo',
        'exchanges'
      ])
    }
    case MischiefProxyExchange: {
      return filterProps(source, [
        'id',
        'date',
        'requestRaw',
        'responseRaw'
      ])
    }
    case MischiefGeneratedExchange: {
      return filterProps(source, [
        'id',
        'date',
        'description',
        'response'
      ])
    }
    default: {
      return source
    }
  }
}

function filterProps (obj, keep) {
  return Object.fromEntries(keep.map(k => [k, valueOf(obj[k])]))
}
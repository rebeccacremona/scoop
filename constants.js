import { dirname, sep } from 'path'
import { fileURLToPath } from 'url'

import chalk from 'chalk'

/**
 * Description of this software.
 * Used in provenance data to indicate which softare made the capture.
 */
export const SOFTWARE = 'Scoop @ Harvard Library Innovation Lab'

/**
 * The current version of Scoop. Also used in provenance data.
 */
export const VERSION = '0.0.1'

/**
 * The version of WARC this library exports
 */
export const WARC_VERSION = '1.1'

/**
 * The version of WACZ this library exports
 */
export const WACZ_VERSION = '1.1.1'

/**
 * Label to be used in WARC to keep trace of ScoopExchange.id.
 */
export const EXCHANGE_ID_HEADER_LABEL = 'Scoop-Exchange-ID'

/**
 * Label to be used in WARC to keep trace of ScoopGeneratedExchange.description.
 */
export const EXCHANGE_DESCRIPTION_HEADER_LABEL = 'Scoop-Exchange-Description'

/**
 * Path to the Scoop library.
 */
export const BASE_PATH = dirname(fileURLToPath(import.meta.url))

/**
 * Location of the directory in which assets may be rendered (ex: the provenance summary)
 */
export const ASSETS_PATH = `${BASE_PATH}${sep}assets${sep}`

/**
 * Path to the templates folder.
 */
export const TEMPLATES_PATH = `${BASE_PATH}${sep}assets${sep}templates${sep}`

/**
 * Path to the executables folder.
 */
export const EXECUTABLES_PATH = `${BASE_PATH}${sep}executables${sep}`

/**
 * Path to the temporary folder.
 */
export const TMP_PATH = `${BASE_PATH}${sep}tmp${sep}`

/**
 * Location of the testing fixtures folder.
 */
export const FIXTURES_PATH = `${ASSETS_PATH}fixtures${sep}`

/**
 * Colors used by the logging function
 */
export const LOGGING_COLORS = {
  DEFAULT: chalk.gray,
  TRACE: chalk.magenta,
  DEBUG: chalk.cyan,
  INFO: chalk.blue,
  WARN: chalk.yellow,
  ERROR: chalk.red
}

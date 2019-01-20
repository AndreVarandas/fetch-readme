import axios from 'axios'

/**
 * Default constants
 */
const BASE_URL = 'https://raw.githubusercontent.com/'
const DEFAULT_BRANCH = 'master'
const DEFAULT_README_FILE = 'README.md'
const NOT_FOUND_README = '404 - Unable to find a readme.md.'
const INVALID_CONFIGURATION = 'Invalid configuration object.'

/**
 * Interface for the Configuration object
 */
interface IFetchReadmeConfig {
  username: string
  repository: string
  branch?: string
  readme?: string
}

/**
 * Get an axios instance for convenience and to avoid
 * using the base url multiple times when building a request.
 */
const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

/**
 * Resolves a promise that contains the contents
 * for the request made to the readme.md file.
 *
 * @param {object:IFetchReadmeConfig} config The fetch-readme configuration object.
 */
const getGithubReadmeForRepository = async (config: IFetchReadmeConfig) => {
  try {
    const result = await axiosInstance.get(
      config.username +
        '/' +
        config.repository +
        '/' +
        config.branch +
        '/' +
        config.readme
    )
    return result.data
  } catch (error) {
    throw new Error(NOT_FOUND_README)
  }
}

/**
 * Validates the received configuration object
 * Searches for the required properties and
 * applies defaults to non-present and not required properties.
 *
 * @param {object:IFetchReadmeConfig} config The configuration object.
 */
function validateConfigurationObject(config: IFetchReadmeConfig) {
  const { username, repository } = config
  if (!username || !repository) {
    throw new Error(INVALID_CONFIGURATION)
  }
  config.branch = config.branch ? config.branch : DEFAULT_BRANCH
  config.readme = config.readme ? config.readme : DEFAULT_README_FILE
}

/**
 * Returns a raw readme file
 * for the provided public github repository.
 *
 * @param {object:IFetchReadmeConfig} config The fetch-readme configuration object.
 */
const fetchReadme = async (config: IFetchReadmeConfig) => {
  try {
    // Check configuration before proceeding
    validateConfigurationObject(config)
    return await getGithubReadmeForRepository(config)
  } catch (error) {
    throw error.message
  }
}

export { fetchReadme }

import { fetchReadme } from '../index'
import * as library from '../index' // Workaround to spy on default function

/**
 * MOCKS
 */
const invalidConfiguration = {
  username: '',
  repository: '',
}

const nonExistentReadmeConfiguration = {
  username: 'andrevarandas',
  repository: 'no-available-repo',
}

const config = {
  username: 'AndreVarandas',
  repository: 'space-x-explorer',
  readme: 'Readme.md',
}

const expectedConfig = {
  username: 'AndreVarandas',
  repository: 'space-x-explorer',
  readme: 'Readme.md',
  branch: 'master',
}

describe('Fetch Readme', () => {
  let data: any

  beforeAll(async () => {
    /* Runs before tests */
    data = await fetchReadme(config)
  })

  test('should return readme raw data', async () => {
    expect(data).not.toBeNull()
  })

  test('should have been called with valid configuration object', async () => {
    const spy = jest.spyOn(library, 'fetchReadme')
    await library.fetchReadme(config)
    // The validated configuration object should include the branch property
    expect(spy).toHaveBeenCalledWith(expectedConfig)
  })

  test('should throw when called with invalid configuration object', async () => {
    try {
      await fetchReadme(invalidConfiguration)
    } catch (error) {
      expect(error).toMatch('Invalid configuration object.')
    }
  })

  test('should throw when readme is not found', async () => {
    try {
      await fetchReadme(nonExistentReadmeConfiguration)
    } catch (error) {
      expect(error).toMatch('404 - Unable to find a readme.md.')
    }
  })
})

import { getDictionaryPath } from '@/utils/getters/getDictionaryPaths'

import { components } from './components'
import { pages } from './pages'

const translations = {
  ...getDictionaryPath(components, 'components/'),
  ...pages
}

export default translations

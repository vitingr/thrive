
import { getDictionaryPath } from '@/utils/internationalization/getDictionaryPaths'
import { components } from './components'
import { pages } from './pages'

const translations = {
  ...getDictionaryPath(components, 'components/'),
  ...pages
}

export default translations

import en from './en'
import sl from './sl'
import hr from './hr'
import de from './de'
import fr from './fr'
import zh from './zh'
import es from './es'
import zh_tw from './zh_tw'
import Store from '../store';

const localeObj = {en, de, fr, sl, hr, zh, es, zh_tw}

function locale(){
    return localeObj[Store.lang];
}

export default locale;
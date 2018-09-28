import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import enLocaleData from './locale/en';
import bgLocaleData from './locale/bg';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { addLocaleData, IntlProvider } from 'react-intl';
import enLocale from 'react-intl/locale-data/en';
import bgLocale from 'react-intl/locale-data/bg';

import Cookie from 'js-cookie';

addLocaleData([...enLocale, ...bgLocale]);

let locales = {
    'en': enLocaleData,
    'bg': bgLocaleData
};

/* Define your translations */
let locale = Cookie.get('locale') || 'en';
let localeData = locales[locale];

ReactDOM.render(
    <IntlProvider locale={locale} messages={localeData}>
        <App />
    </IntlProvider>,
    document.getElementById('root')
);
registerServiceWorker();

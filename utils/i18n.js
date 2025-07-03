import { I18n } from 'i18n-js';

// Create a new instance
const i18n = new I18n({
  en: {
    TODO: 'TODO',
    LIST: 'LIST',
    Update: 'Update',
    Please: 'Please',
    Enter: 'Enter',
    Task: 'Task',
    You: 'You',
    Have: 'Have',
    Pending: 'Pending',
    Clear: 'Clear',
    All: 'All',
    Tasks: 'Tasks',
    Selected: 'Selected',
  },
  hi: {
    TODO: 'कार्य',
    LIST: 'सूची',
    Update: 'अपडेट',
    Please: 'कृपया',
    Enter: 'दर्ज करें',
    Task: 'कार्य',
    You: 'आप',
    Have: 'के पास',
    Pending: 'लंबित',
    Clear: 'साफ़ करें',
    All: 'सभी',
    Tasks: 'कार्य',
    Selected: 'चयनित',
  }
});

// Set default locale
i18n.defaultLocale = 'en';
i18n.locale = 'en';
i18n.enableFallback = true;

export default i18n;
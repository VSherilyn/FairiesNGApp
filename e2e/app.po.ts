import { browser, by, element } from 'protractor';

export class MyAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fairies-app h1')).getText();
  }
}

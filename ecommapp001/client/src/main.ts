import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const loadCSSFiles = (url) => {
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', url);
  document.head.appendChild(link);
};

const loadJSFiles = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;

    script.addEventListener('load', () => {
      // The script is loaded completely
      resolve(true);
    });

    document.body.appendChild(script);
  });
};

if (window && document) {
  loadCSSFiles('http://localhost:4100/fontsbundle');
  loadCSSFiles('http://localhost:4100/cssbundle');
  loadJSFiles('http://localhost:4100/jsbundle').then(() => {
    platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
  });
}

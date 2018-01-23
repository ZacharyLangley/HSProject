// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBdRV8q9CQ3vDJQ0VBvxhjKPZPUz9CYMNc',
    authDomain: 'highscoresproject.firebaseapp.com',
    databaseURL: 'https://highscoresproject.firebaseio.com',
    projectId: 'highscoresproject',
    storageBucket: 'highscoresproject.appspot.com',
    messagingSenderId: '110548734177',
  }
};

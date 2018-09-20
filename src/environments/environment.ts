// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyArk_Mm5YYtXjYvZuJ86cmDRlLvgWZyjZE",
    authDomain: "stime-phone-book-app.firebaseapp.com",
    databaseURL: "https://stime-phone-book-app.firebaseio.com/",
    projectId: "stime-phone-book-app",
    storageBucket: "stime-phone-book-app.appspot.com",
    messagingSenderId: "376062397477"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

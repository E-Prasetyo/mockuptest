LIBRARY yang di gunakan
- react-router-dom (cara install bisa dilihat https://reactrouter.com/en/v6.3.0/getting-started/installation), untuk perutean halaman
- axios (cara install bisa dilihat https://axios-http.com/docs/intro),  untuk membantu mengambil data dari API
- tailwind (cara install bisa dilihat https://tailwindcss.com/docs/installation/using-postcss), untuk framework CSS sebagai ganti css manual
- heroicons (cara install bisa dilihat https://www.npmjs.com/package/heroicons), sebagai library icons

VERSION
- "axios": "^0.27.2"
- "react": "^18.2.0" 
-"react-dom": "^18.2.0"
- "react-router-dom": "^6.4.0",
- "@heroicons/react": "^2.0.11"

Penjelasan Kode

- APP.js : Sebagai tempat perutean atau route page

- Folder Auth 
  * Auth Context dan Provider : sebagai setup awal untuk mmebuat react hook/context yang digunakan sebagai penyimpanan data token, authcontext untuk mendefinisikan apa saja yang disempan pada context/hook kemudian authprovider sebagai media penyedia data dati konteks/hook
  * AuthRoute : sebagai perutean terproteksi atau peoteksi rute, jika user belum login tidak akan bisa mengakses halama home
  
- Folder Components
  * ModalUI : komponen yang digunakan sebagai wrapper modal, jadi isi dari modal bisa di custom, conton(<Modal> isi Costum </Modal>)
  * Loading : komponen yang digunakan sebagai tampilan saat loading data
  * Notification: komponen yang digunakan sebagai tampilan untuk membuat notifikasi pesan

- Folder Pages : berisi semua halaman page yang ada di dalam web

- Folder Service : berisi semua service untuk mengambil data dari API

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Getting Started with Create React App

## Darshan 360 — Chitrakoot Explorer

A single-page React application to explore the spiritual and cultural highlights of Chitrakoot and browse upcoming trips. The UI includes pages for Home, Explore Chitrakoot, Trips, and Trip Detail.

Repository: `mayankmishra0403/darshan11`

### Features
- Home hero section introducing Chitrakoot
- Explore Chitrakoot: curated highlights with images and descriptions
- Trips: grid of upcoming trips with quick navigation to details
- Trip Detail: detailed itinerary info with duration, price, and highlights

### Tech Stack
- React 19 + React DOM 19
- Create React App (react-scripts 5)
- React Router DOM (installed)
- Testing Library + Jest DOM

---

## Getting Started

Prerequisites:
- Node.js 18+ and npm 8+

Install dependencies and start the dev server:

```powershell
npm install
npm start
```

The app runs at `http://localhost:3000/`.

Build for production:

```powershell
npm run build
```

Run tests (watch mode):

```powershell
npm test
```

---

## Available NPM Scripts
- `npm start` — Start the development server
- `npm run build` — Create an optimized production build in `build/`
- `npm test` — Run tests in watch mode
- `npm run eject` — Eject CRA configuration (irreversible)

---

## Project Structure

```
src/
	App.css
	App.jsx            # Main app component (basic header/hero)
	App.tsx            # TS variant of App (not currently wired)
	index.css
	index.jsx          # App entry
	reportWebVitals.js
	setupTests.js

	pages/
		Home/
			Home.jsx
			Home.css
		ExploreChitrakoot/
			ExploreChitrakoot.jsx
			ExploreChitrakoot.css
		Trips/
			Trips.jsx
			Trips.css
		TripDetail/
			TripDetail.jsx
			TripDetail.css
```

Note: `react-router-dom` is installed and the page components use `useNavigate`, but the router is not yet wired in `index.jsx`/`App.jsx`. See Routing below to enable navigation between pages.

---

## Routing (Recommended Setup)

To enable client-side routing between Home, Explore, Trips, and Trip Detail, wrap the app with `BrowserRouter` and add routes. Example:

```jsx
// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
```

Then define routes inside `App.jsx`:

```jsx
// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ExploreChitrakoot from './pages/ExploreChitrakoot/ExploreChitrakoot';
import Trips from './pages/Trips/Trips';
import TripDetail from './pages/TripDetail/TripDetail';
import './App.css';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/explore" element={<ExploreChitrakoot />} />
			<Route path="/trips" element={<Trips />} />
			<Route path="/trip/:id" element={<TripDetail />} />
		</Routes>
	);
}

export default App;
```

This wiring matches the `useNavigate` calls already present in the page components.

---

## Environment Variables
No required environment variables at the moment. CRA will auto-load values prefixed with `REACT_APP_` from `.env*` files if added later.

---

## Testing
The project is configured with Testing Library and Jest DOM via CRA. Place tests as `*.test.js` alongside components and run with `npm test`.

---

## Deployment
- Build with `npm run build` (output in `build/`)
- Host the static build on Netlify, Vercel, GitHub Pages, or any static host
- For client-side routing on static hosts, ensure SPA fallback to `index.html` is enabled

---

## Contributing
1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "feat: add your feature"`
3. Push branch: `git push -u origin feature/your-feature`
4. Open a Pull Request

---

## License
This repository does not currently specify a license.

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

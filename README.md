How to start this project:

- Open two terminals
- In one terminal, do `cd frontend && npm run start` to start the frontend
- In the other, do `cd backend && node index.js` to start the backend

If running on your local network, you might want to update `apiHost` in `frontend/src/app/app.component.ts` so that it can find your backend URL.
If not running hot reload, make sure to update the `frontend/capacitor.config.ts` by removing the `server` property, so that it uses the app's local JS files.
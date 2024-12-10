# PorchFest

PorchFest is a web application designed to connect bands and venues for the Uptown Porchfest music festival. This application empowers bands to find venues using Google Maps and allows venues to explore performers and preview their music through an integrated Spotify player.

This project uses **React**, **Redux**, **Express**, **Passport**, and **PostgreSQL** (a full list of dependencies can be found in `package.json`).

We **strongly** recommend following these instructions carefully to set up your development environment correctly.

---

## Prerequisites

Before you begin, make sure the following software is installed on your computer:

- [Node.js](https://nodejs.org/en)
- [PostgreSQL](https://www.postgresql.org)
- [Nodemon](https://nodemon.io)

---

## Create Database and Table

Create a new PostgreSQL database called `porchfest` and set up a `user` table:

```sql
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(80) UNIQUE NOT NULL,
    "password" VARCHAR(1000) NOT NULL
);
```

If you choose a different name for your database, update `server/modules/pool.js` to reflect the new name.

---

## Development Setup Instructions

1. Run `npm install` to install dependencies. Review `package.json` for additional packages.
2. Create a `.env` file in the project root and include the following variables:

```plaintext
SERVER_SESSION_SECRET=superDuperSecret
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
REACT_APP_GOOGLE_MAPS_API_KEY=
VITE_GOOGLE_MAPS_API_KEY=
```

Replace `superDuperSecret` with a secure random string. Use [Password Generator Plus](https://passwordsgenerator.net) for help. Populate the other variables with your Spotify API credentials and Google Maps API keys.

3. Start PostgreSQL if it's not already running. You can use the [Postgres.app](https://postgresapp.com) or Homebrew with the command:

```sh
brew services start postgresql
```

4. Start the server by running `npm run server`.
5. Start the client by running `npm run client`.
6. Navigate to `http://localhost:5173` to view the application.

---

## Debugging

To debug:
1. Start the client-side separately with `npm run client`.
2. Open the Debug tab in VSCode and select `Launch Program`.
3. Press the green play button to start debugging.

---

## Testing with Postman

Postman can be used to test API routes and verify backend functionality:

1. Start the server using `npm run server`.
2. Open Postman and configure it to make requests to your local server (e.g., `http://localhost:5000`).
3. Test different routes by providing appropriate headers, query parameters, or request bodies, depending on the API design.
4. Use Postman to inspect responses and validate behavior during development.

Postman also manages session cookies, which can be manually cleared if you need to reset your session during testing.

---

## Lay of the Land

The PorchFest repository is structured as follows:

- `src/`: Contains the React application code.
- `public/`: Static assets for the client-side.
- `build/`: Generated after building the project, contains production-ready code.
- `server/`: Contains the Express server code.

Comments throughout the codebase provide guidance. Start with the following components:

- `src/components/App/App.js`
- `src/components/Nav/Nav.js`
- `src/components/LoginPage/LoginPage.js`
- `src/components/RegisterPage/RegisterPage.js`
- `src/components/ProtectedRoute/ProtectedRoute.js`

---

## Version 2.0 in Progress

I am collaborating with the Uptown Porchfest organizer to develop **Version 2.0**. The updated version will feature enhanced functionality and a user-friendly interface for both bands and venues. We aim to launch this version to new users by **August 2025**!

### Planned Features for Version 2.0
- **Band Features**:
  - Cancel applications.
  - View assigned porch details.
  - Select preferred times to perform.
  - Specify any required musical equipment.
- **Porch Features**:
  - View assigned bands.
  - Receive notifications about new band applications.
  - Select preferred genres for performances.
  - Assign bands to specific time slots.
- **Admin Enhancements**:
  - Assign bands to porches with specific times.
  - Remove bands from porches.
  - Export lists of bands and porch assignments.
  - View a schedule of performances.
- **Public App**: A public-facing platform showcasing venues and artists, with Spotify Web Player integration for music previews.
- **Email Notifications**: Automated emails for application confirmations and updates.

These features aim to provide a seamless experience for all users and improve overall event management.

---

## Version 3 and Beyond

Looking ahead to **Version 3**, the focus will expand to include:

- **Mobile App**: A mobile app with an integrated Google Maps feature to help users navigate to venues on the day of the event.
- **Advanced Band-Porch Matching**: Allow porches to select bands based on detailed preferences and assign multiple performances at different times.
- **Enhanced Communication**: Messaging capabilities between bands and porches for coordination.
- **Local Network**: Porches can view and contact other nearby hosting porches to collaborate.

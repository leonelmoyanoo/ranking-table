# Tablero de Ranking

This is a ranking board application built with React, TypeScript, and Vite. It allows tracking scores for competitors, instructors, and schools in a tournament or competition setting.

## Features

The application includes the following functionalities:

### 1. Rankings Display

The main dashboard displays three distinct ranking lists:

- **Mejor Escuela (Best School):** Ranks schools based on the total points accumulated by their instructors and competitors.
- **Mejor Instructor (Best Instructor):** Ranks instructors based on the total points earned by their competitors.
- **Mejor Competidor (Best Competitor):** Ranks individual competitors based on the points they have been awarded.

Each list is updated in real-time as new points are added.

### 2. Add Points Form

A dedicated form allows users to award points to competitors based on their performance:

- **Primer lugar (First Place):** Awards 10 points.
- **Segundo lugar (Second Place):** Awards 5 points.
- **Tercer lugar (Third Place):** Awards 1 point.

Users can select a competitor for each of the top three positions. There is also an optional, additional third-place slot.

### 3. Automatic Score Calculation

When points are awarded to a competitor, the application automatically updates the scores for the associated instructor and school. This ensures that all rankings are always in sync.

### 4. History Log

A history log on the side of the page provides a real-time feed of the most recent points awarded. Each entry includes:

- The competitor's name.
- The number of points awarded.
- An emoji indicating the place (🥇, 🥈, 🥉).
- A timestamp.

This provides a clear and transparent audit trail of all scoring events.

## Tech Stack

- **React:** For building the user interface.
- **TypeScript:** For type safety and improved developer experience.
- **Vite:** As the build tool and development server.
- **Bootstrap:** For styling and layout.

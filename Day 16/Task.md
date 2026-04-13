# 🎬 Movie/TV Show Explorer

Build a movie discovery application that allows users to search, filter, and explore detailed information about movies, TV series, and episodes using the OMDb API.

## 🎯 Task Overview

Create a responsive React application that consumes the OMDb (Open Movie Database) API to provide users with comprehensive movie/TV show information including search functionality, filtering options, and detailed views.

## ✨ Features to Implement

### Core Features (Required)
-  **Movie Search** - Search by title with real-time results
-  **Year Filter** - Filter results by release year (dropdown or range)
-  **Type Filter** - Toggle between Movie, Series, and Episode
-  **Detail View** - Modal or separate page showing:
  - Poster image
  - Full plot/synopsis
  - IMDb rating
  - Cast information
  - Release date
  - Runtime
  - Genre
  - Director
-  **Recently Viewed** - Store last 5-10 viewed items in localStorage

### Bonus Features
-  Dark/Light theme toggle
-  Error handling with user-friendly messages
-  Responsive design (mobile, tablet, desktop)

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React (Vite) | Frontend framework |
| Axios | API requests |
| SCSS/Tailwind | Styling |
| React Router (optional) | Navigation between search and detail pages |

## 📦 API Setup

### Get Your Free API Key

1. Visit [OMDb API](http://www.omdbapi.com/apikey.aspx)
2. Select the **FREE** tier (1000 requests/day)
3. Fill in your details (use real email)
4. Check your email for the API key

### API Key Configuration

Create a `.env` file in your project root:

```env
VITE_OMDB_API_KEY=your_api_key_here
VITE_OMDB_API_URL=http://www.omdbapi.com/
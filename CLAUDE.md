# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a personal portfolio website with a dual architecture:
- **Frontend**: React application built with TypeScript and SASS, located in `kushs/`
- **Backend**: FastAPI server in Python, located in `kushs/backend/`

The website serves as both a photography portfolio and programming portfolio, featuring photo galleries, experience/work sections, and various redirects to external content.

### Key Frontend Structure
- `kushs/src/components/App.tsx`: Main router with all route definitions
- `kushs/src/components/photography/`: Photo gallery components using react-photo-view
- `kushs/src/components/experience/`: Work, education, projects, and clubs sections
- `kushs/src/css/`: SASS stylesheets with organized structure (global/, experience/, photo/)
- `kushs/src/assets/`: Large collection of organized photos by category (aerial/, digital/, film/, graduation/)

### Backend Structure
- Simple FastAPI server with CORS middleware configured for kushs.org and localhost
- Minimal API with basic endpoints (currently just demo routes)

## Development Commands

### Frontend (React)
```bash
cd kushs
npm install          # Install dependencies
npm start           # Start development server (port 3000)
npm run build       # Create production build
npm run deploy      # Build and deploy to gh-pages
```

### Backend (FastAPI)
```bash
cd kushs/backend
pip install -r requirements.txt
python main.py      # Start FastAPI server
```

### Docker
```bash
docker build -t website .    # Build container with both frontend and backend
```

## Key Dependencies
- **Frontend**: React 18, TypeScript, React Router, Carbon Design System, Firebase, react-photo-view
- **Backend**: FastAPI with CORS middleware
- **Styling**: SASS with organized component-specific stylesheets

## Deployment
- Frontend deploys to GitHub Pages via gh-pages package
- Backend configured for containerized deployment
- CORS configured for kushs.org domain and localhost development
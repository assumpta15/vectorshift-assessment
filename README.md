# VectorShift Frontend Technical Assessment

This repository contains my solution for the VectorShift Frontend Technical Assessment.

## Tech Stack

- React
- React Flow
- Zustand
- FastAPI
- Python

## Features Implemented

### Part 1 – Node Abstraction
- Created a reusable `BaseNode` component to eliminate duplicated code.
- Built five additional node types using the abstraction:
  - API Node
  - Database Node
  - Filter Node
  - Merge Node
  - Delay Node

### Part 2 – Styling
- Designed a modern, consistent UI for all nodes.
- Added a styled toolbar and improved the overall user experience.

### Part 3 – Text Node Logic
- Text node automatically resizes based on user input.
- Supports variables using the `{{variable}}` syntax.
- Dynamically creates input handles for detected variables.

### Part 4 – Backend Integration
- Sends the pipeline (nodes and edges) to the FastAPI backend.
- Calculates:
  - Number of nodes
  - Number of edges
  - Whether the pipeline is a Directed Acyclic Graph (DAG)
- Displays the results in a user-friendly alert.

## Project Structure

```
frontend/
    src/
        components/
        nodes/
        ...
backend/
    main.py
```

## Running the Project

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload
```

The frontend will run on:

```
http://localhost:3000
```

The backend will run on:

```
http://127.0.0.1:8000
```

## Backend API

### Parse Pipeline

```
POST /pipelines/parse
```

Example response:

```json
{
  "num_nodes": 3,
  "num_edges": 2,
  "is_dag": true
}
```

## Notes

This project was completed as part of the VectorShift Frontend Technical Assessment using React, React Flow, Zustand, and FastAPI.

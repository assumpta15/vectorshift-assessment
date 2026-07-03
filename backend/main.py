from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow requests from the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Pipeline(BaseModel):
    nodes: list
    edges: list


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    # Build adjacency list
    graph = {}
    for node in pipeline.nodes:
        graph[node["id"]] = []

    for edge in pipeline.edges:
        graph.setdefault(edge["source"], []).append(edge["target"])

    # Detect if the graph is a DAG using DFS
    visited = set()
    visiting = set()

    def has_cycle(node):
        if node in visiting:
            return True

        if node in visited:
            return False

        visiting.add(node)

        for neighbor in graph.get(node, []):
            if has_cycle(neighbor):
                return True

        visiting.remove(node)
        visited.add(node)
        return False

    is_dag = True

    for node in graph:
        if has_cycle(node):
            is_dag = False
            break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }
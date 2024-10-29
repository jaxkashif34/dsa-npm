export class Graph<T extends PropertyKey> {
  // adjacencyList: { [key: string]: Set<T> };
  adjacencyList: Record<PropertyKey, Set<T>>;
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: T) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set<T>();
    }
  }

  addEdge(vertex1: T, vertex2: T) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  display() {
    for (let key in this.adjacencyList) {
      console.log(`${key} --> ${[...this.adjacencyList[key]]}`);
    }
  }

  hasEdge(vrt1: T, vrt2: T) {
    return (
      this.adjacencyList[vrt1].has(vrt2) && this.adjacencyList[vrt2].has(vrt1)
    );
  }

  removeEdge(vrt1: T, vrt2: T) {
    this.adjacencyList[vrt1].delete(vrt2);
    this.adjacencyList[vrt2].delete(vrt1);
  }

  removeVertex(vertex: T) {
    if (!this.adjacencyList[vertex]) return;

    for (let adjacentVertex of this.adjacencyList[vertex]) {
      // we are getting first vertex as a parameter and then we are looping through all the adjacent vertices and removing the edges
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }
}

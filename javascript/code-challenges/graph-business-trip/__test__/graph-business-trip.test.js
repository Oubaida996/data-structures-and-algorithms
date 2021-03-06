"use strict";

const { Vertex, Graph } = require('../graph-business-trip')

describe("Graph", () => {
    it("Node can be successfully added to the graph", () => {
        const myGraph = new Graph();
        const one = new Vertex(1);
        myGraph.addVertex(one);
        expect(myGraph.adjacencyList.has(one)).toEqual(true);
    });
    it("An edge can be successfully added to the graph", () => {
        const myGraph = new Graph();
        const zero = new Vertex(0);
        const one = new Vertex(1);
        myGraph.addVertex(zero);
        myGraph.addDirectedEdge(zero, one);
        let value = 0;
        for (const iterator of myGraph.adjacencyList.entries()) {
            value = iterator[1][0].vertex.value;
        }
        expect(value).toEqual(1);
    });

    it("Return the size of graph", () => {
        const myGraph = new Graph();
        const zero = new Vertex(0);
        const one = new Vertex(1);
        const two = new Vertex(2);
        const three = new Vertex(3);
        const four = new Vertex(4);
        const five = new Vertex(5);

        myGraph.addVertex(zero);
        myGraph.addVertex(one);
        myGraph.addVertex(two);
        myGraph.addVertex(three);
        myGraph.addVertex(four);
        myGraph.addVertex(five);

        myGraph.addDirectedEdge(zero, two);
        myGraph.addDirectedEdge(two, four);
        myGraph.addDirectedEdge(two, three);
        myGraph.addDirectedEdge(four, five);

        expect(myGraph.size()).toEqual(6);
    });

    it("businessTrip", () => {
        const myGraph = new Graph();

        myGraph.addVertex('amman');
        myGraph.addVertex('irbid');
        myGraph.addVertex('mafraq');
        myGraph.addVertex('zarqa');
        myGraph.addVertex('aqaba');
        myGraph.addVertex('al-jafr');


        myGraph.addDirectedEdge('amman', 'irbid', 10);
        myGraph.addDirectedEdge('amman', 'mafraq', 20);
        myGraph.addDirectedEdge('amman', 'zarqa', 30);
        myGraph.addDirectedEdge('amman', 'aqaba', 40);
        myGraph.addDirectedEdge('amman', 'al-jafr', 50);
        myGraph.addDirectedEdge('irbid', 'mafraq', 60);
        myGraph.addDirectedEdge('irbid', 'zarqa', 70);
        myGraph.addDirectedEdge('irbid', 'aqaba', 80);
        myGraph.addDirectedEdge('irbid', 'al-jafr', 90);
        myGraph.addDirectedEdge('mafraq', 'zarqa', 100);
        myGraph.addDirectedEdge('mafraq', 'aqaba', 110);
        myGraph.addDirectedEdge('mafraq', 'al-jafr', 120);
        myGraph.addDirectedEdge('zarqa', 'aqaba', 130);
        myGraph.addDirectedEdge('zarqa', 'al-jafr', 140);
        myGraph.addDirectedEdge('aqaba', 'al-jafr', 150);

        expect(myGraph.businessTrip(myGraph, ['amman', 'irbid', 'mafraq', 'zarqa', 'aqaba', 'al-jafr'])).toEqual([true, 450]);
    });
});
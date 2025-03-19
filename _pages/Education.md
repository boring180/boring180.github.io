---
layout: page
permalink: /Education/
title: Education
description: Information about the courses I've taken.
nav: true
nav_order: 6
---

<div class="mindmap-container">
  <div id="fundamentals-mindmap"></div>
  <div id="algorithm-mindmap"></div>
  <div id="robotics-mindmap"></div>
</div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<style>
.mindmap-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.mindmap-container > div {
  border-radius: 8px;
  padding: 20px;
  background: var(--global-bg-color);
}

.node text {
  font: 14px sans-serif;
  fill: var(--global-text-color);
}

.node-label-container {
  fill: var(--global-bg-color);
  stroke: var(--global-theme-color);
  stroke-width: 1px;
  rx: 4;  /* rounded corners */
}

.link {
  fill: none;
  stroke: #ccc;
  stroke-width: 2px;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const data = {
        fundamentals: {
            name: "Fundamentals",
            children: [
                {name: "Mathematics", children: [
                    {name: "Calculus I"},
                    {name: "Calculus II"},
                    {name: "Linear Algebra"},
                    {name: "Multivariable Calculus"},
                    {name: "Discrete Math"},
                    {name: "Statistics"}
                ]},
                {name: "Core Engineering", children: [
                    {name: "General Physics"},
                    {name: "Smart Mechatronic"},
                    {name: "Technical Communication"}
                ]},
                {name: "Computer Science", children: [
                    {name: "C++"},
                    {name: "Object-Oriented-programming"},
                    {name: "Computer Organization"},
                    {name: "Operating System"},
                    {name: "Algorithms"},
                    {name: "Data Structures"}
                ]}
            ]
        },
        algorithm: {
            name: "Artificial Intelligence",
            children: [
                {name: "Artificial Intelligence"},
                {name: "Machine Learning"},
                {name: "Computer Vision"},
                ]
        },
        robotics: {
            name: "Robotics",
            children: [
                {name: "Mobile Robotics"},
                {name: "Robotics Control"}
            ]
        }
    };

    function createMindMap(data, containerId) {
        const width = 1200;
        const height = 800;
        const margin = {top: 20, right: 600, bottom: 20, left: 100};

        const nodeWidth = 200;
        const nodeHeight = 20;

        const tree = d3.tree()
            .size([height - margin.top - margin.bottom, width - margin.right - margin.left])
            .separation((a, b) => (a.parent == b.parent ? 1 : 3) * nodeHeight); // Adjust the separation between nodes

        const root = d3.hierarchy(data);
        root.descendants().forEach((d, i) => {
            d.y = d.depth * nodeHeight * 1.5;
        });

        const treeData = tree(root);

        const svg = d3.select(containerId)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Links
        svg.selectAll(".link")
            .data(treeData.links())
            .enter()
            .append("path")
            .attr("class", "link")
            .attr("d", d3.linkHorizontal()
                .x(d => d.y)
                .y(d => d.x));

        // Nodes
        const node = svg.selectAll(".node")
            .data(treeData.descendants())
            .enter()
            .append("g")
            .attr("class", "node")
            .attr("transform", d => `translate(${d.y},${d.x})`);

        // Create container for text (background rectangle)
        node.append("rect")
            .attr("class", "node-label-container")
            .attr("y", -10) // Adjust the y position
            .attr("x", d => -100)  // Adjust the x position
            .attr("height", nodeHeight) // Adjust the height
            .attr("width", nodeWidth) // Adjust the width

        // Add labels to nodes
        node.append("text")
            .attr("dy", ".35em") // Adjust the y position
            .attr("x", d => 0)  // Align with the center of rectangle
            .attr("text-anchor", "middle") // Center the text
            .text(d => d.data.name);
    }

    // Create three separate mindmaps
    createMindMap(data.fundamentals, "#fundamentals-mindmap");
    createMindMap(data.algorithm, "#algorithm-mindmap");
    createMindMap(data.robotics, "#robotics-mindmap");
});
</script>

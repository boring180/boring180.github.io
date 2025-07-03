---
layout: page
permalink: /Education/
title: My skills
description:  
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

.text-name {
  font: 14px sans-serif;
  fill: var(--global-text-color);
}

.text-code {
  font-size: 10px;
  fill: var(--global-theme-color);
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
                    {name: "Calculus", code: "HKUST MATH1013/MATH1014"},
                    {name: "Linear Algebra", code: "HKUST MATH2111"},
                    {name: "Multivariable Calculus", code: "HKUST MATH2011"},
                    {name: "Differential Equations", code: "Coursera-HKUST MATH2521"},
                    {name: "Discrete Math", code: "HKUST COMP2711"},
                    {name: "Statistics", code: "SJTU STAT6001"}
                ]},
                {name: "Core Engineering", children: [
                    {name: "General Physics", code: "HKUST PHYS1112"},
                    {name: "General Physics II", code: "UNSW PHYS1221"},
                    {name: "Smart Mechatronic", code: "HKUST ISDN2601"}
                ]},
                {name: "Computer Science", children: [
                    {name: "C++", code: "HKUST COMP2011/2012"},
                    {name: "Computer Organization", code: "HKUST COMP2611"},
                    {name: "Operating System", code: "HKUST COMP3511"},
                    {name: "DSA", code: "HKUST COMP2012/3711"},
                ]}
            ]
        },
        algorithm: {
            name: "Artificial Intelligence",
            children: [
                {name: "Machine Learning", children: [
                    {name: "GLM", code: "HKUST COMP5212"},
                    {name: "SVM", code: "HKUST COMP5212"},
                    {name: "Decision Trees", code: "UNSW COMP9517"},
                    {name: "XGBoost"},
                    {name: "PCA", code: "HKUST COMP5212"},
                    {name: "Naive Bayes", code: "HKUST COMP2211"},
                    {name: "Probabilistic Graphical Models", code: "HKUST COMP5212"},
                    {name: "HMM", code: "HKUST COMP5212"}
                ]},
                {name: "Deep Learning", children: [
                    {name: "YOLO", code: "UNSW COMP9517"},
                    {name: "RNN", code: "HKUST COMP5212"},
                    {name: "Attention mechanism", code: "HKUST COMP5212"},
                    {name: "GAN", code: "HKUST COMP5212"},
                    {name: "VAE", code: "HKUST COMP5212"},
                    {name: "Diffusion Model"},
                    {name: "LLM", code: "HKUST COMP5212"},
                    {name: "Vision Transformer"}
                ]},
                {name: "Other", children:[
                    {name: "Minimax", code: "HKUST COMP2211"},
                    {name: "Reinforcement Learning", code: "HKUST COMP5212"}
                ]}
                ]
        },
        robotics: {
            name: "Robotics",
            children: [
                {name: "Software", children: [
                    {name: "ICP odometry", code: "HKUST ELEC3210"},
                    {name: "EKF SLAM", code: "HKUST ELEC3210"},
                    {name: "Path Planning", code: "HKUST ELEC3210"},
                    {name: "Control System", code: "UNSW MTRN3020"},
                    {name: "ROS"},
                    {name: "ROS2"}
                ]},
                {name: "Hardware", children: [
                    {name: "Circuit Design"},
                    {name: "Soldering"},
                    {name: "STM32"},
                    {name: "ESP32"}
                ]},
                {name: "Mechanical", children: [
                    {name: "CAD"},
                    {name: "Hand manufacturing"},
                    {name: "3D Printing"},
                    {name: "Laser Cutting"},
                    {name: "Blender", code: "HKUST ISDN2300"}
                ]}
            ]
        }
    };

    function createMindMap(data, containerId) {
        const width = 1200;
        const height = 1200;
        const margin = {top: 20, right: 600, bottom: 20, left: 100};

        const nodeWidth = 200;
        const nodeHeight = 40;

        const tree = d3.tree()
            .size([height - margin.top - margin.bottom, width - margin.right - margin.left])
            .separation((a, b) => (a.parent == b.parent ? 1 : 1.5) * nodeHeight); // Adjust the separation between nodes

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
            .attr("class", "text-name")
            .attr("dy", d => d.data.code ? ".35em" : "1em") // Adjust the y position
            .attr("x", d => 0)  // Align with the center of rectangle
            .attr("text-anchor", "middle") // Center the text
            .text(d => d.data.name);

        node.append("text")
            .attr("class", "text-code")
            .attr("dy", d => "2em") // Adjust the y position
            .attr("x", d => 0)  // Align with the center of rectangle
            .attr("text-anchor", "middle") // Center the text
            .text(d => d.data.code);
    }

    // Create three separate mindmaps
    createMindMap(data.fundamentals, "#fundamentals-mindmap");
    createMindMap(data.algorithm, "#algorithm-mindmap");
    createMindMap(data.robotics, "#robotics-mindmap");
});
</script>

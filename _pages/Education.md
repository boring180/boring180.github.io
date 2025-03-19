---
layout: techtree
permalink: /Education/
title: Education
description: My academic journey and course progression
nav: true
nav_order: 6

techtree:
  - name: Science Fundamentals
    items:
      - name: Calculus I
        tag: HKUST MATH 1013
      - name: Calculus II
        tag: HKUST MATH 1014
        prerequisites: [Calculus I]
      - name: Linear Algebra
        tag: HKUST MATH 2111
      - name: Statistics
        tag: SJTU STAT 6001
        prerequisites: [Calculus II]
      - name: Multivariable Calculus
        tag: HKUST MATH 2011
        prerequisites: [Calculus II]
      - name: Differential Equations
        tag: Coursera-HKUST MATH 2351
        prerequisites: [Calculus II]

  - name: Computer Science
    items:
      - name: Discrete Math
        tag: HKUST COMP 2711
      - name: C++
        tag: HKUST COMP 2011
      - name: Data Structures and OOP
        tag: HKUST COMP 2012
        prerequisites: [C++]
      - name: Algorithm
        tag: HKUST COMP 3711
        prerequisites: [C++]
      - name: Computer Organization
        tag: HKUST COMP 2611
        prerequisites: [C++]
      - name: Operating System
        tag: HKUST COMP 3511
        prerequisites: [Computer Organization]
     
  - name: Machine Learning
    items:
      - name: Artificial Intelligence
        tag: HKUST COMP 2211
      - name: Deep Learning
        tag: Coursera 
      - name: Machine Learning
        tag: HKUST COMP 5212
        prerequisites: [Artificial Intelligence]
      - name: Computer Vision
        tag: UNSW COMP 9517
        prerequisites: [Artificial Intelligence]

  - name: Robotics
    items:
      - name: Smart Mechatronics
        tag: HKUST ISDN 2601
      - name: Mobile Robotics
        tag: HKUST ELEC 3210
      - name: Feedback Control
        tag: UNSW MTRN 3020
---

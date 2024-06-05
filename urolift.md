---
layout: see4myself-pad
title: "John Lee"
excerpt: "Software Engineer"

---
# **Teleflex UroLift® VR Training Platform**

*An interactive career explorer that enables students and adult with Autism Spectrum Disorder (ASD) to find out what a job involves and if it's right for you*

<img src="/assets/images/S4MPad.jpg" alt="Screenshot of See4Myself Pad" width="1000"/>

## Background
This is the second project I participated in [Neurotech](https://www.neurotech.biz) which I started developing it from the pre-development stage. The initial concept is like this: a top-down career explorer app where students can go to different work environments and click on individual job characters to inspect their job description, salary, requirements etc. The aethestic would be kind of like Hospital Two-point. (Spoiler alert: We actual added a hospital scene later in the development.) Then I was given the task to create a prototype for this project, iterate it and eventually grow it into a full-blown product.

Later in the development, a new feature was added to the product which allows users to login though different type of account and manage the career interests of the students and even make career plans. The data of the career, the students and other users are updated by interacting with the server. 

## Responsibilities
1. **Turning concept into a playable prototype**
    - Rapid prototyping with Unity and third-party asset packs
    - Designing each scene
2. **Iterating the prototype via Scrum methodology**
    - Daily standup meeting (Remote) for instantaneous feedback 
    - Managing tasks on JIRA
3. **Implementing the input**
    - Integrating Unity's new Input System package
    - Mouse-click control for testing on the editor and the PC
    - Multi-finger gesture for Android and iOS builds which includes dragging and pitching
4. **UI implementation**
    - Completed the requested UI layout with Unity uGUI
5. **Camera behaviour implementation**
    - Integrating Unity's Cinemachine for camera swapping and virtual camera blending
6. **Graphics implementation**
    - Adopting Unity's Universal Rendering Pipeline
    - Implementing new Rendering Feature which allows us to add an additional pass to store the screen render and implement customized post-processing effects for our job fitting feature
7. **Asset memory management**
    - Integrating Unity's Addressables package
    - Loading and unloading asset memory dynamically with Asset References to minimize memory footprint
8. **Sqlite Database management**
    - Implementing a object relational mapper that generates SQLite commands to create tables that match the provided data models
    - Implementing generalized SELECT, UPDATE, INSERT, REPLACE, DELETE methods for the provided data models using Reflection and ExpressionTree
    - 
8. **Developing editor tools**
    - Automating the process to bind references to the newly added job character and set the default camera angle for the virtual camera attaching each job character
    - Creating cluster lists for the characters in the scene based on their position using the [DBSCAN](https://en.wikipedia.org/wiki/DBSCAN) clustering algorithm.
    - Tools to organize the gameobjects in the hierarchy
9. **Optimization**
    - Identify performance hot spots with the profiler in Unity
    - Optimizing performance of crucial parts of the VRIF framework by caching variables and reduced use of finding GameObject in runtime
    - Reducing draw calls with MeshBaker which can merge 3D geometry in the scenes as smaller amount of meshes and generate texture atlas for them. I compared different settings in the tools and found the most optimal setting for each of our scenes.
10. **Testing**
    - Writing unit tests that can run on Unity's Test Runner for our Database code and networking code 
11. **Debugging**
    - Debugging with break points and inspecting variables carefully
    - Writing diagrams of data flow

## Links
1. [Product page](https://www.neurotech.biz/see4myself)
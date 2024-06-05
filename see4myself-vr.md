---
layout: see4myself-pad
title: "John Lee"
excerpt: "Software Engineer"

---
# **See4Myself VR**

*A VR job simulator that enables students and adult with Autism Spectrum Disorder (ASD) to experience the workplace of different careers with a mild atmosphere*

<img src="/assets/images/S4MVR.jpg" alt="Screenshot of See4Myself VR" width="1000"/>

## Background
The initial concept was to create a VR job simulator for pupils to get familiar with different workplace in a more forgiving environment. My first task was to renovate a prototype built by my colleague with a new VR library. After that I integrated it with our new mission-task system developed by my colleague. We had been exchanging ideas and perfecting the mission system while I added more job simulation scenarios. Since then, there are currently four jobs in the app each with several missions available. One of the job simulations was made available as a DLC on Oculus store.

## Responsibilities
1. **Renovating a prototype with new VR library**
    - Replicating the game flow and interactions with a new VR library
    - Upgrading the deprecated code to match the new Unity XR plugin
2. **Iterating the prototype via Scrum methodology**
    - Regular meeting (Remote) for instantaneous feedback
    - Managing tasks on JIRA
3. **Design and implementing a tutorial scene**
4. **Implementing new job scenarios**
    - Coffee barista
        - Implementing a queue system for incoming customers 
        - Using raycasting to implement transferring liquid from one container to another
        - Using shadergraphs to implement the effect of a shaking liquid surface in a container and the change of colour when you mix two different liquid
        - Using and extended [UniTask](https://github.com/Cysharp/UniTask) (an async/await library for Unity) for event handling of the coffee brewing tools
    - Office admin
        - Implementing a stack grabber system that allows the user to grab multiple items onto one hand 
        - Implementing a 3D UI system that can put 3D buttons into horizontal or vertical layouts just like Unity UI
        - Implementing a meeting scheduling task where users need to find a time slot where every participant is free 
            - The schedules for each participant are randomly generated where there must be an empty slot for everyone
            - Implementing diary tabs where user can switch into to check the availability of each participant
            - Implementing a preview UI element on each participant's diary to show whether the new meeting will clash with the existing schedule


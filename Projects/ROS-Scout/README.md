# ROS-Scout

ROS-Scout is a small Raspberry Pi 4 based robot designed for sensor testing, data extraction, and prototyping in ROS 2. 

![ROS-Scout Image](./ROS_Scout_Cad/ROS-Scout_img.png)

## Hardware Overview
- **Compute:** Raspberry Pi 4
- **Actuation:** N20 motors with encoders
- **Sensors:** 
  - Arducam Time-of-Flight (ToF) Camera
  - IMU (MPU9250)

## Project Structure

This repository is organized into three main directories, each covering a different aspect of the project:

### 1. [Printable](./Printable)
Contains all the `.stl` files necessary to 3D print the physical chassis and mounts for the robot. These files are ready to slice and print for anyone who wants to replicate the build.
* [More details on 3D Printing](./Printable/README.md)

### 2. [ROS_Scout_Cad](./ROS_Scout_Cad)
Contains the full SolidWorks CAD files for the project. You can use these files to view the full assembly, modify the design, or create custom mounts for additional sensors.
* [More details on CAD files](./ROS_Scout_Cad/README.md)

### 3. [ROS2_Scout](./ROS2_Scout)
Contains the ROS 2 software packages to control the bot. This includes code for motor control, reading encoder feedback, and extracting data from the IMU and ToF camera.
* [More details on ROS 2 Software](./ROS2_Scout/README.md)

## Purpose & Goal
The main objective of ROS-Scout is to provide a simple, reliable testbed for setting up sensor data extraction pipelines and prototyping new ROS 2 robotic applications.

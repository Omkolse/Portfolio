# Humanoid Robot Platform (Optimus-Inspired)

## Overview

This project is a compact humanoid robot platform inspired by the mechanical aesthetics of Optimus Prime. The robot is designed as a fully 3D-printable research and prototyping platform for humanoid robotics experiments. It focuses on motion control, ROS2 integration, and embedded perception using a lightweight computing setup.

The robot is powered by a Raspberry Pi Zero 2W and uses ROS2 for modular robot control, communication, and sensor integration.

## Key Features

• **16 DOF Servo Actuation**
The robot uses 16 MG90S metal-gear servo motors to provide multiple degrees of freedom for humanoid movement including arms, legs, torso, and head.

• **ROS2-Based Control Architecture**
The system is built using ROS2, enabling a modular node-based architecture for motion control, sensor integration, and future expansion.

• **Integrated Vision System**
A chest-mounted camera provides visual perception for experiments such as object detection, teleoperation, and environment observation.

• **Embedded Computing**
The robot runs on a Raspberry Pi Zero 2W, providing a compact yet capable platform for running ROS2 nodes and sensor processing.

• **Fully Custom CAD Design**
The entire robot structure was designed from scratch in CAD and optimized for 3D printing, modular assembly, and easy maintenance.

## Mechanical Design

The robot frame is designed as a lightweight modular structure suitable for FDM 3D printing. Special attention was given to:

* Servo mounting accuracy
* Weight distribution for balance
* Cable routing through the torso
* Structural reinforcement for moving joints

The design allows easy part replacement and rapid iteration, making it ideal for robotics experimentation.

## Electronics & Hardware

**Main Controller**
Raspberry Pi Zero 2W

**Actuators**
16 × MG90S metal gear servos

**Sensors**
Chest-mounted camera module

**Power System**
External battery pack for servo and logic power

## Software Stack

* ROS2
* Python-based control nodes
* Servo control interface
* Camera streaming node

The ROS2 architecture enables easy integration of future capabilities such as computer vision, gesture control, autonomous behaviors, and teleoperation.

## Development Highlights

* Designed a complete 3D printable humanoid robot CAD model
* Implemented ROS2-based robot control framework
* Integrated camera perception system
* Built a compact humanoid platform using Raspberry Pi Zero 2W

## Future Improvements

* Humanoid walking gait generation
* Reinforcement learning for motion control
* Voice interaction system
* AI-based visual perception

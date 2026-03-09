# ROS-Scout: SolidWorks CAD

This directory contains the original SolidWorks CAD files for the ROS-Scout robot.

## Overview
The mechanical design of ROS-Scout is fully modeled in SolidWorks. This includes:
- The base chassis.
- Mounts and standoffs for the Raspberry Pi 4.
- Enclosures and brackets for the N20 motors with encoders.
- Specific mounting points for the Arducam Time-of-Flight (ToF) camera and the MPU9250 IMU.

## Usage
If you have SolidWorks installed, you can open the main assembly file to view the complete robot model. 

Having access to the source CAD files allows you to:
- Take precise measurements.
- See how components fit together before physical assembly.
- Modify the design to attach different microcontrollers, alternative sensors, or upgrade the drive system.
- Export modified parts to `.stl` for 3D printing.

If you just want to print the robot without modifying it, you can find the ready-to-print `.stl` files in the [Printable](../Printable) folder.

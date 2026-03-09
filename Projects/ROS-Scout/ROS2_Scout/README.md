# ROS-Scout: ROS 2 Software Workspace

This folder contains the ROS 2 packages and control scripts for the ROS-Scout robot.

## System Architecture
The software is designed to run on a **Raspberry Pi 4**, acting as the primary brain of the robot. 

The packages here handle:
- **Locomotion:** Sending control commands to the N20 motors and reading real-time odometry data from the motor encoders.
- **Sensor Integration:** 
  - Subscribing to and publishing data from the **MPU9250 IMU**.
  - Interfacing with the **Arducam Time-of-Flight (ToF) camera** for depth sensing and environment mapping.
- **Data Prototyping:** Streamlined nodes focusing on sensor data extraction and transmission over the ROS 2 network for remote monitoring and algorithmic testing.

## Prerequisites
- Ubuntu (22.04 recommended for ROS 2 Humble).
- ROS 2 installed on the Raspberry Pi.
- Required driver libraries for Arducam, I2C (for MPU9250), and GPIO motor controls.

## Building and Running
*(Update this section with specific commands once your workspace is configured)*

1. Navigate to this workspace directory.
2. Build the packages:
   ```bash
   colcon build --symlink-install
   ```
3. Source the setup file:
   ```bash
   source install/setup.bash
   ```
4. Launch the base robot nodes:
   ```bash
   ros2 launch <your_package_name> <your_launch_file>.launch.py
   ```

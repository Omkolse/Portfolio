const baseUrl = import.meta.env.BASE_URL;

export const projectsData = [
  {
    id: "ros-scout",
    title: "ROS-Scout Autonomous Rover",
    category: "Combined",
    shortDesc: "A small Raspberry Pi 4 based robot designed for sensor testing and data extraction.",
    image: `${baseUrl}images/projects/ros-scout.png`,
    gallery: [`${baseUrl}images/projects/ros-scout.png`],
    description: "Developed a comprehensive testbed platform from scratch for setting up sensor data extraction pipelines and prototyping new ROS 2 robotic applications. Built with a 3D-printed chassis and utilizing N20 motors.",
    goals: [
      "Extract and utilize Time-of-Flight (ToF) and IMU sensor data.",
      "Design a modular 3D printable mechanical chassis.",
      "Integrate motor control with encoder feedback over ROS 2."
    ],
    technologies: ["ROS2", "Python", "SolidWorks", "Raspberry Pi 4", "IMU", "Camera", "3D Printing"],
    github: "https://github.com/omkolse/ROS-Scout",
    downloadLink: "",
    documentation: "The ROS-Scout project serves as a modular research platform for autonomous navigation. It utilizes an Arducam ToF camera and an MPU9250 IMU to provide dense environmental data to the navigation stack. The mechanical structure was modeled entirely in SolidWorks, exporting clean STL files for rapid FDM printing while ensuring tight tolerances for the encoder motors. The software architecture is built on ROS 2 Humble, featuring custom nodes for sensor fusion and motor control via GPIO."
  },
  {
    id: "humanoid-1-0",
    title: "Humanoid Robot Platform (Optimus-Inspired)",
    category: "Combined",
    shortDesc: "A compact 16-DOF humanoid platform built with ROS2 and Raspberry Pi Zero 2W.",
    image: `${baseUrl}images/projects/humanoid.png`,
    stlModel: `${baseUrl}models/humanoid.stl`,
    gallery: [`${baseUrl}images/projects/humanoid.png`, `${baseUrl}images/gallery/humanoid-2.png`, `${baseUrl}images/gallery/humanoid-3.png`],
    description: "Inspired by the mechanical aesthetics of Optimus Prime, this fully 3D-printable humanoid serves as a research testbed for motion control and ROS2 navigation. It features individual servo control for complex balance and gait experimentation.",
    goals: [
      "Implement 16 DOF precise balance and motion control.",
      "Integrate chest-mounted vision system with a modular ROS2 node architecture.",
      "Optimize power consumption for lightweight embedded computing (RPi Zero 2W)."
    ],
    technologies: ["ROS2", "Python", "Raspberry Pi Zero 2W", "SolidWorks", "3D Printing", "16 x MG90S Servos"],
    github: "",
    externalLink: "https://cults3d.com/en/3d-model/gadget/optibot-humanoid",
    downloadLink: "",
    documentation: "This project focuses on a compact 16-DOF humanoid design. The structural frame was optimized for weight distribution to maintain a low center of mass during high-DOF movements. Powered by a Raspberry Pi Zero 2W, the robot runs a modular ROS 2 architecture for motion control, communication, and sensor integration. Future goals include implementing reinforcement learning for self-balancing and walking gait generation."
  },
  {
    id: "robodash",
    title: "RoboDash: Live Leaderboard System",
    category: "Programming",
    shortDesc: "A real-time React-based Admin Dashboard and Live Leaderboard for robotics competitions.",
    image: `${baseUrl}images/projects/img_dash_1.png`,
    gallery: [`${baseUrl}images/projects/img_dash_1.png`, `${baseUrl}images/projects/img_dash_2.png`, `${baseUrl}images/projects/img_dash_3.png`],
    description: "Built 'RoboDash' for the DRAIC Robotics Club to manage live tournament scores, team progressions, and live-display leaderboards during robotics events.",
    goals: [
      "Create a secure Admin Control Center to update team scores on the fly.",
      "Develop a visually striking, live-updating Leaderboard for public display.",
      "Ensure real-time synchronization across multiple devices during the event."
    ],
    technologies: ["React", "Vite", "TailwindCSS", "React Router", "React Context API"],
    github: "https://github.com/Omkolse/RoboDash",
    downloadLink: "",
    documentation: "RoboDash is a professional-grade competition management suite. The system architecture utilizes React Context API for centralized state management, enabling seamless real-time synchronization between the Admin Control Panel and multiple Live Leaderboard displays. It features a responsive UI built with TailwindCSS and Framer Motion, optimized for high-visibility display on large screens during club events."
  },
  {
    id: "diff-gear-system",
    title: "Differential Gear Joint Module",
    category: "CAD & Mechanical",
    shortDesc: "A compact 2-DoF robotic joint module using a differential servo-belt configuration.",
    image: `${baseUrl}images/projects/diff-gear.png`,
    stlModel: `${baseUrl}models/differential_gear.stl`,
    gallery: [`${baseUrl}images/projects/diff-gear.png`, `${baseUrl}images/gallery/diff-gear-2.png`],
    description: "Advanced mechanical joint design for precision manipulators. It uses high-torque servos in a differential setup to enable two independent axes of motion through coordinated control.",
    goals: [
      "Optimize belt-driven power transmission for minimal backlash using GT2 timing belts.",
      "Ensure 100% 3D printability for rapid iteration and low-cost manufacturing.",
      "Support dual-axis motion (differential control) from a compact form factor."
    ],
    technologies: ["SolidWorks", "Mechanical Design", "Kinematics", "3D Printing", "GT2 Belt Drive", "MG996R Servos"],
    github: "",
    externalLink: "https://grabcad.com/library/differential-gear-robot-system-1",
    downloadLink: "",
    documentation: "This 2-DoF actuation system is designed for high-precision robotic wrists and shoulders. It uses two TowerPro MG996R servos in a differential configuration, allowing combined torque output for single-axis motion. The power transmission relies on GT2 timing belts and 8x22x7 mm ball bearings for low-friction, smooth rotation. All structural components are optimized for FDM 3D printing."
  },
  {
    id: "draic-bot",
    title: "DRAIC: Interactive Robotics Mascot",
    category: "Combined",
    shortDesc: "A 3D-logo interpreted robotic mascot featuring AI chat and expressive OLED eyes.",
    image: `${baseUrl}images/projects/draic-bot.png`,
    stlModel: `${baseUrl}models/draic_bot.stl`,
    gallery: [`${baseUrl}images/projects/draic-bot.png`, `${baseUrl}images/gallery/draic-2.png`],
    description: "Custom-designed robot created from the 3D interpretation of the DRAIC robotics club logo. Serves as a mascot for guest interaction and AI demonstrations during exhibitions.",
    goals: [
      "Transform a flat club logo into a functional 3D physical robotic character.",
      "Integrate AI-based chat interaction running on a Raspberry Pi 3 base.",
      "Develop expressive OLED eyes to display emotions and interact more naturally."
    ],
    technologies: ["Raspberry Pi 3", "Python", "AI/NLP", "OLED Display", "SolidWorks", "3D Printing", "Servos"],
    github: "",
    downloadLink: "",
    documentation: "DRAIC transforms a 2D logo into a functional robotic mascot. Powered by a Raspberry Pi 3, it runs a Python-based AI chat system for interactive communication. The mechanical design features multiple servos for head and arm gestures, while dual OLED displays act as animated eyes for emotional expression. The exterior shell was created using complex surfacing in SolidWorks to match the original logo aesthetics."
  }
];

export default projectsData;

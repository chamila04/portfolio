// Project images should be imported or use direct paths
// For this example, we'll use placeholders

export const projects = [
  {
    id: 1,
    title: "Travel Recommendation System",
    description:
      "A smart travel system that recommends Sri Lankan destinations based on tourist activities and weather preferences using machine learning.",
    fullDescription: `The travel recommendation system for Sri Lankan tourism uses machine learning algorithms to provide personalized destination suggestions tailored to tourist preferences for specific activities and favorable weather conditions. Tourists often have different interests such as hiking, sightseeing, beach visits, cultural experiences, or wildlife exploration. This system collects these preferences via a questionnaire and combines them with weather patterns—such as temperature, humidity, and rainfall data—to identify ideal travel locations.

The system uses a trained ML model to match tourists' activity preferences with locations where those activities are best enjoyed under optimal weather conditions. For example, a tourist interested in surfing and warm weather may be directed to Arugam Bay during the dry season, while a cultural enthusiast preferring cooler climates might be recommended to explore Kandy's temples during December. This level of customization improves tourist satisfaction and helps distribute tourist traffic across lesser-known but suitable destinations in Sri Lanka.

The platform can be accessed via a user-friendly web or mobile interface. It also includes an AR (Augmented Reality) feature to enhance onsite engagement, allowing tourists to scan landmarks and receive instant details about the location. This not only enriches the travel experience but also promotes Sri Lanka's heritage and natural beauty using technology.`,
    image: "/images/img2.png",
    technologies: [
      "React",
      "Next js",
      "MongoDB",
      "Python",
      "Flask",
      "Scikit-learn",
      "Google Maps API",
    ],
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce-demo.example.com",
    duration: "ongoing",
    role: "Full-stack Developer",
    features: [
      "User questionnaire to capture preferences",
      "Machine learning-based destination suggestions",
      "Weather-aware recommendation logic",
      "Interactive map with suggested destinations",
      "Real-time weather updates",
    ],
    challenges: `One major challenge was integrating dynamic weather data into the recommendation logic. Weather is unpredictable and changes rapidly, making real-time decision-making complex. To solve this, we used the OpenWeatherMap API for live data and built a hybrid model combining historical weather trends with real-time updates to ensure relevant and timely suggestions.

Another challenge was ensuring accurate mapping of activities to locations. Tourist activity preferences are subjective and can vary greatly. We addressed this by training the model with a labeled dataset of popular Sri Lankan destinations, categorized by common activities and seasonal suitability. Feedback from users was used to fine-tune recommendations, improving the accuracy over time.

Finally, implementing AR features with location precision was technically demanding. We used marker-based AR for stable recognition and combined it with GPS coordinates to enhance accuracy, making the system more robust for real-world tourism applications.`,
  },
  {
    id: 2,
    title: "Restaurant Management System",
    description:
      "Ceylon Delights is a Windows app built with C# and MySQL to manage restaurant staff, menu, inventory, and orders through an easy-to-use GUI.",
    fullDescription: `The system provides an efficient Admin Dashboard where managers can oversee daily operations including employee registration, detailed food management, and order processing. Employees are registered and stored in a dedicated module, ensuring smooth staff coordination. The Menu & Food Management feature allows administrators to add, update, and categorize food items, keeping the offerings current and engaging for customers.
      
Real-time Inventory Tracking ensures that stock levels are constantly monitored, helping the kitchen maintain operational efficiency. The Customer Ordering System enables patrons to browse through four distinct food categories and place orders with ease, while the integrated Order Tracking module allows both admins and customers to monitor order statuses, ensuring timely service. Overall, the system optimizes operations, reduces manual errors, and enhances the dining experience.`,
    image: "/images/img1.jpeg",
    technologies: ["C#", "MySQL", "Visual Studio", "Windows Forms"],
    githubUrl: "https://github.com/chamila04/Restaurant_Reservation_System",
    liveUrl: "",
    duration: "1 months",
    role: "Frontend Developer",
    features: [
      "Admin Dashboard for operational oversight.",
      "Employee Management for staff registration and coordination.",
      "Menu & Food Management for dynamic menu updates.",
      "Inventory Tracking for real-time stock monitoring.",
      "Customer Ordering System for easy food, drinks, desserts, and snacks ordering.",
      "Order Tracking for efficient order management.",
    ],
    challenges:
      "Developing this system involved addressing issues such as maintaining real-time data consistency across multiple modules and ensuring an intuitive interface for non-technical users. The integration of MySQL with C# provided a reliable backend to manage large datasets and real-time inventory tracking. Additionally, streamlining the ordering process through a clear, categorized menu enhanced user experience while reducing operational delays. These solutions not only improved daily efficiency but also set a solid foundation for future enhancements.",
  },
  {
    id: 3,
    title: "News Reporter App",
    description:
      "Sri Cast is a comprehensive news mobile application designed to streamline the news publishing process. It provides an interactive and user-friendly interface that supports three distinct roles—Admin, Editor, and Reporter—ensuring efficient content management and real-time news updates.",
    fullDescription: `Sri Cast is built to modernize the way news is published and managed. The system features an Admin Dashboard that allows efficient user management and editor approval, ensuring that the content pipeline remains organized and secure. Editors review articles submitted by reporters, providing clear feedback and making decisions on whether to approve or reject submissions. 

Reporters can easily submit their news articles through the app, with the assurance that any revisions will be communicated promptly if their content is rejected. The approval workflow is central to maintaining high-quality content standards. 

Additionally, the app offers a rating system to enhance user engagement and interaction, while real-time updates ensure that the latest news is always accessible.`,
    image: "/images/img3.png",
    technologies: ["Kotlin", "React", "Node.js", "MongoDB", "Next.js"],
    githubUrl: "https://github.com/chamila04/NewsApp",
    liveUrl: "https://health-tracker-demo.example.com",
    duration: "1.5 months",
    role: "Full-Stack Developer",
    features: [
      "Admin Dashboard for user and editor management",
      "Editor interface for reviewing and approving articles",
      "Reporter submission system for article creation and revision",
      "Approval workflow with feedback for content improvement",
      "Real-time news updates",
      "Article rating system to boost user interaction",
    ],
    challenges: `One of the major challenges was coordinating the diverse functionalities for different user roles and ensuring a seamless workflow between content creation, review, and publication. The solution involved designing a robust approval workflow that not only streamlines communication between reporters and editors but also integrates real-time updates and user feedback. 

By leveraging technologies like Kotlin for the mobile experience and a powerful backend with Node.js and MongoDB, the team was able to create a system that is both efficient and scalable. The use of Next.js for the Admin Panel further enhanced the management capabilities, ensuring a smooth and responsive interface for administrative tasks.`,
  },
  /*
  {
    id: null,
    title: "Smart Home Automation",
    description:
      "An IoT-based system for home automation using C# for the backend and a web interface for control.",
    fullDescription: `This Smart Home Automation system connects various IoT devices to create a seamless home management experience. The system allows users to control lights, temperature, security cameras, and other smart devices through a unified web interface or mobile app.

The platform integrates with a variety of smart home protocols, ensuring compatibility with most commercially available devices. Users can create customized automation routines, schedule device operations, and monitor home systems remotely.

The C# backend provides robust processing capabilities while the React frontend delivers a responsive and intuitive user experience across different devices and screen sizes.`,
    image: "/src/assets/images/project-images/project4.jpg",
    technologies: ["C#", ".NET Core", "React", "MQTT", "JavaScript"],
    githubUrl: "https://github.com/username/smart-home",
    liveUrl: "",
    duration: "4 months",
    role: "Full-stack Developer",
    features: [
      "Centralized device management interface",
      "Automated routines and scheduling",
      "Real-time monitoring dashboard",
      "Energy usage analytics",
      "Remote access with security protocols",
    ],
    challenges: `Ensuring reliable communication between different IoT devices with varying protocols was complex. I developed a middleware layer in C# that standardizes communication across devices and implemented a robust error handling system to ensure system stability even when individual devices fail.

Security was another significant challenge, as connecting home devices to the internet creates potential vulnerabilities. I addressed this by implementing end-to-end encryption for all device communications and adding multi-factor authentication for user access to sensitive controls.`,
  },
  {
    id: null,
    title: "Community Forum Platform",
    description:
      "A full-stack forum application with user authentication, discussion threads, and real-time notifications.",
    fullDescription: `This Community Forum Platform facilitates online discussions with features like user authentication, topic-based discussion threads, content moderation, and real-time notifications. Built with the MERN stack, it provides a responsive interface that works across devices.

The platform supports rich text formatting, allowing users to create comprehensive and visually engaging posts. The notification system keeps users engaged by alerting them to new replies or mentions in discussions they're participating in.

Moderation tools help maintain a positive community environment by providing administrators with tools to manage content and user behavior according to community guidelines.`,
    image: "/src/assets/images/project-images/project5.jpg",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    githubUrl: "https://github.com/username/community-forum",
    liveUrl: "https://forum-demo.example.com",
    duration: "2.5 months",
    role: "Full-stack Developer",
    features: [
      "User authentication and profile customization",
      "Topic creation and thread management",
      "Rich text editor for posts",
      "Real-time notifications for replies and mentions",
      "Content moderation tools",
    ],
    challenges: `Implementing an efficient search functionality across large volumes of forum posts was challenging. I optimized the database with proper indexing and implemented server-side pagination to ensure quick search results without overwhelming the server.

Managing real-time updates across multiple users simultaneously was also complex. To address this, I used Socket.io to create efficient bidirectional communication channels that update content for all users without requiring page refreshes.

Creating an effective moderation system that balanced community freedom with content quality was another challenge. The solution was a reputation-based system where trusted community members gain moderation privileges over time, distributing the workload and creating community ownership.`,
  },
  */
];
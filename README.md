# Task Tracker

The task tracker is a personal productivity tool designed for individual users. It allows individuals to create customized lists for various purposes such as shopping, daily activities, or dietary items. Users can efficiently manage and organize their tasks, making it a versatile solution for personal organization and productivity.
<br/>

### SCOPE:

The project aimed to address four specific functionalities:

1. **ReactJS and Next.js Development**:

   - Design and implement a ReactJS component that benefits from Next.js's server-side rendering capabilities. This should focus on optimizing performance and enhancing SEO.
   - Address challenges related to data fetching in a server-side rendered environment and elaborate on any other considerations unique to Next.js.

2. **React Native and Data Synchronization**:

   - Develop a React Native feature that revolves around fetching and updating data dynamically. The goal is to ensure that users are consistently presented with the most recent and relevant data.
   - Highlight and address challenges such as handling changing network conditions, battery efficiency, and ensuring data integrity.

3. **Native Module Development in React Native**:

   - Craft a native module for the React Native ecosystem. This could involve leveraging a device-specific feature, enhancing user experience, or optimizing a particular performance-heavy task.
   - Detail the process of facilitating seamless communication between the native module and React Native's JavaScript layer, ensuring data integrity and smooth user experience.

4. **Monorepo Management**:
   - Organize and manage your ReactJS and React Native solutions within a monorepo setup. Emphasize package sharing, efficient dependency management, and strategies for ensuring code reusability across platforms.
   - Provide insights into challenges faced and best practices for maintaining a monorepo setup for React projects.

An idea that emerged to address these four points was the TaskTracker, incorporating Next.js for web applications (addressing item 1), React Native for mobile (addressing items 2 and 3), and an API for information management—all within a monorepo, effectively covering all four items.

<hr/>

### <b>MONOREPO</b>:

The monorepo was conceived for ease of implementation, scalability, and swift processing, employing the Turbo Repo tool with a pre-configured caching system. It introduces a standardized folder structure, distinguishing between 'Apps' (housing web, mobile, APIs) and 'Packages' for shared components. A well-thought-out architecture within a monorepo can significantly reduce duplicated code, enhancing productivity.

<b>Challenges</b>:
Included my inaugural implementation of a monorepo, with major hurdles lying in the preliminary study of structure and organization rather than the actual implementation.

<br />

### <b>WEB</b>:

The web project leveraged Next.js, offering support for SSR, SSG, basic routing, and more. The application comprises a Dashboard (SSR) showcasing the user's list information and task progress. The Tasks screen enables users to manage tasks. Updates occur via REST, lacking real-time synchronization.

<b>Challenges</b>:
Despite being well-acquainted with React, I hadn't worked with a Next.js version beyond 13, where there was a change in how SSR components are created. I found the new method of creating SSR components much easier, and, akin to the monorepo, the primary challenge lies in studying and analyzing the structuring of Client-Side and Server-Side components.

<br />

### <b>MOBILE</b>:

The mobile app, built in React Native using Expo with the Bare workflow, empowers users to create activity lists, add tasks, and update tasks. In contrast to the web, mobile updates use a socket, ensuring real-time reflection of changes made on the web.

<b>Challenges</b>:
Despite being my preferred technology, integrating Nativewind into the project for React Native posed challenges. Opting for Nativewind, which works well for web applications, might not have been the best choice for React Native, but that's what made it a challenge

<br />

### <b>NATIVE MODULES</b>:

Regarding native modules, one suggestion was to monitor the user's internet connection. A NetInfo module was created for both applications, with the Android module developed in Java and the iOS module in Swift. These modules export a listener to allow JS-side connection change monitoring.

<b>Challenges</b>:
In the Native Modules domain, the main hurdle revolved around discovering and understanding native APIs for implementation. The most significant challenge was analyzing the native APIs, studying them and subsequently integrating them into the application architecture.

<br />

### <b>API (Extra)</b>:

For the API, NestJs was chosen for its robust architecture and an organized, intuitive project pattern. Prisma (ORM) was used alongside sqlite for the database. The API includes basic CRUD functionalities for lists and tasks, with a gateway for users to connect and receive real-time updates when modifications occur.

<b>Challenges</b>:
Designing the gateway to notify users of updates presented challenges. Similar to the monorepo, understanding the structure and how to notify users of updates was more challenging than the implementation itself.

<br />

### <b>PACKAGES</b>:

The 'Packages' folder serves exclusively for package sharing, whether for configuration or implementation. The project exported eslint, tailwind, and typescript configuration packages, simplifying the setup of new projects to be added to the monorepo. Non-configuration modules include:

- api: exports services and DTOs used in applications.
- models: centralizes item typings.
- store: configures Zustand for state management.
- tokens: standardizes tokens used by the frontend (colors, fonts, spacing, etc.).
- utils: provides practical and generic functionalities for various applications.

<b>Challenges</b>:
Attempting to achieve the most with the least, respecting the peculiarities of each project, proved challenging. While initially attempting to use the same code for everything, I discovered the importance of respecting each project's specificities. Something suitable for Next.js might not necessarily work for React Native or NodeJs. However, the ease of creating various projects of the same type and reusing what was created previously in these projects makes the effort worthwhile.

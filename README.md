
# ITA SPRINT 5: NewBookmark

> [!NOTE]
> This project is currently under construction!

## 📄 Description

Fifth sprint of the **IT Academy Bootcamp**, consisting on recreating the first sprint website with **Angular**, applying the  **Atomic Design methodology**.

 


## 🎯 Objectives

- **Learn basic concepts of Angular** and create our first project.  
- Learn and apply the **Atomic Design methodology**.  
- Improve the existing website created in sprint 1.



## 💻 Technologies Used

- Angular v20.1.3. with Standalone Components
- TypeScript 5.8
- Vite
- Node.js v22.15.1
- HTML5 & CSS3
- Jasmine + Karma for running unit tests.
- TestBed for creating isolated testing environments.



## 📋 Requirements

- Modern web browser (Chrome, Firefox, Edge, etc.).
- Node.js (v18 or superior)


## 📁 Project Structure

The project is modular and organized to ensure **scalability, maintainability, and reusability** using the **Atomic Design pattern**:

```
src/
 ├── app/
 │   ├── components/
 │   │   ├── atoms/         # Smallest elements
 │   │   ├── molecules/     # Combinations of atoms
 │   │   ├── organisms/     # Complex sections composed of molecules and atoms 
 │   └── app.component.ts   # General component integrating all organisms
 └─────  main.component.ts  # Root component
```

## 🧪 Installation & Testing

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```



---
---


# 🚧 Pending improvements
- More website features to be implemented
- Mobile layout to be improved


# ⭐ Highlights
- I feel this sprint wasn't just about Angular, it was a great way to learn how to better structure our projects from the beginnings and practice eeee everything.
-  Progress vs. sprint 1.
- Gitflow branches and pull requests on point.
- I see great potential with Angular!
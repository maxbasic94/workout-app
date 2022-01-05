# Workout

This application represents home exercises. \
You can check how it works here: https://workout-everyday.netlify.app/

## How to run

```
 npm install
 npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Task

Link on the document: https://docs.google.com/document/d/1Q_rP2rMNaK0oaT6RcjggMxDDgW-bHhP3nh-41ibaK2o/edit#

## How to use

On home page you can see exercise list. \
For start exercise click button `Start Workout`. \
After that you will be taken to the page of the first exercise. \
For change exercise click button `next button`, `prev button` or wait finish exercise. \
After finishing your workout click button `save & continue`. \
Have a good day!

## Folders structure
    
```
.
├── build                           # directory with a production application
├── node_modules                    # all downloaded packages from NPM in your computer for the JavaScript project that you have
├── public                          # folder contains static files such as index.html and favicon.ico
│   ├── favicon.ico                 # website icon
│   └── index.html                  # main html file applications
├── src                             # folder for contain source files  
│   ├── pages                       # folder with pages
│   │   ├── exercisePage            # folder with components to Exercise Page
│   │   │   ├── baseTimer           # folder with component BaseTimer
│   │   │   ├── control             # folder with component Control
│   │   │   ├── exerciseTimer       # folder with component ExerciseTimer
│   │   │   ├── finishWorkout       # folder with component FinishWorkout
│   │   │   ├── nextPrevButton      # folder with component Button
│   │   │   ├── player              # folder with component Player
│   │   │   ├── playPauseButton     # folder with component FinishWorkout
│   │   │   ├── waitTimer           # folder with component WaitTimer
│   │   │   ├── ExercisePage.css    # styles for ExercisePage.tsx
│   │   │   └── ExercisePage.tsx    # jsx element ExercisePage
│   │   ├── notFoundPage            # folder with components to Not Found Page
│   │   │   └── NotFoundPage.tsx    # jsx element NotFoundPage
│   │   ├── startPage               # folder with components to Start Page    
│   │   │   ├── exercise            # folder with component Exercise
│   │   │   ├── exercisesList       # folder with component ExerciseList
│   │   │   ├── exerciseView        # folder with component ExerciseView
│   │   │   ├── startButton         # folder with component StartButton
│   │   │   ├── startInfo           # folder with component StatInfo
│   │   │   ├── StartPage.css       # styles for StartPage.tsx
│   │   └── StartPage.tsx           # jsx element StartPage
│   ├── tests                       # folder for contain unit tests 
│   ├── themes                      # folder with components to change theme
│   ├── types                       # folder with types
│   │   ├── images.d.ts             # fail for import images
│   │   └── types.ts                # types for response data            
│   ├── App.css                     # styles for App.tsx            
│   ├── App.tsx                     # main jsx element in app                  
│   ├── index.css                   # styles for index.tsx            
│   ├── index.tsx                   # main js-file app             
│   └── react-app-env.d.ts          # file references TypeScript types declarations that are specific to projects started with CRA
├── .babelrc                        # file is your local configuration for your code in your project   
├── .env                            # file is a simple text configuration file for controlling environment constants
├── .eslintrc.json                  # file is a configuration file for a tool      
├── .gitignore                      # text file that tells Git which files or folders to ignore in a project    
├── package-lock.json               # file is to keep track of the exact version of every package that is installed   
├── package.json                    # file is used to give information to npm     
├── README.md                       # file to generate the html summary you see at the bottom of projects  
└── tsconfig.json                   # file specifies the root files and the compiler options required to compile the project
```              
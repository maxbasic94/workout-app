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
After finishing your workout ckick button `save & continue`. \
Have a good day!

## Folders structure
    
```
.
├── build                       # directory with a production application
├── node_modules                # all downloaded packages from NPM in your computer for the JavaScript project that you have
├── public                      # folder contains static files such as index.html and favicon.ico
│   ├── favicon.ico             # website icon
│   └── index.html              # main html file applications
├── src                         # folder for contain source files  
│   ├── exercisePage            # folder with components to Exercise Page
│   │   ├── buttons
│   │   ├── control
│   │   ├── exerTimer
│   │   ├── finishWorkout
│   │   ├── player
│   │   ├── waitTimer
│   │   ├── ExercisePage.css
│   │   └── ExercisePage.tsx
│   ├── notFoundPage            # folder with components to Not Found Page
│   │   └── NotFoundPage.tsx
│   ├── startPage               # folder with components to Start Page    
│   │   ├── exercise
│   │   ├── exercisesList
│   │   ├── exerciseView
│   │   ├── ininImg
│   │   ├── startButton
│   │   ├── startInfo
│   │   ├── StartPage.css
│   │   └── StartOage.tsx
│   ├── tests                   # folder for contain unit tests 
│   ├── types                   # folder with types
│   │   ├── images.d.ts
│   │   └── types.ts                          
│   ├── App.css                             
│   ├── App.tsx                                    
│   ├── index.css                           
│   ├── index.tsx               # main js-file app             
│   └── react-app-env.d.ts
├── .babelrc                    # file is your local configuration for your code in your project   
├── .env                        
├── .eslintrc.json              # file is a configuration file for a tool      
├── .gitignore                  # text file that tells Git which files or folders to ignore in a project    
├── package-lock.json           # file is to keep track of the exact version of every package that is installed   
├── package.json                # file is used to give information to npm     
├── README.md                   # file to generate the html summary you see at the bottom of projects  
└── tsconfig.json
```              
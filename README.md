# Workout

This application represents home exercises. \
You can check how it works here: 

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
    
`
├── build                           
├── node_modules
├── public
│   ├── favicon.ico
│   └── index.html                   
├── src                             
│   ├── exercisePage
│   │   ├── buttons
│   │   ├── control
│   │   ├── exerTimer
│   │   ├── finishWorkout
│   │   ├── player
│   │   ├── waitTimer
│   │   ├── ExercisePage.css
│   │   └── ExercisePage.tsx
│   ├── notFoundPage
│   │   └── NotFoundPage.tsx
│   ├── startPage
│   │   ├── exercise
│   │   ├── exercisesList
│   │   ├── exerciseView
│   │   ├── ininImg
│   │   ├── startButton
│   │   ├── startInfo
│   │   ├── StartPage.css
│   │   └── StartOage.tsx
│   ├── types
│   │   ├── images.d.ts
│   │   └── types.ts                          
│   ├── App.css                             
│   ├── App.tsx                                    
│   ├── index.css                           
│   ├── index.tsx                            
│   └── react-app-env.d.ts                       
├── .env                        
├── .eslintrc.json                    
├── .gitignore                       
├── package-lock.json               
├── package.json                    
├── README.md                      
└── tsconfig.json
`              
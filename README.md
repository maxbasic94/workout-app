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
├─ .husky              # Folder for husky settings(pre-commit hook)
├─ src                          
│  ├─ pages            # Application pages
│  │  ├─ page          # Application page
│  │  │  ├─ components # Folder with components necessary for this page.
│  │  │  ...
│  │ ...                 
│  ├─ tests            # Folder with unit tests 
│  ├─ themes           # Folder with components to change theme
│  ├─ types            # Folder with types                
│ ...
```              
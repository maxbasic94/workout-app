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
For pause or continue exercise click `Pause` or `Play` button. \
After finishing your workout click button `save & continue`. \
Have a good day!

## Folders structure

Application consist of pages. \
Folder with new page place to `src/pages`. \
Every page contains folder `components` for components necessary to this application page. \
Every component place in its own folder. Styles for this component are also placed there. \
Components that are used on some page contains in `src/components`. Every component also has its own folder. \
Helper functions are located in the folder `src/helpers`.
    
```
.
├─ .husky               # Folder for husky settings(pre-commit hook)
├─ src                 
│  ├─ components        # Folder with component to some pages
│  ├─ firebase          # Folder to work with firebase
│  ├─ hooks             # Folder with custom hooks
│  ├─ pages             # Application pages
│  │  ├─ page           # Application page
│  │  │  ├─ components  # Folder with components necessary for this page.
│  │  │  ... 
│  │ ...                  
│  ├─ store             # Master state store
│  ├─ tests             # Folder with unit tests 
│  ├─ themes            # Folder with components to change theme
│  ├─ types             # Folder with types                
│ ...
```              
### Naming

Files with a capital letter contains JSX Element:
```
UserPage.tsx
```

Files with a small letter contain functions, variables, etc.
```
uploadDataToFirestore.ts
```
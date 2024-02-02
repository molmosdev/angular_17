# Files
All the tools follow the same Angular 17 structure. Inside the app folder, the entry point of the application, we have different principal folders:

```text
src
├── app
│   ├── core
│   │   ├── components
│   │   │   ├── comp-x
│   │   │   ├── comp-y
│   │   │   └── index.ts
│   │   ├── constants
│   │   │   └── index.ts
│   │   ├── directives
│   │   │   └── index.ts
│   │   ├── guards
│   │   │   └── index.ts
│   │   ├── interceptors
│   │   │   └── index.ts
│   │   ├── models
│   │   │   └── index.ts
│   │   └── services
│   │       └── index.ts
│   ├── features
│   │   ├── feature-a (simple feature component)
│   │   │   └── feature-a [html, css, ts component files]
│   │   ├── feature-b (feature with nested views)
│   │   │   ├── shared
│   │   │   │   ├── constants
│   │   │   │   │   └── index.ts
│   │   │   │   ├── components
│   │   │   │   │   ├── comp-a
│   │   │   │   │   ├── comp-b
│   │   │   │   │   └── index.ts
│   │   │   │   ├── models
│   │   │   │   │   └── index.ts
│   │   │   │   ├── pipes
│   │   │   │   │   └── index.ts
│   │   │   │   ├── services
│   │   │   │   │   └── index.ts
│   │   │   │   └── store
│   │   │   │       └── index.ts
│   │   │   ├── views
│   │   │   │   ├── view-b-a (simple view component)
│   │   │   │   │    └── view-b-a [html, css, ts component files]
│   │   │   │   ├── view-b-b (view with nested views)
│   │   │   │   │   ├── shared
│   │   │   │   │   │   └── ...
│   │   │   │   │   ├── views
│   │   │   │   │   │   └── ...
│   │   │   │   │   └── view-b-b.routes.ts
│   │   │   │   └── view-b-c (view component with nested views)
│   │   │   │       ├── shared
│   │   │   │       │   └── ...
│   │   │   │       ├── views
│   │   │   │       │   └── ...
│   │   │   │       ├── view-b-c [html, css, ts component files]
│   │   │   │       └── view-b-c.routes.ts
│   │   │   └── feature-b.routes.ts
│   │   ├── feature-c (feature component with nested views)
│   │   │   ├── shared
│   │   │   │   └── ...
│   │   │   ├── views
│   │   │   │   └── ...
│   │   │   ├── feature-c [html, css, ts component files]
│   │   │   └── feature-c.routes.ts
│   ├── shared
│   ├── app [html, css, ts component files]
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── styles
│       ├── _colors.css
│       └── _sizes.css
├── assets
└── main.ts
```

* `app`:  
  This is the root directory of your application.

    * `core`:  
      This directory contains the core functionalities of your application.
    * `components`:  
      This directory contains the reusable components.
    * `constants`, `directives`, `guards`, `interceptors`, `models`, `services`:  
      These directories contain various utilities and services used across your application.
    * `features`:  
      This directory contains the different features of your application. Each feature in your application can be one of the following.
        * `simple feature component`:  
          This is a significant part of your application. It could be a complete section like a dashboard, a user profile,  a settings page, etc.

        * `feature with nested views`:  
          This means that a feature can be composed entirely of nested views without a root component. Nested views are sub-views that are used for creating more complex UI structures.

        * `feature component with nested views`:  
          This is a combination of the above two. The feature has a root component and also contains nested views.

      In the last two cases (`feature with nested views` and `feature component with nested views`), `views` are used. In that case, the feature may contain its own `shared` directory, `views` directory and `.routes.ts` file where the views paths are defined. `views` directory contains the different views for a feature. Each view in your application can be one of the following:
        * `simple view component`:  
          This is a standalone view in your application. It could be a specific part of a feature like a user list, a detail panel, etc.

        * `view with nested views`:  
          This means that a view can be composed entirely of nested views without a root component. Nested views are sub-views that are used for creating more complex UI structures.

        * `view component with nested views`:  
          This is a combination of the above two. The view has a root component and also contains nested views.

      In the case of `view with nested views` and `view component with nested views`, each view may contain its own `shared` directory, nested `views` directory and `.routes.ts` file. The term nested views refers to the concept of having views within views. This is a powerful feature that allows developers to create complex UI structures while keeping the code organized and maintainable. The decision to use nested views is entirely up to the developer and depends on the specific requirements of the application.
* `shared`:  
  This directory contains components, services, and other code that is shared across multiple features of your application.
* `styles`:  
  This directory contains global styles for your application, such as colors and sizes.
* `assets`:  
  This directory contains static assets like images, fonts, etc.

Each `index.ts` file typically serves as a barrel file, which allows multiple exports from a directory to be imported elsewhere in your application using a simplified path

## main.ts

```ts
bootstrapApplication(AppComponent, appConfig)
.catch((err) => console.error(err));
```

## app.config.ts
```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
};
```

## Routes
### app.routes.ts
```ts
import { Routes } from '@angular/router';
import { FeatureBRoutes } from './features/feature-b/feature-b.routes';
import { FeatureCRoutes } from './features/feature-c/feature-c.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'feature-a',
    pathMatch: 'full'
  },
  {
    path: 'feature-a',
    loadComponent: () => import('./features/feature-a/feature-a.component').then((x) => x.FeatureAComponent),
  },
  {
    path: 'feature-b',
    children: FeatureBRoutes
  },
  {
    path: 'feature-c',
    loadComponent: () => import('./features/feature-c/feature-c.component').then((x) => x.FeatureCComponent),
    children: FeatureCRoutes
  }
];
```

### feature-b.routes.ts
```ts
import { Routes } from '@angular/router';
import { ViewBBRoutes } from './views/view-b-b/view-b-b.routes';
import { ViewBCRoutes } from './views/view-b-c/view-b-c.routes';

export const FeatureBRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view-b-a',
    pathMatch: 'full'
  },
  {
    path: 'view-b-a',
    loadComponent: () => import('./views/view-b-a/view-b-a.component').then((x) => x.ViewBAComponent)
  },
  {
    path: 'view-b-b',
    children: ViewBBRoutes
  },
  {
    path: 'view-b-c',
    loadComponent: () => import('./views/view-b-c/view-b-c.component').then((x) => x.ViewBCComponent),
    children: ViewBCRoutes
  }
];
```

### view-b-b.routes.ts
```ts
import { Routes } from '@angular/router';

export const ViewBBRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view-b-b-a',
    pathMatch: 'full'
  },
  {
    path: 'view-b-b-a',
    loadComponent: () => import('./views/view-b-b-a/view-b-b-a.component').then((x) => x.ViewBBAComponent)
  },
  {
    path: 'view-b-b-b',
    loadComponent: () => import('./views/view-b-b-b/view-b-b-b.component').then((x) => x.ViewBBBComponent)
  }
];
```

### view-b-c.routes.ts
```ts
import { Routes } from '@angular/router';

export const ViewBCRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view-b-c-a',
    pathMatch: 'full'
  },
  {
    path: 'view-b-c-a',
    loadComponent: () => import('./views/view-b-c-a/view-b-c-a.component').then((x) => x.ViewBCAComponent)
  },
  {
    path: 'view-b-c-b',
    loadComponent: () => import('./views/view-b-c-b/view-b-c-b.component').then((x) => x.ViewBCBComponent)
  }
];
```

### feature-c.routes.ts
```ts
import { Routes } from '@angular/router';

export const FeatureCRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view-c-a',
    pathMatch: 'full'
  },
  {
    path: 'view-c-a',
    loadComponent: () => import('./views/view-c-a/view-c-a.component').then((x) => x.ViewCAComponent)
  },
  {
    path: 'view-c-b',
    loadComponent: () => import('./views/view-c-b/view-c-b.component').then((x) => x.ViewCBComponent)
  }
];
```

## index.ts
Create a central point for exporting and importing components.
```ts
export * from './comp-a/comp-a.component';
```
For example:
```ts
export * from './screen-sample/screen-sample.component';
export * from './supervisor-element/supervisor-element.component';
```

## tsconfig.json
To avoid the complexity of relative paths in your project, map module names to specific file locations. This is done using the paths option in your tsconfig.json file.
```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@alias/*": ["path/to/directory/*"]
    }
}
```

For example:
```json
    "paths": {
      "@ed_core/*": ["app/core/*"],
      "@ed_features/*": ["app/features/*"],
    }
```

# Nomenclature
## Click
```ts
(click)="onExampleClicked()"
```
In this example, `onExampleClicked` is a method that will be called when the click event is triggered. Replace `Example` with the appropriate name for your use case. For example:
```ts
(click)="onHelpClicked()"
(click)="onSaveClicked()"
```

## Change Event
```ts
(change)="onExampleChanged()"
```
Here, `onExampleChanged` is a method that will be called when the change event is triggered. Replace `Example` with the appropriate name for your use case. For example:
```ts
(change)="onFileChanged()"
(change)="onFilterChanged()"
```

## Submit
```ts
(ngSubmit)="onSubmitExample()"
```
In this case, `onSubmitExample` is a method that will be called when the form is submitted. Replace `Example` with the appropriate name for your use case. For example:
```ts
(ngSubmit)="onSubmitClicked()"
(ngSubmit)="onSubmitForgotPasswordClicked()"
```

## HTTP Functions
```ts
getExample()
putExample()
postExample()
```
These are methods for making HTTP requests. Replace `Example` with the appropriate name for your use case. For example:
```ts
getNetworkNtp()
putNetworkNtp()
```

## Contructor
```ts
_exampleService: ExampleService
```
Here, `_exampleService` is an instance of `ExampleService`. Replace `exampleService` and `ExampleService` with the appropriate service name for your use case. For example:
```ts
_httpClient: HttpClient
_spinnerService: SpinnerService
_sidebarService: SidebarService

```

## Input/Output
```ts
@Output() actionExample = new EventEmitter();
```
In this example, `actionExample` is an event that the component can emit. Replace `actionExample` with the appropriate name for your use case. For example:
```ts
@Output() helpClicked = new EventEmitter<void>();
@Output() newLanguageAdded = new EventEmitter<string>();
```

## @if
```ts
@if(condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}
```

## @for
```ts
@for(var i = 0; i < 10; i++) {
  // Code to execute on each iteration
}

```

## @switch
```ts
@switch(expression) {
  case value1:
    // Code to execute if the expression equals value1
    break;
  case value2:
    // Code to execute if the expression equals value2
    break;
  default:
        // Code to execute if the expression doesn't match any case
}
```




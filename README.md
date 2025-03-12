
# Project structure - Angular 17+ (updated)

This guide presents a scalable and modular project structure compatible with Angular 17, 18, 19 and subsequent versions, designed to help developers create maintainable and feature-rich applications with ease.

## Files

### Structure `updated`

Inside the app folder, the entry point of the application, we have different principal folders:

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
│   │   ├── interfaces
│   │   │   └── index.ts
│   │   ├── models
│   │   │   └── index.ts
│   │   └── services
│   │       └── index.ts
│   ├── features
│   │   ├── feature-a (simple feature component)
│   │   │   └── feature-a [html, css, ts component files]
│   │   ├── feature-b (feature with nested views)
│   │   │   ├── view-b-a (simple view component)
│   │   │   │    └── view-b-a [html, css, ts component files]
│   │   │   ├── view-b-b (view with nested views)
│   │   │   │   ├── shared
│   │   │   │   │   └── ... (shared components, constants, interfaces, models, pipes, etc.)
│   │   │   │   ├── ... (nested views)
│   │   │   │   └── view-b-b.routes.ts
│   │   │   ├── view-b-c (view component with nested views)
│   │   │   │   ├── shared
│   │   │   │   │   └── ... (shared components, constants, interfaces, models, pipes, etc.)
│   │   │   │   ├── ... (nested views)
│   │   │   │   ├── view-b-c [html, css, ts component files]
│   │   │   │   └── view-b-c.routes.ts
│   │   │   ├── shared
│   │   │   │   ├── components
│   │   │   │   │   ├── comp-a
│   │   │   │   │   ├── comp-b
│   │   │   │   │   └── index.ts
│   │   │   │   ├── constants
│   │   │   │   ├── interfaces
│   │   │   │   ├── models
│   │   │   │   ├── pipes
│   │   │   │   ├── services
│   │   │   │   ├── store
│   │   │   │   └── index.ts
│   │   │   └── feature-b.routes.ts
│   │   └── feature-c (feature component with nested views)
│   │       ├── ... (nested views)
│   │       ├── shared
│   │       │   └── ... (shared components, constants, interfaces, models, pipes, etc.)
│   │       ├── feature-c [html, css, ts component files]
│   │       └── feature-c.routes.ts
│   ├── shared
│   │   └── ... (shared components, constants, interfaces, models, pipes, etc.)
│   ├── app [html, css, ts component files]
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── styles
│       ├── _colors.css
│       └── _sizes.css
├── assets
└── main.ts
```

Structure explanation:

* `app`:  
  This is the root directory of your application.

  * `core`:  
    This directory contains the core functionalities of your application.

    * `components`:  
      This directory contains the reusable components.

    * `constants`, `directives`, `guards`, `interceptors`, `interfaces`, `models`, `services`:  
      These directories contain various utilities and services used across your application.

  * `features`:  
    This directory contains the different features of your application. Each feature in your application can be one of the following:

    * `simple feature component`:  
    This is a significant part of your application. It could be a complete section like a dashboard, a user profile, a settings page, etc.

    * `feature with nested views`:  
    This means that a feature can be composed entirely of nested views without a root component. Nested views are sub-views that are used for creating more complex UI structures.

    * `feature component with nested views`:  
    This is a combination of the above two. The feature has a root component and also contains nested views.

    In the last two cases (`feature with nested views` and `feature component with nested views`), the feature may contain its own `.routes.ts` file where the views paths are defined and its shared directory (`components`, `constants`, `interfaces`, `models`, `pipes`, `services`, `store`, ... ). Each view in your application can be one of the following:

    * `simple view component`:  
    This is a standalone view in your application. It could be a specific part of a feature like a user list, a detail panel, etc.

    * `view with nested views`:  
    This means that a view can be composed entirely of nested views without a root component. Nested views are sub-views that are used for creating more complex UI structures.

    * `view component with nested views`:  
    This is a combination of the above two. The view has a root component and also contains nested views.

    In the case of `view with nested views` and `view component with nested views`, each view may contain its own `.routes.ts` file and its shared directory. The term nested views refers to the concept of having views within views. This is a powerful feature that allows developers to create complex UI structures while keeping the code organized and maintainable. The decision to use nested views is entirely up to the developer and depends on the specific requirements of the application.

  * `shared`:  
  This directory contains components, services, and other code that is shared across multiple features of your application.

* `styles`:  
This directory contains global styles for your application, such as colors and sizes.

* `assets`:  
This directory contains static assets like images, fonts, etc.

Each `index.ts` file typically serves as a barrel file, which allows multiple exports from a directory to be imported elsewhere in your application using a simplified path

### main.ts

```ts
bootstrapApplication(AppComponent, appConfig)
.catch((err) => console.error(err));
```

### app.config.ts

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
};
```

### Routes

#### app.routes.ts

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
    loadComponent: () => import('./features/feature-a/feature-a.component')
  },
  {
    path: 'feature-b',
    children: FeatureBRoutes
  },
  {
    path: 'feature-c',
    loadComponent: () => import('./features/feature-c/feature-c.component'),
    children: FeatureCRoutes
  }
];
```

#### feature-b.routes.ts

```ts
import { Routes } from '@angular/router';
import { ViewBBRoutes } from './view-b-b/view-b-b.routes';
import { ViewBCRoutes } from './view-b-c/view-b-c.routes';

export const FeatureBRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view-b-a',
    pathMatch: 'full'
  },
  {
    path: 'view-b-a',
    loadComponent: () => import('./view-b-a/view-b-a.component')
  },
  {
    path: 'view-b-b',
    children: ViewBBRoutes
  },
  {
    path: 'view-b-c',
    loadComponent: () => import('./view-b-c/view-b-c.component'),
    children: ViewBCRoutes
  }
];
```

#### view-b-b.routes.ts

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
    loadComponent: () => import('./view-b-b-a/view-b-b-a.component')
  },
  {
    path: 'view-b-b-b',
    loadComponent: () => import('./view-b-b-b/view-b-b-b.component')
  }
];
```

#### view-b-c.routes.ts

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
    loadComponent: () => import('./view-b-c-a/view-b-c-a.component')
  },
  {
    path: 'view-b-c-b',
    loadComponent: () => import('./view-b-c-b/view-b-c-b.component')
  }
];
```

#### feature-c.routes.ts

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
    loadComponent: () => import('./view-c-a/view-c-a.component')
  },
  {
    path: 'view-c-b',
    loadComponent: () => import('./view-c-b/view-c-b.component')
  }
];
```

### Component Export `new`

Components should use `export default class` for their export. This approach simplifies lazy loading by eliminating the need for `.then` in the routes.

For example:

```ts
export default class FeatureAComponent {
  // Component code...
}
```

With this export style, you can directly use `loadComponent` in your routes without chaining `.then`:

```ts
{
  path: 'feature-a',
  loadComponent: () => import('./features/feature-a/feature-a.component')
}
```

### index.ts

Create a central point for exporting and importing components.

```ts
export * from './comp-a/comp-a.component';
```

For example:

```ts
export * from './screen-sample/screen-sample.component';
export * from './supervisor-element/supervisor-element.component';
```

### tsconfig.json

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

## Nomenclature

### Click

```ts
(click)="onExampleClicked()"
```

In this example, `onExampleClicked` is a method that will be called when the click event is triggered. Replace `Example` with the appropriate name for your use case. For example:

```ts
(click)="onHelpClicked()"
(click)="onSaveClicked()"
```

### Change Event

```ts
(change)="onExampleChanged()"
```

Here, `onExampleChanged` is a method that will be called when the change event is triggered. Replace `Example` with the appropriate name for your use case. For example:

```ts
(change)="onFileChanged()"
(change)="onFilterChanged()"
```

### Submit

```ts
(ngSubmit)="onSubmitExample()"
```

In this case, `onSubmitExample` is a method that will be called when the form is submitted. Replace `Example` with the appropriate name for your use case. For example:

```ts
(ngSubmit)="onSubmitClicked()"
(ngSubmit)="onSubmitForgotPasswordClicked()"
```

### HTTP Functions

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

### Private Variables `new`

Private variables should start with an underscore to indicate their visibility.

```ts
private _exampleService: ExampleService;
```

For example:

```ts
private _httpClient: HttpClient;
private _spinnerService: SpinnerService;
private _sidebarService: SidebarService;
```

### File Naming Conventions `new`

Files should be named based on their type using the following prefixes:

* `I` for interfaces
* `T` for types
* `E` for enums
* `M` for models

For example:

* `ICar` should be named `car.interface.ts`
* `TUser` should be named `user.type.ts`
* `EStatus` should be named `status.enum.ts`
* `MProduct` should be named `product.model.ts`

### Services `new`

When using signals, we do not use getters or setters. Instead, we handle state like this:

#### Example Service

```ts
import { Injectable, signal, computed, WritableSignal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  /**
   * Private writable signal that stores a number.
   */
  private _count: WritableSignal<number> = signal(0);

  /**
   * Public read-only computed signal that returns the value of `_count`.
   */
  public readonly count: Signal<number> = computed(() => this._count());

  /**
   * Computed signal that calculates the double of the `_count` value.
   */
  public readonly doubleCount: Signal<number> = computed(() => this.count() * 2);

  /**
   * Increments the value of `_count` by 1.
   */
  increment(): void {
    this._count.update(value => value + 1);
  }

  /**
   * Decrements the value of `_count` by 1.
   */
  decrement(): void {
    this._count.update(value => value - 1);
  }

  /**
   * Sets the value of `_count` to a new value.
   * @param value The new value for `_count`.
   */
  setCount(value: number): void {
    this._count.set(value);
  }
}
```

### Constructor `updated`

The constructor should only be used in specific cases when you need to use `effect()`.

#### Use cases for effects:

Effects are rarely needed in most application code, but may be useful in specific circumstances. Here are some examples of situations where an effect might be a good solution:

- Logging data being displayed and when it changes, either for analytics or as a debugging tool.
- Keeping data in sync with `window.localStorage`.
- Adding custom DOM behavior that can't be expressed with template syntax.
- Performing custom rendering to a canvas, charting library, or other third-party UI library.

#### When not to use effects:

Avoid using effects for propagation of state changes. This can result in `ExpressionChangedAfterItHasBeenChecked` errors, infinite circular updates, or unnecessary change detection cycles.

Because of these risks, Angular by default prevents you from setting signals in effects. It can be enabled if absolutely necessary by setting the `allowSignalWrites` flag when you create an effect.

Instead, use `computed signals` to model state that depends on other state.

For example, for using `effect()` in the constructor:

```ts
constructor() {
  effect(() => {
    // Reactively monitor changes in Signals
  });
}
```

### Dependency Injection `new`

For dependency injection, use `inject`.

For example, using `inject`:

```ts
private _exampleService = inject(ExampleService);
```

### Inputs and Outputs (Signals)

#### Input Signal

In this case, `inputExample` is an optional input of type string with its value initialized as follows:

```ts
inputExample = input<string>('Initial value'); // Signal<string>
```

Even though it’s typed as a string, it will be declared as string or undefined if it’s not initialized:

```ts
inputExample = input<string>(); // Signal<string|undefined>
```

It can also be marked as required:

```ts
inputExample = input.required<string>(); // Signal<string>
```

The input can also have options where we can apply an alias or a transform:

```ts
inputExample = input.required<string>({
  alias: 'data',
  transform: (v: string) => v.toUpperCase(),
}); // Signal<string>
```

New values can be set in the following way:

```ts
this.inputExample.set('new value');
```

In the parent component HTML, the input is used like this:

```html
[inputExample]
```

#### Output Signal

In this case, `outputExample` is an output emitter of type string:

```ts
outputExample = output<string>(); //OutputEmitterRef<string>
```

The output can also be configured to emit without a value:

```ts
outputExample = output(); //OutputEmitterRef<void>
```

New values can be emitted in the following way, depending on whether the output is typed as string or void:

```ts
this.outputExample.emit('new value');
this.outputExample.emit();
```

In the parent component HTML, the output is used like this:

```html
(outputExample)
```

#### Model Input Signal

Here, `modelInputExample` is a two-way binding input of type string. It’s a reactive signal that will share its value between parent and child components in both directions:

```ts
modelInputExample = model<string>('Initial value'); // ModelSignal<string>
```

Even if it is typed as string, it will be declared as string or undefined if it is not initialized:

```ts
modelInputExample = model<string>(); // ModelSignal<string|undefined>
```

It can also be marked as required:

```ts
modelInputExample = model.required<string>(); // ModelSignal<string>
```

New values can be set in the following way:

```ts
this.modelInputExample.set('new value');
```

In the parent component HTML, the model input is used like this:

```html
[(modelInputExample)]
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

### @switch

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
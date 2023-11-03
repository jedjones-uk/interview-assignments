# A simplified Jira clone built with Angular, Akita and ng-zorro

This is a simplified Jira clone built with Angular

## Setting up development environment

- `git clone https://github.com/jedjones-uk/interview-assignments`
- `cd jira-clone-angular`
- `npm start` for angular web application
- The app should run on `http://localhost:4200/`

## Tech stack

- [Angular CLI][cli]
- [Akita][akita] state management
- UI modules:
  - [TailwindCSS][tailwind]
  - Angular CDK [drag and drop][cdkdrag]
  - [ng-zorro][ng-zorro] UI component: `tooltip`, `modal`, `select`, `icon` and more.
  - [ngx-quill][quill]

[cli]: https://cli.angular.io/
[akita]: https://datorama.github.io/akita/
[tailwind]: https://tailwindcss.com/
[cdkdrag]: https://material.angular.io/cdk/drag-drop/overview
[ng-zorro]: https://ng.ant.design/docs/introduce/en
[quill]: https://github.com/KillerCodeMonkey/ngx-quill

## High level design

### Application architecture

I have an AppModule that will import:

![Jira clone built with Angular and Akita - Application architecture][application-architecture]

- Angular needed modules such as `BrowserModule` and any module that need to run `forRoot`.
- The application core modules such as `AuthModule` that need to available on the whole platform.
- And I also configured the router to [lazy load any modules][lazy-load] only when I needed. Otherwise, everything will be loaded when I start the application.
  For instance, `LoginModule` when I open the URL at `/login` and `ProjectModule` when the URL is `/project`. Inside each module, I could import whatever modules that are required. Such as I need the `JiraControlModule` for some custom UI components for the `ProjectModule`

### Simple data interaction flow

As I am using [Akita][akita] state management, I follow the Akita documentation for the data flow. I found it is simple to understand comparing with ngrx terms (`reducer`, `selector`, `effect`)

![Jira clone built with Angular and Akita - Simple data interaction flow][interaction-data-flow]

I set up a [project state with initial data][project-store]. The main heavy lifting part I think is the [project service][project-service], it contains all the interacting with [project store][project-store]. Such as after fetching the project successfully, I update the store immediately inside the service itself. The last lego block was to expose the data through [project query][project-query]. Any components can start to inject [project query][project-query] and consume data from there.

If you are using ngrx, you have to dispatch an action when you started fetching the project, and then there is an effect somewhere that was detached from your context need to handle the action, send a request to the API server. And finally, the effect will tell whether the data was successfully fetched or not. <u>There is nothing wrong with ngrx approach</u>, it is just too much concept and layer that you need to understand. To be honest, I used to afraid of integrating ngrx in my project because of the unnecessary complexity it would bring.

### Unit/Integration tests

I skipped writing test for this project.

### Proper authentication system

I am currently sending the same email and a random password to the server without any check to get the current user back.

### Accessibility

Not all components have properly defined [aria attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), visual focus indicators, etc.

## Compatibility

It was being tested on IE 11, Chrome and Firefox. For Safari, there are some minor alignment issues.

[application-architecture]: src/assets/img/diagram/application-architecture.png
[interaction-data-flow]: src/assets/img/diagram/interaction-data-flow.png
[project-store]: src/app/project/state/project/project.store.ts
[project-service]: src/app/project/state/project/project.service.ts
[project-query]: src/app/project/state/project/project.query.ts
[lazy-load]: https://angular.io/guide/lazy-loading-ngmodules

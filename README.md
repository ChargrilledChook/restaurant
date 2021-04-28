# Restaurant

A single page app for a fictional restaurant using ES6 modules and Webpack.

[View live here](https://chargrilledchook.github.io/restaurant/)

[Kanban / Project Board](https://github.com/ChargrilledChook/restaurant/projects/1)

[Original Spec](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page)

## About

The brief for this project was to create a faux restaurant page entirely with vanilla Javascript - the original HTML markup for this site only contains a single div. All other elements are generated dynamically with Javascript.

Other elements were to split pages up into separate components / ES6 modules, and to compile the site using webpack to ensure browswer compatibility for modules.

The site is also fully responsive, but hasn't been tested extensively on very large or very small viewports.

## API / How this works

- Each major component (header, footing and each of the three pages) is a separate module
- The initialiseSite module bootstraps the html for the initial page load, while index.js sets listeners to enable page switching logic.
- All\* variables are stored in the data file. To change or add a product, heading, copy etc just find the relevant variable in the file and it will update across the site.
- The major page components (landing, menu and contact) each have a class with public get property which returns all required html for that element
- Header and footer are similar but use functions

## Reflections

- Happy with design / responsiveness / looks
- Probably slightly over-engineered but fine as it was good practice with both modules and modularity in general
- Probably wouldn't actually build a site of this size this way
- Initially didn't love the idea of adding a build step just to use modules but Webpack was reasonably painless once set up, at least on this project
- Nice to go back to writing code in modules
- Must use a CSS reset next time, began prototyping CSS quickly and got carried away - got burnt by several bugs because of this

## To Do

- [ ] Convert menu to hamburger menu on small screens
- [ ] CSS needs refactoring - general clean up, improve naming / selectors, reduce footprint
- [ ] Header and footer probably need refactoring into classes to have parity with other components
- [ ] Some classes have slightly bloated methods and could be cleaned up and broken down into smaller functions

## Issues

- Google map load is slow. But also free.

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

# Project Stack
Vite Vue Basic sample app uses:
* Vue3, latest version of vue and uses composition API with `<script setup>`
* Vite for quick scaffolding of app and less boiler plate code

## Packages
* Tailwind for utility CSS 
* DaisyUI for components, this is made using tailwind CSS
* Json Server for fake backend which works well and the same with Laravel API.

## Disciplines
* Uses functional programming, promises and ES6 features.
> ⚠ This project is built in WSL  

# Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

# ENV Variables

Vite will read env varaibles when they have `VITE_APP` prefix, this is similar to vue and react.
For this example, I have a backend url so we need to illustrate:
```bash
VITE_APP_BE_URL="http://localhost:5000"
```
# Setup

Clone this project in your WSL, and run:
* For FE `npm run dev`
 * This command runs `vite` and gives you the FE url
* For BE `npm run backend`
 * This command runs `json-server --watch db.json --port 5000` and it watches the db.json as database using the port `5000`
    > You can change the `db.json` and `port` in your desire

## Database
The `db.json` file serves as your database

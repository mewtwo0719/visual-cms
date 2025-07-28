# project setup

create a file .env and copy content from .env.example into it

start the docker with command:
docker compose up -d

start the project with:
pnpm dev

navigate to localhost 3000

# Adding shadcn compnents

Navigate to the https://ui.shadcn.com/docs/components
pick a component and install using pnpm package manager

example: pnpm dlx shadcn@latest add navigation-menu

it will add a component to src/components/ui/ folder

# Adding a component to puck editor

go to the src/components/PuckComponents folder, the files will be divided in folders, depending on their usage.
Check how other components are done

We have to export 2 things from there, the type and conguration object for puck config file at src/puck.config.tsx
documentation: https://puckeditor.com/docs

after creating these exports, import them in puck.config.tsx file

# important

If you style something with tailwind thats dynamic, the tailwind will not be able to understand dynamic styling, since it only compiles classname it is used in project. You need to whitelist them all in tailwind.config.mjs

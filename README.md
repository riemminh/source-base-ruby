This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
This project requires Node.js v18.17.0 or higher.

To install the dependencies, run:

step 1: yarn

step 2: yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


# Project Usage Guide

Welcome to our project! Below is some important information about the project and how to use it.

## Package Versions

The project currently uses the latest versions of the packages. We are currently using the latest packages, so there will be some minor changes to the project structure. Please refer to the following for more information.

## Routing

In Next.js version 14, we have switched to using `The app Router` instead of `The Router page`. Please refer to the official Next.js documentation for more details on how to build your application and manage routing: [Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing).

## Using MUI CSS Cache for SSR in Next.js

We have integrated MUI CSS cache for Server-Side Rendering (SSR) in the project. This helps optimize the performance of the application. For more details on how to configure and use MUI CSS cache, you can refer to the example here: [MUI CSS Cache in Next.js](https://github.com/garronej/tss-react/blob/main/src/next/appDir.tsx).

## Managing Global State with Zustand

We use Zustand to manage global state instead of Redux in the project. Zustand has several advantages, including:
- Support for use outside of React components.
- Simple and straightforward action configuration, without the usual Redux complexity.
- 100% use of hook actions.
- Support for multiple stores.
- Support for the persist feature to store state.

Please refer to the official Zustand documentation for more detailed information and examples of how to use it: [Zustand](https://github.com/pmndrs/zustand).

If you have any questions or need assistance, please don't hesitate to contact us.

We hope you have a great experience using the project!

## Managing Data with React Query

To efficiently manage data fetching and state management, we have integrated React Query into the project. React Query simplifies data handling in your application, allowing you to easily fetch, cache, and update data.

You can find detailed information and examples on how to use React Query in the official documentation: [React Query](https://react-query.tanstack.com/).

If you have any questions or need assistance, please don't hesitate to contact us.



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
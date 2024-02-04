/**
 * blog router
 */

import { factories } from "@strapi/strapi";

const defaultRouter = factories.createCoreRouter("api::blog.blog");

const customRouter = (innerRouter, extraRoutes = []) => {
  let routes;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes.concat(extraRoutes);
      return routes;
    },
  };
};

const extraRoutes = [
  {
    method: "GET",
    path: "/blog/categories",
    handler: "api::blog.blog.categories",
  },
];

export default customRouter(defaultRouter, extraRoutes);

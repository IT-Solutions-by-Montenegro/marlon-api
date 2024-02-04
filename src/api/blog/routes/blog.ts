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

export default customRouter(defaultRouter, [
  {
    method: "GET",
    path: "/blog/categories",
    handler: "api::blog.blog.categories",
  },
  {
    method: "GET",
    path: "/blog/paginate",
    handler: "api::blog.blog.paginate",
  },
]);

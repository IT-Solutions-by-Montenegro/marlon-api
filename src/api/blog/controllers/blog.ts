/**
 * blog controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    async categories(ctx) {
      const categories = await strapi.db.connection.raw(
        "select distinct category from blogs"
      );

      return categories;
    },
  })
);

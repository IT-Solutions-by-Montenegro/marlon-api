/**
 * blog controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    async categories(ctx) {
      const [data, meta] = await strapi.db.connection.raw(
        "select distinct category from blogs"
      );

      return data.map((item) => item.category);
    },
  })
);

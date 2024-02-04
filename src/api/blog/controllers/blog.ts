/**
 * blog controller
 */

import { factories } from "@strapi/strapi";
import { mergeTo } from "../../../utils";

export default factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    async categories(ctx) {
      const [data, meta] = await strapi.db.connection.raw(
        "select distinct category from blogs"
      );

      return data.map((item) => item.category);
    },
    async paginate(ctx) {
      const query = ctx.query;
      if (query.category == "all") {
        query.category = "";
      }
      const where: any = {
        ...mergeTo(query.category, { category: query.category }),
        ...mergeTo(query.notIn, {
          id: {
            $notIn: query.notIn,
          },
        }),
      };
      return strapi.db.query("api::blog.blog").findMany({
        offset: query.page || 1,
        limit: query.limit || 10,
        where,
      });
    },
  })
);

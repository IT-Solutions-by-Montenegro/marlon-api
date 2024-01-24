import { factories } from "@strapi/strapi";

export default {
  async send(ctx) {
    return await strapi
                 .services["api::email.email"]
                 .send(ctx);
  },
};
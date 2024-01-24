/**
 * email service
 */

export default {
   send: async (ctx) =>  {
    console.log(await strapi.plugins['email'].services.email.getProviderSettings());
        await strapi.plugins['email'].services.email.send({
            to: 'cedrickcampoto@yahoo.com', // Change to your recipient
            // from: 'marlon@teknology.work', // Change to your verified sender
            subject: 'Testing #1',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',

        }).then(res=>{
            console.log(16,res);

            ctx.send({ok:true})
        }).catch(err=>{
            ctx.badRequest(null, err);
        })
    }
};

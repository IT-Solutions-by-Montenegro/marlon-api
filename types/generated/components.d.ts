import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogFeaturedBoatSection extends Schema.Component {
  collectionName: 'components_blog_featured_boat_sections';
  info: {
    displayName: 'Featured Boat Section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'elements.button'>;
    img: Attribute.Media;
  };
}

export interface ContactContactSection extends Schema.Component {
  collectionName: 'components_contact_contact_sections';
  info: {
    displayName: 'Contact Section';
  };
  attributes: {
    title: Attribute.Text;
    btn1: Attribute.Component<'elements.button'>;
    btn2: Attribute.Component<'elements.button'>;
    office_location: Attribute.Relation<
      'contact.contact-section',
      'oneToOne',
      'api::office-location.office-location'
    >;
  };
}

export interface ElementsBlogCard extends Schema.Component {
  collectionName: 'components_elements_blog_cards';
  info: {
    displayName: 'Blog Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    img: Attribute.Media;
    cover: Attribute.Media;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.String;
  };
}

export interface ElementsImageCard extends Schema.Component {
  collectionName: 'components_elements_image_cards';
  info: {
    displayName: 'Image Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    img: Attribute.Media;
    link: Attribute.String;
  };
}

export interface ElementsSocialMediaLinks extends Schema.Component {
  collectionName: 'components_elements_social_media_links';
  info: {
    displayName: 'Social Media Links';
  };
  attributes: {};
}

export interface FindADealerInteractiveMap extends Schema.Component {
  collectionName: 'components_find_a_dealer_interactive_maps';
  info: {
    displayName: 'Interactive Map';
  };
  attributes: {
    dealer: Attribute.Relation<
      'find-a-dealer.interactive-map',
      'oneToOne',
      'api::dealer.dealer'
    >;
  };
}

export interface GlobalBanner extends Schema.Component {
  collectionName: 'components_global_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    img: Attribute.Media;
  };
}

export interface GlobalCallToAction extends Schema.Component {
  collectionName: 'components_global_call_to_actions';
  info: {
    displayName: 'Call to Action';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface GlobalCustomers extends Schema.Component {
  collectionName: 'components_global_customers';
  info: {
    displayName: 'Customers';
  };
  attributes: {
    name: Attribute.String;
    testimony: Attribute.RichText;
    img: Attribute.Media;
  };
}

export interface GlobalNavMenu extends Schema.Component {
  collectionName: 'components_global_nav_menus';
  info: {
    displayName: 'nav_menu';
  };
  attributes: {
    title: Attribute.String;
    img: Attribute.Media;
    link: Attribute.String;
  };
}

export interface GlobalOurPartners extends Schema.Component {
  collectionName: 'components_global_our_partners';
  info: {
    displayName: 'Our Partners';
  };
  attributes: {
    heading: Attribute.String;
    partners: Attribute.Component<'global.partners-logo', true>;
  };
}

export interface GlobalPartnersLogo extends Schema.Component {
  collectionName: 'components_global_partners_logos';
  info: {
    displayName: 'Partners Logo';
  };
  attributes: {
    logo: Attribute.Media;
  };
}

export interface GlobalTestimonials extends Schema.Component {
  collectionName: 'components_global_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    customer: Attribute.Component<'global.customers', true>;
    header: Attribute.String;
  };
}

export interface GlobalTitleAndParagraph extends Schema.Component {
  collectionName: 'components_global_title_and_paragraphs';
  info: {
    displayName: 'Title and Paragraph';
  };
  attributes: {
    title: Attribute.String;
    paragraph: Attribute.Text;
  };
}

export interface HomepageProductsSection extends Schema.Component {
  collectionName: 'components_homepage_products_sections';
  info: {
    displayName: 'Products Section';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    products: Attribute.Component<'elements.image-card', true>;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface PostPostGallery extends Schema.Component {
  collectionName: 'components_post_post_galleries';
  info: {
    displayName: 'Post Gallery';
    description: '';
  };
  attributes: {
    posts: Attribute.Relation<
      'post.post-gallery',
      'oneToMany',
      'api::post.post'
    >;
  };
}

export interface PostPosts extends Schema.Component {
  collectionName: 'components_post_posts';
  info: {
    displayName: 'Posts';
    description: '';
  };
  attributes: {
    posts: Attribute.Relation<'post.posts', 'oneToMany', 'api::post.post'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.featured-boat-section': BlogFeaturedBoatSection;
      'contact.contact-section': ContactContactSection;
      'elements.blog-card': ElementsBlogCard;
      'elements.button': ElementsButton;
      'elements.image-card': ElementsImageCard;
      'elements.social-media-links': ElementsSocialMediaLinks;
      'find-a-dealer.interactive-map': FindADealerInteractiveMap;
      'global.banner': GlobalBanner;
      'global.call-to-action': GlobalCallToAction;
      'global.customers': GlobalCustomers;
      'global.nav-menu': GlobalNavMenu;
      'global.our-partners': GlobalOurPartners;
      'global.partners-logo': GlobalPartnersLogo;
      'global.testimonials': GlobalTestimonials;
      'global.title-and-paragraph': GlobalTitleAndParagraph;
      'homepage.products-section': HomepageProductsSection;
      'post.post-gallery': PostPostGallery;
      'post.posts': PostPosts;
    }
  }
}

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

export interface CardsCardNews extends Schema.Component {
  collectionName: 'components_cards_card_news';
  info: {
    displayName: 'CardNews';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.Component<'global.text'>;
    text: Attribute.Component<'global.text'>;
    button: Attribute.Component<'global.button'>;
  };
}

export interface CardsCard extends Schema.Component {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    primary: Attribute.String;
    secondary: Attribute.String;
    image: Attribute.Media;
    link: Attribute.Component<'global.anchor'>;
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

export interface GlobalAnchor extends Schema.Component {
  collectionName: 'components_global_anchors';
  info: {
    displayName: 'Anchor';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    context: Attribute.String;
    size: Attribute.String;
    link: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface GlobalBanner extends Schema.Component {
  collectionName: 'components_global_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    banner_list: Attribute.Relation<
      'global.banner',
      'oneToOne',
      'api::banner-list.banner-list'
    >;
  };
}

export interface GlobalButton extends Schema.Component {
  collectionName: 'components_global_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    context: Attribute.String;
    size: Attribute.String;
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

export interface GlobalHamburger extends Schema.Component {
  collectionName: 'components_global_hamburgers';
  info: {
    displayName: 'Hamburger';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    icon: Attribute.Media;
    image: Attribute.Media;
  };
}

export interface GlobalNavBarBranch extends Schema.Component {
  collectionName: 'components_global_nav_bar_branches';
  info: {
    displayName: 'Brand';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    name: Attribute.String;
    link: Attribute.String;
  };
}

export interface GlobalNavBarItem extends Schema.Component {
  collectionName: 'components_global_nav_bar_items';
  info: {
    displayName: 'NavBarItem';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    icon: Attribute.Media;
    link: Attribute.String;
    responsive: Attribute.String;
    width: Attribute.String;
    height: Attribute.String;
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

export interface GlobalTestemony extends Schema.Component {
  collectionName: 'components_global_testemonies';
  info: {
    displayName: 'Testimony';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    text: Attribute.Text;
    name: Attribute.Component<'global.text-icon'>;
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

export interface GlobalTextIcon extends Schema.Component {
  collectionName: 'components_global_text_icons';
  info: {
    displayName: 'Text Icon';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    text: Attribute.String;
    type: Attribute.String;
  };
}

export interface GlobalText extends Schema.Component {
  collectionName: 'components_global_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    type: Attribute.String;
    text: Attribute.Text;
    size: Attribute.String;
    color: Attribute.String;
    weight: Attribute.String;
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

export interface SectionsBanner extends Schema.Component {
  collectionName: 'components_sections_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    banner_list: Attribute.Relation<
      'sections.banner',
      'oneToOne',
      'api::banner-list.banner-list'
    >;
  };
}

export interface SectionsCallToAction extends Schema.Component {
  collectionName: 'components_sections_call_to_actions';
  info: {
    displayName: 'Call To Action';
    description: '';
  };
  attributes: {
    call_action: Attribute.Relation<
      'sections.call-to-action',
      'oneToOne',
      'api::call-action.call-action'
    >;
  };
}

export interface SectionsCategory extends Schema.Component {
  collectionName: 'components_sections_categories';
  info: {
    displayName: 'Category';
    description: '';
  };
  attributes: {
    category_lists: Attribute.Relation<
      'sections.category',
      'oneToMany',
      'api::category-list.category-list'
    >;
    title: Attribute.String;
    highlight: Attribute.String;
    link: Attribute.String;
  };
}

export interface SectionsFooter extends Schema.Component {
  collectionName: 'components_sections_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    social_links: Attribute.Relation<
      'sections.footer',
      'oneToMany',
      'api::social-link.social-link'
    >;
    certification_lists: Attribute.Relation<
      'sections.footer',
      'oneToMany',
      'api::certification-list.certification-list'
    >;
    location_lists: Attribute.Relation<
      'sections.footer',
      'oneToMany',
      'api::location-list.location-list'
    >;
    brand: Attribute.Relation<
      'sections.footer',
      'oneToOne',
      'api::brand.brand'
    >;
  };
}

export interface SectionsNavBar extends Schema.Component {
  collectionName: 'components_sections_nav_bars';
  info: {
    displayName: 'NavBar';
    description: '';
  };
  attributes: {
    brand: Attribute.Relation<
      'sections.nav-bar',
      'oneToOne',
      'api::brand.brand'
    >;
    nav_item_lists: Attribute.Relation<
      'sections.nav-bar',
      'oneToMany',
      'api::nav-item-list.nav-item-list'
    >;
  };
}

export interface SectionsNavMenu extends Schema.Component {
  collectionName: 'components_sections_nav_menus';
  info: {
    displayName: 'Nav Menu';
  };
  attributes: {
    nav_menu_lists: Attribute.Relation<
      'sections.nav-menu',
      'oneToMany',
      'api::nav-menu-list.nav-menu-list'
    >;
  };
}

export interface SectionsNavigationMenu extends Schema.Component {
  collectionName: 'cs_navigation_menus';
  info: {
    displayName: 'Navigation Menu';
  };
  attributes: {};
}

export interface SectionsNews extends Schema.Component {
  collectionName: 'components_sections_news';
  info: {
    displayName: 'news';
    description: '';
  };
  attributes: {
    news_lists: Attribute.Relation<
      'sections.news',
      'oneToMany',
      'api::news-list.news-list'
    >;
    title: Attribute.String;
    highlight: Attribute.String;
    link: Attribute.String;
    image: Attribute.Media;
  };
}

export interface SectionsPartners extends Schema.Component {
  collectionName: 'components_sections_partners';
  info: {
    displayName: 'Partners';
    description: '';
  };
  attributes: {
    partner_lists: Attribute.Relation<
      'sections.partners',
      'oneToMany',
      'api::partner.partner'
    >;
    title: Attribute.String;
  };
}

export interface SectionsTestimonial extends Schema.Component {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonial';
    description: '';
  };
  attributes: {
    testimonials: Attribute.Relation<
      'sections.testimonial',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Attribute.String;
  };
}

export interface SectionsTitleParagraph extends Schema.Component {
  collectionName: 'components_sections_title_paragraphs';
  info: {
    displayName: 'Title Paragraph';
    description: '';
  };
  attributes: {
    paragraph_list: Attribute.Relation<
      'sections.title-paragraph',
      'oneToOne',
      'api::paragraph-list.paragraph-list'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.featured-boat-section': BlogFeaturedBoatSection;
      'cards.card-news': CardsCardNews;
      'cards.card': CardsCard;
      'contact.contact-section': ContactContactSection;
      'elements.blog-card': ElementsBlogCard;
      'elements.button': ElementsButton;
      'elements.image-card': ElementsImageCard;
      'elements.social-media-links': ElementsSocialMediaLinks;
      'find-a-dealer.interactive-map': FindADealerInteractiveMap;
      'global.anchor': GlobalAnchor;
      'global.banner': GlobalBanner;
      'global.button': GlobalButton;
      'global.call-to-action': GlobalCallToAction;
      'global.customers': GlobalCustomers;
      'global.hamburger': GlobalHamburger;
      'global.nav-bar-branch': GlobalNavBarBranch;
      'global.nav-bar-item': GlobalNavBarItem;
      'global.nav-menu': GlobalNavMenu;
      'global.our-partners': GlobalOurPartners;
      'global.partners-logo': GlobalPartnersLogo;
      'global.testemony': GlobalTestemony;
      'global.testimonials': GlobalTestimonials;
      'global.text-icon': GlobalTextIcon;
      'global.text': GlobalText;
      'global.title-and-paragraph': GlobalTitleAndParagraph;
      'homepage.products-section': HomepageProductsSection;
      'post.post-gallery': PostPostGallery;
      'post.posts': PostPosts;
      'sections.banner': SectionsBanner;
      'sections.call-to-action': SectionsCallToAction;
      'sections.category': SectionsCategory;
      'sections.footer': SectionsFooter;
      'sections.nav-bar': SectionsNavBar;
      'sections.nav-menu': SectionsNavMenu;
      'sections.navigation-menu': SectionsNavigationMenu;
      'sections.news': SectionsNews;
      'sections.partners': SectionsPartners;
      'sections.testimonial': SectionsTestimonial;
      'sections.title-paragraph': SectionsTitleParagraph;
    }
  }
}

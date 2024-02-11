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
    description: '';
  };
  attributes: {
    primary: Attribute.String;
    secondary: Attribute.String;
    image: Attribute.Media;
    button: Attribute.Component<'global.anchor'>;
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
  attributes: {};
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

export interface GlobalPersonImage extends Schema.Component {
  collectionName: 'components_global_person_images';
  info: {
    displayName: 'Person Image';
  };
  attributes: {
    url: Attribute.String;
    image: Attribute.Media;
  };
}

export interface GlobalSocial extends Schema.Component {
  collectionName: 'components_global_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    url: Attribute.String;
    socmed_list: Attribute.Relation<
      'global.social',
      'oneToOne',
      'api::socmed-list.socmed-list'
    >;
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

export interface SectionsAmbassador extends Schema.Component {
  collectionName: 'components_sections_ambassadors';
  info: {
    displayName: 'Ambassador';
  };
  attributes: {
    test: Attribute.String;
  };
}

export interface SectionsBanner extends Schema.Component {
  collectionName: 'components_sections_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    caption: Attribute.String;
    media: Attribute.Media;
    type: Attribute.String;
  };
}

export interface SectionsBlog extends Schema.Component {
  collectionName: 'components_sections_blogs';
  info: {
    displayName: 'Blog';
    description: '';
  };
  attributes: {
    featured_blog: Attribute.Relation<
      'sections.blog',
      'oneToOne',
      'api::blog.blog'
    >;
  };
}

export interface SectionsCallActionImage extends Schema.Component {
  collectionName: 'components_sections_call_action_images';
  info: {
    displayName: 'Call Action Image';
  };
  attributes: {
    test: Attribute.String;
  };
}

export interface SectionsCallToAction extends Schema.Component {
  collectionName: 'components_sections_call_to_actions';
  info: {
    displayName: 'Call To Action';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    content: Attribute.Text;
    button: Attribute.Component<'global.anchor', true>;
    bg: Attribute.String;
    cover: Attribute.Media;
  };
}

export interface SectionsCategory extends Schema.Component {
  collectionName: 'components_sections_categories';
  info: {
    displayName: 'Category';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    highlight: Attribute.String;
    link: Attribute.String;
    cards: Attribute.Component<'cards.card', true>;
  };
}

export interface SectionsFooter extends Schema.Component {
  collectionName: 'components_sections_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    location_lists: Attribute.Relation<
      'sections.footer',
      'oneToMany',
      'api::location-list.location-list'
    >;
    certifications: Attribute.Component<'global.anchor', true>;
    brand: Attribute.Component<'global.anchor'>;
    socials: Attribute.Component<'global.anchor', true>;
    social_links: Attribute.Component<'global.social', true>;
  };
}

export interface SectionsGallery extends Schema.Component {
  collectionName: 'components_sections_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    test: Attribute.String;
  };
}

export interface SectionsInfoOne extends Schema.Component {
  collectionName: 'components_sections_info_ones';
  info: {
    displayName: 'Info One';
  };
  attributes: {
    test: Attribute.String;
  };
}

export interface SectionsInfoTwo extends Schema.Component {
  collectionName: 'components_sections_info_twos';
  info: {
    displayName: 'Info Two';
  };
  attributes: {
    test: Attribute.String;
  };
}

export interface SectionsJobList extends Schema.Component {
  collectionName: 'components_sections_job_lists';
  info: {
    displayName: 'Job List';
  };
  attributes: {
    test: Attribute.String;
  };
}

export interface SectionsNavBar extends Schema.Component {
  collectionName: 'components_sections_nav_bars';
  info: {
    displayName: 'NavBar';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'global.anchor', true>;
    brand: Attribute.Component<'global.anchor'>;
    menu: Attribute.Component<'global.anchor'>;
  };
}

export interface SectionsNavMenu extends Schema.Component {
  collectionName: 'components_sections_nav_menus';
  info: {
    displayName: 'Nav Menu';
    description: '';
  };
  attributes: {
    cards: Attribute.Component<'cards.card', true>;
  };
}

export interface SectionsNavigationMenu extends Schema.Component {
  collectionName: 'components_sections_navigation_menus';
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
    title: Attribute.String;
    highlight: Attribute.String;
    link: Attribute.String;
    image: Attribute.Media;
    news_lists: Attribute.Relation<
      'sections.news',
      'oneToMany',
      'api::news-list.news-list'
    >;
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

export interface SectionsProductCategory extends Schema.Component {
  collectionName: 'components_sections_product_categories';
  info: {
    displayName: 'Product Category';
  };
  attributes: {};
}

export interface SectionsTeam extends Schema.Component {
  collectionName: 'components_sections_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    test: Attribute.String;
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
    title: Attribute.String;
    content: Attribute.Text;
    highlight: Attribute.String;
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
      'global.person-image': GlobalPersonImage;
      'global.social': GlobalSocial;
      'global.testemony': GlobalTestemony;
      'global.testimonials': GlobalTestimonials;
      'global.text-icon': GlobalTextIcon;
      'global.text': GlobalText;
      'homepage.products-section': HomepageProductsSection;
      'post.post-gallery': PostPostGallery;
      'post.posts': PostPosts;
      'sections.ambassador': SectionsAmbassador;
      'sections.banner': SectionsBanner;
      'sections.blog': SectionsBlog;
      'sections.call-action-image': SectionsCallActionImage;
      'sections.call-to-action': SectionsCallToAction;
      'sections.category': SectionsCategory;
      'sections.footer': SectionsFooter;
      'sections.gallery': SectionsGallery;
      'sections.info-one': SectionsInfoOne;
      'sections.info-two': SectionsInfoTwo;
      'sections.job-list': SectionsJobList;
      'sections.nav-bar': SectionsNavBar;
      'sections.nav-menu': SectionsNavMenu;
      'sections.navigation-menu': SectionsNavigationMenu;
      'sections.news': SectionsNews;
      'sections.partners': SectionsPartners;
      'sections.product-category': SectionsProductCategory;
      'sections.team': SectionsTeam;
      'sections.testimonial': SectionsTestimonial;
      'sections.title-paragraph': SectionsTitleParagraph;
    }
  }
}

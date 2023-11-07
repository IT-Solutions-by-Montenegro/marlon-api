import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {};
}

export interface GlobalBanner extends Schema.Component {
  collectionName: 'components_global_banners';
  info: {
    displayName: 'Banner';
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.button': ElementsButton;
      'global.banner': GlobalBanner;
      'global.call-to-action': GlobalCallToAction;
      'global.title-and-paragraph': GlobalTitleAndParagraph;
    }
  }
}

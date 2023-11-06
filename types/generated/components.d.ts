import type { Schema, Attribute } from '@strapi/strapi';

export interface FindADealerBanner extends Schema.Component {
  collectionName: 'components_find_a_dealer_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    img: Attribute.Media & Attribute.Required;
  };
}

export interface FindADealerCallToAction extends Schema.Component {
  collectionName: 'components_find_a_dealer_call_to_actions';
  info: {
    displayName: 'Call-to-Action';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button_title: Attribute.String;
    button_url: Attribute.String;
  };
}

export interface FindADealerFindADealer extends Schema.Component {
  collectionName: 'components_find_a_dealer_find_a_dealers';
  info: {
    displayName: 'Find a Dealer';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'find-a-dealer.banner'>;
    title_and_paragraph: Attribute.Component<'find-a-dealer.title-and-paragraph-section'>;
    interactive_map: Attribute.Component<'find-a-dealer.interactive-map', true>;
    call_to_action: Attribute.Component<'find-a-dealer.call-to-action'>;
  };
}

export interface FindADealerInteractiveMap extends Schema.Component {
  collectionName: 'components_find_a_dealer_interactive_maps';
  info: {
    displayName: 'interactive-map';
    icon: 'pin';
  };
  attributes: {
    dealer_name: Attribute.String;
    address: Attribute.Text;
    phone_no: Attribute.String;
  };
}

export interface FindADealerTitleAndParagraphSection extends Schema.Component {
  collectionName: 'components_find_a_dealer_title_and_paragraph_sections';
  info: {
    displayName: 'title-and-paragraph-section';
  };
  attributes: {
    title: Attribute.String;
    intro_paragraph: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'find-a-dealer.banner': FindADealerBanner;
      'find-a-dealer.call-to-action': FindADealerCallToAction;
      'find-a-dealer.find-a-dealer': FindADealerFindADealer;
      'find-a-dealer.interactive-map': FindADealerInteractiveMap;
      'find-a-dealer.title-and-paragraph-section': FindADealerTitleAndParagraphSection;
    }
  }
}

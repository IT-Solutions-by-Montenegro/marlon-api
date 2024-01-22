import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    post: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'api::post.post'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutUsAboutUs extends Schema.SingleType {
  collectionName: 'about_uses';
  info: {
    singularName: 'about-us';
    pluralName: 'about-uses';
    displayName: 'About Us';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::about-us.about-us', 'title'>;
    components: Attribute.DynamicZone<
      [
        'global.banner',
        'global.title-and-paragraph',
        'elements.image-card',
        'global.call-to-action',
        'global.nav-menu'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAmbassadorAmbassador extends Schema.CollectionType {
  collectionName: 'ambassadors';
  info: {
    singularName: 'ambassador';
    pluralName: 'ambassadors';
    displayName: 'Ambassador';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    product_lines: Attribute.Relation<
      'api::ambassador.ambassador',
      'oneToMany',
      'api::product-line.product-line'
    >;
    state: Attribute.String;
    Status: Attribute.Enumeration<['Active', 'Inactive']>;
    date_joined: Attribute.Date;
    first_name: Attribute.String;
    last_name: Attribute.String;
    biography: Attribute.Text;
    socialmedia_link: Attribute.Component<'elements.social-media-links', true>;
    category: Attribute.Enumeration<
      ['Fishing', 'Snowboarding', 'Jet Skiing', 'Hunting', 'Snowmobiling']
    >;
    img: Attribute.Media;
    photo_gallery: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ambassador.ambassador',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ambassador.ambassador',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBecomeADealerBecomeADealer extends Schema.SingleType {
  collectionName: 'become_a_dealers';
  info: {
    singularName: 'become-a-dealer';
    pluralName: 'become-a-dealers';
    displayName: 'Become a Dealer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::become-a-dealer.become-a-dealer', 'title'>;
    components: Attribute.DynamicZone<
      ['global.banner', 'global.title-and-paragraph']
    >;
    dealer_application: Attribute.Relation<
      'api::become-a-dealer.become-a-dealer',
      'oneToOne',
      'api::dealer-application.dealer-application'
    >;
    office_location: Attribute.Relation<
      'api::become-a-dealer.become-a-dealer',
      'oneToOne',
      'api::office-location.office-location'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::become-a-dealer.become-a-dealer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::become-a-dealer.become-a-dealer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBrandBrand extends Schema.CollectionType {
  collectionName: 'brands';
  info: {
    singularName: 'brand';
    pluralName: 'brands';
    displayName: 'Brand';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCareersPageCareersPage extends Schema.SingleType {
  collectionName: 'careers_pages';
  info: {
    singularName: 'careers-page';
    pluralName: 'careers-pages';
    displayName: 'Careers Page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::careers-page.careers-page', 'title'>;
    components: Attribute.DynamicZone<
      ['global.banner', 'global.title-and-paragraph']
    >;
    job_posting: Attribute.Relation<
      'api::careers-page.careers-page',
      'oneToOne',
      'api::job-posting.job-posting'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::careers-page.careers-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::careers-page.careers-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactFormContactForm extends Schema.CollectionType {
  collectionName: 'contact_forms';
  info: {
    singularName: 'contact-form';
    pluralName: 'contact-forms';
    displayName: 'Contact Form';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    first_name: Attribute.String;
    last_name: Attribute.String;
    phone_no: Attribute.String;
    email: Attribute.Email;
    location: Attribute.String;
    reason_of_contact: Attribute.Enumeration<
      ['General Inquiries', 'Become a Dealer', 'Warranty', 'Products']
    >;
    message: Attribute.Text;
    status: Attribute.Enumeration<['Read', 'Unread']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-form.contact-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-form.contact-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactPageContactPage extends Schema.SingleType {
  collectionName: 'contact_pages';
  info: {
    singularName: 'contact-page';
    pluralName: 'contact-pages';
    displayName: 'Contact Page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::contact-page.contact-page', 'title'>;
    components: Attribute.DynamicZone<['contact.contact-section']>;
    office_location: Attribute.Relation<
      'api::contact-page.contact-page',
      'oneToOne',
      'api::office-location.office-location'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-page.contact-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-page.contact-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDealerDealer extends Schema.CollectionType {
  collectionName: 'dealers';
  info: {
    singularName: 'dealer';
    pluralName: 'dealers';
    displayName: 'Dealer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    address: Attribute.Text;
    phone: Attribute.String;
    map_link: Attribute.String;
    latitude: Attribute.String;
    longitude: Attribute.String;
    postal_code: Attribute.String;
    product_lines: Attribute.Relation<
      'api::dealer.dealer',
      'oneToMany',
      'api::product-line.product-line'
    >;
    product_categories: Attribute.Relation<
      'api::dealer.dealer',
      'oneToMany',
      'api::product-category.product-category'
    >;
    brands: Attribute.Relation<
      'api::dealer.dealer',
      'oneToMany',
      'api::brand.brand'
    >;
    email: Attribute.Email;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dealer.dealer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dealer.dealer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDealerApplicationDealerApplication
  extends Schema.CollectionType {
  collectionName: 'dealer_applications';
  info: {
    singularName: 'dealer-application';
    pluralName: 'dealer-applications';
    displayName: 'Dealer Application';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    business_name: Attribute.String;
    first_name: Attribute.String;
    last_name: Attribute.String;
    full_name: Attribute.String;
    address1: Attribute.String;
    address2: Attribute.String;
    city: Attribute.String;
    province_state: Attribute.String;
    country: Attribute.String;
    postal_code: Attribute.String;
    phone: Attribute.String;
    alternative_no: Attribute.String;
    email: Attribute.Email;
    website_link: Attribute.String;
    status: Attribute.Enumeration<['Approved', 'Rejected', 'Pending']>;
    products: Attribute.Relation<
      'api::dealer-application.dealer-application',
      'manyToMany',
      'api::product.product'
    >;
    message: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dealer-application.dealer-application',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dealer-application.dealer-application',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDealerContactDealerContact extends Schema.CollectionType {
  collectionName: 'dealer_contacts';
  info: {
    singularName: 'dealer-contact';
    pluralName: 'dealer-contacts';
    displayName: 'Dealer Contact';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    dealer: Attribute.Relation<
      'api::dealer-contact.dealer-contact',
      'oneToOne',
      'api::dealer.dealer'
    >;
    first_name: Attribute.String;
    last_name: Attribute.String;
    phone: Attribute.String;
    email: Attribute.Email;
    message: Attribute.Text;
    status: Attribute.Enumeration<['New Lead', 'Contacted', 'Archived']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dealer-contact.dealer-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dealer-contact.dealer-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFindADealerFindADealer extends Schema.SingleType {
  collectionName: 'find_a_dealers';
  info: {
    singularName: 'find-a-dealer';
    pluralName: 'find-a-dealers';
    displayName: 'Find A Dealer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Attribute.Component<'global.banner'>;
    title_and_paragraph: Attribute.Component<'global.title-and-paragraph'>;
    interactive_map: Attribute.Component<'find-a-dealer.interactive-map', true>;
    call_to_action: Attribute.Component<'global.call-to-action'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::find-a-dealer.find-a-dealer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::find-a-dealer.find-a-dealer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: 'home_pages';
  info: {
    singularName: 'home-page';
    pluralName: 'home-pages';
    displayName: 'HomePage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::home-page.home-page', 'title'>;
    block: Attribute.DynamicZone<
      [
        'global.banner',
        'global.title-and-paragraph',
        'global.call-to-action',
        'homepage.products-section',
        'global.testimonials',
        'global.our-partners'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJobApplicantJobApplicant extends Schema.CollectionType {
  collectionName: 'job_applicants';
  info: {
    singularName: 'job-applicant';
    pluralName: 'job-applicants';
    displayName: 'Job Applicant';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    first_name: Attribute.String;
    last_name: Attribute.String;
    phone_no: Attribute.String;
    email: Attribute.Email;
    img: Attribute.Media;
    message: Attribute.Text;
    resume: Attribute.Media;
    status: Attribute.Enumeration<
      ['Pending', 'In Review', 'Shortlisted', 'Rejected', 'Hired']
    >;
    cover_letter: Attribute.Text;
    job_posting: Attribute.Relation<
      'api::job-applicant.job-applicant',
      'oneToOne',
      'api::job-posting.job-posting'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::job-applicant.job-applicant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::job-applicant.job-applicant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJobPostingJobPosting extends Schema.CollectionType {
  collectionName: 'job_postings';
  info: {
    singularName: 'job-posting';
    pluralName: 'job-postings';
    displayName: 'Job Posting';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    position: Attribute.String;
    duties_responsibilities: Attribute.RichText;
    date_posted: Attribute.Date;
    salary: Attribute.String;
    application_deadline: Attribute.Date;
    office_location: Attribute.Relation<
      'api::job-posting.job-posting',
      'oneToOne',
      'api::office-location.office-location'
    >;
    job_description: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::job-posting.job-posting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::job-posting.job-posting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOfficeLocationOfficeLocation extends Schema.CollectionType {
  collectionName: 'office_locations';
  info: {
    singularName: 'office-location';
    pluralName: 'office-locations';
    displayName: 'Office Location';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    operational_hours: Attribute.String;
    phone_no1: Attribute.String;
    phone_no2: Attribute.String;
    latitude: Attribute.String;
    longitude: Attribute.String;
    address: Attribute.String;
    status: Attribute.Enumeration<['Active', 'Inactive']>;
    email: Attribute.Email;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::office-location.office-location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::office-location.office-location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPostPost extends Schema.CollectionType {
  collectionName: 'posts';
  info: {
    singularName: 'post';
    pluralName: 'posts';
    displayName: 'Post';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    media: Attribute.Media;
    cover_img: Attribute.Media;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    slug: Attribute.String;
    post_tags: Attribute.Relation<
      'api::post.post',
      'manyToMany',
      'api::post-tag.post-tag'
    >;
    post_categories: Attribute.Relation<
      'api::post.post',
      'manyToMany',
      'api::post-category.post-category'
    >;
    product_tags: Attribute.Relation<
      'api::post.post',
      'manyToMany',
      'api::product-tag.product-tag'
    >;
    authors: Attribute.Relation<
      'api::post.post',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::post.post', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::post.post', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiPostCategoryPostCategory extends Schema.CollectionType {
  collectionName: 'post_categories';
  info: {
    singularName: 'post-category';
    pluralName: 'post-categories';
    displayName: 'Post Category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    posts: Attribute.Relation<
      'api::post-category.post-category',
      'manyToMany',
      'api::post.post'
    >;
    ref_name: Attribute.String;
    href: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::post-category.post-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::post-category.post-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPostPagePostPage extends Schema.SingleType {
  collectionName: 'post_pages';
  info: {
    singularName: 'post-page';
    pluralName: 'post-pages';
    displayName: 'Post Page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Attribute.Component<'global.banner'>;
    call_to_action: Attribute.Component<'global.call-to-action'>;
    post_gallery: Attribute.Component<'post.post-gallery'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::post-page.post-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::post-page.post-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPostTagPostTag extends Schema.CollectionType {
  collectionName: 'post_tags';
  info: {
    singularName: 'post-tag';
    pluralName: 'post-tags';
    displayName: 'Post Tag';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    posts: Attribute.Relation<
      'api::post-tag.post-tag',
      'manyToMany',
      'api::post.post'
    >;
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::post-tag.post-tag',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::post-tag.post-tag',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'Product';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    images: Attribute.Media;
    features: Attribute.RichText;
    part_number: Attribute.String;
    warranty_doc: Attribute.Media;
    brochure: Attribute.Media;
    description: Attribute.Text;
    brand: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'api::brand.brand'
    >;
    product_category: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'api::product-category.product-category'
    >;
    product_line: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'api::product-line.product-line'
    >;
    dealer_applications: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::dealer-application.dealer-application'
    >;
    warranty_registration: Attribute.Boolean & Attribute.DefaultTo<false>;
    specs: Attribute.RichText;
    related_products: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::product.product'
    >;
    product: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductCategoryProductCategory
  extends Schema.CollectionType {
  collectionName: 'product_categories';
  info: {
    singularName: 'product-category';
    pluralName: 'product-categories';
    displayName: 'Product Category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
    ref_name: Attribute.String;
    href: Attribute.String;
    is_active: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 1;
      }> &
      Attribute.DefaultTo<1>;
    seq: Attribute.Integer & Attribute.DefaultTo<0>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-category.product-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-category.product-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductLineProductLine extends Schema.CollectionType {
  collectionName: 'product_lines';
  info: {
    singularName: 'product-line';
    pluralName: 'product-lines';
    displayName: 'Product Line';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
    product_categories: Attribute.Relation<
      'api::product-line.product-line',
      'oneToMany',
      'api::product-category.product-category'
    >;
    tag: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-line.product-line',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-line.product-line',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductTagProductTag extends Schema.CollectionType {
  collectionName: 'product_tags';
  info: {
    singularName: 'product-tag';
    pluralName: 'product-tags';
    displayName: 'Product Tag';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    posts: Attribute.Relation<
      'api::product-tag.product-tag',
      'manyToMany',
      'api::post.post'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-tag.product-tag',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-tag.product-tag',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductsPageProductsPage extends Schema.SingleType {
  collectionName: 'products_pages';
  info: {
    singularName: 'products-page';
    pluralName: 'products-pages';
    displayName: 'Products Page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::products-page.products-page', 'title'>;
    office_location: Attribute.Relation<
      'api::products-page.products-page',
      'oneToOne',
      'api::office-location.office-location'
    >;
    components: Attribute.DynamicZone<
      [
        'global.nav-menu',
        'global.banner',
        'global.title-and-paragraph',
        'global.call-to-action'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::products-page.products-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::products-page.products-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSalesRepresentativeSalesRepresentative
  extends Schema.CollectionType {
  collectionName: 'sales_representatives';
  info: {
    singularName: 'sales-representative';
    pluralName: 'sales-representatives';
    displayName: 'Sales Representative';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    first_name: Attribute.String;
    last_name: Attribute.String;
    bio: Attribute.RichText;
    socialmedia_link: Attribute.Component<'elements.social-media-links', true>;
    img: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sales-representative.sales-representative',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sales-representative.sales-representative',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTeamTeam extends Schema.CollectionType {
  collectionName: 'teams';
  info: {
    singularName: 'team';
    pluralName: 'teams';
    displayName: 'Team';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    job_position: Attribute.String;
    office_location: Attribute.Relation<
      'api::team.team',
      'oneToOne',
      'api::office-location.office-location'
    >;
    biography: Attribute.RichText;
    status: Attribute.Enumeration<['Active', 'Inactive']>;
    first_name: Attribute.String;
    last_name: Attribute.String;
    socialmedia_link: Attribute.Component<'elements.social-media-links', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::team.team', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::team.team', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTeamAmbassadorPageTeamAmbassadorPage
  extends Schema.SingleType {
  collectionName: 'team_ambassador_pages';
  info: {
    singularName: 'team-ambassador-page';
    pluralName: 'team-ambassador-pages';
    displayName: 'Team Ambassador Page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<
      'api::team-ambassador-page.team-ambassador-page',
      'title'
    >;
    components: Attribute.DynamicZone<
      ['global.banner', 'global.title-and-paragraph', 'global.call-to-action']
    >;
    ambassadors: Attribute.Relation<
      'api::team-ambassador-page.team-ambassador-page',
      'oneToMany',
      'api::ambassador.ambassador'
    >;
    office_location: Attribute.Relation<
      'api::team-ambassador-page.team-ambassador-page',
      'oneToOne',
      'api::office-location.office-location'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::team-ambassador-page.team-ambassador-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::team-ambassador-page.team-ambassador-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestimonialTestimonial extends Schema.CollectionType {
  collectionName: 'testimonials';
  info: {
    singularName: 'testimonial';
    pluralName: 'testimonials';
    displayName: 'Testimonial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    customer_name: Attribute.String;
    customer_email: Attribute.String;
    address: Attribute.String;
    testimonial_message: Attribute.Text;
    img: Attribute.Media;
    isFeatured: Attribute.Boolean;
    rating: Attribute.Integer;
    date_submitted: Attribute.Date;
    product: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWarrantyPageWarrantyPage extends Schema.SingleType {
  collectionName: 'warranty_pages';
  info: {
    singularName: 'warranty-page';
    pluralName: 'warranty-pages';
    displayName: 'Warranty Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::warranty-page.warranty-page', 'title'>;
    components: Attribute.DynamicZone<
      ['global.banner', 'global.title-and-paragraph', 'global.partners-logo']
    >;
    office_location: Attribute.Relation<
      'api::warranty-page.warranty-page',
      'oneToOne',
      'api::office-location.office-location'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::warranty-page.warranty-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::warranty-page.warranty-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWarrantyProductWarrantyProduct
  extends Schema.CollectionType {
  collectionName: 'warranty_products';
  info: {
    singularName: 'warranty-product';
    pluralName: 'warranty-products';
    displayName: 'Warranty Product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    model_name: Attribute.String;
    serial_no: Attribute.String;
    dealer: Attribute.Relation<
      'api::warranty-product.warranty-product',
      'oneToOne',
      'api::dealer.dealer'
    >;
    location: Attribute.String;
    purchase_date: Attribute.Date;
    warranty_registration: Attribute.Relation<
      'api::warranty-product.warranty-product',
      'manyToOne',
      'api::warranty-registration.warranty-registration'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::warranty-product.warranty-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::warranty-product.warranty-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWarrantyRegistrationWarrantyRegistration
  extends Schema.CollectionType {
  collectionName: 'warranty_registrations';
  info: {
    singularName: 'warranty-registration';
    pluralName: 'warranty-registrations';
    displayName: 'Warranty Registration';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    first_name: Attribute.String;
    last_name: Attribute.String;
    address1: Attribute.String;
    address2: Attribute.String;
    city: Attribute.String;
    province_state: Attribute.String;
    country: Attribute.String;
    postal_code: Attribute.String;
    phone_no: Attribute.String;
    email: Attribute.Email;
    message: Attribute.Text;
    marlonRD: Attribute.Boolean & Attribute.DefaultTo<false>;
    warranty_products: Attribute.Relation<
      'api::warranty-registration.warranty-registration',
      'oneToMany',
      'api::warranty-product.warranty-product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::warranty-registration.warranty-registration',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::warranty-registration.warranty-registration',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about-us.about-us': ApiAboutUsAboutUs;
      'api::ambassador.ambassador': ApiAmbassadorAmbassador;
      'api::become-a-dealer.become-a-dealer': ApiBecomeADealerBecomeADealer;
      'api::brand.brand': ApiBrandBrand;
      'api::careers-page.careers-page': ApiCareersPageCareersPage;
      'api::contact-form.contact-form': ApiContactFormContactForm;
      'api::contact-page.contact-page': ApiContactPageContactPage;
      'api::dealer.dealer': ApiDealerDealer;
      'api::dealer-application.dealer-application': ApiDealerApplicationDealerApplication;
      'api::dealer-contact.dealer-contact': ApiDealerContactDealerContact;
      'api::find-a-dealer.find-a-dealer': ApiFindADealerFindADealer;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::job-applicant.job-applicant': ApiJobApplicantJobApplicant;
      'api::job-posting.job-posting': ApiJobPostingJobPosting;
      'api::office-location.office-location': ApiOfficeLocationOfficeLocation;
      'api::post.post': ApiPostPost;
      'api::post-category.post-category': ApiPostCategoryPostCategory;
      'api::post-page.post-page': ApiPostPagePostPage;
      'api::post-tag.post-tag': ApiPostTagPostTag;
      'api::product.product': ApiProductProduct;
      'api::product-category.product-category': ApiProductCategoryProductCategory;
      'api::product-line.product-line': ApiProductLineProductLine;
      'api::product-tag.product-tag': ApiProductTagProductTag;
      'api::products-page.products-page': ApiProductsPageProductsPage;
      'api::sales-representative.sales-representative': ApiSalesRepresentativeSalesRepresentative;
      'api::team.team': ApiTeamTeam;
      'api::team-ambassador-page.team-ambassador-page': ApiTeamAmbassadorPageTeamAmbassadorPage;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::warranty-page.warranty-page': ApiWarrantyPageWarrantyPage;
      'api::warranty-product.warranty-product': ApiWarrantyProductWarrantyProduct;
      'api::warranty-registration.warranty-registration': ApiWarrantyRegistrationWarrantyRegistration;
    }
  }
}

/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    pages: Page;
    posts: Post;
    categories: Category;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    settings: Settings;
    services: Service;
    contacts: Contact;
    header: Header;
    footer: Footer;
    barbers: Barbers;
    reviews: Reviews;
    schedule: Schedule;
    academyTeachers: AcademyTeachers;
    academyProgram: AcademyProgram;
    account: Account;
    socials: Social;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  enableAPIKey?: boolean | null;
  apiKey?: string | null;
  apiKeyIndex?: string | null;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  _key?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  publishedAt?: string | null;
  slug?: string | null;
  title: string;
  banner: {
    caption?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    caption_html?: string | null;
    media: string | Media;
    mobile?: string | Media | null;
    newLink?: {
      type?: ('page' | 'custom') | null;
      newTab?: boolean | null;
      pageUrl?: string | null;
      customUrl?: string | null;
      label?: string | null;
      secondaryLabel?: string | null;
      variant?: ('primary' | 'secondary' | 'none') | null;
    };
  };
  layout?:
    | (
        | {
            columns?:
              | {
                  size?:
                    | (
                        | 'oneThird'
                        | 'half'
                        | 'twoThirds'
                        | 'full'
                        | '1'
                        | '2'
                        | '3'
                        | '4'
                        | '5'
                        | '6'
                        | '7'
                        | '8'
                        | '9'
                        | '10'
                        | '11'
                        | '12'
                      )
                    | null;
                  blocks: (
                    | {
                        mobileHidden?: boolean | null;
                        media: string | Media;
                        id?: string | null;
                        blockName?: string | null;
                        blockType: 'mediaBlock';
                      }
                    | {
                        richText?: {
                          root: {
                            type: string;
                            children: {
                              type: string;
                              version: number;
                              [k: string]: unknown;
                            }[];
                            direction: ('ltr' | 'rtl') | null;
                            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                            indent: number;
                            version: number;
                          };
                          [k: string]: unknown;
                        } | null;
                        richText_html?: string | null;
                        id?: string | null;
                        blockName?: string | null;
                        blockType: 'richText';
                      }
                    | {
                        newLink?: {
                          type?: ('page' | 'custom') | null;
                          newTab?: boolean | null;
                          pageUrl?: string | null;
                          customUrl?: string | null;
                          label?: string | null;
                          secondaryLabel?: string | null;
                          variant?: ('primary' | 'secondary' | 'none') | null;
                        };
                        id?: string | null;
                        blockName?: string | null;
                        blockType: 'link';
                      }
                    | {
                        secondLabel?: string | null;
                        thirdLabel?: string | null;
                        list?:
                          | {
                              title?: string | null;
                              price?: string | null;
                              duration?: string | null;
                              tabsRichText?: {
                                root: {
                                  type: string;
                                  children: {
                                    type: string;
                                    version: number;
                                    [k: string]: unknown;
                                  }[];
                                  direction: ('ltr' | 'rtl') | null;
                                  format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                                  indent: number;
                                  version: number;
                                };
                                [k: string]: unknown;
                              } | null;
                              tabsRichText_html?: string | null;
                              image?: string | Media | null;
                              id?: string | null;
                            }[]
                          | null;
                        id?: string | null;
                        blockName?: string | null;
                        blockType: 'tabs';
                      }
                    | {
                        list?:
                          | {
                              title?: string | null;
                              listRichText?: {
                                root: {
                                  type: string;
                                  children: {
                                    type: string;
                                    version: number;
                                    [k: string]: unknown;
                                  }[];
                                  direction: ('ltr' | 'rtl') | null;
                                  format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                                  indent: number;
                                  version: number;
                                };
                                [k: string]: unknown;
                              } | null;
                              listRichText_html?: string | null;
                              id?: string | null;
                            }[]
                          | null;
                        id?: string | null;
                        blockName?: string | null;
                        blockType: 'list';
                      }
                    | {
                        title?: string | null;
                        list?:
                          | {
                              title?: string | null;
                              tableRichText?: {
                                root: {
                                  type: string;
                                  children: {
                                    type: string;
                                    version: number;
                                    [k: string]: unknown;
                                  }[];
                                  direction: ('ltr' | 'rtl') | null;
                                  format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                                  indent: number;
                                  version: number;
                                };
                                [k: string]: unknown;
                              } | null;
                              tableRichText_html?: string | null;
                              image?: string | Media | null;
                              id?: string | null;
                            }[]
                          | null;
                        id?: string | null;
                        blockName?: string | null;
                        blockType: 'tiles';
                      }
                  )[];
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            mobileHidden?: boolean | null;
            media: string | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaBlock';
          }
        | {
            archiveRichText?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            archiveRichText_html?: string | null;
            populateBy?: ('collection' | 'selection') | null;
            relationTo?: ('posts' | 'projects') | null;
            categories?: (string | Category)[] | null;
            limit?: number | null;
            selectedDocs?:
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }[]
              | null;
            populatedDocs?:
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }[]
              | null;
            populatedDocsTotal?: number | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'archive';
          }
        | {
            general?: {
              title?: string | null;
              secondColumnLabel?: string | null;
              thirdColumnLabel?: string | null;
            };
            list?:
              | {
                  table?: {
                    title?: string | null;
                    rows?:
                      | {
                          row?: {
                            title?: string | null;
                            price?: string | null;
                            duration?: string | null;
                            description?: string | null;
                          };
                          id?: string | null;
                        }[]
                      | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'tables';
          }
        | {
            newLink?: {
              type?: ('page' | 'custom') | null;
              newTab?: boolean | null;
              pageUrl?: string | null;
              customUrl?: string | null;
              label?: string | null;
              secondaryLabel?: string | null;
              variant?: ('primary' | 'secondary' | 'none') | null;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'link';
          }
        | {
            secondLabel?: string | null;
            thirdLabel?: string | null;
            list?:
              | {
                  title?: string | null;
                  price?: string | null;
                  duration?: string | null;
                  tabsRichText?: {
                    root: {
                      type: string;
                      children: {
                        type: string;
                        version: number;
                        [k: string]: unknown;
                      }[];
                      direction: ('ltr' | 'rtl') | null;
                      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                      indent: number;
                      version: number;
                    };
                    [k: string]: unknown;
                  } | null;
                  tabsRichText_html?: string | null;
                  image?: string | Media | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'tabs';
          }
        | {
            list?:
              | {
                  title?: string | null;
                  listRichText?: {
                    root: {
                      type: string;
                      children: {
                        type: string;
                        version: number;
                        [k: string]: unknown;
                      }[];
                      direction: ('ltr' | 'rtl') | null;
                      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                      indent: number;
                      version: number;
                    };
                    [k: string]: unknown;
                  } | null;
                  listRichText_html?: string | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'list';
          }
        | {
            title?: string | null;
            list?:
              | {
                  title?: string | null;
                  tableRichText?: {
                    root: {
                      type: string;
                      children: {
                        type: string;
                        version: number;
                        [k: string]: unknown;
                      }[];
                      direction: ('ltr' | 'rtl') | null;
                      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                      indent: number;
                      version: number;
                    };
                    [k: string]: unknown;
                  } | null;
                  tableRichText_html?: string | null;
                  image?: string | Media | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'tiles';
          }
      )[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  postImage: string | Media;
  title: string;
  categories?: (string | Category)[] | null;
  publishedAt?: string | null;
  authors?: (string | User)[] | null;
  populatedAuthors?:
    | {
        id?: string | null;
        name?: string | null;
      }[]
    | null;
  layout: (
    | {
        columns?:
          | {
              size?:
                | (
                    | 'oneThird'
                    | 'half'
                    | 'twoThirds'
                    | 'full'
                    | '1'
                    | '2'
                    | '3'
                    | '4'
                    | '5'
                    | '6'
                    | '7'
                    | '8'
                    | '9'
                    | '10'
                    | '11'
                    | '12'
                  )
                | null;
              blocks: (
                | {
                    mobileHidden?: boolean | null;
                    media: string | Media;
                    id?: string | null;
                    blockName?: string | null;
                    blockType: 'mediaBlock';
                  }
                | {
                    richText?: {
                      root: {
                        type: string;
                        children: {
                          type: string;
                          version: number;
                          [k: string]: unknown;
                        }[];
                        direction: ('ltr' | 'rtl') | null;
                        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                        indent: number;
                        version: number;
                      };
                      [k: string]: unknown;
                    } | null;
                    richText_html?: string | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType: 'richText';
                  }
                | {
                    newLink?: {
                      type?: ('page' | 'custom') | null;
                      newTab?: boolean | null;
                      pageUrl?: string | null;
                      customUrl?: string | null;
                      label?: string | null;
                      secondaryLabel?: string | null;
                      variant?: ('primary' | 'secondary' | 'none') | null;
                    };
                    id?: string | null;
                    blockName?: string | null;
                    blockType: 'link';
                  }
                | {
                    secondLabel?: string | null;
                    thirdLabel?: string | null;
                    list?:
                      | {
                          title?: string | null;
                          price?: string | null;
                          duration?: string | null;
                          tabsRichText?: {
                            root: {
                              type: string;
                              children: {
                                type: string;
                                version: number;
                                [k: string]: unknown;
                              }[];
                              direction: ('ltr' | 'rtl') | null;
                              format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                              indent: number;
                              version: number;
                            };
                            [k: string]: unknown;
                          } | null;
                          tabsRichText_html?: string | null;
                          image?: string | Media | null;
                          id?: string | null;
                        }[]
                      | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType: 'tabs';
                  }
                | {
                    list?:
                      | {
                          title?: string | null;
                          listRichText?: {
                            root: {
                              type: string;
                              children: {
                                type: string;
                                version: number;
                                [k: string]: unknown;
                              }[];
                              direction: ('ltr' | 'rtl') | null;
                              format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                              indent: number;
                              version: number;
                            };
                            [k: string]: unknown;
                          } | null;
                          listRichText_html?: string | null;
                          id?: string | null;
                        }[]
                      | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType: 'list';
                  }
                | {
                    title?: string | null;
                    list?:
                      | {
                          title?: string | null;
                          tableRichText?: {
                            root: {
                              type: string;
                              children: {
                                type: string;
                                version: number;
                                [k: string]: unknown;
                              }[];
                              direction: ('ltr' | 'rtl') | null;
                              format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                              indent: number;
                              version: number;
                            };
                            [k: string]: unknown;
                          } | null;
                          tableRichText_html?: string | null;
                          image?: string | Media | null;
                          id?: string | null;
                        }[]
                      | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType: 'tiles';
                  }
              )[];
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        mobileHidden?: boolean | null;
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        archiveRichText?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        archiveRichText_html?: string | null;
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: ('posts' | 'projects') | null;
        categories?: (string | Category)[] | null;
        limit?: number | null;
        selectedDocs?:
          | {
              relationTo: 'posts';
              value: string | Post;
            }[]
          | null;
        populatedDocs?:
          | {
              relationTo: 'posts';
              value: string | Post;
            }[]
          | null;
        populatedDocsTotal?: number | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archive';
      }
  )[];
  relatedPosts?: (string | Post)[] | null;
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Settings {
  id: string;
  postsPage?: (string | null) | Page;
  logo?: string | Media | null;
  bgLogo?: string | Media | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services".
 */
export interface Service {
  id: string;
  title?: string | null;
  secondaryTitle?: string | null;
  thirdTitle?: string | null;
  services: {
    title: string;
    description: string;
    image: string | Media;
    newLink?: {
      type?: ('page' | 'custom') | null;
      newTab?: boolean | null;
      pageUrl?: string | null;
      customUrl?: string | null;
      label?: string | null;
      secondaryLabel?: string | null;
      variant?: ('primary' | 'secondary' | 'none') | null;
    };
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contacts".
 */
export interface Contact {
  id: string;
  general?: {
    title?: string | null;
    secondaryTitle?: string | null;
    newLink?: {
      type?: ('page' | 'custom') | null;
      newTab?: boolean | null;
      pageUrl?: string | null;
      customUrl?: string | null;
      label?: string | null;
      secondaryLabel?: string | null;
      variant?: ('primary' | 'secondary' | 'none') | null;
    };
    marker?: string | Media | null;
  };
  emailGroup?: {
    emailTitle?: string | null;
    emails?:
      | {
          newLink?: {
            type?: ('page' | 'custom') | null;
            newTab?: boolean | null;
            pageUrl?: string | null;
            customUrl?: string | null;
            label?: string | null;
            secondaryLabel?: string | null;
            variant?: ('primary' | 'secondary' | 'none') | null;
          };
          id?: string | null;
        }[]
      | null;
  };
  addressGroup: {
    addresses: {
      location: string;
      label: string;
      image?: string | Media | null;
      phonet?: string | null;
      links: {
        newLink?: {
          type?: ('page' | 'custom') | null;
          newTab?: boolean | null;
          pageUrl?: string | null;
          customUrl?: string | null;
          label?: string | null;
          secondaryLabel?: string | null;
          variant?: ('primary' | 'secondary' | 'none') | null;
        };
        id?: string | null;
      }[];
      id?: string | null;
    }[];
  };
  socialsGroup?: {
    socials?:
      | {
          name: 'default' | 'instagram' | 'telegram' | 'facebook';
          newLink?: {
            type?: ('page' | 'custom') | null;
            newTab?: boolean | null;
            pageUrl?: string | null;
            customUrl?: string | null;
            label?: string | null;
            secondaryLabel?: string | null;
            variant?: ('primary' | 'secondary' | 'none') | null;
          };
          id?: string | null;
        }[]
      | null;
  };
  workingHours?: {
    title?: string | null;
    text?: string | null;
  };
  copyright: string;
  phoneNumber: {
    title?: string | null;
    label?: string | null;
    url: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  title?: string | null;
  navItems: {
    newLink?: {
      type?: ('page' | 'custom') | null;
      newTab?: boolean | null;
      pageUrl?: string | null;
      customUrl?: string | null;
      label?: string | null;
      secondaryLabel?: string | null;
      variant?: ('primary' | 'secondary' | 'none') | null;
    };
    hasSubItems?: boolean | null;
    subNavItems?:
      | {
          newLink?: {
            type?: ('page' | 'custom') | null;
            newTab?: boolean | null;
            pageUrl?: string | null;
            customUrl?: string | null;
            label?: string | null;
            secondaryLabel?: string | null;
            variant?: ('primary' | 'secondary' | 'none') | null;
          };
          id?: string | null;
        }[]
      | null;
    id?: string | null;
  }[];
  newLink?: {
    type?: ('page' | 'custom') | null;
    newTab?: boolean | null;
    pageUrl?: string | null;
    customUrl?: string | null;
    label?: string | null;
    secondaryLabel?: string | null;
    variant?: ('primary' | 'secondary' | 'none') | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  title?: string | null;
  sections?:
    | {
        label?: string | null;
        links?:
          | {
              newLink?: {
                type?: ('page' | 'custom') | null;
                newTab?: boolean | null;
                pageUrl?: string | null;
                customUrl?: string | null;
                label?: string | null;
                secondaryLabel?: string | null;
                variant?: ('primary' | 'secondary' | 'none') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "barbers".
 */
export interface Barbers {
  id: string;
  title: string;
  buttonText: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reviews".
 */
export interface Reviews {
  id: string;
  title?: string | null;
  bg?: string | Media | null;
  reviews?:
    | {
        name?: string | null;
        text?: string | null;
        link?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "schedule".
 */
export interface Schedule {
  id: string;
  title?: string | null;
  steps?:
    | {
        title?: string | null;
        secondaryTitle?: string | null;
        id?: string | null;
      }[]
    | null;
  successSubtitle?: string | null;
  successText?: string | null;
  successGreeting?: string | null;
  nextButtonText?: string | null;
  prevButtonText?: string | null;
  submitButtonText?: string | null;
  master?: string | Media | null;
  service?: string | Media | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "academyTeachers".
 */
export interface AcademyTeachers {
  id: string;
  title: string;
  teachers: {
    image?: string | Media | null;
    name?: string | null;
    description?: string | null;
    text?: string | null;
    socials?: {
      socials?:
        | {
            name: 'default' | 'instagram' | 'telegram' | 'facebook';
            newLink?: {
              type?: ('page' | 'custom') | null;
              newTab?: boolean | null;
              pageUrl?: string | null;
              customUrl?: string | null;
              label?: string | null;
              secondaryLabel?: string | null;
              variant?: ('primary' | 'secondary' | 'none') | null;
            };
            id?: string | null;
          }[]
        | null;
    };
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "academyProgram".
 */
export interface AcademyProgram {
  id: string;
  title: string;
  description?: string | null;
  image?: string | Media | null;
  program: {
    number?: string | null;
    description?: string | null;
    id?: string | null;
  }[];
  helperText?: string | null;
  newLink?: {
    type?: ('page' | 'custom') | null;
    newTab?: boolean | null;
    pageUrl?: string | null;
    customUrl?: string | null;
    label?: string | null;
    secondaryLabel?: string | null;
    variant?: ('primary' | 'secondary' | 'none') | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "account".
 */
export interface Account {
  id: string;
  sidebar?: {
    title?: string | null;
    links?:
      | {
          url: string;
          label: string;
          description?: string | null;
          id?: string | null;
        }[]
      | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "socials".
 */
export interface Social {
  id: string;
  socials?:
    | {
        name: 'default' | 'instagram' | 'telegram' | 'facebook';
        newLink?: {
          type?: ('page' | 'custom') | null;
          newTab?: boolean | null;
          pageUrl?: string | null;
          customUrl?: string | null;
          label?: string | null;
          secondaryLabel?: string | null;
          variant?: ('primary' | 'secondary' | 'none') | null;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
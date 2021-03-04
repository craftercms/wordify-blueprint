/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// language=GraphQL
const commonFragments = `
    fragment PostComponentFragment on component_post {
        ...ContentItemFieldsFragment
        slug: localId(transform: "storeUrlToRenderUrl")
        pageTitle_s
        pageDescription_s
        blurb_t
        headline_s
        mainImage_s
        content_o {
            item {
                key
                component {
                    ...on component_rich_text {
                        ...RichTextComponentFragment
                    }
                    ...on component_image {
                        ...ImageComponentFragment
                    }
                    ...on component_responsive_columns {
                        ...ResponsiveColumnsComponentFragment
                    }
                }
            }
        }
        authorBio_o {
            item {
                key
                component {
                    ...BioComponentFragment
                }
            }
        }
        categories_o {
            item {
                key(filter: {or: $categoriesFilter})
                value_smv
            }
        }
        tags_o {
            item {
                value_smv
                key(filter: {or: $tagsFilter})
            }
        }
    }

    fragment ContentItemFieldsFragment on ContentItem {
        guid: objectId
        path: localId(filter: {not: [{equals: $exclude}]})
        contentTypeId: content__type
        dateCreated: createdDate_dt
        dateModified: lastModifiedDate_dt
        label: internal__name
    }

    fragment BioComponentFragment on component_bio {
        guid: objectId
        contentTypeId: content__type
        label: internal__name
        path: localId
        bio_t
        name_s
        profilePic_s
        linkButtonText_s
        linkButtonUrl_s
        showLinkButton_b
        facebookLink_s
        twitterLink_s
        instagramLink_s
        youTubeLink_s
    }

    fragment RichTextComponentFragment on component_rich_text {
        ...ContentItemFieldsFragment
        content_html: content_html_raw
    }

    fragment ImageComponentFragment on component_image {
        ...ContentItemFieldsFragment
        image_s
        alternativeText_s
    }

    fragment ResponsiveColumnsComponentFragment on component_responsive_columns {
        ...ContentItemFieldsFragment
        columns_o {
            item {
                columnSize_s
                content_o {
                    item {
                        key
                        component {
                            ...on component_rich_text {
                                ...RichTextComponentFragment
                            }
                            ...on component_image {
                                ...ImageComponentFragment
                            }
                        }
                    }
                }
            }
        }
    }
`

// language=GraphQL
const main = `
    ${commonFragments}

    fragment HomepageFragment on page_entry  {
        pageTitle_s
        pageDescription_s
        bios_o {
            item {
                key
                component {
                    ...BioComponentFragment
                }
            }
        }
        slider_o {
            item {
                key
                component {
                    ...ContentItemFieldsFragment
                    ...on component_slider {
                        ...SliderComponentFragment
                    }
                }
            }
        }
    }

    fragment AboutPageFragment on page_about {
        pageTitle_s
        pageDescription_s
        headline_s
        bios_o {
            item {
                key
                component {
                    ...BioComponentFragment
                }
            }
        }
        content_o {
            item {
                key
                component {
                    ...on component_rich_text {
                        ...RichTextComponentFragment
                    }
                    ...on component_image {
                        ...ImageComponentFragment
                    }
                    ...on component_responsive_columns {
                        ...ResponsiveColumnsComponentFragment
                    }
                }
            }
        }
    }

    fragment ContactPageFragment on page_contact {
        pageTitle_s
        pageDescription_s
        message_t
        headline_s
    }

    fragment CategoryPageFragment on page_category {
        pageTitle_s
        pageDescription_s
    }

    fragment SliderComponentFragment on component_slider {
        ...ContentItemFieldsFragment
        posts_o {
            item {
                key
                component {
                    ...ContentItemFieldsFragment
                    slug: localId(transform: "storeUrlToRenderUrl")
                    pageTitle_s
                    pageDescription_s
                    blurb_t
                    headline_s
                    mainImage_s
                    authorBio_o {
                        item {
                            key,
                            component {
                                ...BioComponentFragment
                            }
                        }
                    }
                }
            }
        }
    }

    query byUrlQuery(
        $url: String
        $skipContentType: Boolean = true
        $includePosts: Boolean = true
        $postsLimit: Int = 8
        $postsOffset: Int = 0
        $exclude: String = ""
        $categoriesFilter: [TextFilters!] = []
        $tagsFilter: [TextFilters!] = []
    ) {
        content: contentItems {
            total
            items {
                ...ContentItemFieldsFragment
                url: localId(
                    transform: "storeUrlToRenderUrl",
                    filter:{ regex: $url }
                )
                content__type(
                    filter:{
                        regex: ".*(bio|post|entry|category|contact|about|search).*"
                    }
                ) @skip (if: $skipContentType)
                ...on page_entry {
                    ...HomepageFragment
                }
                ...on page_about {
                    ...AboutPageFragment
                }
                ...on page_contact {
                    ...ContactPageFragment
                }
                ...on page_category {
                    ...CategoryPageFragment
                }
                ...on component_post {
                    ...PostComponentFragment
                }
            }
        }
        levelDescriptors: component_level__descriptor {
            items {
                ...ContentItemFieldsFragment
                siteTitle_s
                file__name
                websiteShortname_s
                socialLinks_o {
                    item {
                        socialNetwork_s
                        label_s
                        url_s
                    }
                }
            }
        }
        posts: component_post(
            limit: $postsLimit,
            offset: $postsOffset,
            sortOrder: DESC,
            sortBy: "lastModifiedDate_dt"
        ) @include(if: $includePosts) {
            total
            items {
                ...PostComponentFragment
            }
        }
    }
`;

//language=GraphQL
export const postsQuery = `
    ${commonFragments}

    query postsQuery(
        $postsLimit: Int = 8
        $postsOffset: Int = 0
        $exclude: String = ""
        $categoriesFilter: [TextFilters!] = []
        $tagsFilter: [TextFilters!] = []
    ) {
        posts: component_post(
            limit: $postsLimit,
            offset: $postsOffset,
            sortOrder: DESC,
            sortBy: "lastModifiedDate_dt"
        ) {
            total
            items {
                ...PostComponentFragment
            }
        }
    }
`;

export default main;

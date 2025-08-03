import type { CollectionConfig } from 'payload'

import { slugField } from '@/fields/slug'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Websites: CollectionConfig<'websites'> = {
  slug: 'websites',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'websites'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],

    components: {
      edit: {
        //editMenuItems: ['@/components/Dashboard/GenerateWebsite#GenerateWebsite'],
        beforeDocumentControls: ['@/components/Dashboard/GenerateWebsiteServer#GenerateWebsite'],
        //SaveButton: '@/components/Dashboard/GenerateWebsite#GenerateWebsite',
        // PublishButton: '@/components/Dashboard/GenerateWebsite#GenerateWebsite',
        // PreviewButton: '@/components/Dashboard/EditWebsite#EditWebsite',
      },

      // ['@/components/Dashboard/GenerateWebsite#GenerateWebsite'],
      // elements: {
      //   beforeDocumentControls: ['src/components/BeforeDashboard/SeedButton#SeedButton'],
      // },
      // edit: {
      //   Button: 'src/components/BeforeDashboard/SeedButton#SeedButton',
      // },
    },

    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'websites',
          req,
          edit: false,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'websites',
        req,
        edit: true,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'general',
          label: 'General configuration',
          fields: [
            {
              label: 'Type of website',
              type: 'radio',
              options: ['single page', 'multi page'],
              //TODO: for now only keep single page, later add multi page support (the underlying tech can be reused)
              name: 'isSinglePage',
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
            {
              name: 'puck_config',
              label: 'Puck',
              type: 'code',
              admin: {
                language: 'json',
                readOnly: true,
                editorOptions: {
                  wordWrap: 'on',
                  wrappingStrategy: 'advanced',
                  renderWhitespace: 'boundary',
                  tabSize: 20,
                  lineNumbers: 'off',
                  fontSize: 14,
                  minimap: { enabled: false },
                  formatOnPaste: true,
                  formatOnType: true,
                  folding: true,
                  smoothScrolling: true,
                  padding: { top: 20, bottom: 20 },
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
    afterRefresh: [() => console.log('PAGE REFRESH')],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}

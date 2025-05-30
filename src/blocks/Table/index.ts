import type { Block } from 'payload'

export const Tables: Block = {
  slug: 'tables',
  labels: {
    singular: 'Table',
    plural: 'Tables',
  },
  fields: [
    {
      name: 'general',
      type: 'group',
      label: 'General',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'secondColumnLabel',
          type: 'text',
          label: 'Second Column Label',
        },
        {
          name: 'thirdColumnLabel',
          type: 'text',
          label: 'Third Column Label',
        },
      ],
    },
    {
      label: 'Tables',
      name: 'list',
      type: 'array',
      fields: [
        {
          name: 'table',
          type: 'group',
          label: 'Table',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Title',
            },
            {
              name: 'rows',
              type: 'array',
              labels: {
                singular: 'Row',
                plural: 'Rows',
              },
              fields: [
                {
                  name: 'row',
                  type: 'group',
                  label: 'Row',
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'title',
                          type: 'text',
                          label: 'Title',
                          admin: {
                            width: '33%',
                          },
                        },
                        {
                          name: 'price',
                          type: 'text',
                          label: 'Price',
                          admin: {
                            width: '33%',
                          },
                        },
                        {
                          name: 'duration',
                          type: 'text',
                          label: 'Duration',
                          admin: {
                            width: '33%',
                          },
                        },
                      ],
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'description',
                          type: 'text',
                          label: 'Description',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

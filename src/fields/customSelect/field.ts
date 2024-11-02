import type { CustomComponent, Field } from 'payload'
import ServerSelectComponent from '@/fields/customSelect/server'

export const newLink: Field = {
  label: 'Link',
  name: 'newLink',
  type: 'group',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'type',
          type: 'radio',
          options: [
            {
              label: 'Page link',
              value: 'page',
            },
            {
              label: 'Custom URL',
              value: 'custom',
            },
          ],
          defaultValue: 'page',
          admin: {
            layout: 'horizontal',
            width: '50%',
          },
        },
        {
          name: 'newTab',
          label: 'Open in new tab',
          type: 'checkbox',
          admin: {
            width: '50%',
            style: {
              alignSelf: 'flex-end',
            },
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'pageUrl',
          label: false,
          type: 'text',
          admin: {
            width: '25%',
            condition: (_, siblingData) => siblingData?.type === 'page',
            components: {
              Field: ServerSelectComponent as CustomComponent,
            },
          },
        },
        {
          name: 'customUrl',
          label: 'Custom URL',
          type: 'text',
          required: true,
          admin: {
            width: '25%',
            condition: (_, siblingData) => siblingData?.type === 'custom',
          },
        },
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          defaultValue: 'Default Label',
          admin: {
            width: '25%',
          },
        },
        {
          name: 'secondaryLabel',
          label: 'Secondary Label',
          type: 'text',
          admin: {
            width: '25%',
          },
        },
        {
          name: 'variant',
          type: 'select',
          defaultValue: 'none',
          label: 'Variant',
          admin: {
            width: '25%',
          },
          options: [
            {
              label: 'Primary',
              value: 'primary',
            },
            {
              label: 'Secondary',
              value: 'secondary',
            },
            {
              label: 'None',
              value: 'none',
            },
          ],
        },
      ],
    },
  ],
}

export default newLink

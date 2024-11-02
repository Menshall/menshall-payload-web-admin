import type { Block, Field } from 'payload'

import { LinkBlock } from '../Link'
import { List } from '../List'
import { MediaBlock } from '../MediaBlock'
import { RichTextBlock } from '../RichText'
import { Tabs } from '../Tabs'
import { Tiles } from '../Tiles'

const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        value: 'oneThird',
        label: 'One Third',
      },
      {
        value: 'half',
        label: 'Half',
      },
      {
        value: 'twoThirds',
        label: 'Two Thirds',
      },
      {
        value: 'full',
        label: 'Full',
      },
      {
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
      {
        value: '3',
        label: '3',
      },
      {
        value: '4',
        label: '4',
      },
      {
        value: '5',
        label: '5',
      },
      {
        value: '6',
        label: '6',
      },
      {
        value: '7',
        label: '7',
      },
      {
        value: '8',
        label: '8',
      },
      {
        value: '9',
        label: '9',
      },
      {
        value: '10',
        label: '10',
      },
      {
        value: '11',
        label: '11',
      },
      {
        value: '12',
        label: '12',
      },
    ],
  },
  {
    name: 'blocks',
    type: 'blocks',
    required: true,
    blocks: [MediaBlock, RichTextBlock, LinkBlock, Tabs, List, Tiles],
  },
]

export const Content: Block = {
  slug: 'content',
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: columnFields,
    },
  ],
}

import type { Field } from 'payload'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import deepMerge from '@/utilities/deepMerge'

type RichTextOverrides = (options: { label: string; name: string }) => Array<Field>

const richText: RichTextOverrides = (options) => {
  const generatedLinkGroup: Field = {
    label: 'Rich Text',
    name: 'richtext',
    type: 'richText',
    editor: lexicalEditor({
      features: ({ defaultFeatures }) => [
        ...defaultFeatures,
        // The HTMLConverter Feature is the feature which manages the HTML serializers. If you do not pass any arguments to it, it will use the default serializers.
        HTMLConverterFeature({}),
      ],
    }),
  }

  return [
    deepMerge(generatedLinkGroup, options),
    lexicalHTML(options.name, {
      name: `${options.name}_html`,
      storeInDB: true,
    }),
  ]
}

export default richText

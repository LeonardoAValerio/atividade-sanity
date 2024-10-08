import {defineField, defineType} from 'sanity'

export const arthurType = defineType({
  name: 'Gabryel',
  title: 'pessoa',
  type: 'document',
  fields: [
    defineField({
      name: 'Name',
      type: 'string',
    }),

    defineField({
        name: 'DataDeNascimento',
        type: 'date',
      }),
        defineField({
            name: 'Url do github',
            type: 'url',
        }),
  ],
})
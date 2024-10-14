import {defineField, defineType} from 'sanity'

export const joaoType = defineType({
    name: 'movie',
    title: 'Movie',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        type: 'string',
      }),
      defineField({
          name: 'year',
          type: 'date',
      }),
    defineField({
        name: 'image',
        type: 'image',
    }),
      defineField({
          name: 'sinopse',
          type: 'string',
      })
    ],
  })
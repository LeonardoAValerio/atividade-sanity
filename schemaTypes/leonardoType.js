import {defineField, defineType} from 'sanity'

export const bookType = defineType({
  name: 'book',
  title: 'Book',
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
    })
  ],
})
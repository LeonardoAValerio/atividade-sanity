import {defineField, defineType} from 'sanity'

export const arthurType = defineType({
  name: 'arthur',
  title: 'pessoa',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),

    defineField({
        name: 'idade',
        type: 'number',
      }),

      defineField({
        name: 'sobrenome',
        type: 'string',
      }),

      defineField({
        name: 'cidade',
        type: 'string',
      }),
  ],
})
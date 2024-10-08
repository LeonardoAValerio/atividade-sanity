import {defineField, defineType} from 'sanity'

export const karenType = defineType({
  name: 'Karen',
  title: 'Documentos',
  type: 'document',
  fields: [
    defineField({
      name: 'Name',
      type: 'string',
    }),

    defineField({
        name: 'Sobrenome',
        type: 'string',
      }),

      defineField({
        name: 'Dt_Nascimento',
        type: 'date',
      }),

      defineField({
        name: 'Foto',
        type: 'image',
      }),
  ],
})
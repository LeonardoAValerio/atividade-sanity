import {defineField, defineType} from 'sanity'

export const daviType = defineType({
  name: 'Davi',
  title: 'aluno',
  type: 'document',
  fields: [
    defineField({
      name: 'Nome',
      type: 'string',
    }),
    defineField({
        name: 'Sobrenome',
        type: 'string',
      }),
    defineField({
        name: 'RA',
        type: 'string',
      }),
    defineField({
        name: 'CPF',
        type: 'string',
      }),
    defineField({
        name: 'data_de_nascimento',
        type: 'datetime',
      }),
    defineField({
        name: 'Naturalidade',
        type: 'string',
      }),
    defineField({
        name: 'Faculdade',
        type: 'string',
      }),
  ],
})
import {defineArrayMember, defineField, defineType} from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'client', title: 'Client', type: 'string'}),
    defineField({name: 'role', title: 'Your role', type: 'string'}),
    defineField({
      name: 'problem',
      title: 'Problem',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'architectureDecisions',
      title: 'Architecture decisions',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'metrics',
      title: 'Impact metrics',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'metric',
          type: 'object',
          fields: [
            defineField({name: 'label', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'value', type: 'string', validation: (rule) => rule.required()}),
          ],
          preview: {select: {title: 'value', subtitle: 'label'}},
        }),
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Product screenshot',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => rule.required().warning('Alternative text improves accessibility.'),
        }),
      ],
    }),
    defineField({name: 'liveUrl', title: 'Live URL', type: 'url'}),
    defineField({
      name: 'body',
      title: 'Case study body',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
  ],
})

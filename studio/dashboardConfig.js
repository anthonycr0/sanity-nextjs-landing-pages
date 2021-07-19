export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60f55e7a8f140b4c0b9d0c07',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-u26xnw3w',
                  apiId: '2a561d60-d291-43ee-8258-0545765135ba'
                },
                {
                  buildHookId: '60f55e7adf12b9e61f8c6973',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xywfxovz',
                  apiId: 'a9f7738f-2d20-4313-95f7-9ffd3be62ff7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anthonycr0/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xywfxovz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

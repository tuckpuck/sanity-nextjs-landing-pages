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
                  buildHookId: '5d1ceb5bd81c25ae0e685140',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mk7su8ye',
                  apiId: '4903d55c-db1f-4957-bec3-e8f849cbed6b'
                },
                {
                  buildHookId: '5d1ceb5c7a93b59a089cbb65',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-47n3ogmz',
                  apiId: 'a555c6b6-6967-4fde-91fc-8eba18a83b02'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tuckpuck/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-47n3ogmz.netlify.com', category: 'apps'}
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

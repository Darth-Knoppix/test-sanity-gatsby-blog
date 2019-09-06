export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d72927deb445ef15bc42ee5',
                  title: 'Sanity Studio',
                  name: 'test-sanity-gatsby-blog-studio',
                  apiId: 'e4d53006-d1f5-44ad-a380-6d6b75a22ffd'
                },
                {
                  buildHookId: '5d72927d8001a506dd3893c4',
                  title: 'Blog Website',
                  name: 'test-sanity-gatsby-blog',
                  apiId: '862c5258-96d2-4dfd-a8c5-84b21de0e5fb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Darth-Knoppix/test-sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-sanity-gatsby-blog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

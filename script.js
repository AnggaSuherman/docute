/* globals Docute */

// Fetch this from your API
var SearchResult = [
  {
    title: 'Title', 
    link: 'title1', 
    label: 'Label is optional', 
    description: 'Description is optional'
  },
  {
    title: 'Another', 
    link: 'another'
  },
  {
    title: 'One more', 
    link: 'one-more'
  },
];

const searchBar = entries => {
    return {
        name: 'searchBar',
        extend(api) {
            api.enableSearch(
                {
                    handler: keyword => {
                        return entries.filter(value =>
                            value.title.toLowerCase().includes(keyword.toLowerCase()))
                    }
                }
            );
        }
    }
}

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  plugins: [
        searchBar(SearchResult)
  ],
  nav: [
    {
      title: 'Docs',
      link: '/'
    },
    {
      title: 'Blog',
      link: '/'
    },
    {
      title: 'Community',
      link: '/'
    },
    {
      title: 'Community',
      children: [
        {
          title: 'Spectrum',
          link: 'https://spectrum.chat/your-community'
        },
        {
          title: 'Discord',
          link: 'https://discord.app/your-discord-server'
        }
      ]
    },
    {
      title: 'Resources',
      link: 'https://griddb.net/en/resources'
    }
  ],
  sidebar: [
    {
      title: 'Overview',
      links: [
        {
          title: 'What is GridDB',
          link: '/what-is-griddb'
        },
        {
          title: 'What is a Time Series Database',
          link: '/what-is-time-series-database'
        }
      ]
    },
    {
      title: 'Getting Started',
      links: [
        {
          title: 'System Requirements',
          link: '/system-requirements'
        },
        {
          title: 'Installation',
          link: '/installation'
        }
      ]
    }
  ]
})

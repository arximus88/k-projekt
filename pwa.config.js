export default {
    manifest: {
      name: "Borys's Place",
      short_name: 'kharchenko.work',
      description: 'Borys Kharchenko personal portfolio',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#1a202c',
      icons: [
        {
          src: '/icon.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable any',
        },
      ],
    },
  };
  
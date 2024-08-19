import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/courses/',
  title: "e-Academy Courses",
  description: "Az e-Academy tananyagainak oldala",
  themeConfig: {

    logo: 'commercesynclogo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Kezdőlap', link: '/' },
      { text: 'Tananyagok', link: '/bevezeto' }
    ],

    sidebar: [
      {
        text: 'Programozás tananyagok',
        items: [
          { text: '1. alkalom: Bevezetés a webfejlesztés világába', link: 'programozas-tananyagok/1-alkalom-bevezetes-a-webfejlesztes-vilagaba.md' },
          { text: '2. alkalom: HTML alapjai I.', link: 'programozas-tananyagok/2-alkalom-html-alajai-i.md' },
          { text: 'CSS', link: '/css' },
          { text: 'CSS Keretrendszerek', link: '/css-keretrendszerek' },
          { text: 'Git & GitHub', link: '/git-github' },
          { text: 'JavaScript', link: '/javascript' },
          { text: 'VueJs', link: '/vue-js' },
          { text: 'MySQL', link: '/mysql' },
          { text: 'Docker', link: '/docker' },
          
        ]
        
      },
      {
        text: 'WordPress tananyagok',
        items: [
          { text: 'WordPress', link: '/wordpress' },
        ]
        
      },
      {
        text: 'SEO tananyagok',
        items: [
          { text: 'SEO', link: '/seo' },
        ]
        
      },
      {
        text: 'Projekt és Self Management tananyagok',
        items: [
          { text: 'Projekt és Self Management', link: 'projekt-es-self-management' },
        
        ]
        
      },
      {
        text: 'Letöltések',
        items: [
          { text: 'ProductBridge', link: 'https://github.com/2023e-vp-vizsgaremek/e-commerce/tree/master/Forr%C3%A1sk%C3%B3d/ProductBridge' },
          { text: 'WooSync', link: 'https://github.com/CommerceSync-Hub/WooSync' },
          { text: 'CommerceSync Theme', link: 'https://github.com/CommerceSync-Hub/eCommerce-Sync-Theme' },
          { text: 'Vizsgaremek Repo', link: 'https://github.com/2023e-vp-vizsgaremek/e-commerce/' },
        ]
        
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/2023e-vp-vizsgaremek/e-commerce/' }
    ]
  }
})

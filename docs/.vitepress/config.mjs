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
          { text: '2. alkalom: HTML alapjai I.', link: 'programozas-tananyagok/2-alkalom-html-alapjai-i.md' },
          { text: '3. alkalom: HTML alapjai II.', link: 'programozas-tananyagok/3-alkalom-html-alapjai-ii.md' },
          { text: '4. alkalom: CSS alapjai I.', link: 'programozas-tananyagok/4-alkalom-css-alapjai-i.md' },
          { text: '5. alkalom: CSS alapjai II.', link: 'programozas-tananyagok/5-alkalom-css-alapjai-ii.md' },
          { text: '6. alkalom: Reszponzív tervezés és CSS keretrendszerek', link: 'programozas-tananyagok/6-alkalom-reszponziv-tervezes-es-css-keretrendszerek.md' },
          { text: '7. alkalom: Verziókezelés Gittel és GitHubbal', link: 'programozas-tananyagok/7-alkalom-verziokezeles-gittel-es-githubbal.md' },
          { text: '8. alkalom: Bevezetés a JavaScriptbe I.', link: 'programozas-tananyagok/8-alkalom-bevezetes-a-javascriptbe-i.md' },
          { text: '9. alkalom: Bevezetés a JavaScriptbe II.', link: 'programozas-tananyagok/9-alkalom-bevezetes-a-javascriptbe-ii.md' },
          { text: '10. alkalom: Bevezetés a PHP-be és a dinamikus weboldalak világába', link: 'programozas-tananyagok/10-alkalom-bevezetes-a-php-be-es-a-dinamikus-weboldalak-vilagaba.md' },
          { text: '11. alkalom: Webes adatbázisok és MySQL', link: 'programozas-tananyagok/11-alkalom-webes-adatbazisok-es-mysql.md' },
          { text: '12. alkalom: PHP és MySQL összekapcsolása', link: 'programozas-tananyagok/12-alkalom-php-es-mysql-osszekapcsolasa.md' },
          { text: '13. alkalom: Modern webes technológiák: REST API és AJAX', link: 'programozas-tananyagok/13-alkalom-modern-webes-technologiak-rest-api-es-ajax.md' },
          { text: '14. alkalom: Záró projekt előkészítése', link: 'programozas-tananyagok/14-alkalom-zaro-projekt-elokeszitese.md' },
          { text: '15. alkalom: Záró projekt bemutatása és értékelés', link: 'programozas-tananyagok/15-alkalom-zaro-projekt-bemutatasa-es-ertekeles.md' },
          
        ]
        
      },
      {
        text: 'WordPress tananyagok',
        items: [
          { text: '1. Alkalom: Bevezetés a weboldal készítésbe', link: 'wordpress-tananyagok/1-alkalom-bevezetes-a-weboldal-keszitesbe.md' },
          { text: '2. Alkalom: WordPress telepítése és alapbeállítások', link: 'wordpress-tananyagok/2-alkalom-wordpress-telepitese-es-alapbeallitasok.md' },
          { text: '3. Alkalom: WordPress felületének megismerése', link: 'wordpress-tananyagok/3-alkalom-a-wordpress-feluletenek-megismerese.md' },
          { text: '4. Alkalom: Témák és megjelenés testreszabása', link: 'wordpress-tananyagok/4-alkalom-temak-es-megjelenes-testreszabasa.md' },
          { text: '5. Alkalom: Bővítmények és funkciók hozzáadása', link: 'wordpress-tananyagok/5-alkalom-bovitmenyek-es-funkciok-hozzaadasa.md' },
          { text: '6. Alkalom: Tartalomkezelés WordPress-ben', link: 'wordpress-tananyagok/6-alkalom-tartalomkezeles-a-wordpressben.md' },
          { text: '7. Alkalom: SEO alapok és tartalom optimalizálás', link: 'docs/wordpress-tananyagok/7-alkalom-seo-alapok-es-tartalom-optimalizalas.md' },
          { text: '1. Alkalom: Bevezetés a weboldal készítésbe', link: 'wordpress-tananyagok/1-alkalom-bevezetes-a-weboldal-keszitesbe.md' },
          { text: '1. Alkalom: Bevezetés a weboldal készítésbe', link: 'wordpress-tananyagok/1-alkalom-bevezetes-a-weboldal-keszitesbe.md' },
          { text: '1. Alkalom: Bevezetés a weboldal készítésbe', link: 'wordpress-tananyagok/1-alkalom-bevezetes-a-weboldal-keszitesbe.md' },
          { text: '1. Alkalom: Bevezetés a weboldal készítésbe', link: 'wordpress-tananyagok/1-alkalom-bevezetes-a-weboldal-keszitesbe.md' },
          { text: '1. Alkalom: Bevezetés a weboldal készítésbe', link: 'wordpress-tananyagok/1-alkalom-bevezetes-a-weboldal-keszitesbe.md' },
          { text: '1. Alkalom: Bevezetés a weboldal készítésbe', link: 'wordpress-tananyagok/1-alkalom-bevezetes-a-weboldal-keszitesbe.md' },
          { text: '1. Alkalom: Bevezetés a weboldal készítésbe', link: 'wordpress-tananyagok/1-alkalom-bevezetes-a-weboldal-keszitesbe.md' },
          { text: '1. Alkalom: Bevezetés a weboldal készítésbe', link: 'wordpress-tananyagok/1-alkalom-bevezetes-a-weboldal-keszitesbe.md' },
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

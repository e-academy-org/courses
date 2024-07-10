import{_ as a,c as s,o as n,V as e}from"./chunks/framework.BReKdyaM.js";const t="/commerce-sync-docs/assets/Pasted%20image%2020240319054723.CrFzoMzT.png",p="/commerce-sync-docs/assets/new%20product%20window%20title.DK8WOY02.png",b=JSON.parse('{"title":"Tesztelési napló","description":"","frontmatter":{},"headers":[],"relativePath":"tesztelesi-naplok/tesztelesi-naplo.md","filePath":"tesztelesi-naplok/tesztelesi-naplo.md"}'),l={name:"tesztelesi-naplok/tesztelesi-naplo.md"},i=e('<h1 id="tesztelesi-naplo" tabindex="-1">Tesztelési napló <a class="header-anchor" href="#tesztelesi-naplo" aria-label="Permalink to &quot;Tesztelési napló&quot;">​</a></h1><h2 id="_2024-03-19" tabindex="-1">2024-03-19 <a class="header-anchor" href="#_2024-03-19" aria-label="Permalink to &quot;2024-03-19&quot;">​</a></h2><p>Hibanapló első bejegyzés.</p><p><img src="'+t+`" alt="alt text"></p><p>A login oldalon a PasswordBox nem kapja meg ugyan azokat a beállításokat mint a többi mező.</p><h2 id="_2024-03-24" tabindex="-1">2024-03-24 <a class="header-anchor" href="#_2024-03-24" aria-label="Permalink to &quot;2024-03-24&quot;">​</a></h2><p>A mai napon a dokumentációs oldalon dolgoztunk. Végre sikerült a deployment a Github Pages-re. Szerettünk volna képeket hozzáadni a dokumentációhoz, ahol csak lehet. Ezért létrehoztunk egy img mappát a \\commerce-sync-docs\\docs.vitepress\\dist\\assets mappában. Ide helyeztük a képeket, mert láttuk, hogy a build után ide kerülnek a képek és minden egyéb fájl, ami az oldalhoz szükséges. A probléma akkor bukkant fel, amikor buildeltük az oldalt. Sehogyan sem akarta megtalálni a képeket. Viszont nem szerettünk volna, ha a képek a gyökér könyvtárban maradnak, mert az mégsem esztétikus. Állandóan hibára futottunk:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  vitepress v1.0.0-rc.42</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✖ building client + server bundles...</span></span>
<span class="line"><span>build error:</span></span>
<span class="line"><span>RollupError: Could not resolve &quot;./.vitepress/dist/assets/img/woosync-auth.png&quot; from &quot;docs/installalas.md&quot;</span></span>
<span class="line"><span>file: C:/Users/peter/Documents/GitHub/commerce-sync-docs/docs/installalas.md</span></span>
<span class="line"><span>    at error (file:///C:/Users/peter/Documents/GitHub/commerce-sync-docs/node_modules/rollup/dist/es/shared/parseAst.js:337:30)</span></span>
<span class="line"><span>    at ModuleLoader.handleInvalidResolvedId (file:///C:/Users/peter/Documents/GitHub/commerce-sync-docs/node_modules/rollup/dist/es/shared/node-entry.js:18059:24)</span></span>
<span class="line"><span>    at file:///C:/Users/peter/Documents/GitHub/commerce-sync-docs/node_modules/rollup/dist/es/shared/node-entry.js:18019:26</span></span>
<span class="line"><span>PS C:\\Users\\peter\\Documents\\GitHub\\commerce-sync-docs&gt;</span></span></code></pre></div><p>De jónéhány tesztelés után megtaláltuk a megoldást. A gyökér mappában kell elhelyeznünk az img mappát és abba a fájlokat. Ezek után már megtalálta a fájlokat, sikeres volt a build és sikeres a deployment is.</p><h2 id="_2024-03-25" tabindex="-1">2024-03-25 <a class="header-anchor" href="#_2024-03-25" aria-label="Permalink to &quot;2024-03-25&quot;">​</a></h2><p>A mai hiba a dokumentációs oldalon volt. Próbáltuk megjeleníteni a logónkat a kezdőlapon, de sehogy sem sikerült. :dev státuszban rendben megjelent minden, de build után, preview-al már nem működik akárhogy próbálkoztunk. A többi képi eleme rendben látszik, de a logo nem. 404 hibát kapunk vissza a konzolban.</p><h2 id="_2024-03-26" tabindex="-1">2024-03-26 <a class="header-anchor" href="#_2024-03-26" aria-label="Permalink to &quot;2024-03-26&quot;">​</a></h2><p>A mai napon próbáltunk a bővítményben módosítani a kódot, hogy a genereált api kulcs a megfelelő helyen jelenjen meg. A korábbi kód az options táblába mentette azt, de ez így nem megfelelő.</p><p>A korábbi kód, amely nem megfelelő helyre mentette az API kulcsot:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    function generate_api_key_callback()</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    // Ellenőrizzük, hogy van-e már mentett API kulcs</span></span>
<span class="line"><span>    $existing_key = get_option(&#39;woosync_api_key&#39;);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    if (!$existing_key) {</span></span>
<span class="line"><span>        // Ha nincs tárolt kulcs, akkor generáljunk egy újat</span></span>
<span class="line"><span>        $api_key = wp_generate_password(32, false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Save the API key in the database</span></span>
<span class="line"><span>        update_option(&#39;woosync_api_key&#39;, $api_key);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        // Ha már van tárolt kulcs, használjuk azt</span></span>
<span class="line"><span>        $api_key = $existing_key;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>A módosított kód:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function generate_api_key_callback()</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    global $wpdb;</span></span>
<span class="line"><span>    $table_name = $wpdb-&gt;prefix . &#39;woosync_api_keys&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Ellenőrizzük, hogy van-e már mentett API kulcs</span></span>
<span class="line"><span>    $existing_key = $wpdb-&gt;get_var(&quot;SELECT api_key FROM $table_name&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (!$existing_key) {</span></span>
<span class="line"><span>        // Ha nincs tárolt kulcs, akkor generáljunk egy újat</span></span>
<span class="line"><span>        $api_key = wp_generate_password(32, false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Mentsük el az új API kulcsot az adatbázisba</span></span>
<span class="line"><span>        $wpdb-&gt;insert(</span></span>
<span class="line"><span>            $table_name,</span></span>
<span class="line"><span>            array(</span></span>
<span class="line"><span>                &#39;api_key&#39; =&gt; $api_key</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        // Ha már van tárolt kulcs, használjuk azt</span></span>
<span class="line"><span>        $api_key = $existing_key;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>Most már csak azt kell javítanunk, hogy megjelenjen a settings oldalon is, ám lehet, hogy később ezt az opciót elhagyjuk. Felesleges.</p><h2 id="_2024-04-02" tabindex="-1">2024-04-02 <a class="header-anchor" href="#_2024-04-02" aria-label="Permalink to &quot;2024-04-02&quot;">​</a></h2><p>A mai napon miután átszerveztük mindent, hogy az applikácó ezentúl MySQL-ben tárolja az adatokat, némi problémába futotttunk. Ha nem lett kitöltve a &quot;tag&quot;, &quot;GalleryUrls&quot; és &quot;ImageUrl&quot; mező, akkor null értékre hibát dobott a program. Ezért nem tudtuk visszakérni sem az adatokat a SearchProductView oldalon sem. Tehát meg kellett oldanunk, hogy null értéket is fel lehessen venni a termékek hozzáadásakor.</p><p>Ezt az alábbi módon, a táblát létrehozásánál tudtuk megadni. Abban az esetben - ahogyan mi is jártunk - ha volt már tábla, ki kellett törölnünk, mert a létrehozáskor adjuk meg neki a default értéket:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Táblák létrehozása</span></span>
<span class="line"><span>            string createProductsTableQuery = @&quot;</span></span>
<span class="line"><span>                CREATE TABLE IF NOT EXISTS Products (</span></span>
<span class="line"><span>                    ProductId INT AUTO_INCREMENT PRIMARY KEY,</span></span>
<span class="line"><span>                    ProductName VARCHAR(255),</span></span>
<span class="line"><span>                    Price DECIMAL(10,2),</span></span>
<span class="line"><span>                    SalesPrice DECIMAL(10,2),</span></span>
<span class="line"><span>                    Category VARCHAR(255),</span></span>
<span class="line"><span>                    StockQuantity INT,</span></span>
<span class="line"><span>                    SKU VARCHAR(255),</span></span>
<span class="line"><span>                    Tags VARCHAR(255) DEFAULT &#39;&#39;,</span></span>
<span class="line"><span>                    ShortDescription TEXT,</span></span>
<span class="line"><span>                    LongDescription TEXT,</span></span>
<span class="line"><span>                    ImageUrl VARCHAR(255) DEFAULT &#39;&#39;,</span></span>
<span class="line"><span>                    GalleryUrls TEXT DEFAULT &#39;&#39;</span></span>
<span class="line"><span>                )&quot;;</span></span></code></pre></div><p>Továbbá a Userek hozzáadásakor is problémába futottunk, mert elsőként nem akarta engedélyezni az adatbázisba beírást. Aztán rájöttünk, hogy azért mert nem jól adjkuk meg az adatbázis hozzáférést.</p><h2 id="_2024-04-16" tabindex="-1">2024-04-16 <a class="header-anchor" href="#_2024-04-16" aria-label="Permalink to &quot;2024-04-16&quot;">​</a></h2><p>A Desktop applikációnál a tesztelés során észleltük, hogy nem menti el a módosításokat. Pontosabban amikor a SearchProductView-ban módosítunk egy terméket, akkor azt csak addig tárolja, amíg el nem navigálunk egy másik menüpontra. Tehát ezt a hibát kell javítanunk.</p><p>A probléma ott van, hogy még mindig SQLite adatbázisba menti az adatokat, amit korábban használtunk:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>private void SaveChangesButton_Click(object sender, RoutedEventArgs e)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>   // Check that the selected product is not empty</span></span>
<span class="line"><span>   if (SelectedProduct != null)</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>       // Update the product details with the data entered in the fields</span></span>
<span class="line"><span>       SelectedProduct.ProductName = txtProductName.Text;</span></span>
<span class="line"><span>       SelectedProduct.Price = decimal.Parse(txtPrice.Text);</span></span>
<span class="line"><span>       SelectedProduct.SalesPrice = decimal.Parse(txtSalesPrice.Text);</span></span>
<span class="line"><span>       SelectedProduct.Category = cmbCategory.Text;</span></span>
<span class="line"><span>       SelectedProduct.StockQuantity = int.Parse(txtStockQuantity.Text);</span></span>
<span class="line"><span>       SelectedProduct.SKU = txtSKU.Text;</span></span>
<span class="line"><span>       // Update additional fields with the corresponding Product properties</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       // Update in the database</span></span>
<span class="line"><span>       using (SQLiteConnection connection = new SQLiteConnection(App.DatabasePath))</span></span>
<span class="line"><span>       {</span></span>
<span class="line"><span>           connection.Update(SelectedProduct);</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       // Close window</span></span>
<span class="line"><span>       Close();</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Tehát ezt kell most megoldanunk... Ezt módosítottuk is:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>private void SaveChangesButton_Click(object sender, RoutedEventArgs e)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>   if (SelectedProduct != null)</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>       SelectedProduct.ProductName = txtProductName.Text;</span></span>
<span class="line"><span>       SelectedProduct.Price = decimal.Parse(txtPrice.Text);</span></span>
<span class="line"><span>       SelectedProduct.SalesPrice = decimal.Parse(txtSalesPrice.Text);</span></span>
<span class="line"><span>       SelectedProduct.Category = cmbCategory.Text;</span></span>
<span class="line"><span>       SelectedProduct.StockQuantity = int.Parse(txtStockQuantity.Text);</span></span>
<span class="line"><span>       SelectedProduct.SKU = txtSKU.Text;</span></span>
<span class="line"><span>       SelectedProduct.ShortDescription = txtShortDescription.Text;</span></span>
<span class="line"><span>       SelectedProduct.LongDescription = txtLongDescription.Text;</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span></span></span>
<span class="line"><span>       var dataAccess = new DataAccess(App.Server, App.Database, App.Username, App.Password);</span></span>
<span class="line"><span>       dataAccess.InsertProduct(SelectedProduct); // Ez még csak insert</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       Close();</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Viszont most egy olyan probléma lépett fel, hogy nem update-eli hanem csak insert-eli új termékként a módosított termékeket. Tehát a DataAccess.cs fájlban, létre kell hoznunk egy UpdateProduct metódust is.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> public void UpdateProduct(Product product)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    using (var connection = new MySqlConnection(connectionString))</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        string query = &quot;UPDATE Products SET ProductName = @ProductName, Price = @Price, SalesPrice = @SalesPrice, Category = @Category, StockQuantity = @StockQuantity, SKU = @SKU, Tags = @Tags, ShortDescription = @ShortDescription, LongDescription = @LongDescription, ImageUrl = @ImageUrl, GalleryUrls = @GalleryUrls WHERE ProductId = @ProductId&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        using (var command = new MySqlCommand(query, connection))</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            command.Parameters.AddWithValue(&quot;@ProductName&quot;, product.ProductName);</span></span>
<span class="line"><span>            command.Parameters.AddWithValue(&quot;@Price&quot;, product.Price);</span></span>
<span class="line"><span>            command.Parameters.AddWithValue(&quot;@SalesPrice&quot;, product.SalesPrice);</span></span>
<span class="line"><span>            command.Parameters.AddWithValue(&quot;@Category&quot;, product.Category);</span></span>
<span class="line"><span>            command.Parameters.AddWithValue(&quot;@StockQuantity&quot;, product.StockQuantity);</span></span>
<span class="line"><span>            command.Parameters.AddWithValue(&quot;@SKU&quot;, product.SKU);</span></span>
<span class="line"><span>            command.Parameters.AddWithValue(&quot;@Tags&quot;, product.Tags);</span></span>
<span class="line"><span>            command.Parameters.AddWithValue(&quot;@ShortDescription&quot;, product.ShortDescription);</span></span>
<span class="line"><span>            command.Parameters.AddWithValue(&quot;@LongDescription&quot;, product.LongDescription);</span></span>
<span class="line"><span>            command.Parameters.AddWithValue(&quot;@ImageUrl&quot;, product.ImageUrl);</span></span>
<span class="line"><span>            command.Parameters.AddWithValue(&quot;@GalleryUrls&quot;, product.GalleryUrls);</span></span>
<span class="line"><span>            command.Parameters.AddWithValue(&quot;@ProductId&quot;, product.ProductId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            connection.Open();</span></span>
<span class="line"><span>            command.ExecuteNonQuery();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>A tesztelés során továbbá észrevettük, hogy az EditUserWindow esetén, a gomb felirat az, hogy &quot;Add new User&quot;. Miközben itt módosítunk, tehát Update-elünk. Ezt módosítanunk kell.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> &lt;Button</span></span>
<span class="line"><span>  Grid.Row=&quot;10&quot;</span></span>
<span class="line"><span>  Grid.Column=&quot;0&quot;</span></span>
<span class="line"><span>  Margin=&quot;5&quot;</span></span>
<span class="line"><span>  HorizontalAlignment=&quot;Left&quot;</span></span>
<span class="line"><span>  Content=&quot;Add New User&quot; </span></span>
<span class="line"><span>  Click=&quot;Edit_User_Button_Click&quot; BorderThickness=&quot;5,0,0,0&quot;/&gt;</span></span></code></pre></div><p>Az alábbiak szerint:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Button</span></span>
<span class="line"><span>Grid.Row=&quot;10&quot;</span></span>
<span class="line"><span>Grid.Column=&quot;0&quot;</span></span>
<span class="line"><span>Margin=&quot;5&quot;</span></span>
<span class="line"><span>HorizontalAlignment=&quot;Left&quot;</span></span>
<span class="line"><span>Content=&quot;Update User&quot; </span></span>
<span class="line"><span>Click=&quot;Edit_User_Button_Click&quot; BorderThickness=&quot;5,0,0,0&quot;/&gt;</span></span></code></pre></div><p>Az alábbi hibákat találtuk még:</p><p>Az új termék hozzáadásakor az ablak neve &quot;NewProductWindow&quot; ezt módosítani kellene valami közérthetőbbre.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> Title=&quot;NewProductWindow&quot; Height=&quot;500&quot; Width=&quot;800&quot;&gt;</span></span></code></pre></div><p>Mondjuk így:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   Title=&quot;Add New Product&quot; Height=&quot;500&quot; Width=&quot;800&quot;&gt;</span></span></code></pre></div><p><img src="`+p+'" alt="Képernyőkép"></p>',41),o=[i];function c(r,d,u,m,k,h){return n(),s("div",null,o)}const y=a(l,[["render",c]]);export{b as __pageData,y as default};

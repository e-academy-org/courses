import{_ as a,c as s,o as n,V as e}from"./chunks/framework.CtR6xKeJ.js";const p="/courses/assets/TechStack.Cape4sKd.png",i="/courses/assets/projektmunka-folyamatabra.BQQ121mD.png",l="/courses/assets/sync-databases.86zO8AQv.png",k=JSON.parse('{"title":"Dokumentáció","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"dokumentacio.md","filePath":"dokumentacio.md"}'),t={name:"dokumentacio.md"},r=e('<h1 id="dokumentacio" tabindex="-1">Dokumentáció <a class="header-anchor" href="#dokumentacio" aria-label="Permalink to &quot;Dokumentáció&quot;">​</a></h1><h2 id="a-programcsomag-felepitese" tabindex="-1">A Programcsomag felépítése <a class="header-anchor" href="#a-programcsomag-felepitese" aria-label="Permalink to &quot;A Programcsomag felépítése&quot;">​</a></h2><p>A Programcsomag felépítése, kapcsolódási pontok és Tech-Stack</p><p><img src="'+p+'" alt="alt text"></p><h2 id="folyamatabra" tabindex="-1">Folyamatábra <a class="header-anchor" href="#folyamatabra" aria-label="Permalink to &quot;Folyamatábra&quot;">​</a></h2><p>A ProductBridge és WooSync programok folyamatábrái</p><p><img src="'+i+'" alt="alt text"></p><h2 id="adatbazis" tabindex="-1">Adatbázis <a class="header-anchor" href="#adatbazis" aria-label="Permalink to &quot;Adatbázis&quot;">​</a></h2><p>Az adatbázis létrehozásakor arra törekszünk, hogy minél egyszerűbb legyen az adatok felhasználása és tényleg csak a legszükségesebb adatokkal dolgozzunk. Éppen ezért az alábbi ábrán látható a használni kívánt táblák és adatok felosztása.</p><p><img src="'+l+`" alt="alt text"></p><h2 id="az-adatbazist-letrehozo-parancsok" tabindex="-1">Az adatbázist létrehozó parancsok <a class="header-anchor" href="#az-adatbazist-letrehozo-parancsok" aria-label="Permalink to &quot;Az adatbázist létrehozó parancsok&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- Felhasználók tábla létrehozása</span></span>
<span class="line"><span>CREATE TABLE Users (</span></span>
<span class="line"><span>    UserID INT PRIMARY KEY AUTO_INCREMENT,</span></span>
<span class="line"><span>    Username VARCHAR(50) NOT NULL,</span></span>
<span class="line"><span>    Password VARCHAR(100) NOT NULL,</span></span>
<span class="line"><span>    Email VARCHAR(100),</span></span>
<span class="line"><span>    FullName VARCHAR(100),</span></span>
<span class="line"><span>    UNIQUE(Username)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- Termékek tábla létrehozása</span></span>
<span class="line"><span>CREATE TABLE Products (</span></span>
<span class="line"><span>    ProductID INT PRIMARY KEY AUTO_INCREMENT,</span></span>
<span class="line"><span>    Name VARCHAR(100) NOT NULL,</span></span>
<span class="line"><span>    Description TEXT,</span></span>
<span class="line"><span>    Price DECIMAL(10, 2) NOT NULL,</span></span>
<span class="line"><span>    SalesPrice DECIMAL(10, 2),</span></span>
<span class="line"><span>    Category VARCHAR(50),</span></span>
<span class="line"><span>    Tag VARCHAR(50),</span></span>
<span class="line"><span>    ShortDescription TEXT,</span></span>
<span class="line"><span>    LongDescription TEXT,</span></span>
<span class="line"><span>    SKU VARCHAR(50),</span></span>
<span class="line"><span>    StockQuantity INT NOT NULL,</span></span>
<span class="line"><span>    UNIQUE(Name)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- Weboldalak tábla létrehozása</span></span>
<span class="line"><span>CREATE TABLE Websites (</span></span>
<span class="line"><span>    WebsiteID INT PRIMARY KEY AUTO_INCREMENT,</span></span>
<span class="line"><span>    URL VARCHAR(255) NOT NULL,</span></span>
<span class="line"><span>    AuthenticationURL VARCHAR(255) NOT NULL,</span></span>
<span class="line"><span>    Username VARCHAR(50) NOT NULL,</span></span>
<span class="line"><span>    Password VARCHAR(100) NOT NULL,</span></span>
<span class="line"><span>    UNIQUE(URL)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- Példa felhasználó hozzáadása</span></span>
<span class="line"><span>INSERT INTO Users (Username, Password, Email, FullName) </span></span>
<span class="line"><span>VALUES (&#39;peterteszary&#39;, &#39;jelszo123&#39;, &#39;peterteszary@gmail.com&#39;, &#39;Peter Teszary&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- Példa termékek hozzáadása (10 darab pendrive)</span></span>
<span class="line"><span>INSERT INTO Products (Name, Description, Price, Category, ShortDescription, SKU, StockQuantity) </span></span>
<span class="line"><span>VALUES </span></span>
<span class="line"><span>(&#39;Pendrive 1GB&#39;, &#39;1 gigabájtos pendrive&#39;, 10.99, &#39;Pendrive&#39;, &#39;1GB pendrive&#39;, &#39;PD1GB&#39;, 100),</span></span>
<span class="line"><span>(&#39;Pendrive 2GB&#39;, &#39;2 gigabájtos pendrive&#39;, 14.99, &#39;Pendrive&#39;, &#39;2GB pendrive&#39;, &#39;PD2GB&#39;, 80),</span></span>
<span class="line"><span>(&#39;Pendrive 4GB&#39;, &#39;4 gigabájtos pendrive&#39;, 19.99, &#39;Pendrive&#39;, &#39;4GB pendrive&#39;, &#39;PD4GB&#39;, 70),</span></span>
<span class="line"><span>(&#39;Pendrive 8GB&#39;, &#39;8 gigabájtos pendrive&#39;, 24.99, &#39;Pendrive&#39;, &#39;8GB pendrive&#39;, &#39;PD8GB&#39;, 60),</span></span>
<span class="line"><span>(&#39;Pendrive 16GB&#39;, &#39;16 gigabájtos pendrive&#39;, 29.99, &#39;Pendrive&#39;, &#39;16GB pendrive&#39;, &#39;PD16GB&#39;, 50),</span></span>
<span class="line"><span>(&#39;Pendrive 32GB&#39;, &#39;32 gigabájtos pendrive&#39;, 39.99, &#39;Pendrive&#39;, &#39;32GB pendrive&#39;, &#39;PD32GB&#39;, 40),</span></span>
<span class="line"><span>(&#39;Pendrive 64GB&#39;, &#39;64 gigabájtos pendrive&#39;, 49.99, &#39;Pendrive&#39;, &#39;64GB pendrive&#39;, &#39;PD64GB&#39;, 30),</span></span>
<span class="line"><span>(&#39;Pendrive 128GB&#39;, &#39;128 gigabájtos pendrive&#39;, 69.99, &#39;Pendrive&#39;, &#39;128GB pendrive&#39;, &#39;PD128GB&#39;, 20),</span></span>
<span class="line"><span>(&#39;Pendrive 256GB&#39;, &#39;256 gigabájtos pendrive&#39;, 99.99, &#39;Pendrive&#39;, &#39;256GB pendrive&#39;, &#39;PD256GB&#39;, 10),</span></span>
<span class="line"><span>(&#39;Pendrive 512GB&#39;, &#39;512 gigabájtos pendrive&#39;, 149.99, &#39;Pendrive&#39;, &#39;512GB pendrive&#39;, &#39;PD512GB&#39;, 5);</span></span></code></pre></div>`,12),o=[r];function c(d,m,h,P,g,b){return n(),s("div",null,o)}const v=a(t,[["render",c]]);export{k as __pageData,v as default};

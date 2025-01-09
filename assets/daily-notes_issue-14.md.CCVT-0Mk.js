import{_ as s,h as a,o as n,aa as e}from"./chunks/framework.CR3igpBK.js";const m=JSON.parse('{"title":"Ubuntu 安装Charles","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-14.md","filePath":"daily-notes/issue-14.md","lastUpdated":null}'),l={name:"daily-notes/issue-14.md"},p=e(`<h1 id="ubuntu-安装charles" tabindex="-1">Ubuntu 安装Charles <a class="header-anchor" href="#ubuntu-安装charles" aria-label="Permalink to &quot;Ubuntu 安装Charles&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/wild2life/daily-notes/issues/14" target="_blank" rel="noreferrer">Ubuntu 安装Charles | GitHub</a></p></div><p><a href="https://www.charlesproxy.com/" target="_blank" rel="noreferrer">Charles 官网</a> 下载Charles，Debian系列发行版可以使用 apt-get install charles-proxy 安装,不过需要提前安装对应key才可以安装，我这边是直接下载安装包解压安装。</p><h2 id="_1-解压-安装" tabindex="-1">1. 解压&amp;安装 <a class="header-anchor" href="#_1-解压-安装" aria-label="Permalink to &quot;1. 解压&amp;安装&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tar -xvf charles-proxy-4.6.3_amd64.tar.gz</span></span>
<span class="line"><span>mv charles /opt/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_2-创建启动图标" tabindex="-1">2.创建启动图标 <a class="header-anchor" href="#_2-创建启动图标" aria-label="Permalink to &quot;2.创建启动图标&quot;">​</a></h2><p>因为解压安装默认是不会生成启动图标的，所以需要单独创建</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd /usr/share/applications</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo touch charles.desktop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo gedit charles.desktop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>接着输入如下信息:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[Desktop Entry]</span></span>
<span class="line"><span>Name=Charles</span></span>
<span class="line"><span>Exec=/opt/charles/bin/charles</span></span>
<span class="line"><span>Terminal=false</span></span>
<span class="line"><span>Type=Application</span></span>
<span class="line"><span>Icon=/opt/charles/icon/512x512/apps/charles-proxy.png</span></span>
<span class="line"><span>StartupWMClass=Charles</span></span>
<span class="line"><span>Comment=Charles</span></span>
<span class="line"><span>Categories=Utility;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>最后赋予执行权限，接下来在启动页面搜索Charles 可以启动对应程序！</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo chmod u+x charles.desktop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-charles激活" tabindex="-1">3.Charles激活 <a class="header-anchor" href="#_3-charles激活" aria-label="Permalink to &quot;3.Charles激活&quot;">​</a></h2><ul><li>然后打开Charles，</li><li>“Help”选择“Register Charles</li><li>”输入生成账号和注册码即可</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://zhile.io</span></span>
<span class="line"><span>48891cf209c6d32bf4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,15),i=[p];function r(t,c,o,d,h,u){return n(),a("div",null,i)}const v=s(l,[["render",r]]);export{m as __pageData,v as default};
import{_ as s,h as a,o as i,aa as e}from"./chunks/framework.CR3igpBK.js";const b=JSON.parse('{"title":"从 Windows 到 Ubuntu：Web 前端开发中的注意事项","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-12.md","filePath":"daily-notes/issue-12.md","lastUpdated":null}'),n={name:"daily-notes/issue-12.md"},l=e(`<h1 id="从-windows-到-ubuntu-web-前端开发中的注意事项" tabindex="-1">从 Windows 到 Ubuntu：Web 前端开发中的注意事项 <a class="header-anchor" href="#从-windows-到-ubuntu-web-前端开发中的注意事项" aria-label="Permalink to &quot;从 Windows 到 Ubuntu：Web 前端开发中的注意事项&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/wild2life/daily-notes/issues/12" target="_blank" rel="noreferrer">从 Windows 到 Ubuntu | GitHub</a></p></div><p>作为一个 Web 前端开发工程师，切换到 Ubuntu 系统后，可能会遇到一些与 Windows 不同的开发体验。本文将总结一些需要注意的事项，帮助你更顺利地过渡到 Ubuntu 开发环境。</p><h2 id="_1-文件系统差异" tabindex="-1">1. 文件系统差异 <a class="header-anchor" href="#_1-文件系统差异" aria-label="Permalink to &quot;1. 文件系统差异&quot;">​</a></h2><h3 id="大小写敏感" tabindex="-1">大小写敏感 <a class="header-anchor" href="#大小写敏感" aria-label="Permalink to &quot;大小写敏感&quot;">​</a></h3><ul><li><strong>Ubuntu</strong>：文件系统是大小写敏感的。比如，<code>index.html</code> 和 <code>Index.html</code> 被视为不同的文件。</li><li><strong>Windows</strong>：文件系统是大小写不敏感的。所以，在 Ubuntu 上开发时，需要保持文件名的大小写一致，特别是在引用文件时。</li></ul><h3 id="路径分隔符" tabindex="-1">路径分隔符 <a class="header-anchor" href="#路径分隔符" aria-label="Permalink to &quot;路径分隔符&quot;">​</a></h3><ul><li><strong>Ubuntu</strong>：路径使用斜杠 <code>/</code>，比如 <code>/home/user/project/index.html</code>。</li><li><strong>Windows</strong>：路径使用反斜杠 <code>\\</code>，例如 <code>C:\\Users\\user\\project\\index.html</code>。</li></ul><p>确保路径格式的一致性，尤其是当你在代码中使用路径时。</p><h2 id="_2-终端操作" tabindex="-1">2. 终端操作 <a class="header-anchor" href="#_2-终端操作" aria-label="Permalink to &quot;2. 终端操作&quot;">​</a></h2><p>Ubuntu 使用的是 Linux shell（如 Bash），而 Windows 上常用的命令行工具是 Command Prompt 或 PowerShell。以下是一些常见的命令差异：</p><ul><li><p><strong>常用命令</strong>：在 Ubuntu 中，常用命令如 <code>ls</code>（列出文件）、<code>cd</code>（改变目录）、<code>rm</code>（删除文件）与 Windows 的命令（如 <code>dir</code>、<code>del</code>）有所不同。</p></li><li><p><strong>包管理器</strong>：Ubuntu 使用 <code>apt</code>（Advanced Package Tool）来安装和管理软件包，而 Windows 上可能使用 <code>choco</code>（Chocolatey）等工具。</p><p>安装软件包的例子：</p></li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remove</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //卸载软件包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autoremove</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 清理不再需要的依赖包</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>从<code>.deb</code>安装包安装软件 很多软件都提供 <code>.deb</code> 安装包，你可以从官方网站下载 <code>.deb</code>文件并安装它们。</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dpkg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.deb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>解决依赖问题： 如果在安装 .deb 包时出现依赖问题，可以运行以下命令解决：</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-开发工具安装" tabindex="-1">3. 开发工具安装 <a class="header-anchor" href="#_3-开发工具安装" aria-label="Permalink to &quot;3. 开发工具安装&quot;">​</a></h2><h3 id="node-js-和-npm" tabindex="-1"><strong>Node.js</strong> 和 <strong>npm</strong> <a class="header-anchor" href="#node-js-和-npm" aria-label="Permalink to &quot;**Node.js** 和 **npm**&quot;">​</a></h3><p>使用 <code>nvm</code>（Node Version Manager）来管理多个版本的 Node.js。你可以安装并切换不同版本的 Node.js。</p><p>安装 nvm：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装 Node.js：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="前端框架和工具" tabindex="-1">前端框架和工具 <a class="header-anchor" href="#前端框架和工具" aria-label="Permalink to &quot;前端框架和工具&quot;">​</a></h3><ul><li>在 <code>Ubuntu</code> 上，你可以和 Windows 上一样使用 Webpack、Vue CLI、React、Angular 等前端工具。确保安装所有必需的依赖和工具。</li></ul><h3 id="ide-和编辑器" tabindex="-1">IDE 和编辑器 <a class="header-anchor" href="#ide-和编辑器" aria-label="Permalink to &quot;IDE 和编辑器&quot;">​</a></h3><ul><li>常用的 IDE 如 Visual Studio Code 也支持 Ubuntu。 安装 <code>Visual Studio Code</code>：</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> code</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>你也可以使用其他文本编辑器如 Sublime Text、Vim 或 Emacs。</p><h2 id="_4-文件权限" tabindex="-1">4. 文件权限 <a class="header-anchor" href="#_4-文件权限" aria-label="Permalink to &quot;4. 文件权限&quot;">​</a></h2><p>Ubuntu 对文件和目录的权限管理比 Windows 严格。你可能会遇到权限问题，特别是对于文件的读写权限。</p><p>解决方法：</p><ul><li>修改文件权限：例如，如果某个文件需要执行权限，可以使用以下命令：</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">file-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_5-浏览器兼容性" tabindex="-1">5. 浏览器兼容性 <a class="header-anchor" href="#_5-浏览器兼容性" aria-label="Permalink to &quot;5. 浏览器兼容性&quot;">​</a></h2><ul><li>在 Ubuntu 上，你可以使用 Chrome、Firefox 等浏览器进行开发和测试。</li><li>不同操作系统上的浏览器行为可能会有所差异，特别是在字体渲染、滚动行为等方面。 如果你的项目依赖于特定的浏览器版本，可以考虑使用 Docker 或 虚拟机 来模拟不同的环境。</li></ul><h2 id="_6-使用-wsl-windows-subsystem-for-linux" tabindex="-1">6. 使用 WSL (Windows Subsystem for Linux) <a class="header-anchor" href="#_6-使用-wsl-windows-subsystem-for-linux" aria-label="Permalink to &quot;6. 使用 WSL (Windows Subsystem for Linux)&quot;">​</a></h2><p>如果你在某些情况下仍需要在 Windows 上使用 <code>Ubuntu</code>，可以考虑使用 <code>Windows Subsystem for Linux (WSL)</code>，它允许你在 <code>Windows</code> 环境中运行 <code>Linux</code> 发行版。</p><h2 id="_7-文本编辑器" tabindex="-1">7. 文本编辑器 <a class="header-anchor" href="#_7-文本编辑器" aria-label="Permalink to &quot;7. 文本编辑器&quot;">​</a></h2><h3 id="使用-nano-编辑器" tabindex="-1">使用 <code>nano</code> 编辑器 <a class="header-anchor" href="#使用-nano-编辑器" aria-label="Permalink to &quot;使用 \`nano\` 编辑器&quot;">​</a></h3><p><code>nano</code> 是一种简单易用的文本编辑器，通常在 Unix 和类 Unix 系统（如 Ubuntu）中使用。它在命令行界面下运行，适合快速编辑文本文件，尤其是配置文件和脚本。 在大多数 Ubuntu 系统中，<code>nano</code> 默认已经安装。如果没有安装，你可以通过以下命令安装 <code>nano</code>：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nano</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="基本命令和操作" tabindex="-1">基本命令和操作 <a class="header-anchor" href="#基本命令和操作" aria-label="Permalink to &quot;基本命令和操作&quot;">​</a></h3><p>要使用 <code>nano</code> 打开一个文件，可以在命令行中输入：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nano</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">file-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>例如，要编辑一个名为 <code>example.txt</code> 的文件：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="编辑文件" tabindex="-1">编辑文件 <a class="header-anchor" href="#编辑文件" aria-label="Permalink to &quot;编辑文件&quot;">​</a></h4><ul><li>插入文本：直接开始输入，<code>nano</code> 会自动将输入内容插入到光标所在的位置。</li><li>删除字符：按 <code>Backspace</code> 或 <code>Delete</code> 键删除字符。</li><li>移动光标：使用箭头键（↑ ↓ ← →）移动光标。</li><li>查找文本：按 <code>Ctrl + W</code>，然后输入要查找的文本并按 Enter。</li></ul><h4 id="保存文件" tabindex="-1">保存文件 <a class="header-anchor" href="#保存文件" aria-label="Permalink to &quot;保存文件&quot;">​</a></h4><ul><li>保存文件：按 <code>Ctrl + O</code>（即按住 Ctrl 键，然后按 O）。接着，按 <code>Enter</code> 键确认保存。</li><li>退出 nano：按 <code>Ctrl + X</code>。如果文件有更改，<code>nano</code> 会提示你保存更改，按 <code>Y</code>（Yes）确认保存，按 <code>N</code>（No）取消保存。</li></ul><h4 id="常用快捷键" tabindex="-1">常用快捷键 <a class="header-anchor" href="#常用快捷键" aria-label="Permalink to &quot;常用快捷键&quot;">​</a></h4><ul><li><code>Ctrl + O</code>：保存文件（Write Out）。</li><li><code>Ctrl + X</code>：退出 <code>nano</code>（如果文件未保存，会提示是否保存）。</li><li><code>Ctrl + W</code>：查找文本（Search）。</li><li><code>Ctrl + K</code>：剪切当前行。</li><li><code>Ctrl + U</code>：粘贴剪切的行。</li><li><code>Ctrl + C</code>：显示光标所在的当前行列数。</li><li><code>Ctrl + G</code>：显示帮助文档。</li></ul><h2 id="_8-设置" tabindex="-1">8. 设置 <a class="header-anchor" href="#_8-设置" aria-label="Permalink to &quot;8. 设置&quot;">​</a></h2><h3 id="确保系统软件包是最新的" tabindex="-1">确保系统软件包是最新的： <a class="header-anchor" href="#确保系统软件包是最新的" aria-label="Permalink to &quot;确保系统软件包是最新的：&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="重新安装gnome-control-center" tabindex="-1">重新安装<code>gnome-control-center</code> <a class="header-anchor" href="#重新安装gnome-control-center" aria-label="Permalink to &quot;重新安装\`gnome-control-center\`&quot;">​</a></h3><p>Settings 应用由 gnome-control-center 提供，可以尝试重新安装：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remove</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnome-control-center</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --purge</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnome-control-center</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_9-系统更新和维护" tabindex="-1">9. 系统更新和维护 <a class="header-anchor" href="#_9-系统更新和维护" aria-label="Permalink to &quot;9. 系统更新和维护&quot;">​</a></h2><p>定期更新 Ubuntu 系统非常重要，确保你使用的是最新的软件和安全补丁。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,63),t=[l];function h(d,p,o,r,c,k){return i(),a("div",null,t)}const g=s(n,[["render",h]]);export{b as __pageData,g as default};
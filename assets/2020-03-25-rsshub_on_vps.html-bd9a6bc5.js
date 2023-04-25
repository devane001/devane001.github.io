const t=JSON.parse('{"key":"v-d8439540","path":"/posts/2020-03-25-rsshub_on_vps.html","title":"RSS 速成篇 2：RSSHub 自部署","lang":"zh-CN","frontmatter":{"title":"RSS 速成篇 2：RSSHub 自部署","date":"2020-03-25T00:00:00.000Z","category":["自动化"],"tag":["rss","RSSHub"],"order":-28,"description":"RSSHub 使用非常简单，但随着使用者增多，微博、知乎加大了反爬限制。目前大量源都无法直接使用，只能自建 RSSHub 来解决稳定性。部署前，准备好域名和服务器。 新手使用 RSSHub 部署教程报错较多，本篇将使用宝塔 PM2 管理器进行部署。 部署步骤 将 RSSHub 代码下载到根目录 root，执行命令 git clone https://github.com/DIYgod/RSSHub.git。 安装宝塔面板，查看官方安装教程。 登陆宝塔面板，点击「软件商店」-「运行环境」，安装PM2 管理器。 点击 PM2 管理器右侧的设置，按图中红字添加项目路径，启动文件名称为 lib。 添加后，点击项目中的「映射」，输入指定域名，如 rsshub.xxx.com，服务器的 1200 端口将指向该域名。映射域名需解析到服务器 IP。","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2020-03-25-rsshub_on_vps.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"RSS 速成篇 2：RSSHub 自部署"}],["meta",{"property":"og:description","content":"RSSHub 使用非常简单，但随着使用者增多，微博、知乎加大了反爬限制。目前大量源都无法直接使用，只能自建 RSSHub 来解决稳定性。部署前，准备好域名和服务器。 新手使用 RSSHub 部署教程报错较多，本篇将使用宝塔 PM2 管理器进行部署。 部署步骤 将 RSSHub 代码下载到根目录 root，执行命令 git clone https://github.com/DIYgod/RSSHub.git。 安装宝塔面板，查看官方安装教程。 登陆宝塔面板，点击「软件商店」-「运行环境」，安装PM2 管理器。 点击 PM2 管理器右侧的设置，按图中红字添加项目路径，启动文件名称为 lib。 添加后，点击项目中的「映射」，输入指定域名，如 rsshub.xxx.com，服务器的 1200 端口将指向该域名。映射域名需解析到服务器 IP。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-25T07:12:21.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:tag","content":"rss"}],["meta",{"property":"article:tag","content":"RSSHub"}],["meta",{"property":"article:published_time","content":"2020-03-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-25T07:12:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RSS 速成篇 2：RSSHub 自部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-03-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-25T07:12:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"部署步骤","slug":"部署步骤","link":"#部署步骤","children":[]},{"level":2,"title":"使用步骤","slug":"使用步骤","link":"#使用步骤","children":[]},{"level":2,"title":"RSSHub VS. Huginn","slug":"rsshub-vs-huginn","link":"#rsshub-vs-huginn","children":[]},{"level":2,"title":"RSS 合集","slug":"rss-合集","link":"#rss-合集","children":[]}],"git":{"createdTime":1682406741000,"updatedTime":1682406741000,"contributors":[{"name":"fan","email":"dongfan117@gmail.com","commits":1}]},"readingTime":{"minutes":2.3,"words":689},"filePathRelative":"_posts/2020-03-25-rsshub_on_vps.md","localizedDate":"2020年3月25日","excerpt":"<p>RSSHub 使用非常简单，但随着使用者增多，微博、知乎加大了反爬限制。目前大量源都无法直接使用，只能自建 RSSHub 来解决稳定性。部署前，准备好<strong>域名和服务器</strong>。</p>\\n<p>新手使用 RSSHub 部署教程报错较多，本篇将使用宝塔 PM2 管理器进行部署。</p>\\n<h2> 部署步骤</h2>\\n<ol>\\n<li>\\n<p>将 RSSHub 代码下载到根目录 root，执行命令 <code>git clone https://github.com/DIYgod/RSSHub.git</code>。</p>\\n</li>\\n<li>\\n<p>安装宝塔面板，查看<a href=\\"https://www.bt.cn/bbs/thread-19376-1-1.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方安装教程</a>。</p>\\n</li>\\n<li>\\n<p>登陆宝塔面板，点击「软件商店」-「运行环境」，安装<strong>PM2 管理器</strong>。</p>\\n<figure><img src=\\"https://img.newzone.top/20200325120705.png?imageMogr2/format/webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p>点击 PM2 管理器右侧的设置，按图中红字添加项目路径，启动文件名称为 <code>lib</code>。</p>\\n<figure><img src=\\"https://img.newzone.top/20200325121639.png?imageMogr2/format/webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p>添加后，点击项目中的「映射」，输入指定域名，如 <code>rsshub.xxx.com</code>，服务器的 1200 端口将指向该域名。映射域名需解析到服务器 IP。</p>\\n<figure><img src=\\"https://img.newzone.top/20200325121921.png?imageMogr2/format/webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n</ol>","autoDesc":true}');export{t as data};

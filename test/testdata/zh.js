module.exports = {
  fields: [
    {
      name: "title",
      config: { boost: 10 }
    },
    {
      name: "body"
    }
  ],
  documents: [
    {
      title: "中文1",
      body:
        "虽然 JavaScript 是单线程，但在 Node.js 里由于其异步的特性使得 IO 可以并行。AVA 利用这个优点让你的测试可以并发执行，这对于 IO 繁重的测试特别有用。另外，测试文件可以在不同的进程里并行运行，让每一个测试文件可以获得更好的性能和独立的环境。在 Pageres 项目中从 Mocha 切换 到 AVA 让测试时间从 31 秒下降到 11 秒。测试并发执行强制你写原子测试，意味着测试不需要依赖全局状态或者其他测试的状态，这是一件非常好的事情。",
      id: 1
    },
    {
      title: "中文2",
      body:
        "Electron框架，让您可使用JavaScript, HTML 及 CSS 编写桌面程序。 它是基于Node.js和Chromium开发的， Atom editor以及很多其他的apps就是使用Electron编写的。\n 请关注Twitter @ElectronJS 以获得重要通告。\n 这个项目将坚持贡献者盟约 code of conduct. 我们希望贡献者能遵守贡献者盟约，如果发现有任何不能接受的行为，请报告至electron@github.com(PS:请用英语)",
      id: 2
    },
    {
      title: "中文3",
      body:
        "MobX 是一个经过测试的库，它通过透明的函数响应式编程(transparently applying functional reactive programming - TFRP)使得状态管理变得简单和可扩展。MobX背后的哲学很简单:\n 任何源自应用状态的东西都应该自动地获得。\n 其中包括UI、数据序列化、服务器通讯，等等。",
      id: 3
    }
  ],
  tests: [
    {
      what: "find the word %w",
      search: "并发",
      found: 1
    },
    {
      what: "find the word %w",
      search: "使用",
      found: 1
    },
    {
      what: "find the word %w",
      search: "测试",
      found: 2
    },
    {
      what: "find the word %w",
      search: "响应式",
      found: 1
    }
  ]
};

# CanIAccess

一个用于检查网站在中国区域可访问性的工具，帮助用户快速评估网站的可用性和状态。

## 技术栈

- **前端框架**: Next.js 15
- **样式**: Tailwind CSS
- **UI 组件**: shadcn/ui
- **语言**: TypeScript
- **包管理**: pnpm

## 快速开始

### 环境要求

- Node.js 18+
- pnpm

### 安装依赖

```bash
pnpm install
```

### 运行开发服务器

```bash
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
pnpm build
pnpm start
```

## 项目结构

```
caniaccess/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React 组件
│   ├── ui/               # shadcn/ui 组件
│   ├── category-filter.tsx
│   ├── search-box.tsx
│   ├── site-card.tsx
│   └── ...
├── hooks/                 # 自定义 Hooks
├── lib/                   # 工具函数和数据
│   └── sites-data.ts     # 网站数据
├── public/                # 静态资源
└── styles/                # 样式文件
```
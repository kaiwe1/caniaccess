import { SiteList } from "@/components/site-list"
import { StatsBar } from "@/components/stats-bar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  CI
                </span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  CanIAccess.cn
                </h1>
                <p className="text-xs text-muted-foreground">
                  中国网站可访问性查询
                </p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                关于
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                贡献数据
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                API
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            中国大陆网站可访问性查询
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            查询在中国大陆不使用VPN的情况下，能否访问特定网站。数据仅供参考，实际访问情况可能因地区和网络环境而异。
          </p>
        </div>

        <StatsBar />

        <SiteList />
      </main>

      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>本站数据仅供参考，不保证准确性</p>
            <p>灵感来源于 caniuse.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

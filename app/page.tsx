export default function Home() {
    return (
        <main className="min-h-screen p-8 max-w-4xl mx-auto font-sans">
            {/* ヒーローセクション（自己紹介のトップ） */}
            <section className="py-12 border-b border-gray-200">
                <h1 className="text-4xl font-bold mb-4 text-gray-900">
                    こんにちは！[あなたのお名前] です
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    Webデザイナー / フロントエンドエンジニアを目指して勉強中です。
                    見やすく使いやすいWebサイトの制作を心がけています。
                </p>
            </section>

            {/* スキルセクション */}
            <section className="py-12 border-b border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Skills</h2>
                <div className="flex flex-wrap gap-3">
                    {['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Figma'].map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* 制作物（実績）セクション */}
            <section className="py-12 border-b border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 制作物カード 1 */}
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                        <h3 className="text-xl font-bold mb-2">ポートフォリオサイト</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Next.jsとTailwind CSSを使用して制作した自身のポートフォリオサイトです。
                        </p>
                        <span className="text-xs text-indigo-600 font-semibold">Next.js / Vercel</span>
                    </div>
                    {/* 制作物カード 2 */}
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                        <h3 className="text-xl font-bold mb-2">サンプルプロジェクト</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            ここに今後作ったWebサイトやアプリの紹介を書いていきます。
                        </p>
                        <span className="text-xs text-indigo-600 font-semibold">React / HTML / CSS</span>
                    </div>
                </div>
            </section>

            {/* 連絡先セクション */}
            <section className="py-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact</h2>
                <p className="text-gray-600 mb-4">
                    ご連絡はメールまたはSNSにてお気軽にお問い合わせください。
                </p>
                <a
                    href="mailto:example@email.com"
                    className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
                >
                    メールを送る
                </a>
            </section>
        </main>
    );
}
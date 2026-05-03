export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Route Changelog Items to<br />
          <span className="text-[#58a6ff]">Affected Customers Automatically</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Connect your git repos and feature flags. We analyze every commit and release, identify which customers are impacted, and send targeted notifications — no manual work.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $35/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to explore. Cancel anytime.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "01", title: "Connect", desc: "Link your GitHub, GitLab, or Bitbucket repo and your feature flag service (LaunchDarkly, Flagsmith, etc.)" },
          { step: "02", title: "Analyze", desc: "Our engine maps commits and flag changes to customer segments using your configurable impact rules." },
          { step: "03", title: "Notify", desc: "Targeted emails and webhooks go out automatically to only the customers who need to know." }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-xs font-bold tracking-widest mb-2">{step}</div>
            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
            <p className="text-[#8b949e] text-sm">{desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$35</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited git repositories",
              "Feature flag integrations",
              "Customer segmentation rules",
              "Email + webhook notifications",
              "Notification history & audit log",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which git providers and feature flag services are supported?",
              a: "We support GitHub, GitLab, and Bitbucket for git. For feature flags: LaunchDarkly, Flagsmith, Unleash, and any service with a REST API via our custom connector."
            },
            {
              q: "How does customer impact detection work?",
              a: "You define rules that map commit tags, branch patterns, or flag keys to customer segments stored in your account. When a release matches a rule, only the affected segment gets notified."
            },
            {
              q: "Can I customize the notification content?",
              a: "Yes. Each notification template is fully editable with Markdown support. You can also route to webhooks (Slack, Teams, custom endpoints) instead of or alongside email."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Changelog Customer Impact Router. All rights reserved.
      </footer>
    </main>
  )
}

import Prism from "prismjs"
// Grammar files are bare IIFEs with no exports, so a bundler has nothing to link
// and Turbopack never evaluates them when they are require()d for side effects.
// Side-effect imports are evaluated in source order, which also satisfies the
// dependency chain: tsx builds on jsx and typescript, both of which build on the
// javascript grammar in Prism core.
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-shell-session"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"
import "prismjs/components/prism-json"
import "./styles/prism-theme.css"

export default Prism

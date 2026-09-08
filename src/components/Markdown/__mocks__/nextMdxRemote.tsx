/**
 * Test double for next-mdx-remote/rsc.
 *
 * The real module is ESM-only, as is its whole unified/remark dependency tree,
 * so Jest's CommonJS transform cannot load it. Rendering the raw source keeps
 * the surrounding component under test and assertions about copy meaningful.
 */
export const MDXRemote = ({ source }: { source?: string }) => <>{source}</>

export default MDXRemote

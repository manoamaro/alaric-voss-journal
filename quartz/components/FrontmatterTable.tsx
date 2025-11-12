import { QuartzComponentProps, QuartzComponentConstructor } from "./types"

interface Options {
    whitelist: string[]
    blacklist: string[]
}

const defaultOptions: Options = {
    whitelist: [],
    blacklist: []
}

export default ((userOpts?: Options) => {
    const opts = { ...defaultOptions, ...userOpts }
    function YourComponent(props: QuartzComponentProps) {
        if (props.fileData.frontmatter !== null) {
            let rows = [];
            for (const key in props.fileData.frontmatter) {
                if (opts.whitelist.length > 0 && !opts.whitelist.includes(key.toLowerCase())) {
                    continue;
                }
                if (opts.blacklist.includes(key)) {
                    continue;
                }
                rows.push(<tr key={key}>
                    <td><strong>{key}</strong></td>
                    <td>{String(props.fileData.frontmatter[key])}</td>
                </tr>);
            }
            return <table><tbody>{rows}</tbody></table>
        }
        return null
    }

    return YourComponent
}) satisfies QuartzComponentConstructor
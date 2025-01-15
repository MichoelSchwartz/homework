import { Link, useParams } from "react-router";

export default function Header() {
    const { name } = useParams();

    return (
        <header>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <h1>PCS Blogs</h1>
            <hr/>
            {name && <h2>{name}&apos;s blog</h2>}
        </header>
    )
}

import Link from "next/link";
export default function ArticleActionBar({ className }) {
  return (
    <div className={`${className} d-flex`}>
      <Link href="/admin/article/create">
        <a className="btn btn-outline-yellow">ERSTELLEN</a>
      </Link>
    </div>
  );
}

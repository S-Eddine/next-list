import Link from "next/link";

function NotFound() {
  return (
    <div className="not-found">
      <h1>Oups...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the <Link href="/"> Homepage</Link>
      </p>
    </div>
  );
}

export default NotFound;

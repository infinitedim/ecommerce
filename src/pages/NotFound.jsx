import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="not-found">
        <h1>Error 404</h1>
        <h2>Page Not Found</h2>
      </div>
    </>
  );
}

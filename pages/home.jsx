import { h } from "https://deno.land/x/sift@0.1.7/mod.ts";
import Card from "../components/card.jsx";
import Layout from "../components/layout.jsx";
import Search from "../components/search.jsx";

export default function homePage(request) {
  const { searchParams } = new URL(request.url);
  const repo = searchParams.get("repository");

  return (<Layout>
    <div className="container mx-auto max-w-screen-md p-4">
      <a className="text-3xl" href="/">Most Discussed Issues</a>
      <Search />
    </div>
  </Layout>);
}

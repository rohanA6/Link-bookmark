import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      <div className=" md:my-20 grid gap-7 grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

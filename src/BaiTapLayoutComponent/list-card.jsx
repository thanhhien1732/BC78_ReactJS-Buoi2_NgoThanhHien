import Card from "./card";

export default function Listcard() {
  return (
    <div className="grid grid-cols-4 container mx-auto gap-5">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

import RootLayout from "../layout";

export default function Sales() {
  return (
    <RootLayout showHeader={false} showFooter={true}>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Sales</h1>
      </div>
    </RootLayout>
  );
}

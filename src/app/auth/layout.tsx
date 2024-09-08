export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex-1 flex">{children}</div>
  );
}

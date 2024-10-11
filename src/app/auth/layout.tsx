export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="items-between mx-auto flex h-full min-h-screen w-full max-w-[1200px] flex-col justify-center px-[20px] py-[46px] sm:px-[100px]">
      {children}
    </div>
  );
}

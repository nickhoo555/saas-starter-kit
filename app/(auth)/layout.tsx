import app from '@/lib/app';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          src={app.logoUrl}
          className="mx-auto h-12"
          alt={app.name}
          width={48}
          height={48}
        />
      </div>
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">{children}</div>
    </div>
  );
} 
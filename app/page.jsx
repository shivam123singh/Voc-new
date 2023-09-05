import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { LOGIN_URL } from '@/lib/utils/constants/pathnames';

export default function Home() {
  return (
    <Link href={LOGIN_URL}>
      <Button>Go to Login</Button>
    </Link>
  );
}

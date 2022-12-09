import Image from 'next/image';
import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className='px-12'>
        <input checked id="checked-checkbox" type="checkbox" value="" class="w-12 h-12 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      </div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="https://zerotomastery.io/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}

import Button from '../components/Button';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function NotFound() {
  usePageMetadata('Page Not Found');
  return <section className="mx-auto max-w-3xl px-6 py-28 text-center"><p className="eyebrow">404 · Wrong turn</p><h1 className="mt-4 text-5xl font-bold">This page doesn’t exist.</h1><p className="mt-5 text-lg text-gray-600">The work is real; this address isn’t. Head back to the portfolio.</p><Button to="/" className="mt-8">Return home</Button></section>;
}

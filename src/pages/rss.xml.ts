import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  return rss({
    title: 'Luis Bazán | Blog',
    description: 'Artículos sobre tecnología, ingeniería y educación.',
    site: 'https://luisb.space',
    items: [],
  });
}

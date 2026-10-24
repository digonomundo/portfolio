import Link from 'next/link';
import Image from 'next/image';
import styles from './RichContent.module.css';

function renderInline(text: string, keyPrefix: string) {
  return text.split(/(\[.+?\]\(.+?\))/g).map((part, index) => {
    const match = part.match(/^\[(.+?)\]\((.+?)\)$/);
    return match ? <Link key={`${keyPrefix}-${index}`} href={match[2]}>{match[1]}</Link> : part;
  });
}

export function RichContent({ body }: { body: string }) {
  const blocks = body.split(/\n{2,}/).filter(Boolean);
  return <div className={styles.content}>{blocks.map((block, index) => {
    const lines = block.split('\n');
    if (lines.every((line) => line.startsWith('- '))) return <ul key={index}>{lines.map((line) => <li key={line}>{renderInline(line.slice(2), `${index}`)}</li>)}</ul>;
    if (block.startsWith('## ')) return <h2 key={index}>{renderInline(block.slice(3), `${index}`)}</h2>;
    if (block.startsWith('> ')) return <blockquote key={index}>{renderInline(block.slice(2), `${index}`)}</blockquote>;
    if (block.startsWith('![[')) {
      const match = block.match(/^!\[\[(.+?)\|(\d+)\|(\d+)\|(.+?)\]\]$/);
      if (match) return <figure key={index}><Image src={match[1]} alt={match[4]} width={Number(match[2])} height={Number(match[3])} /><figcaption>{match[4]}</figcaption></figure>;
    }
    return <p key={index}>{renderInline(block.replace(/\n/g, ' '), `${index}`)}</p>;
  })}</div>;
}

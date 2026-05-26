import { readFile } from 'node:fs/promises';
import path from 'node:path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'src', 'assets', 'curriculo', 'Rodrigo Dias.pdf');

  try {
    const fileBuffer = await readFile(filePath);

    return new Response(new Uint8Array(fileBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Rodrigo Dias.pdf"',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch {
    return new Response('Curriculo nao encontrado.', { status: 404 });
  }
}

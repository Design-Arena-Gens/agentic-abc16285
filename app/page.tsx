import Link from 'next/link';
import { recipes } from '../lib/recipes';

export default function HomePage() {
  return (
    <div>
      <div className="section" style={{ marginTop: 0 }}>
        <p>
          Five outstanding lemon pie recipes?each with clear ingredient lists, step-by-step
          instructions, and pro tips. Pick the style you love and bake with confidence.
        </p>
      </div>

      <div className="card-grid section">
        {recipes.map((r) => (
          <article key={r.slug} className="card">
            <header>
              <h3>
                <Link href={`/recipes/${r.slug}`}>{r.title}</Link>
              </h3>
              <p>{r.subtitle}</p>
            </header>
            <p className="meta">
              <span className="badge">Prep {r.prepTime}</span>{' '}
              <span className="badge">Cook {r.cookTime}</span>{' '}
              <span className="badge">Total {r.totalTime}</span>{' '}
              <span className="badge">Serves {r.servings}</span>
            </p>
            <p>
              <Link href={`/recipes/${r.slug}`}>View full recipe ?</Link>
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

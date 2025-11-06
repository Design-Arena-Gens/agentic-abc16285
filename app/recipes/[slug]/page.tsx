import { notFound } from 'next/navigation';
import type { Recipe } from '../../../lib/recipes';
import { getRecipeBySlug, recipes } from '../../../lib/recipes';

export async function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const recipe = getRecipeBySlug(params.slug);
  const title = recipe ? `${recipe.title} - Lemon Pie` : 'Recipe';
  return { title };
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe: Recipe | undefined = getRecipeBySlug(params.slug);
  if (!recipe) return notFound();

  return (
    <article className="recipe">
      <header>
        <h1>{recipe.title}</h1>
        <p className="meta">{recipe.subtitle}</p>
        <p className="meta">
          <span className="badge">Prep {recipe.prepTime}</span>{' '}
          <span className="badge">Cook {recipe.cookTime}</span>{' '}
          <span className="badge">Total {recipe.totalTime}</span>{' '}
          <span className="badge">Serves {recipe.servings}</span>
        </p>
      </header>

      <section className="two-col">
        <div>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Steps</h2>
          <ol>
            {recipe.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      {recipe.tips && recipe.tips.length > 0 && (
        <section className="section">
          <h2>Tips</h2>
          <ul>
            {recipe.tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

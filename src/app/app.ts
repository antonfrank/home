import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
  liked?: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activeView = 'blog';
  searchTerm = '';
  activeCategory = 'Alle';
  showSearch = false;
  savedMessage = '';
  selectedPost: BlogPost | null = null;
  architectureSource = 'Inspired by: Michael Carducci, Mastering Software Architecture: A Comprehensive New Model and Approach, Apress, 2025. This article is an original summary and personal reflection, not a verbatim reproduction.';
  architectureEnglishContent = `What exactly is software architecture? There is no single definition that fits every situation. Depending on the perspective, architecture may describe the organization of a system, its major components, their relationships, or the decisions that shape its evolution. What these perspectives have in common is that architecture describes the system’s larger direction and the reasoning behind it.

Architecture is more than code and more than a diagram. The difference between a senior developer and a software architect is not a more prestigious title, but a different perspective. Developers often work deeply within individual technologies and features. Architects must also understand which capabilities the system needs as a whole: scalability, elasticity, evolvability, agility, security, and maintainability. These capabilities are the real reason behind architectural decisions.

Patterns can provide guidance for recurring problems, but they are not ready-made answers. An approach that works well in one context may create unnecessary complexity in another. A decision that was sensible at the beginning of a project may become inappropriate later as requirements, teams, markets, or business models change.

Architecture is always driven by business value. Every option has advantages and disadvantages; every decision involves trade-offs. The question is rarely, “What is objectively the best architecture?” More often, it is, “Which combination of compromises fits this product, this organization, and this point in time?” Perfect solutions are difficult to achieve within realistic time and budget constraints. Good architects do not search for perfection. They look for the most appropriate solution and accept that the answer may change over time.

Architectural decisions should begin with the capabilities the system needs, not with a favorite technology. What must the system do? How quickly might it need to grow? How often will it change? Which failures are acceptable? What security requirements apply? Only after these questions are understood can technical options be evaluated responsibly. Capabilities must also be connected to business drivers: every additional capability costs money, time, or complexity.

A significant part of architecture work is communication. Business goals, strategic priorities, and product promises must be translated into technical consequences. At the same time, architects need to communicate with development teams and other stakeholders in language they can use. Communication failures are often a major contributor to product failure.

AI can already write code and provide useful suggestions in clearly bounded problem spaces. It is less reliable when security, performance, documentation, reuse, team conventions, and long-term consequences all need to be considered at once. That requires context, experience, and the ability to navigate nuance. AI is a valuable tool, but it does not yet replace human responsibility for architectural decisions.

There is no direct academic path to becoming a software architect. Many people grow into the role from a development position. The focus then shifts: developers need deep technical knowledge, while architects must also build a broad professional toolbox. Breadth does not mean mastering every technology. It means understanding different approaches, their strengths, their weaknesses, and the problems they are suited to solve.

The scope of architecture depends on the role and its area of responsibility. Enterprise, solution, system, and application architects work at different levels, but business drivers and business value matter at every level. Software architecture means taking responsibility for the consequences of technical decisions. Good architecture makes clear why a decision was made, what it costs, and when it should be reconsidered. Architectural thinking is not about finding one universally correct answer; it is about making trade-offs visible and remaining capable of acting in conditions of uncertainty.`;

  newPost = {
    title: '', author: 'Alex Morgan', category: 'Engineering',
    date: new Date().toISOString().slice(0, 10), image: '', content: ''
  };

  posts: BlogPost[] = [
    { title: 'Softwarearchitektur: Entscheidungen, die bleiben', excerpt: 'Architektur ist mehr als ein Diagramm. Sie beschreibt die Fähigkeiten, Entscheidungen und bewussten Kompromisse, die ein System langfristig tragen.', content: 'Was genau ist Softwarearchitektur? Eine einzige, allgemein gültige Definition gibt es nicht. Gemeinsam ist den meisten Sichtweisen: Architektur beschreibt die großen Linien eines Systems und die Entscheidungen, die seine Entwicklung prägen. Sie ist mehr als Code und mehr als ein Diagramm. Sie muss die Freiheitsgrade der Entwicklung so sinnvoll begrenzen, dass das Gesamtsystem seine wichtigen Eigenschaften auch unter Veränderung behält.\n\nDer Unterschied zwischen einem Senior Developer und einem Softwarearchitekten liegt nicht in einem prestigeträchtigeren Titel, sondern im Blickwinkel. Entwickler arbeiten oft tief in einzelnen Technologien und Funktionen. Architekten müssen zusätzlich erkennen, welche Fähigkeiten das Gesamtsystem braucht: Skalierbarkeit, Elastizität, Evolvierbarkeit, Agilität, Sicherheit oder Wartbarkeit. Diese Fähigkeiten sind der eigentliche Grund für Architekturentscheidungen.\n\nFür wiederkehrende Probleme gibt es zahlreiche Patterns. Sie können Orientierung geben, sind aber keine fertigen Antworten. Ein Pattern, das in einem Kontext hervorragend funktioniert, kann in einem anderen unnötige Komplexität erzeugen. Auch eine Entscheidung, die am Anfang richtig war, kann im Laufe der Zeit falsch werden, wenn sich Anforderungen, Team, Markt oder Geschäftsmodell verändern.\n\nArchitektur ist immer von Geschäftswert getrieben. Jede Option hat Vorteile und Nachteile, jede Entscheidung ist ein Trade-off. Die Frage lautet selten: Was ist objektiv die beste Architektur? Meistens lautet sie: Welche Kombination von Kompromissen passt für dieses Produkt, dieses Unternehmen und diesen Zeitpunkt am besten? Perfektion ist unter realistischen Zeit- und Budgetbedingungen kaum erreichbar. Gute Architekten suchen nicht die perfekte Lösung, sondern die am wenigsten schlechte – und wissen, dass diese Antwort später anders ausfallen kann.\n\nArchitekturentscheidungen sollten bei den benötigten Fähigkeiten beginnen und nicht bei der Lieblingstechnologie. Was muss das System können? Wie schnell muss es wachsen? Wie häufig wird es sich verändern? Welche Ausfälle sind akzeptabel? Welche Sicherheitsanforderungen gibt es? Erst wenn diese Fragen klar sind, lassen sich technische Optionen sinnvoll bewerten. Fähigkeiten müssen dabei zu den Geschäftstreibern passen: Jede zusätzliche Fähigkeit kostet Geld, Zeit oder Komplexität.\n\nEin großer Teil der Architekturarbeit ist Kommunikation. Geschäftsziele, Marketingversprechen und strategische Prioritäten müssen in technische Konsequenzen übersetzt werden. Gleichzeitig müssen Architekten Entwicklungsteams und andere Stakeholder in ihrer jeweiligen Sprache abholen. Kommunikationsfehler sind nicht selten ein wesentlicher Grund dafür, dass Produkte scheitern.\n\nKI kann heute Code schreiben und in klar abgegrenzten Problemräumen gute Vorschläge liefern. Schwieriger wird es dort, wo Sicherheit, Performance, Dokumentation, Wiederverwendung, Teamkonventionen und langfristige Folgen gleichzeitig berücksichtigt werden müssen. Dafür braucht es Kontext, Erfahrung und das Navigieren von Nuancen. KI ist ein wertvolles Werkzeug, ersetzt aber noch nicht die menschliche Verantwortung für architektonische Entscheidungen.\n\nEinen direkten akademischen Weg zum Softwarearchitekten gibt es nicht. Viele wachsen aus einer Entwicklerrolle in diese Verantwortung hinein. Dabei verschiebt sich der Schwerpunkt: Entwickler brauchen tiefe Kenntnisse; Architekten müssen zusätzlich eine breite Werkzeugkiste aufbauen. Diese Breite bedeutet nicht, jede Technologie perfekt zu beherrschen, sondern verschiedene Ansätze, ihre Stärken, Schwächen und Einsatzgebiete zu kennen.\n\nDer Umfang von Architektur hängt vom Verantwortungsbereich ab. Enterprise-, Solution-, System- und Application-Architekten arbeiten auf unterschiedlichen Ebenen, aber überall müssen Business-Treiber und Geschäftswert verstanden werden. Softwarearchitektur bedeutet für mich, Verantwortung für die Konsequenzen technischer Entscheidungen zu übernehmen. Gute Architektur macht sichtbar, warum eine Entscheidung getroffen wurde, welchen Preis sie hat und wann sie neu bewertet werden sollte. Wer architektonisch denkt, sucht nicht nach einer universell richtigen Antwort, sondern lernt, Trade-offs bewusst zu machen und auch mit Unsicherheit handlungsfähig zu bleiben.', author: 'Anton Frank', date: '2026-10-09', category: 'Engineering', readTime: '12 min read', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85', featured: true },
    { title: 'Building interfaces that feel alive', excerpt: 'Why thoughtful motion, intentional spacing and a little restraint make digital products memorable.', content: 'Great interfaces are not only functional. They create a feeling of clarity and confidence.', author: 'Alex Morgan', date: '2026-09-28', category: 'Design', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85', featured: true },
    { title: 'Signals, state and the calm of less code', excerpt: 'A practical look at how modern Angular primitives can make state easier to reason about.', content: 'Signals offer a simple mental model for reactive state and make dependencies explicit.', author: 'Mia Chen', date: '2026-09-19', category: 'Engineering', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85' },
    { title: 'A slower way to ship better work', excerpt: 'Notes from a week of protecting focus, asking better questions and choosing quality over noise.', content: 'The best work often needs a little more whitespace around it — in our calendars and our products.', author: 'Jon Bell', date: '2026-09-07', category: 'Ideas', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=85' },
    { title: 'The visual language of dark mode', excerpt: 'Contrast is more than a color choice. It is hierarchy, rhythm and a story told in light.', content: 'Dark interfaces invite us to think in layers, glow and deliberate moments of contrast.', author: 'Alex Morgan', date: '2026-08-31', category: 'Design', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85' }
  ];

  get categories(): string[] { return ['Alle', ...new Set(this.posts.map((post) => post.category))]; }
  get filteredPosts(): BlogPost[] {
    const query = this.searchTerm.trim().toLowerCase();
    return this.posts.filter((post) => {
      const matchesCategory = this.activeCategory === 'Alle' || post.category === this.activeCategory;
      const matchesSearch = !query || `${post.title} ${post.excerpt} ${post.author}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    }).map((post) => this.translateArchitecturePost(post));
  }
  private translateArchitecturePost(post: BlogPost): BlogPost {
    if (post.title !== 'Softwarearchitektur: Entscheidungen, die bleiben') return post;
    return { ...post, title: 'Software Architecture: Decisions That Last', excerpt: 'Architecture is more than a diagram. It captures the capabilities, decisions, and deliberate trade-offs that help a system endure.', content: this.architectureEnglishContent };
  }
  setView(view: string): void { this.activeView = view; this.savedMessage = ''; this.selectedPost = null; }
  openPost(post: BlogPost): void { this.selectedPost = post; window.scrollTo({ top: 0, behavior: 'smooth' }); }
  closePost(): void { this.selectedPost = null; }
  toggleLike(post: BlogPost): void { post.liked = !post.liked; }
  publishPost(): void {
    if (!this.newPost.title.trim() || !this.newPost.content.trim()) return;
    this.posts = [{ title: this.newPost.title, excerpt: this.newPost.content.slice(0, 145) + (this.newPost.content.length > 145 ? '…' : ''), content: this.newPost.content, author: this.newPost.author || 'Alex Morgan', date: this.newPost.date, category: this.newPost.category, readTime: `${Math.max(1, Math.ceil(this.newPost.content.split(/\s+/).length / 180))} min read`, image: this.newPost.image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85', featured: true }, ...this.posts.map((post) => ({ ...post, featured: false }))];
    this.newPost = { title: '', author: 'Alex Morgan', category: 'Engineering', date: new Date().toISOString().slice(0, 10), image: '', content: '' };
    this.savedMessage = 'Dein Beitrag ist veröffentlicht.';
    this.activeView = 'blog';
  }
  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => this.newPost.image = String(reader.result);
    reader.readAsDataURL(file);
  }
}

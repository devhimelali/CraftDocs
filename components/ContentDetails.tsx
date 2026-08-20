import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./tag";
interface DocumentContent {
  id: string;
  contentHtml: string;
  title?: string;
  date?: string;
  author?: string;
  category?: string;
  tags?: string[];
}

export default async function ContentDetails({ id }: { id: string }) {
  const documentContent: DocumentContent = await getDocumentContent(id);
  return (
    <article className="prose dark:prose-invert">
      <h1>{documentContent.title}</h1>
      <div>
        <span>Published On: {documentContent.date}</span> by{" "}
        <Link href={`/author/${documentContent.author}`}>
          {documentContent.author}
        </Link>{" "}
        under the{" "}
        <Link href={`/categories/${documentContent.category}`}>
          {documentContent.category}
        </Link>{" "}
        category.
      </div>
      <div>
        {documentContent.tags &&
          documentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
      />
    </article>
  );
}

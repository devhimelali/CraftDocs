import ContentDetails from "@/components/ContentDetails";

interface ContentPageProps {
  params: Promise<{
    documentId: string[];
  }>;
}

export default async function ContentPage({ params }: ContentPageProps) {
  const { documentId: contentIds } = await params;

  console.log({ contentIds });

  // Handle single segment
  if (contentIds.length === 1) {
    return <ContentDetails id={contentIds[0]} />;
  }

  // Handle two segments
  if (contentIds.length === 2) {
    return <ContentDetails id={contentIds[1]} />;
  }

  // Optional: Fallback for 3 or more, or empty segments
  return (
    <div>
      {contentIds.map((id, index) => (
        <p key={index}>{id}</p>
      ))}
    </div>
  );
}

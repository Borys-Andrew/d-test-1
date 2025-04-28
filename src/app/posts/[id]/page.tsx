import { PostDetailsPage } from '@/components/pages';

export default function PostDetails({ params }: { params: { id: string } }) {
  return <PostDetailsPage id={params.id} />;
}

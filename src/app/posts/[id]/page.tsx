import { PostViewPage } from './_components/postViewPage';

export default function PostDetails({ params }: { params: { id: string } }) {
  return <PostViewPage id={params.id} />;
}

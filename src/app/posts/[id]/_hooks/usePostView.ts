import { PATHS } from '@/shared/constants/paths';
import { useEffect, useState } from 'react';
import {
  deletePost,
  getPostById,
  getPostComments,
} from '@/store/posts/postsApi';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

type UsePostViewProps = {
  id: string;
};

export const usePostView = ({ id }: UsePostViewProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { selectedPost, loading, error } = useAppSelector(
    (state) => state.posts,
  );

  useEffect(() => {
    dispatch(getPostById(+id));
    dispatch(getPostComments(+id));
  }, [dispatch, id]);

  const toggleModal = () => setIsOpen((prev) => !prev);

  const handleDelete = () => {
    dispatch(deletePost(+id));
    toggleModal();
    router.push(PATHS.posts);
  };

  return {
    isOpen,
    selectedPost,
    loading,
    error,
    setIsOpen,
    toggleModal,
    handleDelete,
  };
};

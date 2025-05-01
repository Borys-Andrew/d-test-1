import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getPosts } from '@/store/posts/postsApi';
import { useEffect, useState } from 'react';

export const usePosts = () => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const { posts, loading } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return {
    search,
    loading,
    filteredPosts,
    setSearch,
  };
};

import PostsList from './features/posts/PostsList.js';
import AddPostForm from './features/posts/AddPostForm.js';
import SinglePostPage from './features/posts/SinglePostPage.js';
import Layout from './components/Layout.js';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import EditPostForm from './features/posts/EditPostForm.js';
import UsersList from './features/users/UsersList.js';
import UserPage from './features/users/UserPage.js';
import Page404 from './components/Page404.js';

function App() {
  return ( 
    <>
    <Header />        
    <Routes>
      <Route path='/' element={<Layout/>} />
      <Route index element={<PostsList/>} />
      <Route path="post">
        <Route index element={<AddPostForm />} />
        <Route path=":postId" element={<SinglePostPage />} />
        <Route path="edit/:postId" element={<EditPostForm />} />
      </Route>

      <Route path="user">
        <Route index element={ <UsersList/> }  />
        <Route path=':userId' element={ <UserPage /> } />
      </Route>
      
      <Route path="*" element={<Page404/>} />  

    </Routes>
    </>    
  );
}

export default App;

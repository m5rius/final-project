
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import UsersPage from './pages/UsersPage/UsersPage';
import PostsPage from './pages/PostsPage/PostsPage';
import PostPage from './pages/PostPage/PostPage';
import UserPage from './pages/UserPage/UserPage';
import AlbumsPage from './pages/AlbumsPage/AlbumsPage';
import AlbumPage from './pages/AlbumPage/AlbumPage'
import SearchPage from './pages/SearchPage/SearchPage';
import HomePage from './pages/HomePage/HomePage';
import PhotoPage from './pages/PhotoPage/PhotoPage';
import CreatePostPage from './pages/CreatePostPage/CreatePostPage';
import EditPostPage from './pages/EditPostPage/EditPostPage';
import CreateUserPage from './pages/CreateUserPage/CreateUserPage';
import EditUserPage from './pages/EditUserPage/EditUserPage';
import CreateAlbumPage from './pages/CreateAlbumPage/CreateAlbumPage';
import EditAlbumPage from './pages/EditAlbumPage/EditAlbumPage';
import CryptocurrenciesPage from './pages/CryptocurrenciesPage/CryptocurrenciesPage';

function App() {
  return (
    <div>
      <PageHeader></PageHeader>

      <Routes>
        <Route path='/users' element ={<UsersPage/>}></Route>
        <Route path='/posts' element ={<PostsPage/>}></Route>
        <Route path='/albums' element ={<AlbumsPage/>}></Route>
        <Route path='/cryptocurrencies' element ={<CryptocurrenciesPage/>}></Route>
        <Route path='/search-page' element ={<SearchPage/>}></Route>
        <Route path='/posts/:id' element ={<PostPage/>}></Route>
        <Route path='/create-post' element ={<CreatePostPage/>}></Route>
        <Route path='/edit-post/:id' element ={<EditPostPage/>}></Route>
        <Route path='/users/:id' element ={<UserPage/>}></Route>
        <Route path='/create-user' element ={<CreateUserPage/>}></Route>
        <Route path='/edit-user/:id' element ={<EditUserPage/>}></Route>
        <Route path='/albums/:id' element ={<AlbumPage/>}></Route>
        <Route path='/create-album' element ={<CreateAlbumPage/>}></Route>
        <Route path='/edit-album/:id' element ={<EditAlbumPage/>}></Route>
        <Route path='/photos/:id' element ={<PhotoPage/>}></Route>
        <Route path='/' element ={<HomePage/>}></Route>

        <Route path='*' element ={<h1>404: Page not found</h1>}></Route>

      </Routes>
      
    </div>
    
  )
}

export default App;

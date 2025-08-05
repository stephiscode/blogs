import { useState } from 'react'
import Navigation from './components/Navigation'
import PeopleToFollow from './components/PeopleToFollow'
import TrendsList from './components/TrendsList'
import TopicsList from './components/TopicsList'
import { BlogProvider } from './shared/BlogContext'
import { IoMdAddCircle } from 'react-icons/io'
import type { Blog } from './shared/types'
import Modal from './components/Modal'
import BlogForm from './components/BlogForm'
import ArticleList from './components/ArticleList'

function App() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | undefined>(undefined);

  
  const openModalForNewBlog = () => {
  setEditingBlog(undefined); // instead of null
  setModalOpen(true);
};

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setModalOpen(true);
  };


  return (
  <div>
    <BlogProvider>
      <Navigation />

      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
              <BlogForm 
              existingBlog={editingBlog}
              onClose={() => setModalOpen(false)} />

              </Modal>
            )} 
            
      <div className="flex justify-center">
        <section className="mx-auto p-6">
          <button
            onClick={openModalForNewBlog}
             className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4">
              Add New Blog <IoMdAddCircle className='ml-[.5rem]' /> {' '}
          </button>

          <ArticleList onEdit={openModalForEdit} />
        </section>

        <div className="w-[30%]">
          <PeopleToFollow />
          <TrendsList />
          <TopicsList />
        </div>
      </div>
    </BlogProvider>
  </div>
  )
}

export default App
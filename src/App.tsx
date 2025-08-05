import React, { useState } from 'react'
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
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  
  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setModalOpen(true);
  }

  const openModalForEdit = (blog) => {
    setEditingBlog(blog);
    setModalOpen(true);
  };


  return (
  <div>
    <BlogProvider>
      <Navigation />

      <div className="flex justify-center">
        <section className="mx-auto p-6">
          <div>
            <button
            onClick={openModalForNewBlog}
             className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4">
              Add New Blog <IoMdAddCircle className='ml-[.5rem]' /> {' '}
            </button>

            <ArticleList onEdit={openModalForEdit} />

            {isModalOpen && <Modal onClose={() => setModalOpen(false)}>
              <BlogForm 
              existingBlog={editingBlog}
              onClose={() => setModalOpen(false)} />

              </Modal>} 

          </div>
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
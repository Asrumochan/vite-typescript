import Api from './components/photos';
import Post from './components/post';
function App() {

  return (
    <>
      <div className='container'>
        <div className='pics'>
       <Api/>
        </div>
        
        <div className='pics'>
       <Post/>
        </div>

      </div>
    </>
  )
}

export default App

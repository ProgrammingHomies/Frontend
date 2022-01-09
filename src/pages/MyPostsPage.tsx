
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";




function MyPostsPage() {
    const navigate = useNavigate()
  
    return (
      <>
        <Header></Header>
        <div className='container h-full flex flex-col justify-center justify-items-center'>
        <div className="flex flex-col w-full, lg:w-3/4 lg:h-3/4 my-16 mx-auto bg-gray-300 dark:bg-gray-700 gap-y-2 py-8 ">
        <h2 className="font-bold text-xl md:text-2xl text-center text-black dark:text-white">My Posts</h2>
        <p className="text-black dark:text-white items-center text-center pt-8 " >Gönderileriniz burada gözükecektir.</p>
       
        <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src="https://www.teahub.io/photos/full/211-2117007_flutter-dart.jpg" alt="Flutter"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Flutter</div>
          <p className="text-gray-700 text-base">
            Flutter framework'ü kullanarak bir mobil uygulama yazmak istiyorum, nereden başlamalıyım?
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
             #Dart
           </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Hybrid</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Mobile</span>
        </div>
      </div>
</div>
<div className="inline-flex mx-auto">
  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
    Prev
  </button>
  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
    Next
  </button>
</div>
        
        </div>
            </div>
      </>
    );
  }
  
  export default MyPostsPage;
  

//   <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-black px-2">
//   Hello<br>
//   World</br>
// </span>
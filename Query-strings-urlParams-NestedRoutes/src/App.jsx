
import { BrowserRouter,Routes, Route } from "react-router"; 
import {UserPage} from "./Components/UserPage";

export default function App(){


  return(
    <BrowserRouter>
      <Routes>
        <Route path="/users/:username" element={<UserPage />}>
          <Route path="posts" element={<UserPostsPage />} />
          <Route path="likes" element={<UserLikesPage />} />
        </Route>






      </Routes>



    </BrowserRouter>
  )
}
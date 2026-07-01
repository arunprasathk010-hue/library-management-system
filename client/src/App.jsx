import React from 'react'
import { Navigate,Routes,Route } from 'react-router-dom'
import Login from "./Pages/Login";
import Layouts from "./Components/Layouts";
import BookList from "./Pages/BookList";
import MemberList from "./Pages/MemberList";
import BookForm from "./Pages/BookForm";
import MemberForm from "./Pages/MemberForm";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Layouts />}>
        <Route index element={<Navigate to="/books" />} />
        <Route path="books" element={<BookList />} />
        <Route path="books/add" element={<BookForm />} />
        <Route path="books/edit/:id" element={<BookForm />} />
        <Route path="members" element={<MemberList />} />
        <Route path="members/add" element={<MemberForm />} />
        <Route path="members/edit/:id" element={<MemberForm />} />
      </Route>
    </Routes>
  );
};

export default App;
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Solution: Move the parameterized route to the end or use a catch-all route */}
        <Route path="/*" element={<NotFound />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>; }
function About() { return <div>About</div>; }
function User() { return <div>User</div>; }
function NotFound() { return <div>404 Not Found</div>; }
export default App;
```
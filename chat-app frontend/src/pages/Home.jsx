import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-dark text-white">
      <h1 className="mb-4">Welcome to Chat App</h1>
      <button
        onClick={() => navigate("/chat")}
        className="btn btn-primary btn-lg"
      >
        Join Chat
      </button>
    </div>
  );
};

export default Home;

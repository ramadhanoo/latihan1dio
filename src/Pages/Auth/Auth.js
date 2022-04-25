import './Auth.css';
import { useNavigate } from 'react-router-dom'

function Auth() {
  const navigate = useNavigate()

  return (
    <div>
      <p>Haii</p>
      <button onClick={() => navigate("dashboard")}>coba</button>
    </div>

  );
}

export default Auth;

import { Routes, Route, Link, Navigate ,useNavigate, useSearchParams, useParams} from "react-router-dom";

const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate == true ? <UserPage /> : <Navigate to="/login" />; <- 로그인이 false일 경우 return login 페이지로 이동

  // <Navigate to="/login" /> 네비게이트 사용법 to 경로
  };
//useNavigate 사용법 
 const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/Product?q=pants");
  };
<button onClick={goProductPage}>go to product page</button>

∇∇∇ 링크로 경로 이동하기 ∇∇∇
<Routes> <- 감싸준다
    <Route path="/" element={<Hompage />} />        
    path "/" <- 아무것도 없음 home 
</Routes>

//useSearchParams --- 이해도 부족함

 let [query, setQuery] = useSearchParams();
  console.log(query.get("q"));

//useParams
  const { id } = useParams();

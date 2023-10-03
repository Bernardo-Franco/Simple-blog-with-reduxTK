import { Link } from 'react-router-dom';
const Page404 = () => {
  return (
    <div>
      <p>NOT PAGE FOUND <i>404<strong> Error!</strong></i></p>
      <br/>
      <Link to="/" >Click here to go to the home Page</Link>
    </div>
  )
}

export default Page404
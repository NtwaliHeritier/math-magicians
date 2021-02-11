import {Link} from 'react-router-dom';

const Navbar = () => {
  return ( 
    <div>
      <div>Math Magicians</div>
      <div>
        <Link to = "/">Home</Link>
        <Link to = "/calculator">calculator</Link>
        <Link to = "/quote">Quote</Link>
      </div>
    </div>
   );
}
 
export default Navbar;
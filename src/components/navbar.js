import {Link} from 'react-router-dom';

const Navbar = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  const links = {
    width: '25%',
    display: 'flex',
    justifyContent: 'space-evenly'
  };
  
  return ( 
    <div style = {styles}>
      <div>Math Magicians</div>
      <div style = {links}>
        <Link to = "/">Home</Link> |
        <Link to = "/calculator">calculator</Link> |
        <Link to = "/quote">Quote</Link>
      </div>
    </div>
   );
}
 
export default Navbar;
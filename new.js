function Myname(){
    return <p>this message should be ready to render or show</p>
}

export default  Myname 
import Myname from './myname';
const a = ReactDOM.createRoot(document.getElementById("test"))
a.render(
 <Myname />
)

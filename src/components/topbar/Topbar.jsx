import "./topbar.scss";
import { Person, Mail,LinkedIn,GitHub,Instagram, FileCopyRounded} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            de_c0de_it
          </a>
          <div className="itemContainer">
            <a href="singlanipun@gmail.com">
            <Mail className="icon" />
            <span>
             Mail
             </span> 
              </a>
          </div>
          <div className="itemContainer">
            <a href="singlanipun@gmail.com">
            <LinkedIn className="icon" />
            <span>
             LinkedIn
             </span> 
              </a>
          </div>
          <div className="itemContainer">
            <a href="singlanipun@gmail.com">
            <GitHub className="icon" />
            <span>
             Github
             </span> 
              </a>
          </div>
          <div className="itemContainer">
            <a href="singlanipun@gmail.com">
            <Instagram className="icon" />
           <span>
             Instagram
             </span> 
              </a>
          </div>
          <div className="itemContainer">
            <a href="singlanipun@gmail.com">
            <FileCopyRounded className="icon" />
            <span>
             CV
             </span> 
              </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

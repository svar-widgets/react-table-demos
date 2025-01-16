import { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useLocation,
  withRouter,
} from "react-router-dom";

import "./Index.css";
import { Willow, WillowDark } from "wx-react-grid";

import { links } from "../routes.js";

const skins = [
  {
    id: "willow",
    name: "Willow",
    props: {},
  },
  {
    id: "willow-dark",
    name: "Dark",
    props: {},
  },
];

function demoLinks(skin) {
  return (
    <>
      {links.map((data) => (
        <NavLink
          activeClassName="active"
          className="wxl-demo"
          to={`${data[0].replace(":skin", skin)}`}
          key={data}
        >
          {data[1]}
        </NavLink>
      ))}
    </>
  );
}

function Routes({ history }) {
  const [key, setKey] = useState();
  const [skin, setSkin] = useState();
  const [page, setPage] = useState({});
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [noSidebar] = useState(
    document.location.search.indexOf("no-sidebar") !== -1,
  );

  function toggleSkin(ev) {
    ev.stopPropagation();
    const data = ev.target.dataset;
    if (data.role === "skin") {
      setSkin(data.id);
      setTimeout(() => { setKey(data.id); }, 10);
      history.push(`/${page}/${data.id}`);
    }
  }

  function showSidebar() {
    setShow(true);
  }

  function hideSidebar(ev) {
    ev.stopPropagation();
    setShow(false);
  }

  useEffect(() => {
    new Willow({ target: document.body });
    new WillowDark({ target: document.body });
  }, []);

  useEffect(() => {
    document.body.className = `wx-${skin}-theme`;
  }, [skin]);

  let location = useLocation();
  useEffect(() => {
    const parts = location.pathname.split("/");
    if (parts.length === 3) {
      setPage(parts[1]);
      setSkin(parts[2]);
      setTitle(
        links.find((a) => a[0].replace("/:skin", "") === "/" + parts[1])[1],
      );
    }
  }, [location]);

  return (
    <Router>
      <div className={"wxl-layout" + (noSidebar ? " no-sidebar" : "")}>
        <div
          className={"wxl-sidebar" + (show ? " move" : "")}
          onClick={showSidebar}
        >
          {show && (
            <>
              <div className="wxl-title">Grid Demos</div>
              <div className="wxl-icon" onClick={hideSidebar}>
                <i className="wxi-angle-left" />
              </div>
            </>
          )}
          <div
            role="toolbar"
            className={"wxl-skins" + (!show ? " move" : "")}
            onClick={toggleSkin}
          >
            {skins.map((data, i) => (
              <div
                key={data.id}
                className={"wxl-skin" + (data.id === skin ? " selected" : "")}
                data-role="skin"
                data-id={data.id}
              >
                {data.name}
              </div>
            ))}
          </div>

          {show ? (
            demoLinks(skin)
          ) : (
            <>
              <div className="wxl-hint">{title}</div>
              <div className="vertical wxl-icon">
                <i className="wxi-angle-right" />
              </div>
            </>
          )}
        </div>

        <div
          data-wx-portal-root="1"
          className={`wxl-content wx-${skin}-theme"` + (show ? " move" : "")}
          role="none"
          onClick={hideSidebar}
        >
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/base/willow"></Redirect>}
            />
            {links.map((data) => (
              <Route
                key={data[0]}
                path={`${data[0]}`}
                render={() => {
                  const Demo = data[2];
                  return <Demo key={key} />;
                }}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const RoutesWithHistory = withRouter(Routes);

function Demos() {
  return (
    <Router>
      <RoutesWithHistory />
    </Router>
  );
}

export default Demos;

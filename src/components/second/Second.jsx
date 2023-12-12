import { useState } from "react";
import { Link } from "react-router-dom";
import "./second.css";
import coffee from "./coffee.jpg";
import { Flex } from "antd";
import Menu from "../menu/Menu";
const Second = () => {
  const [toggle, setToggle] = useState(1);
  const [active, setActive] = useState(1);

  function updateToggle(id) {
    setToggle(id);
    setActive(id);
  }

  return (
    <>
      <div className="second-container" id="menu">
        <div className="section1">
          <h2 className="text-6xl text-slate-200 font-Cormorant">Our Menu</h2>
          {/* <p>Breakfast - Lunch -Dinner</p> */}
        </div>
        {/* 

        <div className="section2">
          <div className="all">
            <div className="menu-container">
              <ul className="list-title">
                <li>
                  <Link
                    className={`tab ${active == 1 ? "active" : ""}`}
                    onClick={() => updateToggle(1)}
                  >
                    <a>coffee</a>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => updateToggle(2)}
                    className={`tab ${active === 2 ? "active" : ""}`}
                  >
                    <a>Snacks</a>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`tab ${active === 3 ? "active" : ""}`}
                    onClick={() => updateToggle(3)}
                  >
                    <a>Momo</a>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`tab ${active === 4 ? "active" : ""}`}
                    onClick={() => updateToggle(4)}
                  >
                    <a>Drinks</a>
                  </Link>
                </li>
              </ul>
              {/* <div className="flex-menu">
                <ul className={toggle === 1 ? "show-content" : "first-list" }>
                  <div className="grids">

                    <li>
                      <div className="single-item">
                        <p> Caramel Latte</p>
                        <span class="dots">
                          .............................................................................................................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio dfjksfjsk</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p>Parautha</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Naan</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs : 500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                  </div>
                  
               
                </ul>

                <ul className={toggle === 2 ? "show-content" : "first-list"}>
                  <div className="grids">
                    <li>
                      <div className="single-item">
                        <p> Espresso</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p>Americano</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p>Caramel Latte</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Mocha</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                  </div>
                </ul>
                <ul className={toggle === 3 ? "show-content" : "first-list"}>
                  <div className="grids">
                    <li>
                      <div className="single-item">
                        <p>Daal</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Nepali Khana</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dhedo</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p>Gundruk</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                  </div>
                </ul>

                <ul className={toggle === 4 ? "show-content" : "first-list"}>
                  <div className="grids">
                    <li>
                      <div className="single-item">
                        <p>Burger</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p>Pizza</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p>Sizzler</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p>French Fries</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p></p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                  </div>
                </ul>
              </div> 
            </div>
          </div>
        </div> */}
      </div>

      <Menu />
    </>
  );
};

export default Second;
